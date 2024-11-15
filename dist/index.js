'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var protobuf = require('protobufjs/light');
var Long = require('long');
var ByteBuffer = require('bytebuffer');
var buffer = require('buffer');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var protobuf__namespace = /*#__PURE__*/_interopNamespace(protobuf);
var Long__namespace = /*#__PURE__*/_interopNamespace(Long);
var ByteBuffer__default = /*#__PURE__*/_interopDefaultLegacy(ByteBuffer);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

const primitiveTypes = [
    'bool',
    'string',
    'bytes',
    'int32',
    'int64',
    'uint32',
    'uint64',
    'sint32',
    'sint64',
    'fixed32',
    'fixed64',
    'sfixed32',
    'sfixed64',
    'double',
    'float',
];
const isPrimitiveField = (field) => primitiveTypes.includes(field);

const transform$1 = (field, value) => {
    if (field.optional && typeof value === 'undefined') {
        return null;
    }
    if (field.type === 'bytes') {
        return ByteBuffer__default["default"].wrap(value).toString('hex');
    }
    if (field.long) {
        if (Number.isSafeInteger(value.toNumber())) {
            return value.toNumber();
        }
        return value.toString();
    }
    return value;
};
function messageToJSON(Message, fields) {
    const message = __rest(Message, []);
    const res = {};
    Object.keys(fields).forEach(key => {
        const field = fields[key];
        const value = message[key];
        if (field.repeated) {
            if (isPrimitiveField(field.type)) {
                res[key] = value.map((v) => transform$1(field, v));
            }
            else if ('valuesById' in field.resolvedType) {
                res[key] = value;
            }
            else if ('fields' in field.resolvedType) {
                res[key] = value.map((v) => messageToJSON(v, field.resolvedType.fields));
            }
            else {
                throw new Error(`case not handled for repeated key: ${key}`);
            }
        }
        else if (isPrimitiveField(field.type)) {
            res[key] = transform$1(field, value);
        }
        else if ('valuesById' in field.resolvedType) {
            res[key] = field.resolvedType.valuesById[value];
        }
        else if (field.resolvedType.fields) {
            res[key] = messageToJSON(value, field.resolvedType.fields);
        }
        else {
            throw new Error(`case not handled: ${key}`);
        }
    });
    return res;
}
const decode$1 = (Message, data) => {
    const buff = data.toBuffer();
    const a = new Uint8Array(buff);
    let decoded;
    try {
        decoded = Message.decode(a);
    }
    catch (error) {
        if (a.length > 1 && a[a.length - 1] === 0xff) {
            a[a.length - 1] = 0x04;
            decoded = Message.decode(a);
        }
        else {
            throw error;
        }
    }
    return messageToJSON(decoded, decoded.$type.fields);
};

const transform = (fieldType, value) => {
    if (fieldType === 'bytes') {
        if (typeof value === 'string' && !value)
            return value;
        return buffer.Buffer.from(value, 'hex');
    }
    if (typeof value === 'number' && !Number.isSafeInteger(value)) {
        throw new RangeError('field value is not within safe integer range');
    }
    return value;
};
function patch(Message, payload) {
    const patched = {};
    if (!Message.fields) {
        return patched;
    }
    Object.keys(Message.fields).forEach(key => {
        const field = Message.fields[key];
        const value = payload[key];
        if (typeof value === 'undefined') {
            return;
        }
        if (isPrimitiveField(field.type)) {
            if (field.repeated) {
                patched[key] = value.map((v) => transform(field.type, v));
            }
            else {
                patched[key] = transform(field.type, value);
            }
            return;
        }
        if (field.repeated) {
            const RefMessage = Message.lookupTypeOrEnum(field.type);
            patched[key] = value.map((v) => patch(RefMessage, v));
        }
        else if (typeof value === 'object' && value !== null) {
            const RefMessage = Message.lookupType(field.type);
            patched[key] = patch(RefMessage, value);
        }
        else if (typeof value === 'number') {
            const RefMessage = Message.lookupEnum(field.type);
            patched[key] = RefMessage.values[value];
        }
        else {
            patched[key] = value;
        }
    });
    return patched;
}
const encode$1 = (Message, data) => {
    const payload = patch(Message, data);
    const message = Message.fromObject(payload);
    const buffer = Message.encode(message).finish();
    const bytebuffer = new ByteBuffer__default["default"](buffer.byteLength);
    bytebuffer.append(buffer);
    bytebuffer.reset();
    return bytebuffer;
};

function parseConfigure(data) {
    if (typeof data === 'string') {
        return protobuf__namespace.Root.fromJSON(JSON.parse(data));
    }
    return protobuf__namespace.Root.fromJSON(data);
}
const createMessageFromName = (messages, name) => {
    const Message = messages.lookupType(name);
    const MessageType = messages.lookupEnum('MessageType');
    let messageType = MessageType.values[`MessageType_${name}`];
    if (!messageType && Message.options) {
        messageType = Message.options['(wire_type)'];
    }
    return {
        Message,
        messageType,
    };
};
const createMessageFromType = (messages, typeId) => {
    const MessageType = messages.lookupEnum('MessageType');
    const messageName = MessageType.valuesById[typeId].replace('MessageType_', '');
    const Message = messages.lookupType(messageName);
    return {
        Message,
        messageName,
    };
};

const MESSAGE_TOP_CHAR = 0x003f;
const MESSAGE_HEADER_BYTE = 0x23;
const HEADER_SIZE = 1 + 1 + 4 + 2;
const BUFFER_SIZE = 63;
const COMMON_HEADER_SIZE = 6;

const readHeader = (buffer) => {
    const typeId = buffer.readUint16();
    const length = buffer.readUint32();
    return { typeId, length };
};
const readHeaderChunked = (buffer) => {
    const sharp1 = buffer.readByte();
    const sharp2 = buffer.readByte();
    const typeId = buffer.readUint16();
    const length = buffer.readUint32();
    return { sharp1, sharp2, typeId, length };
};
const decode = (byteBuffer) => {
    const { typeId } = readHeader(byteBuffer);
    return {
        typeId,
        buffer: byteBuffer,
    };
};
const decodeChunked = (bytes) => {
    const byteBuffer = ByteBuffer__default["default"].wrap(bytes, undefined, undefined, true);
    const { sharp1, sharp2, typeId, length } = readHeaderChunked(byteBuffer);
    if (sharp1 !== MESSAGE_HEADER_BYTE || sharp2 !== MESSAGE_HEADER_BYTE) {
        throw new Error("Didn't receive expected header signature.");
    }
    return { length, typeId, restBuffer: byteBuffer };
};

var decodeProtocol = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decode: decode,
    decodeChunked: decodeChunked
});

function encode(data, options) {
    const { addTrezorHeaders, chunked, messageType } = options;
    const fullSize = (addTrezorHeaders ? HEADER_SIZE : HEADER_SIZE - 2) + data.limit;
    const encodedByteBuffer = new ByteBuffer__default["default"](fullSize);
    if (addTrezorHeaders) {
        encodedByteBuffer.writeByte(MESSAGE_HEADER_BYTE);
        encodedByteBuffer.writeByte(MESSAGE_HEADER_BYTE);
    }
    encodedByteBuffer.writeUint16(messageType);
    encodedByteBuffer.writeUint32(data.limit);
    encodedByteBuffer.append(data.buffer);
    encodedByteBuffer.reset();
    if (chunked === false) {
        return encodedByteBuffer;
    }
    const result = [];
    const size = BUFFER_SIZE;
    const count = Math.floor((encodedByteBuffer.limit - 1) / size) + 1 || 1;
    for (let i = 0; i < count; i++) {
        const start = i * size;
        const end = Math.min((i + 1) * size, encodedByteBuffer.limit);
        const slice = encodedByteBuffer.slice(start, end);
        slice.compact();
        result.push(slice.buffer);
    }
    return result;
}

function buildOne(messages, name, data) {
    const { Message, messageType } = createMessageFromName(messages, name);
    const buffer = encode$1(Message, data);
    return encode(buffer, {
        addTrezorHeaders: false,
        chunked: false,
        messageType,
    });
}
const buildEncodeBuffers = (messages, name, data) => {
    const { Message, messageType } = createMessageFromName(messages, name);
    const buffer = encode$1(Message, data);
    return encode(buffer, {
        addTrezorHeaders: true,
        chunked: true,
        messageType,
    });
};
const buildBuffers = (messages, name, data) => {
    const encodeBuffers = buildEncodeBuffers(messages, name, data);
    const outBuffers = [];
    for (const buf of encodeBuffers) {
        const chunkBuffer = new ByteBuffer__default["default"](BUFFER_SIZE + 1);
        chunkBuffer.writeByte(MESSAGE_TOP_CHAR);
        chunkBuffer.append(buf);
        chunkBuffer.reset();
        outBuffers.push(chunkBuffer);
    }
    return outBuffers;
};

function receiveOne(messages, data) {
    const bytebuffer = ByteBuffer__default["default"].wrap(data, 'hex');
    const { typeId, buffer } = decode(bytebuffer);
    const { Message, messageName } = createMessageFromType(messages, typeId);
    const message = decode$1(Message, buffer);
    return {
        message,
        type: messageName,
    };
}

const ERROR = 'Wrong result type.';
function info(res) {
    if (typeof res !== 'object' || res == null) {
        throw new Error('Wrong result type.');
    }
    const { version } = res;
    if (typeof version !== 'string') {
        throw new Error(ERROR);
    }
    const configured = !!res.configured;
    return { version, configured };
}
function version(version) {
    if (typeof version !== 'string') {
        throw new Error(ERROR);
    }
    return version.trim();
}
function convertSession(r) {
    if (r == null) {
        return null;
    }
    if (typeof r !== 'string') {
        throw new Error(ERROR);
    }
    return r;
}
function devices(res) {
    if (typeof res !== 'object') {
        throw new Error(ERROR);
    }
    if (!(res instanceof Array)) {
        throw new Error(ERROR);
    }
    return res.map((o) => {
        if (typeof o !== 'object' || o == null) {
            throw new Error(ERROR);
        }
        const { path } = o;
        if (typeof path !== 'string') {
            throw new Error(ERROR);
        }
        const pathS = path.toString();
        return {
            path: pathS,
            session: convertSession(o.session),
            debugSession: convertSession(o.debugSession),
            product: o.product,
            vendor: o.vendor,
            debug: !!o.debug,
        };
    });
}
function acquire(res) {
    if (typeof res !== 'object' || res == null) {
        throw new Error(ERROR);
    }
    const { session } = res;
    if (typeof session !== 'string' && typeof session !== 'number') {
        throw new Error(ERROR);
    }
    return session.toString();
}
function call(res) {
    if (typeof res !== 'object' || res == null) {
        throw new Error(ERROR);
    }
    const { type } = res;
    if (typeof type !== 'string') {
        throw new Error(ERROR);
    }
    const { message } = res;
    if (typeof message !== 'object' || message == null) {
        throw new Error(ERROR);
    }
    return { type, message };
}

var check = /*#__PURE__*/Object.freeze({
    __proto__: null,
    info: info,
    version: version,
    devices: devices,
    acquire: acquire,
    call: call
});

exports.BinanceOrderType = void 0;
(function (BinanceOrderType) {
    BinanceOrderType[BinanceOrderType["OT_UNKNOWN"] = 0] = "OT_UNKNOWN";
    BinanceOrderType[BinanceOrderType["MARKET"] = 1] = "MARKET";
    BinanceOrderType[BinanceOrderType["LIMIT"] = 2] = "LIMIT";
    BinanceOrderType[BinanceOrderType["OT_RESERVED"] = 3] = "OT_RESERVED";
})(exports.BinanceOrderType || (exports.BinanceOrderType = {}));
exports.BinanceOrderSide = void 0;
(function (BinanceOrderSide) {
    BinanceOrderSide[BinanceOrderSide["SIDE_UNKNOWN"] = 0] = "SIDE_UNKNOWN";
    BinanceOrderSide[BinanceOrderSide["BUY"] = 1] = "BUY";
    BinanceOrderSide[BinanceOrderSide["SELL"] = 2] = "SELL";
})(exports.BinanceOrderSide || (exports.BinanceOrderSide = {}));
exports.BinanceTimeInForce = void 0;
(function (BinanceTimeInForce) {
    BinanceTimeInForce[BinanceTimeInForce["TIF_UNKNOWN"] = 0] = "TIF_UNKNOWN";
    BinanceTimeInForce[BinanceTimeInForce["GTE"] = 1] = "GTE";
    BinanceTimeInForce[BinanceTimeInForce["TIF_RESERVED"] = 2] = "TIF_RESERVED";
    BinanceTimeInForce[BinanceTimeInForce["IOC"] = 3] = "IOC";
})(exports.BinanceTimeInForce || (exports.BinanceTimeInForce = {}));
exports.Enum_InputScriptType = void 0;
(function (Enum_InputScriptType) {
    Enum_InputScriptType[Enum_InputScriptType["SPENDADDRESS"] = 0] = "SPENDADDRESS";
    Enum_InputScriptType[Enum_InputScriptType["SPENDMULTISIG"] = 1] = "SPENDMULTISIG";
    Enum_InputScriptType[Enum_InputScriptType["EXTERNAL"] = 2] = "EXTERNAL";
    Enum_InputScriptType[Enum_InputScriptType["SPENDWITNESS"] = 3] = "SPENDWITNESS";
    Enum_InputScriptType[Enum_InputScriptType["SPENDP2SHWITNESS"] = 4] = "SPENDP2SHWITNESS";
    Enum_InputScriptType[Enum_InputScriptType["SPENDTAPROOT"] = 5] = "SPENDTAPROOT";
})(exports.Enum_InputScriptType || (exports.Enum_InputScriptType = {}));
exports.Enum_OutputScriptType = void 0;
(function (Enum_OutputScriptType) {
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOADDRESS"] = 0] = "PAYTOADDRESS";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOSCRIPTHASH"] = 1] = "PAYTOSCRIPTHASH";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOMULTISIG"] = 2] = "PAYTOMULTISIG";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOOPRETURN"] = 3] = "PAYTOOPRETURN";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOWITNESS"] = 4] = "PAYTOWITNESS";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOP2SHWITNESS"] = 5] = "PAYTOP2SHWITNESS";
    Enum_OutputScriptType[Enum_OutputScriptType["PAYTOTAPROOT"] = 6] = "PAYTOTAPROOT";
})(exports.Enum_OutputScriptType || (exports.Enum_OutputScriptType = {}));
exports.DecredStakingSpendType = void 0;
(function (DecredStakingSpendType) {
    DecredStakingSpendType[DecredStakingSpendType["SSGen"] = 0] = "SSGen";
    DecredStakingSpendType[DecredStakingSpendType["SSRTX"] = 1] = "SSRTX";
})(exports.DecredStakingSpendType || (exports.DecredStakingSpendType = {}));
exports.AmountUnit = void 0;
(function (AmountUnit) {
    AmountUnit[AmountUnit["BITCOIN"] = 0] = "BITCOIN";
    AmountUnit[AmountUnit["MILLIBITCOIN"] = 1] = "MILLIBITCOIN";
    AmountUnit[AmountUnit["MICROBITCOIN"] = 2] = "MICROBITCOIN";
    AmountUnit[AmountUnit["SATOSHI"] = 3] = "SATOSHI";
})(exports.AmountUnit || (exports.AmountUnit = {}));
exports.Enum_RequestType = void 0;
(function (Enum_RequestType) {
    Enum_RequestType[Enum_RequestType["TXINPUT"] = 0] = "TXINPUT";
    Enum_RequestType[Enum_RequestType["TXOUTPUT"] = 1] = "TXOUTPUT";
    Enum_RequestType[Enum_RequestType["TXMETA"] = 2] = "TXMETA";
    Enum_RequestType[Enum_RequestType["TXFINISHED"] = 3] = "TXFINISHED";
    Enum_RequestType[Enum_RequestType["TXEXTRADATA"] = 4] = "TXEXTRADATA";
    Enum_RequestType[Enum_RequestType["TXORIGINPUT"] = 5] = "TXORIGINPUT";
    Enum_RequestType[Enum_RequestType["TXORIGOUTPUT"] = 6] = "TXORIGOUTPUT";
})(exports.Enum_RequestType || (exports.Enum_RequestType = {}));
exports.RebootType = void 0;
(function (RebootType) {
    RebootType[RebootType["Normal"] = 0] = "Normal";
    RebootType[RebootType["Boardloader"] = 1] = "Boardloader";
    RebootType[RebootType["BootLoader"] = 2] = "BootLoader";
})(exports.RebootType || (exports.RebootType = {}));
exports.CardanoDerivationType = void 0;
(function (CardanoDerivationType) {
    CardanoDerivationType[CardanoDerivationType["LEDGER"] = 0] = "LEDGER";
    CardanoDerivationType[CardanoDerivationType["ICARUS"] = 1] = "ICARUS";
    CardanoDerivationType[CardanoDerivationType["ICARUS_TREZOR"] = 2] = "ICARUS_TREZOR";
})(exports.CardanoDerivationType || (exports.CardanoDerivationType = {}));
exports.CardanoAddressType = void 0;
(function (CardanoAddressType) {
    CardanoAddressType[CardanoAddressType["BASE"] = 0] = "BASE";
    CardanoAddressType[CardanoAddressType["BASE_SCRIPT_KEY"] = 1] = "BASE_SCRIPT_KEY";
    CardanoAddressType[CardanoAddressType["BASE_KEY_SCRIPT"] = 2] = "BASE_KEY_SCRIPT";
    CardanoAddressType[CardanoAddressType["BASE_SCRIPT_SCRIPT"] = 3] = "BASE_SCRIPT_SCRIPT";
    CardanoAddressType[CardanoAddressType["POINTER"] = 4] = "POINTER";
    CardanoAddressType[CardanoAddressType["POINTER_SCRIPT"] = 5] = "POINTER_SCRIPT";
    CardanoAddressType[CardanoAddressType["ENTERPRISE"] = 6] = "ENTERPRISE";
    CardanoAddressType[CardanoAddressType["ENTERPRISE_SCRIPT"] = 7] = "ENTERPRISE_SCRIPT";
    CardanoAddressType[CardanoAddressType["BYRON"] = 8] = "BYRON";
    CardanoAddressType[CardanoAddressType["REWARD"] = 14] = "REWARD";
    CardanoAddressType[CardanoAddressType["REWARD_SCRIPT"] = 15] = "REWARD_SCRIPT";
})(exports.CardanoAddressType || (exports.CardanoAddressType = {}));
exports.CardanoNativeScriptType = void 0;
(function (CardanoNativeScriptType) {
    CardanoNativeScriptType[CardanoNativeScriptType["PUB_KEY"] = 0] = "PUB_KEY";
    CardanoNativeScriptType[CardanoNativeScriptType["ALL"] = 1] = "ALL";
    CardanoNativeScriptType[CardanoNativeScriptType["ANY"] = 2] = "ANY";
    CardanoNativeScriptType[CardanoNativeScriptType["N_OF_K"] = 3] = "N_OF_K";
    CardanoNativeScriptType[CardanoNativeScriptType["INVALID_BEFORE"] = 4] = "INVALID_BEFORE";
    CardanoNativeScriptType[CardanoNativeScriptType["INVALID_HEREAFTER"] = 5] = "INVALID_HEREAFTER";
})(exports.CardanoNativeScriptType || (exports.CardanoNativeScriptType = {}));
exports.CardanoNativeScriptHashDisplayFormat = void 0;
(function (CardanoNativeScriptHashDisplayFormat) {
    CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["HIDE"] = 0] = "HIDE";
    CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["BECH32"] = 1] = "BECH32";
    CardanoNativeScriptHashDisplayFormat[CardanoNativeScriptHashDisplayFormat["POLICY_ID"] = 2] = "POLICY_ID";
})(exports.CardanoNativeScriptHashDisplayFormat || (exports.CardanoNativeScriptHashDisplayFormat = {}));
exports.CardanoTxOutputSerializationFormat = void 0;
(function (CardanoTxOutputSerializationFormat) {
    CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["ARRAY_LEGACY"] = 0] = "ARRAY_LEGACY";
    CardanoTxOutputSerializationFormat[CardanoTxOutputSerializationFormat["MAP_BABBAGE"] = 1] = "MAP_BABBAGE";
})(exports.CardanoTxOutputSerializationFormat || (exports.CardanoTxOutputSerializationFormat = {}));
exports.CardanoCertificateType = void 0;
(function (CardanoCertificateType) {
    CardanoCertificateType[CardanoCertificateType["STAKE_REGISTRATION"] = 0] = "STAKE_REGISTRATION";
    CardanoCertificateType[CardanoCertificateType["STAKE_DEREGISTRATION"] = 1] = "STAKE_DEREGISTRATION";
    CardanoCertificateType[CardanoCertificateType["STAKE_DELEGATION"] = 2] = "STAKE_DELEGATION";
    CardanoCertificateType[CardanoCertificateType["STAKE_POOL_REGISTRATION"] = 3] = "STAKE_POOL_REGISTRATION";
})(exports.CardanoCertificateType || (exports.CardanoCertificateType = {}));
exports.CardanoPoolRelayType = void 0;
(function (CardanoPoolRelayType) {
    CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_IP"] = 0] = "SINGLE_HOST_IP";
    CardanoPoolRelayType[CardanoPoolRelayType["SINGLE_HOST_NAME"] = 1] = "SINGLE_HOST_NAME";
    CardanoPoolRelayType[CardanoPoolRelayType["MULTIPLE_HOST_NAME"] = 2] = "MULTIPLE_HOST_NAME";
})(exports.CardanoPoolRelayType || (exports.CardanoPoolRelayType = {}));
exports.CardanoTxAuxiliaryDataSupplementType = void 0;
(function (CardanoTxAuxiliaryDataSupplementType) {
    CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["NONE"] = 0] = "NONE";
    CardanoTxAuxiliaryDataSupplementType[CardanoTxAuxiliaryDataSupplementType["GOVERNANCE_REGISTRATION_SIGNATURE"] = 1] = "GOVERNANCE_REGISTRATION_SIGNATURE";
})(exports.CardanoTxAuxiliaryDataSupplementType || (exports.CardanoTxAuxiliaryDataSupplementType = {}));
exports.CardanoGovernanceRegistrationFormat = void 0;
(function (CardanoGovernanceRegistrationFormat) {
    CardanoGovernanceRegistrationFormat[CardanoGovernanceRegistrationFormat["CIP15"] = 0] = "CIP15";
    CardanoGovernanceRegistrationFormat[CardanoGovernanceRegistrationFormat["CIP36"] = 1] = "CIP36";
})(exports.CardanoGovernanceRegistrationFormat || (exports.CardanoGovernanceRegistrationFormat = {}));
exports.CardanoTxSigningMode = void 0;
(function (CardanoTxSigningMode) {
    CardanoTxSigningMode[CardanoTxSigningMode["ORDINARY_TRANSACTION"] = 0] = "ORDINARY_TRANSACTION";
    CardanoTxSigningMode[CardanoTxSigningMode["POOL_REGISTRATION_AS_OWNER"] = 1] = "POOL_REGISTRATION_AS_OWNER";
    CardanoTxSigningMode[CardanoTxSigningMode["MULTISIG_TRANSACTION"] = 2] = "MULTISIG_TRANSACTION";
    CardanoTxSigningMode[CardanoTxSigningMode["PLUTUS_TRANSACTION"] = 3] = "PLUTUS_TRANSACTION";
})(exports.CardanoTxSigningMode || (exports.CardanoTxSigningMode = {}));
exports.CardanoTxWitnessType = void 0;
(function (CardanoTxWitnessType) {
    CardanoTxWitnessType[CardanoTxWitnessType["BYRON_WITNESS"] = 0] = "BYRON_WITNESS";
    CardanoTxWitnessType[CardanoTxWitnessType["SHELLEY_WITNESS"] = 1] = "SHELLEY_WITNESS";
})(exports.CardanoTxWitnessType || (exports.CardanoTxWitnessType = {}));
exports.FailureType = void 0;
(function (FailureType) {
    FailureType[FailureType["Failure_UnexpectedMessage"] = 1] = "Failure_UnexpectedMessage";
    FailureType[FailureType["Failure_ButtonExpected"] = 2] = "Failure_ButtonExpected";
    FailureType[FailureType["Failure_DataError"] = 3] = "Failure_DataError";
    FailureType[FailureType["Failure_ActionCancelled"] = 4] = "Failure_ActionCancelled";
    FailureType[FailureType["Failure_PinExpected"] = 5] = "Failure_PinExpected";
    FailureType[FailureType["Failure_PinCancelled"] = 6] = "Failure_PinCancelled";
    FailureType[FailureType["Failure_PinInvalid"] = 7] = "Failure_PinInvalid";
    FailureType[FailureType["Failure_InvalidSignature"] = 8] = "Failure_InvalidSignature";
    FailureType[FailureType["Failure_ProcessError"] = 9] = "Failure_ProcessError";
    FailureType[FailureType["Failure_NotEnoughFunds"] = 10] = "Failure_NotEnoughFunds";
    FailureType[FailureType["Failure_NotInitialized"] = 11] = "Failure_NotInitialized";
    FailureType[FailureType["Failure_PinMismatch"] = 12] = "Failure_PinMismatch";
    FailureType[FailureType["Failure_WipeCodeMismatch"] = 13] = "Failure_WipeCodeMismatch";
    FailureType[FailureType["Failure_InvalidSession"] = 14] = "Failure_InvalidSession";
    FailureType[FailureType["Failure_FirmwareError"] = 99] = "Failure_FirmwareError";
})(exports.FailureType || (exports.FailureType = {}));
exports.Enum_ButtonRequestType = void 0;
(function (Enum_ButtonRequestType) {
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Other"] = 1] = "ButtonRequest_Other";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FeeOverThreshold"] = 2] = "ButtonRequest_FeeOverThreshold";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmOutput"] = 3] = "ButtonRequest_ConfirmOutput";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ResetDevice"] = 4] = "ButtonRequest_ResetDevice";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ConfirmWord"] = 5] = "ButtonRequest_ConfirmWord";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_WipeDevice"] = 6] = "ButtonRequest_WipeDevice";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_ProtectCall"] = 7] = "ButtonRequest_ProtectCall";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_SignTx"] = 8] = "ButtonRequest_SignTx";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_FirmwareCheck"] = 9] = "ButtonRequest_FirmwareCheck";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Address"] = 10] = "ButtonRequest_Address";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PublicKey"] = 11] = "ButtonRequest_PublicKey";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicWordCount"] = 12] = "ButtonRequest_MnemonicWordCount";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_MnemonicInput"] = 13] = "ButtonRequest_MnemonicInput";
    Enum_ButtonRequestType[Enum_ButtonRequestType["_Deprecated_ButtonRequest_PassphraseType"] = 14] = "_Deprecated_ButtonRequest_PassphraseType";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_UnknownDerivationPath"] = 15] = "ButtonRequest_UnknownDerivationPath";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_RecoveryHomepage"] = 16] = "ButtonRequest_RecoveryHomepage";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Success"] = 17] = "ButtonRequest_Success";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_Warning"] = 18] = "ButtonRequest_Warning";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PassphraseEntry"] = 19] = "ButtonRequest_PassphraseEntry";
    Enum_ButtonRequestType[Enum_ButtonRequestType["ButtonRequest_PinEntry"] = 20] = "ButtonRequest_PinEntry";
})(exports.Enum_ButtonRequestType || (exports.Enum_ButtonRequestType = {}));
exports.Enum_PinMatrixRequestType = void 0;
(function (Enum_PinMatrixRequestType) {
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_Current"] = 1] = "PinMatrixRequestType_Current";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewFirst"] = 2] = "PinMatrixRequestType_NewFirst";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_NewSecond"] = 3] = "PinMatrixRequestType_NewSecond";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeFirst"] = 4] = "PinMatrixRequestType_WipeCodeFirst";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_WipeCodeSecond"] = 5] = "PinMatrixRequestType_WipeCodeSecond";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_BackupFirst"] = 6] = "PinMatrixRequestType_BackupFirst";
    Enum_PinMatrixRequestType[Enum_PinMatrixRequestType["PinMatrixRequestType_BackupSecond"] = 7] = "PinMatrixRequestType_BackupSecond";
})(exports.Enum_PinMatrixRequestType || (exports.Enum_PinMatrixRequestType = {}));
exports.EthereumDefinitionType = void 0;
(function (EthereumDefinitionType) {
    EthereumDefinitionType[EthereumDefinitionType["NETWORK"] = 0] = "NETWORK";
    EthereumDefinitionType[EthereumDefinitionType["TOKEN"] = 1] = "TOKEN";
})(exports.EthereumDefinitionType || (exports.EthereumDefinitionType = {}));
exports.EthereumDataTypeChargerWallet = void 0;
(function (EthereumDataTypeChargerWallet) {
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["UINT"] = 1] = "UINT";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["INT"] = 2] = "INT";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["BYTES"] = 3] = "BYTES";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["STRING"] = 4] = "STRING";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["BOOL"] = 5] = "BOOL";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["ADDRESS"] = 6] = "ADDRESS";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["ARRAY"] = 7] = "ARRAY";
    EthereumDataTypeChargerWallet[EthereumDataTypeChargerWallet["STRUCT"] = 8] = "STRUCT";
})(exports.EthereumDataTypeChargerWallet || (exports.EthereumDataTypeChargerWallet = {}));
exports.EthereumDataType = void 0;
(function (EthereumDataType) {
    EthereumDataType[EthereumDataType["UINT"] = 1] = "UINT";
    EthereumDataType[EthereumDataType["INT"] = 2] = "INT";
    EthereumDataType[EthereumDataType["BYTES"] = 3] = "BYTES";
    EthereumDataType[EthereumDataType["STRING"] = 4] = "STRING";
    EthereumDataType[EthereumDataType["BOOL"] = 5] = "BOOL";
    EthereumDataType[EthereumDataType["ADDRESS"] = 6] = "ADDRESS";
    EthereumDataType[EthereumDataType["ARRAY"] = 7] = "ARRAY";
    EthereumDataType[EthereumDataType["STRUCT"] = 8] = "STRUCT";
})(exports.EthereumDataType || (exports.EthereumDataType = {}));
exports.Enum_BackupType = void 0;
(function (Enum_BackupType) {
    Enum_BackupType[Enum_BackupType["Bip39"] = 0] = "Bip39";
    Enum_BackupType[Enum_BackupType["Slip39_Basic"] = 1] = "Slip39_Basic";
    Enum_BackupType[Enum_BackupType["Slip39_Advanced"] = 2] = "Slip39_Advanced";
})(exports.Enum_BackupType || (exports.Enum_BackupType = {}));
exports.Enum_SafetyCheckLevel = void 0;
(function (Enum_SafetyCheckLevel) {
    Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["Strict"] = 0] = "Strict";
    Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptAlways"] = 1] = "PromptAlways";
    Enum_SafetyCheckLevel[Enum_SafetyCheckLevel["PromptTemporarily"] = 2] = "PromptTemporarily";
})(exports.Enum_SafetyCheckLevel || (exports.Enum_SafetyCheckLevel = {}));
exports.ChargerWalletDeviceType = void 0;
(function (ChargerWalletDeviceType) {
    ChargerWalletDeviceType[ChargerWalletDeviceType["CLASSIC"] = 0] = "CLASSIC";
    ChargerWalletDeviceType[ChargerWalletDeviceType["CLASSIC1S"] = 1] = "CLASSIC1S";
    ChargerWalletDeviceType[ChargerWalletDeviceType["MINI"] = 2] = "MINI";
    ChargerWalletDeviceType[ChargerWalletDeviceType["TOUCH"] = 3] = "TOUCH";
    ChargerWalletDeviceType[ChargerWalletDeviceType["PRO"] = 5] = "PRO";
})(exports.ChargerWalletDeviceType || (exports.ChargerWalletDeviceType = {}));
exports.ChargerWalletSeType = void 0;
(function (ChargerWalletSeType) {
    ChargerWalletSeType[ChargerWalletSeType["THD89"] = 0] = "THD89";
    ChargerWalletSeType[ChargerWalletSeType["SE608A"] = 1] = "SE608A";
})(exports.ChargerWalletSeType || (exports.ChargerWalletSeType = {}));
exports.ChargerWalletSEState = void 0;
(function (ChargerWalletSEState) {
    ChargerWalletSEState[ChargerWalletSEState["BOOT"] = 0] = "BOOT";
    ChargerWalletSEState[ChargerWalletSEState["APP"] = 1] = "APP";
})(exports.ChargerWalletSEState || (exports.ChargerWalletSEState = {}));
exports.Enum_Capability = void 0;
(function (Enum_Capability) {
    Enum_Capability[Enum_Capability["Capability_Bitcoin"] = 1] = "Capability_Bitcoin";
    Enum_Capability[Enum_Capability["Capability_Bitcoin_like"] = 2] = "Capability_Bitcoin_like";
    Enum_Capability[Enum_Capability["Capability_Binance"] = 3] = "Capability_Binance";
    Enum_Capability[Enum_Capability["Capability_Cardano"] = 4] = "Capability_Cardano";
    Enum_Capability[Enum_Capability["Capability_Crypto"] = 5] = "Capability_Crypto";
    Enum_Capability[Enum_Capability["Capability_EOS"] = 6] = "Capability_EOS";
    Enum_Capability[Enum_Capability["Capability_Ethereum"] = 7] = "Capability_Ethereum";
    Enum_Capability[Enum_Capability["Capability_Lisk"] = 8] = "Capability_Lisk";
    Enum_Capability[Enum_Capability["Capability_Monero"] = 9] = "Capability_Monero";
    Enum_Capability[Enum_Capability["Capability_NEM"] = 10] = "Capability_NEM";
    Enum_Capability[Enum_Capability["Capability_Ripple"] = 11] = "Capability_Ripple";
    Enum_Capability[Enum_Capability["Capability_Stellar"] = 12] = "Capability_Stellar";
    Enum_Capability[Enum_Capability["Capability_Tezos"] = 13] = "Capability_Tezos";
    Enum_Capability[Enum_Capability["Capability_U2F"] = 14] = "Capability_U2F";
    Enum_Capability[Enum_Capability["Capability_Shamir"] = 15] = "Capability_Shamir";
    Enum_Capability[Enum_Capability["Capability_ShamirGroups"] = 16] = "Capability_ShamirGroups";
    Enum_Capability[Enum_Capability["Capability_PassphraseEntry"] = 17] = "Capability_PassphraseEntry";
})(exports.Enum_Capability || (exports.Enum_Capability = {}));
exports.ExportType = void 0;
(function (ExportType) {
    ExportType[ExportType["SeedEncExportType_NO"] = 0] = "SeedEncExportType_NO";
    ExportType[ExportType["SeedEncExportType_YES"] = 1] = "SeedEncExportType_YES";
    ExportType[ExportType["MnemonicPlainExportType_YES"] = 2] = "MnemonicPlainExportType_YES";
})(exports.ExportType || (exports.ExportType = {}));
exports.SdProtectOperationType = void 0;
(function (SdProtectOperationType) {
    SdProtectOperationType[SdProtectOperationType["DISABLE"] = 0] = "DISABLE";
    SdProtectOperationType[SdProtectOperationType["ENABLE"] = 1] = "ENABLE";
    SdProtectOperationType[SdProtectOperationType["REFRESH"] = 2] = "REFRESH";
})(exports.SdProtectOperationType || (exports.SdProtectOperationType = {}));
exports.RecoveryDeviceType = void 0;
(function (RecoveryDeviceType) {
    RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_ScrambledWords"] = 0] = "RecoveryDeviceType_ScrambledWords";
    RecoveryDeviceType[RecoveryDeviceType["RecoveryDeviceType_Matrix"] = 1] = "RecoveryDeviceType_Matrix";
})(exports.RecoveryDeviceType || (exports.RecoveryDeviceType = {}));
exports.Enum_WordRequestType = void 0;
(function (Enum_WordRequestType) {
    Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Plain"] = 0] = "WordRequestType_Plain";
    Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix9"] = 1] = "WordRequestType_Matrix9";
    Enum_WordRequestType[Enum_WordRequestType["WordRequestType_Matrix6"] = 2] = "WordRequestType_Matrix6";
})(exports.Enum_WordRequestType || (exports.Enum_WordRequestType = {}));
exports.SeedRequestType = void 0;
(function (SeedRequestType) {
    SeedRequestType[SeedRequestType["SeedRequestType_Gen"] = 0] = "SeedRequestType_Gen";
    SeedRequestType[SeedRequestType["SeedRequestType_EncExport"] = 1] = "SeedRequestType_EncExport";
    SeedRequestType[SeedRequestType["SeedRequestType_EncImport"] = 2] = "SeedRequestType_EncImport";
})(exports.SeedRequestType || (exports.SeedRequestType = {}));
exports.WL_OperationType = void 0;
(function (WL_OperationType) {
    WL_OperationType[WL_OperationType["WL_OperationType_Add"] = 0] = "WL_OperationType_Add";
    WL_OperationType[WL_OperationType["WL_OperationType_Delete"] = 1] = "WL_OperationType_Delete";
    WL_OperationType[WL_OperationType["WL_OperationType_Inquire"] = 2] = "WL_OperationType_Inquire";
})(exports.WL_OperationType || (exports.WL_OperationType = {}));
exports.ResourceType = void 0;
(function (ResourceType) {
    ResourceType[ResourceType["WallPaper"] = 0] = "WallPaper";
    ResourceType[ResourceType["Nft"] = 1] = "Nft";
})(exports.ResourceType || (exports.ResourceType = {}));
exports.NEMMosaicLevy = void 0;
(function (NEMMosaicLevy) {
    NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Absolute"] = 1] = "MosaicLevy_Absolute";
    NEMMosaicLevy[NEMMosaicLevy["MosaicLevy_Percentile"] = 2] = "MosaicLevy_Percentile";
})(exports.NEMMosaicLevy || (exports.NEMMosaicLevy = {}));
exports.NEMSupplyChangeType = void 0;
(function (NEMSupplyChangeType) {
    NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Increase"] = 1] = "SupplyChange_Increase";
    NEMSupplyChangeType[NEMSupplyChangeType["SupplyChange_Decrease"] = 2] = "SupplyChange_Decrease";
})(exports.NEMSupplyChangeType || (exports.NEMSupplyChangeType = {}));
exports.NEMModificationType = void 0;
(function (NEMModificationType) {
    NEMModificationType[NEMModificationType["CosignatoryModification_Add"] = 1] = "CosignatoryModification_Add";
    NEMModificationType[NEMModificationType["CosignatoryModification_Delete"] = 2] = "CosignatoryModification_Delete";
})(exports.NEMModificationType || (exports.NEMModificationType = {}));
exports.NEMImportanceTransferMode = void 0;
(function (NEMImportanceTransferMode) {
    NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Activate"] = 1] = "ImportanceTransfer_Activate";
    NEMImportanceTransferMode[NEMImportanceTransferMode["ImportanceTransfer_Deactivate"] = 2] = "ImportanceTransfer_Deactivate";
})(exports.NEMImportanceTransferMode || (exports.NEMImportanceTransferMode = {}));
exports.StellarAssetType = void 0;
(function (StellarAssetType) {
    StellarAssetType[StellarAssetType["NATIVE"] = 0] = "NATIVE";
    StellarAssetType[StellarAssetType["ALPHANUM4"] = 1] = "ALPHANUM4";
    StellarAssetType[StellarAssetType["ALPHANUM12"] = 2] = "ALPHANUM12";
})(exports.StellarAssetType || (exports.StellarAssetType = {}));
exports.StellarMemoType = void 0;
(function (StellarMemoType) {
    StellarMemoType[StellarMemoType["NONE"] = 0] = "NONE";
    StellarMemoType[StellarMemoType["TEXT"] = 1] = "TEXT";
    StellarMemoType[StellarMemoType["ID"] = 2] = "ID";
    StellarMemoType[StellarMemoType["HASH"] = 3] = "HASH";
    StellarMemoType[StellarMemoType["RETURN"] = 4] = "RETURN";
})(exports.StellarMemoType || (exports.StellarMemoType = {}));
exports.StellarSignerType = void 0;
(function (StellarSignerType) {
    StellarSignerType[StellarSignerType["ACCOUNT"] = 0] = "ACCOUNT";
    StellarSignerType[StellarSignerType["PRE_AUTH"] = 1] = "PRE_AUTH";
    StellarSignerType[StellarSignerType["HASH"] = 2] = "HASH";
})(exports.StellarSignerType || (exports.StellarSignerType = {}));
exports.TezosContractType = void 0;
(function (TezosContractType) {
    TezosContractType[TezosContractType["Implicit"] = 0] = "Implicit";
    TezosContractType[TezosContractType["Originated"] = 1] = "Originated";
})(exports.TezosContractType || (exports.TezosContractType = {}));
exports.TezosBallotType = void 0;
(function (TezosBallotType) {
    TezosBallotType[TezosBallotType["Yay"] = 0] = "Yay";
    TezosBallotType[TezosBallotType["Nay"] = 1] = "Nay";
    TezosBallotType[TezosBallotType["Pass"] = 2] = "Pass";
})(exports.TezosBallotType || (exports.TezosBallotType = {}));
exports.TonWalletVersion = void 0;
(function (TonWalletVersion) {
    TonWalletVersion[TonWalletVersion["V4R2"] = 3] = "V4R2";
})(exports.TonWalletVersion || (exports.TonWalletVersion = {}));
exports.TonWorkChain = void 0;
(function (TonWorkChain) {
    TonWorkChain[TonWorkChain["BASECHAIN"] = 0] = "BASECHAIN";
    TonWorkChain[TonWorkChain["MASTERCHAIN"] = 1] = "MASTERCHAIN";
})(exports.TonWorkChain || (exports.TonWorkChain = {}));
exports.TronResourceCode = void 0;
(function (TronResourceCode) {
    TronResourceCode[TronResourceCode["BANDWIDTH"] = 0] = "BANDWIDTH";
    TronResourceCode[TronResourceCode["ENERGY"] = 1] = "ENERGY";
})(exports.TronResourceCode || (exports.TronResourceCode = {}));
exports.CommandFlags = void 0;
(function (CommandFlags) {
    CommandFlags[CommandFlags["Default"] = 0] = "Default";
    CommandFlags[CommandFlags["Factory_Only"] = 1] = "Factory_Only";
})(exports.CommandFlags || (exports.CommandFlags = {}));

var messages = /*#__PURE__*/Object.freeze({
    __proto__: null,
    get BinanceOrderType () { return exports.BinanceOrderType; },
    get BinanceOrderSide () { return exports.BinanceOrderSide; },
    get BinanceTimeInForce () { return exports.BinanceTimeInForce; },
    get Enum_InputScriptType () { return exports.Enum_InputScriptType; },
    get Enum_OutputScriptType () { return exports.Enum_OutputScriptType; },
    get DecredStakingSpendType () { return exports.DecredStakingSpendType; },
    get AmountUnit () { return exports.AmountUnit; },
    get Enum_RequestType () { return exports.Enum_RequestType; },
    get RebootType () { return exports.RebootType; },
    get CardanoDerivationType () { return exports.CardanoDerivationType; },
    get CardanoAddressType () { return exports.CardanoAddressType; },
    get CardanoNativeScriptType () { return exports.CardanoNativeScriptType; },
    get CardanoNativeScriptHashDisplayFormat () { return exports.CardanoNativeScriptHashDisplayFormat; },
    get CardanoTxOutputSerializationFormat () { return exports.CardanoTxOutputSerializationFormat; },
    get CardanoCertificateType () { return exports.CardanoCertificateType; },
    get CardanoPoolRelayType () { return exports.CardanoPoolRelayType; },
    get CardanoTxAuxiliaryDataSupplementType () { return exports.CardanoTxAuxiliaryDataSupplementType; },
    get CardanoGovernanceRegistrationFormat () { return exports.CardanoGovernanceRegistrationFormat; },
    get CardanoTxSigningMode () { return exports.CardanoTxSigningMode; },
    get CardanoTxWitnessType () { return exports.CardanoTxWitnessType; },
    get FailureType () { return exports.FailureType; },
    get Enum_ButtonRequestType () { return exports.Enum_ButtonRequestType; },
    get Enum_PinMatrixRequestType () { return exports.Enum_PinMatrixRequestType; },
    get EthereumDefinitionType () { return exports.EthereumDefinitionType; },
    get EthereumDataTypeChargerWallet () { return exports.EthereumDataTypeChargerWallet; },
    get EthereumDataType () { return exports.EthereumDataType; },
    get Enum_BackupType () { return exports.Enum_BackupType; },
    get Enum_SafetyCheckLevel () { return exports.Enum_SafetyCheckLevel; },
    get ChargerWalletDeviceType () { return exports.ChargerWalletDeviceType; },
    get ChargerWalletSeType () { return exports.ChargerWalletSeType; },
    get ChargerWalletSEState () { return exports.ChargerWalletSEState; },
    get Enum_Capability () { return exports.Enum_Capability; },
    get ExportType () { return exports.ExportType; },
    get SdProtectOperationType () { return exports.SdProtectOperationType; },
    get RecoveryDeviceType () { return exports.RecoveryDeviceType; },
    get Enum_WordRequestType () { return exports.Enum_WordRequestType; },
    get SeedRequestType () { return exports.SeedRequestType; },
    get WL_OperationType () { return exports.WL_OperationType; },
    get ResourceType () { return exports.ResourceType; },
    get NEMMosaicLevy () { return exports.NEMMosaicLevy; },
    get NEMSupplyChangeType () { return exports.NEMSupplyChangeType; },
    get NEMModificationType () { return exports.NEMModificationType; },
    get NEMImportanceTransferMode () { return exports.NEMImportanceTransferMode; },
    get StellarAssetType () { return exports.StellarAssetType; },
    get StellarMemoType () { return exports.StellarMemoType; },
    get StellarSignerType () { return exports.StellarSignerType; },
    get TezosContractType () { return exports.TezosContractType; },
    get TezosBallotType () { return exports.TezosBallotType; },
    get TonWalletVersion () { return exports.TonWalletVersion; },
    get TonWorkChain () { return exports.TonWorkChain; },
    get TronResourceCode () { return exports.TronResourceCode; },
    get CommandFlags () { return exports.CommandFlags; }
});

const LogBlockCommand = new Set(['PassphraseAck', 'PinMatrixAck']);

protobuf__namespace.util.Long = Long__namespace;
protobuf__namespace.configure();
var index = {
    check,
    buildOne,
    buildBuffers,
    buildEncodeBuffers,
    receiveOne,
    parseConfigure,
    decodeProtocol,
};

exports.BUFFER_SIZE = BUFFER_SIZE;
exports.COMMON_HEADER_SIZE = COMMON_HEADER_SIZE;
exports.HEADER_SIZE = HEADER_SIZE;
exports.LogBlockCommand = LogBlockCommand;
exports.MESSAGE_HEADER_BYTE = MESSAGE_HEADER_BYTE;
exports.MESSAGE_TOP_CHAR = MESSAGE_TOP_CHAR;
exports.Messages = messages;
exports["default"] = index;
