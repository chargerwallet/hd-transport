import * as ByteBuffer from 'bytebuffer';
import ByteBuffer__default from 'bytebuffer';
import * as protobuf from 'protobufjs/light';
import { Root } from 'protobufjs/light';
import EventEmitter from 'events';

declare function parseConfigure(data: protobuf.INamespace): protobuf.Root;

declare function buildOne(messages: Root, name: string, data: Record<string, unknown>): Buffer;

declare function receiveOne(messages: Root, data: string): {
    message: {
        [key: string]: any;
    };
    type: string;
};

declare const decode: (byteBuffer: ByteBuffer__default) => {
    typeId: number;
    buffer: ByteBuffer__default;
};
declare const decodeChunked: (bytes: ArrayBuffer) => {
    length: number;
    typeId: number;
    restBuffer: ByteBuffer__default;
};

declare const decodeProtocol_decode: typeof decode;
declare const decodeProtocol_decodeChunked: typeof decodeChunked;
declare namespace decodeProtocol {
  export {
    decodeProtocol_decode as decode,
    decodeProtocol_decodeChunked as decodeChunked,
  };
}

type ChargerWalletUsbDeviceInfo = {
    path: string;
};
type ChargerWalletDeviceInfoWithSession = ChargerWalletUsbDeviceInfo & {
    session?: string | null;
    debugSession?: string | null;
    debug: boolean;
};
type ChargerWalletMobileDeviceInfo = {
    id: string;
    name: string | null;
};
type ChargerWalletDeviceInfo = ChargerWalletDeviceInfoWithSession & ChargerWalletMobileDeviceInfo;
type AcquireInput = {
    path?: string;
    previous?: string | null;
    uuid?: string;
    forceCleanRunPromise?: boolean;
};
type MessageFromChargerWallet = {
    type: string;
    message: Record<string, any>;
};
type ITransportInitFn = (logger?: any, emitter?: EventEmitter, plugin?: LowlevelTransportSharedPlugin) => Promise<string>;
type Transport = {
    enumerate(): Promise<Array<ChargerWalletDeviceInfo>>;
    listen(old?: Array<ChargerWalletDeviceInfo>): Promise<Array<ChargerWalletDeviceInfo>>;
    acquire(input: AcquireInput): Promise<string>;
    release(session: string, onclose: boolean): Promise<void>;
    configure(signedData: JSON | string): Promise<void>;
    call(session: string, name: string, data: Record<string, any>): Promise<MessageFromChargerWallet>;
    post(session: string, name: string, data: Record<string, any>): Promise<void>;
    read(session: string): Promise<MessageFromChargerWallet>;
    cancel(): Promise<void>;
    init: ITransportInitFn;
    stop(): void;
    configured: boolean;
    version: string;
    name: string;
    activeName?: string;
    requestDevice: () => Promise<void>;
    requestNeeded: boolean;
    isOutdated: boolean;
};
type LowLevelDevice = {
    id: string;
    name: string;
};
type LowlevelTransportSharedPlugin = {
    enumerate: () => Promise<LowLevelDevice[]>;
    send: (uuid: string, data: string) => Promise<void>;
    receive: () => Promise<string>;
    connect: (uuid: string) => Promise<void>;
    disconnect: (uuid: string) => Promise<void>;
    init: () => Promise<void>;
    version: string;
};

type UintType = string | number;
type AlephiumGetAddress = {
    address_n: number[];
    show_display?: boolean;
    include_public_key?: boolean;
    target_group?: number;
};
type AlephiumAddress = {
    address: string;
    public_key?: string;
    derived_path: number[];
};
type AlephiumSignTx = {
    address_n: number[];
    data_initial_chunk: string;
    data_length?: number;
};
type AlephiumSignedTx = {
    signature: string;
    address: string;
};
type AlephiumTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
type AlephiumTxAck = {
    data_chunk: string;
};
type AlephiumBytecodeRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
type AlephiumBytecodeAck = {
    bytecode_data: string;
};
type AlephiumSignMessage = {
    address_n: number[];
    message?: string;
    message_type?: string;
};
type AlephiumMessageSignature = {
    signature?: string;
    address?: string;
};
type AlgorandGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type AlgorandAddress = {
    address?: string;
};
type AlgorandSignTx = {
    address_n: number[];
    raw_tx: string;
};
type AlgorandSignedTx = {
    signature: string;
};
type AptosGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type AptosAddress = {
    address?: string;
};
type AptosSignTx = {
    address_n: number[];
    raw_tx: string;
};
type AptosSignedTx = {
    public_key: string;
    signature: string;
};
type AptosMessagePayload = {
    address?: string;
    chain_id?: string;
    application?: string;
    nonce: string;
    message: string;
};
type AptosSignMessage = {
    address_n: number[];
    payload: AptosMessagePayload;
};
type AptosMessageSignature = {
    signature: string;
    address: string;
};
type BinanceGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type BinanceAddress = {
    address: string;
};
type BinanceGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type BinancePublicKey = {
    public_key: string;
};
type BinanceSignTx = {
    address_n: number[];
    msg_count?: number;
    account_number?: number;
    chain_id?: string;
    memo?: string;
    sequence?: number;
    source?: number;
};
type BinanceTxRequest = {};
type BinanceCoin = {
    amount?: UintType;
    denom?: string;
};
type BinanceInputOutput = {
    address?: string;
    coins: BinanceCoin[];
};
type BinanceTransferMsg = {
    inputs: BinanceInputOutput[];
    outputs: BinanceInputOutput[];
};
declare enum BinanceOrderType {
    OT_UNKNOWN = 0,
    MARKET = 1,
    LIMIT = 2,
    OT_RESERVED = 3
}
declare enum BinanceOrderSide {
    SIDE_UNKNOWN = 0,
    BUY = 1,
    SELL = 2
}
declare enum BinanceTimeInForce {
    TIF_UNKNOWN = 0,
    GTE = 1,
    TIF_RESERVED = 2,
    IOC = 3
}
type BinanceOrderMsg = {
    id?: string;
    ordertype?: BinanceOrderType;
    price?: number;
    quantity?: number;
    sender?: string;
    side?: BinanceOrderSide;
    symbol?: string;
    timeinforce?: BinanceTimeInForce;
};
type BinanceCancelMsg = {
    refid?: string;
    sender?: string;
    symbol?: string;
};
type BinanceSignedTx = {
    signature: string;
    public_key: string;
};
declare enum Enum_InputScriptType {
    SPENDADDRESS = 0,
    SPENDMULTISIG = 1,
    EXTERNAL = 2,
    SPENDWITNESS = 3,
    SPENDP2SHWITNESS = 4,
    SPENDTAPROOT = 5
}
type InputScriptType = keyof typeof Enum_InputScriptType;
declare enum Enum_OutputScriptType {
    PAYTOADDRESS = 0,
    PAYTOSCRIPTHASH = 1,
    PAYTOMULTISIG = 2,
    PAYTOOPRETURN = 3,
    PAYTOWITNESS = 4,
    PAYTOP2SHWITNESS = 5,
    PAYTOTAPROOT = 6
}
type OutputScriptType = keyof typeof Enum_OutputScriptType;
declare enum DecredStakingSpendType {
    SSGen = 0,
    SSRTX = 1
}
declare enum AmountUnit {
    BITCOIN = 0,
    MILLIBITCOIN = 1,
    MICROBITCOIN = 2,
    SATOSHI = 3
}
type HDNodeType = {
    depth: number;
    fingerprint: number;
    child_num: number;
    chain_code: string;
    private_key?: string;
    public_key: string;
};
type HDNodePathType = {
    node: HDNodeType | string;
    address_n: number[];
};
type MultisigRedeemScriptType = {
    pubkeys: HDNodePathType[];
    signatures: string[];
    m: number;
    nodes?: HDNodeType[];
    address_n?: number[];
};
type GetPublicKey = {
    address_n: number[];
    ecdsa_curve_name?: string;
    show_display?: boolean;
    coin_name?: string;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
type PublicKey = {
    node: HDNodeType;
    xpub: string;
    root_fingerprint?: number;
};
type GetAddress = {
    address_n: number[];
    coin_name?: string;
    show_display?: boolean;
    multisig?: MultisigRedeemScriptType;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
type Address = {
    address: string;
};
type GetOwnershipId = {
    address_n: number[];
    coin_name?: string;
    multisig?: MultisigRedeemScriptType;
    script_type?: InputScriptType;
};
type OwnershipId = {
    ownership_id: string;
};
type SignMessage = {
    address_n: number[];
    message: string;
    coin_name?: string;
    script_type?: InputScriptType;
    no_script_type?: boolean;
    is_bip322_simple?: boolean;
};
type MessageSignature = {
    address: string;
    signature: string;
};
type VerifyMessage = {
    address: string;
    signature: string;
    message: string;
    coin_name?: string;
};
type SignTx = {
    outputs_count: number;
    inputs_count: number;
    coin_name?: string;
    version?: number;
    lock_time?: number;
    expiry?: number;
    overwintered?: boolean;
    version_group_id?: number;
    timestamp?: number;
    branch_id?: number;
    amount_unit?: AmountUnit;
    decred_staking_ticket?: boolean;
};
declare enum Enum_RequestType {
    TXINPUT = 0,
    TXOUTPUT = 1,
    TXMETA = 2,
    TXFINISHED = 3,
    TXEXTRADATA = 4,
    TXORIGINPUT = 5,
    TXORIGOUTPUT = 6
}
type RequestType = keyof typeof Enum_RequestType;
type TxRequestDetailsType = {
    request_index: number;
    tx_hash?: string;
    extra_data_len?: number;
    extra_data_offset?: number;
};
type TxRequestSerializedType = {
    signature_index?: number;
    signature?: string;
    serialized_tx?: string;
};
type TxRequest = {
    request_type: RequestType;
    details: TxRequestDetailsType;
    serialized?: TxRequestSerializedType;
};
type InternalInputScriptType = Exclude<InputScriptType, 'EXTERNAL'>;
type CommonTxInputType = {
    prev_hash: string;
    prev_index: number;
    amount: UintType;
    sequence?: number;
    multisig?: MultisigRedeemScriptType;
    decred_tree?: number;
    orig_hash?: string;
    orig_index?: number;
    decred_staking_spend?: DecredStakingSpendType;
    script_pubkey?: string;
    script_sig?: string;
    witness?: string;
    ownership_proof?: string;
    commitment_data?: string;
};
type TxInputType = (CommonTxInputType & {
    address_n: number[];
    script_type?: InternalInputScriptType;
}) | (CommonTxInputType & {
    address_n?: typeof undefined;
    script_type: 'EXTERNAL';
    script_pubkey: string;
});
type TxInput = TxInputType;
type TxOutputBinType = {
    amount: UintType;
    script_pubkey: string;
    decred_script_version?: number;
};
type ChangeOutputScriptType = Exclude<OutputScriptType, 'PAYTOOPRETURN'>;
type TxOutputType = {
    address: string;
    address_n?: typeof undefined;
    script_type: 'PAYTOADDRESS';
    amount: UintType;
    multisig?: MultisigRedeemScriptType;
    orig_hash?: string;
    orig_index?: number;
    payment_req_index?: number;
} | {
    address?: typeof undefined;
    address_n: number[];
    script_type: ChangeOutputScriptType;
    amount: UintType;
    multisig?: MultisigRedeemScriptType;
    orig_hash?: string;
    orig_index?: number;
    payment_req_index?: number;
} | {
    address?: typeof undefined;
    address_n?: typeof undefined;
    amount: '0';
    op_return_data: string;
    script_type: 'PAYTOOPRETURN';
    orig_hash?: string;
    orig_index?: number;
    payment_req_index?: number;
};
type TxOutput = TxOutputType;
type PrevTx = {
    version: number;
    lock_time: number;
    inputs_count: number;
    outputs_count: number;
    extra_data_len?: number;
    expiry?: number;
    version_group_id?: number;
    timestamp?: number;
    branch_id?: number;
};
type PrevInput = {
    prev_hash: string;
    prev_index: number;
    script_sig: string;
    sequence: number;
    decred_tree?: number;
};
type PrevOutput = {
    amount: UintType;
    script_pubkey: string;
    decred_script_version?: number;
};
type TxAckResponse = {
    inputs: Array<TxInputType | PrevInput>;
} | {
    bin_outputs: TxOutputBinType[];
} | {
    outputs: TxOutputType[];
} | {
    extra_data: string;
} | {
    version?: number;
    lock_time?: number;
    inputs_cnt: number;
    outputs_cnt: number;
    extra_data?: string;
    extra_data_len?: number;
    timestamp?: number;
    version_group_id?: number;
    expiry?: number;
    branch_id?: number;
};
type TxAck = {
    tx: TxAckResponse;
};
type TxAckInputWrapper = {
    input: TxInput;
};
type TxAckInput = {
    tx: TxAckInputWrapper;
};
type TxAckOutputWrapper = {
    output: TxOutput;
};
type TxAckOutput = {
    tx: TxAckOutputWrapper;
};
type TxAckPrevMeta = {
    tx: PrevTx;
};
type TxAckPrevInputWrapper = {
    input: PrevInput;
};
type TxAckPrevInput = {
    tx: TxAckPrevInputWrapper;
};
type TxAckPrevOutputWrapper = {
    output: PrevOutput;
};
type TxAckPrevOutput = {
    tx: TxAckPrevOutputWrapper;
};
type TxAckPrevExtraDataWrapper = {
    extra_data_chunk: string;
};
type TxAckPrevExtraData = {
    tx: TxAckPrevExtraDataWrapper;
};
type GetOwnershipProof = {
    address_n: number[];
    coin_name?: string;
    script_type?: InputScriptType;
    multisig?: MultisigRedeemScriptType;
    user_confirmation?: boolean;
    ownership_ids?: string[];
    commitment_data?: string;
};
type OwnershipProof = {
    ownership_proof: string;
    signature: string;
};
type AuthorizeCoinJoin = {
    coordinator: string;
    max_total_fee: number;
    fee_per_anonymity?: number;
    address_n: number[];
    coin_name?: string;
    script_type?: InputScriptType;
    amount_unit?: AmountUnit;
};
type BIP32Address = {
    address_n: number[];
};
type GetPublicKeyMultiple = {
    addresses: BIP32Address[];
    ecdsa_curve_name?: string;
    show_display?: boolean;
    coin_name?: string;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
type PublicKeyMultiple = {
    xpubs: string[];
};
type SignPsbt = {
    psbt: string;
    coin_name?: string;
};
type SignedPsbt = {
    psbt: string;
};
type FirmwareErase = {
    length?: number;
};
type FirmwareRequest = {
    offset?: number;
    length?: number;
};
type FirmwareUpload = {
    payload: Buffer | ArrayBuffer;
    hash?: string;
};
type SelfTest = {
    payload?: string;
};
type FirmwareErase_ex = {
    length?: number;
};
declare enum RebootType {
    Normal = 0,
    Boardloader = 1,
    BootLoader = 2
}
type Reboot = {
    reboot_type: RebootType;
};
type FirmwareUpdateEmmc = {
    path: string;
    reboot_on_success?: boolean;
};
declare enum CardanoDerivationType {
    LEDGER = 0,
    ICARUS = 1,
    ICARUS_TREZOR = 2
}
declare enum CardanoAddressType {
    BASE = 0,
    BASE_SCRIPT_KEY = 1,
    BASE_KEY_SCRIPT = 2,
    BASE_SCRIPT_SCRIPT = 3,
    POINTER = 4,
    POINTER_SCRIPT = 5,
    ENTERPRISE = 6,
    ENTERPRISE_SCRIPT = 7,
    BYRON = 8,
    REWARD = 14,
    REWARD_SCRIPT = 15
}
declare enum CardanoNativeScriptType {
    PUB_KEY = 0,
    ALL = 1,
    ANY = 2,
    N_OF_K = 3,
    INVALID_BEFORE = 4,
    INVALID_HEREAFTER = 5
}
declare enum CardanoNativeScriptHashDisplayFormat {
    HIDE = 0,
    BECH32 = 1,
    POLICY_ID = 2
}
declare enum CardanoTxOutputSerializationFormat {
    ARRAY_LEGACY = 0,
    MAP_BABBAGE = 1
}
declare enum CardanoCertificateType {
    STAKE_REGISTRATION = 0,
    STAKE_DEREGISTRATION = 1,
    STAKE_DELEGATION = 2,
    STAKE_POOL_REGISTRATION = 3
}
declare enum CardanoPoolRelayType {
    SINGLE_HOST_IP = 0,
    SINGLE_HOST_NAME = 1,
    MULTIPLE_HOST_NAME = 2
}
declare enum CardanoTxAuxiliaryDataSupplementType {
    NONE = 0,
    GOVERNANCE_REGISTRATION_SIGNATURE = 1
}
declare enum CardanoGovernanceRegistrationFormat {
    CIP15 = 0,
    CIP36 = 1
}
declare enum CardanoTxSigningMode {
    ORDINARY_TRANSACTION = 0,
    POOL_REGISTRATION_AS_OWNER = 1,
    MULTISIG_TRANSACTION = 2,
    PLUTUS_TRANSACTION = 3
}
declare enum CardanoTxWitnessType {
    BYRON_WITNESS = 0,
    SHELLEY_WITNESS = 1
}
type CardanoBlockchainPointerType = {
    block_index: number;
    tx_index: number;
    certificate_index: number;
};
type CardanoNativeScript = {
    type: CardanoNativeScriptType;
    scripts?: CardanoNativeScript[];
    key_hash?: string;
    key_path?: number[];
    required_signatures_count?: number;
    invalid_before?: UintType;
    invalid_hereafter?: UintType;
};
type CardanoGetNativeScriptHash = {
    script: CardanoNativeScript;
    display_format: CardanoNativeScriptHashDisplayFormat;
    derivation_type: CardanoDerivationType;
};
type CardanoNativeScriptHash = {
    script_hash: string;
};
type CardanoAddressParametersType = {
    address_type: CardanoAddressType;
    address_n: number[];
    address_n_staking: number[];
    staking_key_hash?: string;
    certificate_pointer?: CardanoBlockchainPointerType;
    script_payment_hash?: string;
    script_staking_hash?: string;
};
type CardanoGetAddress = {
    show_display?: boolean;
    protocol_magic: number;
    network_id: number;
    address_parameters: CardanoAddressParametersType;
    derivation_type: CardanoDerivationType;
};
type CardanoAddress = {
    address: string;
};
type CardanoGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
    derivation_type: CardanoDerivationType;
};
type CardanoPublicKey = {
    xpub: string;
    node: HDNodeType;
};
type CardanoSignTxInit = {
    signing_mode: CardanoTxSigningMode;
    protocol_magic: number;
    network_id: number;
    inputs_count: number;
    outputs_count: number;
    fee: UintType;
    ttl?: UintType;
    certificates_count: number;
    withdrawals_count: number;
    has_auxiliary_data: boolean;
    validity_interval_start?: UintType;
    witness_requests_count: number;
    minting_asset_groups_count: number;
    derivation_type: CardanoDerivationType;
    include_network_id?: boolean;
    script_data_hash?: string;
    collateral_inputs_count: number;
    required_signers_count: number;
    has_collateral_return?: boolean;
    total_collateral?: UintType;
    reference_inputs_count?: number;
};
type CardanoTxInput = {
    prev_hash: string;
    prev_index: number;
};
type CardanoTxOutput = {
    address?: string;
    address_parameters?: CardanoAddressParametersType;
    amount: UintType;
    asset_groups_count: number;
    datum_hash?: string;
    format?: CardanoTxOutputSerializationFormat;
    inline_datum_size?: number;
    reference_script_size?: number;
};
type CardanoAssetGroup = {
    policy_id: string;
    tokens_count: number;
};
type CardanoToken = {
    asset_name_bytes: string;
    amount?: UintType;
    mint_amount?: UintType;
};
type CardanoTxInlineDatumChunk = {
    data: string;
};
type CardanoTxReferenceScriptChunk = {
    data: string;
};
type CardanoPoolOwner = {
    staking_key_path?: number[];
    staking_key_hash?: string;
};
type CardanoPoolRelayParameters = {
    type: CardanoPoolRelayType;
    ipv4_address?: string;
    ipv6_address?: string;
    host_name?: string;
    port?: number;
};
type CardanoPoolMetadataType = {
    url: string;
    hash: string;
};
type CardanoPoolParametersType = {
    pool_id: string;
    vrf_key_hash: string;
    pledge: UintType;
    cost: UintType;
    margin_numerator: UintType;
    margin_denominator: UintType;
    reward_account: string;
    metadata?: CardanoPoolMetadataType;
    owners_count: number;
    relays_count: number;
};
type CardanoTxCertificate = {
    type: CardanoCertificateType;
    path?: number[];
    pool?: string;
    pool_parameters?: CardanoPoolParametersType;
    script_hash?: string;
    key_hash?: string;
};
type CardanoTxWithdrawal = {
    path?: number[];
    amount: UintType;
    script_hash?: string;
    key_hash?: string;
};
type CardanoGovernanceRegistrationDelegation = {
    voting_public_key: string;
    weight: number;
};
type CardanoGovernanceRegistrationParametersType = {
    voting_public_key?: string;
    staking_path: number[];
    reward_address_parameters: CardanoAddressParametersType;
    nonce: number;
    format?: CardanoGovernanceRegistrationFormat;
    delegations: CardanoGovernanceRegistrationDelegation[];
    voting_purpose?: number;
};
type CardanoTxAuxiliaryData = {
    governance_registration_parameters?: CardanoGovernanceRegistrationParametersType;
    hash?: string;
};
type CardanoTxMint = {
    asset_groups_count: number;
};
type CardanoTxCollateralInput = {
    prev_hash: string;
    prev_index: number;
};
type CardanoTxRequiredSigner = {
    key_hash?: string;
    key_path?: number[];
};
type CardanoTxReferenceInput = {
    prev_hash: string;
    prev_index: number;
};
type CardanoTxItemAck = {};
type CardanoTxAuxiliaryDataSupplement = {
    type: CardanoTxAuxiliaryDataSupplementType;
    auxiliary_data_hash?: string;
    governance_signature?: string;
};
type CardanoTxWitnessRequest = {
    path: number[];
};
type CardanoTxWitnessResponse = {
    type: CardanoTxWitnessType;
    pub_key: string;
    signature: string;
    chain_code?: string;
};
type CardanoTxHostAck = {};
type CardanoTxBodyHash = {
    tx_hash: string;
};
type CardanoSignTxFinished = {};
type CardanoSignMessage = {
    address_n: number[];
    message: string;
    derivation_type: CardanoDerivationType;
    network_id: number;
    address_type?: CardanoAddressType;
};
type CardanoMessageSignature = {
    signature: string;
    key: string;
};
type Success = {
    message: string;
};
declare enum FailureType {
    Failure_UnexpectedMessage = 1,
    Failure_ButtonExpected = 2,
    Failure_DataError = 3,
    Failure_ActionCancelled = 4,
    Failure_PinExpected = 5,
    Failure_PinCancelled = 6,
    Failure_PinInvalid = 7,
    Failure_InvalidSignature = 8,
    Failure_ProcessError = 9,
    Failure_NotEnoughFunds = 10,
    Failure_NotInitialized = 11,
    Failure_PinMismatch = 12,
    Failure_WipeCodeMismatch = 13,
    Failure_InvalidSession = 14,
    Failure_FirmwareError = 99
}
type Failure = {
    code?: FailureType;
    message?: string;
};
declare enum Enum_ButtonRequestType {
    ButtonRequest_Other = 1,
    ButtonRequest_FeeOverThreshold = 2,
    ButtonRequest_ConfirmOutput = 3,
    ButtonRequest_ResetDevice = 4,
    ButtonRequest_ConfirmWord = 5,
    ButtonRequest_WipeDevice = 6,
    ButtonRequest_ProtectCall = 7,
    ButtonRequest_SignTx = 8,
    ButtonRequest_FirmwareCheck = 9,
    ButtonRequest_Address = 10,
    ButtonRequest_PublicKey = 11,
    ButtonRequest_MnemonicWordCount = 12,
    ButtonRequest_MnemonicInput = 13,
    _Deprecated_ButtonRequest_PassphraseType = 14,
    ButtonRequest_UnknownDerivationPath = 15,
    ButtonRequest_RecoveryHomepage = 16,
    ButtonRequest_Success = 17,
    ButtonRequest_Warning = 18,
    ButtonRequest_PassphraseEntry = 19,
    ButtonRequest_PinEntry = 20
}
type ButtonRequestType = keyof typeof Enum_ButtonRequestType;
type ButtonRequest = {
    code?: ButtonRequestType;
    pages?: number;
};
type ButtonAck = {};
declare enum Enum_PinMatrixRequestType {
    PinMatrixRequestType_Current = 1,
    PinMatrixRequestType_NewFirst = 2,
    PinMatrixRequestType_NewSecond = 3,
    PinMatrixRequestType_WipeCodeFirst = 4,
    PinMatrixRequestType_WipeCodeSecond = 5,
    PinMatrixRequestType_BackupFirst = 6,
    PinMatrixRequestType_BackupSecond = 7
}
type PinMatrixRequestType = keyof typeof Enum_PinMatrixRequestType;
type PinMatrixRequest = {
    type?: PinMatrixRequestType;
};
type PinMatrixAck = {
    pin: string;
    new_pin?: string;
};
type PassphraseRequest = {
    _on_device?: boolean;
};
type PassphraseAck = {
    passphrase?: string;
    _state?: string;
    on_device?: boolean;
};
type Deprecated_PassphraseStateRequest = {
    state?: string;
};
type Deprecated_PassphraseStateAck = {};
type BixinPinInputOnDevice = {};
type ConfluxGetAddress = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
type ConfluxAddress = {
    address?: string;
};
type ConfluxSignTx = {
    address_n: number[];
    nonce?: string;
    gas_price?: string;
    gas_limit?: string;
    to?: string;
    value?: string;
    epoch_height?: string;
    storage_limit?: string;
    data_initial_chunk?: string;
    data_length?: number;
    chain_id?: number;
};
type ConfluxTxRequest = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
type ConfluxTxAck = {
    data_chunk?: string;
};
type ConfluxSignMessage = {
    address_n: number[];
    message?: string;
};
type ConfluxMessageSignature = {
    signature?: string;
    address?: string;
};
type ConfluxSignMessageCIP23 = {
    address_n: number[];
    domain_hash?: string;
    message_hash?: string;
};
type CosmosGetAddress = {
    address_n: number[];
    hrp?: string;
    show_display?: boolean;
};
type CosmosAddress = {
    address?: string;
};
type CosmosSignTx = {
    address_n: number[];
    raw_tx: string;
};
type CosmosSignedTx = {
    signature: string;
};
type CipherKeyValue = {
    address_n: number[];
    key: string;
    value: string;
    encrypt?: boolean;
    ask_on_encrypt?: boolean;
    ask_on_decrypt?: boolean;
    iv?: string;
};
type CipheredKeyValue = {
    value: string;
};
type IdentityType = {
    proto?: string;
    user?: string;
    host?: string;
    port?: string;
    path?: string;
    index?: number;
};
type SignIdentity = {
    identity: IdentityType;
    challenge_hidden?: string;
    challenge_visual?: string;
    ecdsa_curve_name?: string;
};
type SignedIdentity = {
    address: string;
    public_key: string;
    signature: string;
};
type GetECDHSessionKey = {
    identity: IdentityType;
    peer_public_key: string;
    ecdsa_curve_name?: string;
};
type ECDHSessionKey = {
    session_key: string;
    public_key?: string;
};
type Path = {
    address_n: number[];
};
type BatchGetPublickeys = {
    ecdsa_curve_name?: string;
    paths: Path[];
};
type EcdsaPublicKeys = {
    public_keys: string[];
};
type DnxGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type DnxAddress = {
    address?: string;
};
type DnxSignTx = {
    address_n: number[];
    inputs_count: number;
    to_address: string;
    amount: UintType;
    fee: UintType;
    payment_id?: string;
};
type DnxTxKey = {
    ephemeral_tx_sec_key?: string;
    ephemeral_tx_pub_key?: string;
};
type DnxComputedKeyImage = {
    key_image?: string;
};
type DnxInputRequest = {
    request_index?: number;
    tx_key?: DnxTxKey;
    computed_key_image?: DnxComputedKeyImage;
};
type DnxInputAck = {
    prev_index: number;
    global_index: number;
    tx_pubkey: string;
    prev_out_pubkey: string;
    amount: UintType;
};
type DnxRTSigsRequest = {};
type DnxSignedTx = {
    signatures: string[];
    output_keys: string[];
};
type EmmcFixPermission = {};
type EmmcPath = {
    exist: boolean;
    size: number;
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    readonly: boolean;
    hidden: boolean;
    system: boolean;
    archive: boolean;
    directory: boolean;
};
type EmmcPathInfo = {
    path: string;
};
type EmmcFile = {
    path: string;
    offset: number;
    len: number;
    data?: string;
    data_hash?: number;
    processed_byte?: number;
};
type EmmcFileRead = {
    file: EmmcFile;
    ui_percentage?: number;
};
type EmmcFileWrite = {
    file: EmmcFile;
    overwrite: boolean;
    append: boolean;
    ui_percentage?: number;
};
type EmmcFileDelete = {
    path: string;
};
type EmmcDir = {
    path: string;
    child_dirs?: string;
    child_files?: string;
};
type EmmcDirList = {
    path: string;
};
type EmmcDirMake = {
    path: string;
};
type EmmcDirRemove = {
    path: string;
};
type EosGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type EosPublicKey = {
    wif_public_key: string;
    raw_public_key: string;
};
type EosTxHeader = {
    expiration: number;
    ref_block_num: number;
    ref_block_prefix: number;
    max_net_usage_words: number;
    max_cpu_usage_ms: number;
    delay_sec: number;
};
type EosSignTx = {
    address_n: number[];
    chain_id?: string;
    header?: EosTxHeader;
    num_actions?: number;
};
type EosTxActionRequest = {
    data_size?: number;
};
type EosAsset = {
    amount?: UintType;
    symbol?: string;
};
type EosPermissionLevel = {
    actor?: string;
    permission?: string;
};
type EosAuthorizationKey = {
    type?: number;
    key: string;
    address_n?: number[];
    weight: number;
};
type EosAuthorizationAccount = {
    account?: EosPermissionLevel;
    weight?: number;
};
type EosAuthorizationWait = {
    wait_sec?: number;
    weight?: number;
};
type EosAuthorization = {
    threshold?: number;
    keys: EosAuthorizationKey[];
    accounts: EosAuthorizationAccount[];
    waits: EosAuthorizationWait[];
};
type EosActionCommon = {
    account?: string;
    name?: string;
    authorization: EosPermissionLevel[];
};
type EosActionTransfer = {
    sender?: string;
    receiver?: string;
    quantity?: EosAsset;
    memo?: string;
};
type EosActionDelegate = {
    sender?: string;
    receiver?: string;
    net_quantity?: EosAsset;
    cpu_quantity?: EosAsset;
    transfer?: boolean;
};
type EosActionUndelegate = {
    sender?: string;
    receiver?: string;
    net_quantity?: EosAsset;
    cpu_quantity?: EosAsset;
};
type EosActionRefund = {
    owner?: string;
};
type EosActionBuyRam = {
    payer?: string;
    receiver?: string;
    quantity?: EosAsset;
};
type EosActionBuyRamBytes = {
    payer?: string;
    receiver?: string;
    bytes?: number;
};
type EosActionSellRam = {
    account?: string;
    bytes?: number;
};
type EosActionVoteProducer = {
    voter?: string;
    proxy?: string;
    producers: string[];
};
type EosActionUpdateAuth = {
    account?: string;
    permission?: string;
    parent?: string;
    auth?: EosAuthorization;
};
type EosActionDeleteAuth = {
    account?: string;
    permission?: string;
};
type EosActionLinkAuth = {
    account?: string;
    code?: string;
    type?: string;
    requirement?: string;
};
type EosActionUnlinkAuth = {
    account?: string;
    code?: string;
    type?: string;
};
type EosActionNewAccount = {
    creator?: string;
    name?: string;
    owner?: EosAuthorization;
    active?: EosAuthorization;
};
type EosActionUnknown = {
    data_size: number;
    data_chunk?: string;
};
type EosTxActionAck = {
    common?: EosActionCommon;
    transfer?: EosActionTransfer;
    delegate?: EosActionDelegate;
    undelegate?: EosActionUndelegate;
    refund?: EosActionRefund;
    buy_ram?: EosActionBuyRam;
    buy_ram_bytes?: EosActionBuyRamBytes;
    sell_ram?: EosActionSellRam;
    vote_producer?: EosActionVoteProducer;
    update_auth?: EosActionUpdateAuth;
    delete_auth?: EosActionDeleteAuth;
    link_auth?: EosActionLinkAuth;
    unlink_auth?: EosActionUnlinkAuth;
    new_account?: EosActionNewAccount;
    unknown?: EosActionUnknown;
};
type EosSignedTx = {
    signature: string;
};
declare enum EthereumDefinitionType {
    NETWORK = 0,
    TOKEN = 1
}
type EthereumNetworkInfo = {
    chain_id: number;
    symbol: string;
    slip44: number;
    name: string;
    icon?: string;
    primary_color?: number;
};
type EthereumTokenInfo = {
    address: string;
    chain_id: number;
    symbol: string;
    decimals: number;
    name: string;
};
type EthereumDefinitions = {
    encoded_network?: ArrayBuffer;
    encoded_token?: ArrayBuffer;
};
type EthereumSignTypedDataChargerWallet = {
    address_n: number[];
    primary_type: string;
    metamask_v4_compat?: boolean;
    chain_id?: number;
};
type EthereumTypedDataStructRequestChargerWallet = {
    name: string;
};
type EthereumStructMemberChargerWallet = {
    type: EthereumFieldTypeChargerWallet;
    name: string;
};
type EthereumFieldTypeChargerWallet = {
    data_type: EthereumDataTypeChargerWallet;
    size?: number;
    entry_type?: EthereumFieldTypeChargerWallet;
    struct_name?: string;
};
declare enum EthereumDataTypeChargerWallet {
    UINT = 1,
    INT = 2,
    BYTES = 3,
    STRING = 4,
    BOOL = 5,
    ADDRESS = 6,
    ARRAY = 7,
    STRUCT = 8
}
type EthereumTypedDataStructAckChargerWallet = {
    members: EthereumStructMemberChargerWallet[];
};
type EthereumTypedDataValueRequestChargerWallet = {
    member_path: number[];
};
type EthereumTypedDataValueAckChargerWallet = {
    value: string;
};
type EthereumSignTypedData = {
    address_n: number[];
    primary_type: string;
    metamask_v4_compat?: boolean;
    definitions?: EthereumDefinitions;
};
type EthereumTypedDataStructRequest = {
    name: string;
};
declare enum EthereumDataType {
    UINT = 1,
    INT = 2,
    BYTES = 3,
    STRING = 4,
    BOOL = 5,
    ADDRESS = 6,
    ARRAY = 7,
    STRUCT = 8
}
type EthereumFieldType = {
    data_type: EthereumDataType;
    size?: number;
    entry_type?: EthereumFieldType;
    struct_name?: string;
};
type EthereumStructMember = {
    type: EthereumFieldType;
    name: string;
};
type EthereumTypedDataStructAck = {
    members: EthereumStructMember[];
};
type EthereumTypedDataValueRequest = {
    member_path: number[];
};
type EthereumTypedDataValueAck = {
    value: string;
};
type EthereumGetPublicKeyChargerWallet = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
type EthereumPublicKeyChargerWallet = {
    node: HDNodeType;
    xpub: string;
};
type EthereumGetAddressChargerWallet = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
type EthereumAddressChargerWallet = {
    _old_address?: string;
    address?: string;
};
type EthereumSignTxChargerWallet = {
    address_n: number[];
    nonce?: string;
    gas_price: string;
    gas_limit: string;
    to?: string;
    value?: string;
    data_initial_chunk?: string;
    data_length?: number;
    chain_id: number;
    tx_type?: number;
};
type EthereumAccessListChargerWallet = {
    address: string;
    storage_keys: string[];
};
type EthereumSignTxEIP1559ChargerWallet = {
    address_n: number[];
    nonce: string;
    max_gas_fee: string;
    max_priority_fee: string;
    gas_limit: string;
    to?: string;
    value: string;
    data_initial_chunk?: string;
    data_length: number;
    chain_id: number;
    access_list: EthereumAccessListChargerWallet[];
};
type EthereumTxRequestChargerWallet = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
type EthereumTxAckChargerWallet = {
    data_chunk: string;
};
type EthereumSignMessageChargerWallet = {
    address_n: number[];
    message: string;
    chain_id?: number;
};
type EthereumMessageSignatureChargerWallet = {
    signature: string;
    address: string;
};
type EthereumVerifyMessageChargerWallet = {
    signature: string;
    message: string;
    address: string;
    chain_id?: number;
};
type EthereumSignTypedHashChargerWallet = {
    address_n: number[];
    domain_separator_hash: string;
    message_hash?: string;
    chain_id?: number;
};
type EthereumTypedDataSignatureChargerWallet = {
    signature: string;
    address: string;
};
type EthereumSignMessageEIP712 = {
    address_n: number[];
    domain_hash?: string;
    message_hash?: string;
};
type EthereumGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type EthereumPublicKey = {
    node: HDNodeType;
    xpub: string;
};
type EthereumGetAddress = {
    address_n: number[];
    show_display?: boolean;
    encoded_network?: ArrayBuffer;
};
type EthereumAddress = {
    _old_address?: string;
    address: string;
};
type EthereumSignTx = {
    address_n: number[];
    nonce?: string;
    gas_price: string;
    gas_limit: string;
    to?: string;
    value?: string;
    data_initial_chunk?: string;
    data_length?: number;
    chain_id: number;
    tx_type?: number;
    definitions?: EthereumDefinitions;
};
type EthereumAccessList = {
    address: string;
    storage_keys: string[];
};
type EthereumSignTxEIP1559 = {
    address_n: number[];
    nonce: string;
    max_gas_fee: string;
    max_priority_fee: string;
    gas_limit: string;
    to?: string;
    value: string;
    data_initial_chunk?: string;
    data_length: number;
    chain_id: number;
    access_list: EthereumAccessList[];
    definitions?: EthereumDefinitions;
};
type EthereumTxRequest = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
type EthereumTxAck = {
    data_chunk: string;
};
type EthereumSignMessage = {
    address_n: number[];
    message: string;
    encoded_network?: ArrayBuffer;
};
type EthereumMessageSignature = {
    signature: string;
    address: string;
};
type EthereumVerifyMessage = {
    signature: string;
    message: string;
    address: string;
};
type EthereumSignTypedHash = {
    address_n: number[];
    domain_separator_hash: string;
    message_hash?: string;
    encoded_network?: ArrayBuffer;
};
type EthereumTypedDataSignature = {
    signature: string;
    address: string;
};
type FilecoinGetAddress = {
    address_n: number[];
    show_display?: boolean;
    testnet?: boolean;
};
type FilecoinAddress = {
    address?: string;
};
type FilecoinSignTx = {
    address_n: number[];
    raw_tx: string;
    testnet?: boolean;
};
type FilecoinSignedTx = {
    signature: string;
};
type KaspaGetAddress = {
    address_n: number[];
    show_display?: boolean;
    prefix?: string;
    scheme?: string;
};
type KaspaAddress = {
    address: string;
};
type KaspaSignTx = {
    address_n: number[];
    raw_message: string;
    scheme?: string;
    prefix?: string;
    input_count?: number;
};
type KaspaTxInputRequest = {
    request_index: number;
    signature?: string;
};
type KaspaTxInputAck = {
    address_n: number[];
    raw_message: string;
};
type KaspaSignedTx = {
    signature: string;
};
type LnurlAuth = {
    domain: string;
    data: string;
};
type LnurlAuthResp = {
    publickey?: string;
    path?: string;
    signature?: string;
};
declare enum Enum_BackupType {
    Bip39 = 0,
    Slip39_Basic = 1,
    Slip39_Advanced = 2
}
type BackupType = keyof typeof Enum_BackupType;
declare enum Enum_SafetyCheckLevel {
    Strict = 0,
    PromptAlways = 1,
    PromptTemporarily = 2
}
type SafetyCheckLevel = keyof typeof Enum_SafetyCheckLevel;
type Initialize = {
    session_id?: string;
    _skip_passphrase?: boolean;
    derive_cardano?: boolean;
};
type GetFeatures = {};
type ChargerwalletGetFeatures = {};
declare enum ChargerWalletDeviceType {
    CLASSIC = 0,
    CLASSIC1S = 1,
    MINI = 2,
    TOUCH = 3,
    PRO = 5
}
declare enum ChargerWalletSeType {
    THD89 = 0,
    SE608A = 1
}
declare enum ChargerWalletSEState {
    BOOT = 0,
    APP = 1
}
declare enum Enum_Capability {
    Capability_Bitcoin = 1,
    Capability_Bitcoin_like = 2,
    Capability_Binance = 3,
    Capability_Cardano = 4,
    Capability_Crypto = 5,
    Capability_EOS = 6,
    Capability_Ethereum = 7,
    Capability_Lisk = 8,
    Capability_Monero = 9,
    Capability_NEM = 10,
    Capability_Ripple = 11,
    Capability_Stellar = 12,
    Capability_Tezos = 13,
    Capability_U2F = 14,
    Capability_Shamir = 15,
    Capability_ShamirGroups = 16,
    Capability_PassphraseEntry = 17
}
type Capability = keyof typeof Enum_Capability;
type Features = {
    vendor: string;
    major_version: number;
    minor_version: number;
    patch_version: number;
    bootloader_mode: boolean | null;
    device_id: string | null;
    pin_protection: boolean | null;
    passphrase_protection: boolean | null;
    language: string | null;
    label: string | null;
    initialized: boolean | null;
    revision: string | null;
    bootloader_hash: string | null;
    imported: boolean | null;
    unlocked: boolean | null;
    _passphrase_cached?: boolean;
    firmware_present: boolean | null;
    needs_backup: boolean | null;
    flags: number | null;
    model: string;
    fw_major: number | null;
    fw_minor: number | null;
    fw_patch: number | null;
    fw_vendor: string | null;
    unfinished_backup: boolean | null;
    no_backup: boolean | null;
    recovery_mode: boolean | null;
    capabilities: Capability[];
    backup_type: BackupType | null;
    sd_card_present: boolean | null;
    sd_protection: boolean | null;
    wipe_code_protection: boolean | null;
    session_id: string | null;
    passphrase_always_on_device: boolean | null;
    safety_checks: SafetyCheckLevel | null;
    auto_lock_delay_ms: number | null;
    display_rotation: number | null;
    experimental_features: boolean | null;
    busy?: boolean;
    offset?: number;
    ble_name?: string;
    ble_ver?: string;
    ble_enable?: boolean;
    se_enable?: boolean;
    se_ver?: string;
    backup_only?: boolean;
    chargerwallet_version?: string;
    chargerwallet_serial?: string;
    bootloader_version?: string;
    serial_no?: string;
    spi_flash?: string;
    initstates?: number;
    NFT_voucher?: string;
    cpu_info?: string;
    pre_firmware?: string;
    coin_switch?: number;
    build_id?: string;
    boardloader_version?: string;
    battery_level?: number;
    chargerwallet_device_type?: string | null;
    chargerwallet_se_type?: string | null;
    chargerwallet_board_version?: string;
    chargerwallet_board_hash?: string;
    chargerwallet_boot_version?: string;
    chargerwallet_boot_hash?: string;
    chargerwallet_se01_version?: string;
    chargerwallet_se01_hash?: string;
    chargerwallet_se01_build_id?: string;
    chargerwallet_firmware_version?: string;
    chargerwallet_firmware_hash?: string;
    chargerwallet_firmware_build_id?: string;
    chargerwallet_serial_no?: string;
    chargerwallet_boot_build_id?: string;
    chargerwallet_ble_name?: string;
    chargerwallet_ble_version?: string;
    chargerwallet_ble_build_id?: string;
    chargerwallet_ble_hash?: string;
    chargerwallet_se02_version?: string;
    chargerwallet_se03_version?: string;
    chargerwallet_se04_version?: string;
    chargerwallet_se01_state?: string | null;
    chargerwallet_se02_state?: string | null;
    chargerwallet_se03_state?: string | null;
    chargerwallet_se04_state?: string | null;
};
type ChargerwalletFeatures = {
    chargerwallet_device_type?: ChargerWalletDeviceType;
    chargerwallet_board_version?: string;
    chargerwallet_boot_version?: string;
    chargerwallet_firmware_version?: string;
    chargerwallet_board_hash?: string;
    chargerwallet_boot_hash?: string;
    chargerwallet_firmware_hash?: string;
    chargerwallet_board_build_id?: string;
    chargerwallet_boot_build_id?: string;
    chargerwallet_firmware_build_id?: string;
    chargerwallet_serial_no?: string;
    chargerwallet_ble_name?: string;
    chargerwallet_ble_version?: string;
    chargerwallet_ble_build_id?: string;
    chargerwallet_ble_hash?: string;
    chargerwallet_se_type?: ChargerWalletSeType;
    chargerwallet_se01_state?: ChargerWalletSEState;
    chargerwallet_se02_state?: ChargerWalletSEState;
    chargerwallet_se03_state?: ChargerWalletSEState;
    chargerwallet_se04_state?: ChargerWalletSEState;
    chargerwallet_se01_version?: string;
    chargerwallet_se02_version?: string;
    chargerwallet_se03_version?: string;
    chargerwallet_se04_version?: string;
    chargerwallet_se01_hash?: string;
    chargerwallet_se02_hash?: string;
    chargerwallet_se03_hash?: string;
    chargerwallet_se04_hash?: string;
    chargerwallet_se01_build_id?: string;
    chargerwallet_se02_build_id?: string;
    chargerwallet_se03_build_id?: string;
    chargerwallet_se04_build_id?: string;
    chargerwallet_se01_boot_version?: string;
    chargerwallet_se02_boot_version?: string;
    chargerwallet_se03_boot_version?: string;
    chargerwallet_se04_boot_version?: string;
    chargerwallet_se01_boot_hash?: string;
    chargerwallet_se02_boot_hash?: string;
    chargerwallet_se03_boot_hash?: string;
    chargerwallet_se04_boot_hash?: string;
    chargerwallet_se01_boot_build_id?: string;
    chargerwallet_se02_boot_build_id?: string;
    chargerwallet_se03_boot_build_id?: string;
    chargerwallet_se04_boot_build_id?: string;
};
type LockDevice = {};
type EndSession = {};
declare enum ExportType {
    SeedEncExportType_NO = 0,
    SeedEncExportType_YES = 1,
    MnemonicPlainExportType_YES = 2
}
type ApplySettings = {
    language?: string;
    label?: string;
    use_passphrase?: boolean;
    homescreen?: string;
    _passphrase_source?: number;
    auto_lock_delay_ms?: number;
    display_rotation?: number;
    passphrase_always_on_device?: boolean;
    safety_checks?: SafetyCheckLevel;
    experimental_features?: boolean;
    use_ble?: boolean;
    use_se?: boolean;
    is_bixinapp?: boolean;
    fastpay_pin?: boolean;
    fastpay_confirm?: boolean;
    fastpay_money_limit?: number;
    fastpay_times?: number;
};
type ApplyFlags = {
    flags: number;
};
type ChangePin = {
    remove?: boolean;
};
type ChangeWipeCode = {
    remove?: boolean;
};
declare enum SdProtectOperationType {
    DISABLE = 0,
    ENABLE = 1,
    REFRESH = 2
}
type SdProtect = {
    operation: SdProtectOperationType;
};
type Ping = {
    message?: string;
    button_protection?: boolean;
};
type Cancel = {};
type GetEntropy = {
    size: number;
};
type Entropy = {
    entropy: string;
};
type WipeDevice = {};
type ResetDevice = {
    display_random?: boolean;
    strength?: number;
    passphrase_protection?: boolean;
    pin_protection?: boolean;
    language?: string;
    label?: string;
    u2f_counter?: number;
    skip_backup?: boolean;
    no_backup?: boolean;
    backup_type?: string | number;
};
type BackupDevice = {};
type EntropyRequest = {};
type EntropyAck = {
    entropy: string;
};
declare enum RecoveryDeviceType {
    RecoveryDeviceType_ScrambledWords = 0,
    RecoveryDeviceType_Matrix = 1
}
type RecoveryDevice = {
    word_count?: number;
    passphrase_protection?: boolean;
    pin_protection?: boolean;
    language?: string;
    label?: string;
    enforce_wordlist?: boolean;
    type?: RecoveryDeviceType;
    u2f_counter?: number;
    dry_run?: boolean;
};
declare enum Enum_WordRequestType {
    WordRequestType_Plain = 0,
    WordRequestType_Matrix9 = 1,
    WordRequestType_Matrix6 = 2
}
type WordRequestType = keyof typeof Enum_WordRequestType;
type WordRequest = {
    type: WordRequestType;
};
type WordAck = {
    word: string;
};
type SetU2FCounter = {
    u2f_counter: number;
};
type GetNextU2FCounter = {};
type NextU2FCounter = {
    u2f_counter: number;
};
type DoPreauthorized = {};
type PreauthorizedRequest = {};
type CancelAuthorization = {};
declare enum SeedRequestType {
    SeedRequestType_Gen = 0,
    SeedRequestType_EncExport = 1,
    SeedRequestType_EncImport = 2
}
type BixinSeedOperate = {
    type: SeedRequestType;
    seed_importData?: string;
};
type BixinMessageSE = {
    inputmessage: string;
};
type BixinOutMessageSE = {
    outmessage?: string;
};
type DeviceBackToBoot = {};
type BixinBackupRequest = {};
type BixinBackupAck = {
    data: string;
};
type BixinRestoreRequest = {
    data: string;
    language?: string;
    label?: string;
    passphrase_protection?: boolean;
};
type BixinRestoreAck = {
    data: string;
};
type BixinVerifyDeviceRequest = {
    data: string;
};
type BixinVerifyDeviceAck = {
    cert: string;
    signature: string;
};
declare enum WL_OperationType {
    WL_OperationType_Add = 0,
    WL_OperationType_Delete = 1,
    WL_OperationType_Inquire = 2
}
type BixinWhiteListRequest = {
    type: WL_OperationType;
    addr_in?: string;
};
type BixinWhiteListAck = {
    address: string[];
};
type BixinLoadDevice = {
    mnemonics: string;
    language?: string;
    label?: string;
    skip_checksum?: boolean;
};
type BixinBackupDevice = {};
type BixinBackupDeviceAck = {
    mnemonics: string;
};
type DeviceInfoSettings = {
    serial_no?: string;
    cpu_info?: string;
    pre_firmware?: string;
};
type GetDeviceInfo = {};
type DeviceInfo = {
    serial_no?: string;
    spiFlash_info?: string;
    SE_info?: string;
    NFT_voucher?: string;
    cpu_info?: string;
    pre_firmware?: string;
};
type ReadSEPublicKey = {};
type SEPublicKey = {
    public_key: string;
};
type WriteSEPublicCert = {
    public_cert: string;
};
type ReadSEPublicCert = {};
type SEPublicCert = {
    public_cert: string;
};
type SpiFlashWrite = {
    address: number;
    data: string;
};
type SpiFlashRead = {
    address: number;
    len: number;
};
type SpiFlashData = {
    data: string;
};
type SESignMessage = {
    message: string;
};
type SEMessageSignature = {
    signature: string;
};
declare enum ResourceType {
    WallPaper = 0,
    Nft = 1
}
type ResourceUpload = {
    extension: string;
    data_length: number;
    res_type: ResourceType;
    nft_meta_data?: string;
    zoom_data_length: number;
    file_name_no_ext?: string;
};
type ZoomRequest = {
    offset?: number;
    data_length: number;
};
type ResourceRequest = {
    offset?: number;
    data_length: number;
};
type ResourceAck = {
    data_chunk: string;
    hash?: string;
};
type ResourceUpdate = {
    file_name: string;
    data_length: number;
    initial_data_chunk: string;
    hash?: string;
};
type NFTWriteInfo = {
    index: number;
    width: number;
    height: number;
    name_zh?: string;
    name_en?: string;
};
type NFTWriteData = {
    index: number;
    data: string;
    offset: number;
};
type RebootToBootloader = {};
type RebootToBoardloader = {};
type ListResDir = {
    path: string;
};
type FileInfo = {
    name: string;
    size: number;
};
type FileInfoList = {
    files: FileInfo[];
};
type DeviceEraseSector = {
    sector: number;
};
type MoneroRctKeyPublic = {
    dest?: string;
    commitment?: string;
};
type MoneroOutputEntry = {
    idx?: number;
    key?: MoneroRctKeyPublic;
};
type MoneroMultisigKLRki = {
    K?: string;
    L?: string;
    R?: string;
    ki?: string;
};
type MoneroTransactionSourceEntry = {
    outputs: MoneroOutputEntry[];
    real_output?: number;
    real_out_tx_key?: string;
    real_out_additional_tx_keys: string[];
    real_output_in_tx_index?: number;
    amount?: UintType;
    rct?: boolean;
    mask?: string;
    multisig_kLRki?: MoneroMultisigKLRki;
    subaddr_minor?: number;
};
type MoneroAccountPublicAddress = {
    spend_public_key?: string;
    view_public_key?: string;
};
type MoneroTransactionDestinationEntry = {
    amount?: UintType;
    addr?: MoneroAccountPublicAddress;
    is_subaddress?: boolean;
    original?: string;
    is_integrated?: boolean;
};
type MoneroTransactionRsigData = {
    rsig_type?: number;
    offload_type?: number;
    grouping: number[];
    mask?: string;
    rsig?: string;
    rsig_parts: string[];
    bp_version?: number;
};
type MoneroGetAddress = {
    address_n: number[];
    show_display?: boolean;
    network_type?: number;
    account?: number;
    minor?: number;
    payment_id?: string;
};
type MoneroAddress = {
    address?: string;
};
type MoneroGetWatchKey = {
    address_n: number[];
    network_type?: number;
};
type MoneroWatchKey = {
    watch_key?: string;
    address?: string;
};
type MoneroTransactionData = {
    version?: number;
    payment_id?: string;
    unlock_time?: number;
    outputs: MoneroTransactionDestinationEntry[];
    change_dts?: MoneroTransactionDestinationEntry;
    num_inputs?: number;
    mixin?: number;
    fee?: UintType;
    account?: number;
    minor_indices: number[];
    rsig_data?: MoneroTransactionRsigData;
    integrated_indices: number[];
    client_version?: number;
    hard_fork?: number;
    monero_version?: string;
};
type MoneroTransactionInitRequest = {
    version?: number;
    address_n: number[];
    network_type?: number;
    tsx_data?: MoneroTransactionData;
};
type MoneroTransactionInitAck = {
    hmacs: string[];
    rsig_data?: MoneroTransactionRsigData;
};
type MoneroTransactionSetInputRequest = {
    src_entr?: MoneroTransactionSourceEntry;
};
type MoneroTransactionSetInputAck = {
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    pseudo_out_alpha?: string;
    spend_key?: string;
};
type MoneroTransactionInputsPermutationRequest = {
    perm: number[];
};
type MoneroTransactionInputsPermutationAck = {};
type MoneroTransactionInputViniRequest = {
    src_entr?: MoneroTransactionSourceEntry;
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    orig_idx?: number;
};
type MoneroTransactionInputViniAck = {};
type MoneroTransactionAllInputsSetRequest = {};
type MoneroTransactionAllInputsSetAck = {
    rsig_data?: MoneroTransactionRsigData;
};
type MoneroTransactionSetOutputRequest = {
    dst_entr?: MoneroTransactionDestinationEntry;
    dst_entr_hmac?: string;
    rsig_data?: MoneroTransactionRsigData;
    is_offloaded_bp?: boolean;
};
type MoneroTransactionSetOutputAck = {
    tx_out?: string;
    vouti_hmac?: string;
    rsig_data?: MoneroTransactionRsigData;
    out_pk?: string;
    ecdh_info?: string;
};
type MoneroTransactionAllOutSetRequest = {
    rsig_data?: MoneroTransactionRsigData;
};
type MoneroRingCtSig = {
    txn_fee?: number;
    message?: string;
    rv_type?: number;
};
type MoneroTransactionAllOutSetAck = {
    extra?: string;
    tx_prefix_hash?: string;
    rv?: MoneroRingCtSig;
    full_message_hash?: string;
};
type MoneroTransactionSignInputRequest = {
    src_entr?: MoneroTransactionSourceEntry;
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    pseudo_out_alpha?: string;
    spend_key?: string;
    orig_idx?: number;
};
type MoneroTransactionSignInputAck = {
    signature?: string;
    pseudo_out?: string;
};
type MoneroTransactionFinalRequest = {};
type MoneroTransactionFinalAck = {
    cout_key?: string;
    salt?: string;
    rand_mult?: string;
    tx_enc_keys?: string;
    opening_key?: string;
};
type MoneroSubAddressIndicesList = {
    account?: number;
    minor_indices: number[];
};
type MoneroKeyImageExportInitRequest = {
    num?: number;
    hash?: string;
    address_n: number[];
    network_type?: number;
    subs: MoneroSubAddressIndicesList[];
};
type MoneroKeyImageExportInitAck = {};
type MoneroTransferDetails = {
    out_key?: string;
    tx_pub_key?: string;
    additional_tx_pub_keys: string[];
    internal_output_index?: number;
    sub_addr_major?: number;
    sub_addr_minor?: number;
};
type MoneroKeyImageSyncStepRequest = {
    tdis: MoneroTransferDetails[];
};
type MoneroExportedKeyImage = {
    iv?: string;
    blob?: string;
};
type MoneroKeyImageSyncStepAck = {
    kis: MoneroExportedKeyImage[];
};
type MoneroKeyImageSyncFinalRequest = {};
type MoneroKeyImageSyncFinalAck = {
    enc_key?: string;
};
type MoneroGetTxKeyRequest = {
    address_n: number[];
    network_type?: number;
    salt1?: string;
    salt2?: string;
    tx_enc_keys?: string;
    tx_prefix_hash?: string;
    reason?: number;
    view_public_key?: string;
};
type MoneroGetTxKeyAck = {
    salt?: string;
    tx_keys?: string;
    tx_derivations?: string;
};
type MoneroLiveRefreshStartRequest = {
    address_n: number[];
    network_type?: number;
};
type MoneroLiveRefreshStartAck = {};
type MoneroLiveRefreshStepRequest = {
    out_key?: string;
    recv_deriv?: string;
    real_out_idx?: number;
    sub_addr_major?: number;
    sub_addr_minor?: number;
};
type MoneroLiveRefreshStepAck = {
    salt?: string;
    key_image?: string;
};
type MoneroLiveRefreshFinalRequest = {};
type MoneroLiveRefreshFinalAck = {};
type NearGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type NearAddress = {
    address?: string;
};
type NearSignTx = {
    address_n: number[];
    raw_tx: string;
};
type NearSignedTx = {
    signature: string;
};
type NEMGetAddress = {
    address_n: number[];
    network?: number;
    show_display?: boolean;
};
type NEMAddress = {
    address: string;
};
type NEMTransactionCommon = {
    address_n?: number[];
    network?: number;
    timestamp?: number;
    fee?: UintType;
    deadline?: number;
    signer?: string;
};
type NEMMosaic = {
    namespace?: string;
    mosaic?: string;
    quantity?: number;
};
type NEMTransfer = {
    recipient?: string;
    amount?: UintType;
    payload?: string;
    public_key?: string;
    mosaics?: NEMMosaic[];
};
type NEMProvisionNamespace = {
    namespace?: string;
    parent?: string;
    sink?: string;
    fee?: UintType;
};
declare enum NEMMosaicLevy {
    MosaicLevy_Absolute = 1,
    MosaicLevy_Percentile = 2
}
type NEMMosaicDefinition = {
    name?: string;
    ticker?: string;
    namespace?: string;
    mosaic?: string;
    divisibility?: number;
    levy?: NEMMosaicLevy;
    fee?: UintType;
    levy_address?: string;
    levy_namespace?: string;
    levy_mosaic?: string;
    supply?: number;
    mutable_supply?: boolean;
    transferable?: boolean;
    description?: string;
    networks?: number[];
};
type NEMMosaicCreation = {
    definition?: NEMMosaicDefinition;
    sink?: string;
    fee?: UintType;
};
declare enum NEMSupplyChangeType {
    SupplyChange_Increase = 1,
    SupplyChange_Decrease = 2
}
type NEMMosaicSupplyChange = {
    namespace?: string;
    mosaic?: string;
    type?: NEMSupplyChangeType;
    delta?: number;
};
declare enum NEMModificationType {
    CosignatoryModification_Add = 1,
    CosignatoryModification_Delete = 2
}
type NEMCosignatoryModification = {
    type?: NEMModificationType;
    public_key?: string;
};
type NEMAggregateModification = {
    modifications?: NEMCosignatoryModification[];
    relative_change?: number;
};
declare enum NEMImportanceTransferMode {
    ImportanceTransfer_Activate = 1,
    ImportanceTransfer_Deactivate = 2
}
type NEMImportanceTransfer = {
    mode?: NEMImportanceTransferMode;
    public_key?: string;
};
type NEMSignTx = {
    transaction?: NEMTransactionCommon;
    multisig?: NEMTransactionCommon;
    transfer?: NEMTransfer;
    cosigning?: boolean;
    provision_namespace?: NEMProvisionNamespace;
    mosaic_creation?: NEMMosaicCreation;
    supply_change?: NEMMosaicSupplyChange;
    aggregate_modification?: NEMAggregateModification;
    importance_transfer?: NEMImportanceTransfer;
};
type NEMSignedTx = {
    data: string;
    signature: string;
};
type NEMDecryptMessage = {
    address_n: number[];
    network?: number;
    public_key?: string;
    payload?: string;
};
type NEMDecryptedMessage = {
    payload: string;
};
type NervosGetAddress = {
    address_n: number[];
    network: string;
    show_display?: boolean;
};
type NervosAddress = {
    address: string;
};
type NervosSignTx = {
    address_n: number[];
    data_initial_chunk: string;
    witness_buffer: string;
    network: string;
    data_length?: number;
};
type NervosSignedTx = {
    signature: string;
    address: string;
};
type NervosTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
type NervosTxAck = {
    data_chunk: string;
};
type NexaGetAddress = {
    address_n: number[];
    show_display?: boolean;
    prefix?: string;
};
type NexaAddress = {
    address: string;
    public_key: string;
};
type NexaSignTx = {
    address_n: number[];
    raw_message: string;
    prefix?: string;
    input_count?: number;
};
type NexaTxInputRequest = {
    request_index: number;
    signature?: string;
};
type NexaTxInputAck = {
    address_n: number[];
    raw_message: string;
};
type NexaSignedTx = {
    signature: string;
};
type NostrGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type NostrPublicKey = {
    publickey?: string;
    npub?: string;
};
type NostrSignEvent = {
    address_n: number[];
    event: string;
};
type NostrSignedEvent = {
    event: string;
};
type NostrSignSchnorr = {
    address_n: number[];
    hash: string;
};
type NostrSignedSchnorr = {
    signature: string;
};
type NostrEncryptMessage = {
    address_n: number[];
    pubkey: string;
    msg: string;
    show_display?: boolean;
};
type NostrEncryptedMessage = {
    msg: string;
};
type NostrDecryptMessage = {
    address_n: number[];
    pubkey: string;
    msg: string;
    show_display?: boolean;
};
type NostrDecryptedMessage = {
    msg: string;
};
type PolkadotGetAddress = {
    address_n: number[];
    prefix: number;
    network: string;
    show_display?: boolean;
};
type PolkadotAddress = {
    address?: string;
    public_key?: string;
};
type PolkadotSignTx = {
    address_n: number[];
    raw_tx: string;
    network: string;
};
type PolkadotSignedTx = {
    signature: string;
};
type RippleGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type RippleAddress = {
    address: string;
};
type RipplePayment = {
    amount: UintType;
    destination: string;
    destination_tag?: number;
};
type RippleSignTx = {
    address_n: number[];
    fee?: UintType;
    flags?: number;
    sequence?: number;
    last_ledger_sequence?: number;
    payment?: RipplePayment;
};
type RippleSignedTx = {
    signature: string;
    serialized_tx: string;
};
type ScdoGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type ScdoAddress = {
    address: string;
};
type ScdoSignTx = {
    address_n: number[];
    nonce: string;
    gas_price: string;
    gas_limit: string;
    to: string;
    value: string;
    timestamp?: string;
    data_initial_chunk?: string;
    data_length?: number;
    tx_type?: number;
};
type ScdoSignedTx = {
    data_length?: number;
    signature?: string;
};
type ScdoTxAck = {
    data_chunk?: string;
};
type ScdoSignMessage = {
    address_n: number[];
    message?: string;
};
type ScdoSignedMessage = {
    signature?: string;
    address?: string;
};
type SolanaGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type SolanaAddress = {
    address?: string;
};
type SolanaSignTx = {
    address_n: number[];
    raw_tx: string;
};
type SolanaSignedTx = {
    signature?: string;
};
type StarcoinGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type StarcoinAddress = {
    address?: string;
};
type StarcoinGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type StarcoinPublicKey = {
    public_key: string;
};
type StarcoinSignTx = {
    address_n: number[];
    raw_tx?: string;
};
type StarcoinSignedTx = {
    public_key: string;
    signature: string;
};
type StarcoinSignMessage = {
    address_n: number[];
    message?: string;
};
type StarcoinMessageSignature = {
    public_key: string;
    signature: string;
};
type StarcoinVerifyMessage = {
    public_key?: string;
    signature?: string;
    message?: string;
};
declare enum StellarAssetType {
    NATIVE = 0,
    ALPHANUM4 = 1,
    ALPHANUM12 = 2
}
type StellarAsset = {
    type: StellarAssetType;
    code?: string;
    issuer?: string;
};
type StellarGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type StellarAddress = {
    address: string;
};
declare enum StellarMemoType {
    NONE = 0,
    TEXT = 1,
    ID = 2,
    HASH = 3,
    RETURN = 4
}
type StellarSignTx = {
    address_n: number[];
    network_passphrase: string;
    source_account: string;
    fee: UintType;
    sequence_number: UintType;
    timebounds_start: number;
    timebounds_end: number;
    memo_type: StellarMemoType;
    memo_text?: string;
    memo_id?: string;
    memo_hash?: Buffer | string;
    num_operations: number;
};
type StellarTxOpRequest = {};
type StellarPaymentOp = {
    source_account?: string;
    destination_account: string;
    asset: StellarAsset;
    amount: UintType;
};
type StellarCreateAccountOp = {
    source_account?: string;
    new_account: string;
    starting_balance: UintType;
};
type StellarPathPaymentStrictReceiveOp = {
    source_account?: string;
    send_asset: StellarAsset;
    send_max: UintType;
    destination_account: string;
    destination_asset: StellarAsset;
    destination_amount: UintType;
    paths?: StellarAsset[];
};
type StellarPathPaymentStrictSendOp = {
    source_account?: string;
    send_asset: StellarAsset;
    send_amount: UintType;
    destination_account: string;
    destination_asset: StellarAsset;
    destination_min: UintType;
    paths?: StellarAsset[];
};
type StellarManageSellOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
    offer_id: UintType;
};
type StellarManageBuyOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
    offer_id: UintType;
};
type StellarCreatePassiveSellOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
};
declare enum StellarSignerType {
    ACCOUNT = 0,
    PRE_AUTH = 1,
    HASH = 2
}
type StellarSetOptionsOp = {
    source_account?: string;
    inflation_destination_account?: string;
    clear_flags?: number;
    set_flags?: number;
    master_weight?: UintType;
    low_threshold?: UintType;
    medium_threshold?: UintType;
    high_threshold?: UintType;
    home_domain?: string;
    signer_type?: StellarSignerType;
    signer_key?: Buffer | string;
    signer_weight?: number;
};
type StellarChangeTrustOp = {
    source_account?: string;
    asset: StellarAsset;
    limit: UintType;
};
type StellarAllowTrustOp = {
    source_account?: string;
    trusted_account: string;
    asset_type: StellarAssetType;
    asset_code?: string;
    is_authorized: boolean;
};
type StellarAccountMergeOp = {
    source_account?: string;
    destination_account: string;
};
type StellarManageDataOp = {
    source_account?: string;
    key: string;
    value?: Buffer | string;
};
type StellarBumpSequenceOp = {
    source_account?: string;
    bump_to: UintType;
};
type StellarSignedTx = {
    public_key: string;
    signature: string;
};
type SuiGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type SuiAddress = {
    address?: string;
};
type SuiSignTx = {
    address_n: number[];
    raw_tx: string;
    data_initial_chunk?: string;
    data_length?: number;
};
type SuiSignedTx = {
    public_key: string;
    signature: string;
};
type SuiTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
type SuiTxAck = {
    data_chunk: string;
};
type SuiSignMessage = {
    address_n: number[];
    message: string;
};
type SuiMessageSignature = {
    signature: string;
    address: string;
};
type TezosGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type TezosAddress = {
    address: string;
};
type TezosGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
type TezosPublicKey = {
    public_key: string;
};
declare enum TezosContractType {
    Implicit = 0,
    Originated = 1
}
type TezosContractID = {
    tag: number;
    hash: Uint8Array;
};
type TezosRevealOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    public_key: Uint8Array;
};
type TezosManagerTransfer = {
    destination?: TezosContractID;
    amount?: UintType;
};
type TezosParametersManager = {
    set_delegate?: Uint8Array;
    cancel_delegate?: boolean;
    transfer?: TezosManagerTransfer;
};
type TezosTransactionOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    amount: UintType;
    destination: TezosContractID;
    parameters?: number[];
    parameters_manager?: TezosParametersManager;
};
type TezosOriginationOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    manager_pubkey?: string;
    balance: number;
    spendable?: boolean;
    delegatable?: boolean;
    delegate?: Uint8Array;
    script: string | number[];
};
type TezosDelegationOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    delegate: Uint8Array;
};
type TezosProposalOp = {
    source?: string;
    period?: number;
    proposals: string[];
};
declare enum TezosBallotType {
    Yay = 0,
    Nay = 1,
    Pass = 2
}
type TezosBallotOp = {
    source?: string;
    period?: number;
    proposal?: string;
    ballot?: TezosBallotType;
};
type TezosSignTx = {
    address_n: number[];
    branch: Uint8Array;
    reveal?: TezosRevealOp;
    transaction?: TezosTransactionOp;
    origination?: TezosOriginationOp;
    delegation?: TezosDelegationOp;
    proposal?: TezosProposalOp;
    ballot?: TezosBallotOp;
};
type TezosSignedTx = {
    signature: string;
    sig_op_contents: string;
    operation_hash: string;
};
declare enum TonWalletVersion {
    V4R2 = 3
}
declare enum TonWorkChain {
    BASECHAIN = 0,
    MASTERCHAIN = 1
}
type TonGetAddress = {
    address_n: number[];
    show_display?: boolean;
    wallet_version?: TonWalletVersion;
    is_bounceable?: boolean;
    is_testnet_only?: boolean;
    workchain?: TonWorkChain;
    wallet_id?: number;
};
type TonAddress = {
    public_key: string;
    address: string;
};
type TonSignMessage = {
    address_n: number[];
    destination: string;
    jetton_master_address?: string;
    jetton_wallet_address?: string;
    ton_amount: UintType;
    jetton_amount?: UintType;
    fwd_fee?: UintType;
    comment?: string;
    is_raw_data?: boolean;
    mode?: number;
    seqno: number;
    expire_at: UintType;
    wallet_version?: TonWalletVersion;
    wallet_id?: number;
    workchain?: TonWorkChain;
    is_bounceable?: boolean;
    is_testnet_only?: boolean;
    ext_destination: string[];
    ext_ton_amount: UintType[];
    ext_payload: string[];
    jetton_amount_bytes?: string;
};
type TonSignedMessage = {
    signature?: string;
    signning_message?: string;
};
type TonSignProof = {
    address_n: number[];
    appdomain: string;
    comment?: string;
    expire_at: UintType;
    wallet_version?: TonWalletVersion;
    wallet_id?: number;
    workchain?: TonWorkChain;
    is_bounceable?: boolean;
    is_testnet_only?: boolean;
};
type TonSignedProof = {
    signature?: string;
};
type TronGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
type TronAddress = {
    address?: string;
};
type TronTransferContract = {
    to_address?: string;
    amount?: UintType;
};
type TronTriggerSmartContract = {
    contract_address?: string;
    call_value?: number;
    data?: string;
    call_token_value?: number;
    asset_id?: number;
};
declare enum TronResourceCode {
    BANDWIDTH = 0,
    ENERGY = 1
}
type TronFreezeBalanceContract = {
    frozen_balance?: number;
    frozen_duration?: number;
    resource?: TronResourceCode;
    receiver_address?: string;
};
type TronUnfreezeBalanceContract = {
    resource?: TronResourceCode;
    receiver_address?: string;
};
type TronWithdrawBalanceContract = {
    owner_address?: string;
};
type TronFreezeBalanceV2Contract = {
    frozen_balance?: number;
    resource?: TronResourceCode;
};
type TronUnfreezeBalanceV2Contract = {
    unfreeze_balance?: number;
    resource?: TronResourceCode;
};
type TronWithdrawExpireUnfreezeContract = {};
type TronDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiver_address?: string;
    lock?: boolean;
};
type TronUnDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiver_address?: string;
};
type TronContract = {
    transfer_contract?: TronTransferContract;
    freeze_balance_contract?: TronFreezeBalanceContract;
    unfreeze_balance_contract?: TronUnfreezeBalanceContract;
    withdraw_balance_contract?: TronWithdrawBalanceContract;
    trigger_smart_contract?: TronTriggerSmartContract;
    freeze_balance_v2_contract?: TronFreezeBalanceV2Contract;
    unfreeze_balance_v2_contract?: TronUnfreezeBalanceV2Contract;
    withdraw_expire_unfreeze_contract?: TronWithdrawExpireUnfreezeContract;
    delegate_resource_contract?: TronDelegateResourceContract;
    undelegate_resource_contract?: TronUnDelegateResourceContract;
};
type TronSignTx = {
    address_n: number[];
    ref_block_bytes: string;
    ref_block_hash: string;
    expiration: number;
    data?: string;
    contract: TronContract;
    timestamp: number;
    fee_limit?: number;
};
type TronSignedTx = {
    signature: string;
    serialized_tx?: string;
};
type TronSignMessage = {
    address_n: number[];
    message: string;
};
type TronMessageSignature = {
    address: string;
    signature: string;
};
type facotry = {};
declare enum CommandFlags {
    Default = 0,
    Factory_Only = 1
}
type MessageType = {
    AlephiumGetAddress: AlephiumGetAddress;
    AlephiumAddress: AlephiumAddress;
    AlephiumSignTx: AlephiumSignTx;
    AlephiumSignedTx: AlephiumSignedTx;
    AlephiumTxRequest: AlephiumTxRequest;
    AlephiumTxAck: AlephiumTxAck;
    AlephiumBytecodeRequest: AlephiumBytecodeRequest;
    AlephiumBytecodeAck: AlephiumBytecodeAck;
    AlephiumSignMessage: AlephiumSignMessage;
    AlephiumMessageSignature: AlephiumMessageSignature;
    AlgorandGetAddress: AlgorandGetAddress;
    AlgorandAddress: AlgorandAddress;
    AlgorandSignTx: AlgorandSignTx;
    AlgorandSignedTx: AlgorandSignedTx;
    AptosGetAddress: AptosGetAddress;
    AptosAddress: AptosAddress;
    AptosSignTx: AptosSignTx;
    AptosSignedTx: AptosSignedTx;
    AptosMessagePayload: AptosMessagePayload;
    AptosSignMessage: AptosSignMessage;
    AptosMessageSignature: AptosMessageSignature;
    BinanceGetAddress: BinanceGetAddress;
    BinanceAddress: BinanceAddress;
    BinanceGetPublicKey: BinanceGetPublicKey;
    BinancePublicKey: BinancePublicKey;
    BinanceSignTx: BinanceSignTx;
    BinanceTxRequest: BinanceTxRequest;
    BinanceCoin: BinanceCoin;
    BinanceInputOutput: BinanceInputOutput;
    BinanceTransferMsg: BinanceTransferMsg;
    BinanceOrderMsg: BinanceOrderMsg;
    BinanceCancelMsg: BinanceCancelMsg;
    BinanceSignedTx: BinanceSignedTx;
    HDNodeType: HDNodeType;
    HDNodePathType: HDNodePathType;
    MultisigRedeemScriptType: MultisigRedeemScriptType;
    GetPublicKey: GetPublicKey;
    PublicKey: PublicKey;
    GetAddress: GetAddress;
    Address: Address;
    GetOwnershipId: GetOwnershipId;
    OwnershipId: OwnershipId;
    SignMessage: SignMessage;
    MessageSignature: MessageSignature;
    VerifyMessage: VerifyMessage;
    SignTx: SignTx;
    TxRequestDetailsType: TxRequestDetailsType;
    TxRequestSerializedType: TxRequestSerializedType;
    TxRequest: TxRequest;
    TxInputType: TxInputType;
    TxOutputBinType: TxOutputBinType;
    TxOutputType: TxOutputType;
    PrevTx: PrevTx;
    PrevInput: PrevInput;
    PrevOutput: PrevOutput;
    TxAck: TxAck;
    TxAckInputWrapper: TxAckInputWrapper;
    TxAckInput: TxAckInput;
    TxAckOutputWrapper: TxAckOutputWrapper;
    TxAckOutput: TxAckOutput;
    TxAckPrevMeta: TxAckPrevMeta;
    TxAckPrevInputWrapper: TxAckPrevInputWrapper;
    TxAckPrevInput: TxAckPrevInput;
    TxAckPrevOutputWrapper: TxAckPrevOutputWrapper;
    TxAckPrevOutput: TxAckPrevOutput;
    TxAckPrevExtraDataWrapper: TxAckPrevExtraDataWrapper;
    TxAckPrevExtraData: TxAckPrevExtraData;
    GetOwnershipProof: GetOwnershipProof;
    OwnershipProof: OwnershipProof;
    AuthorizeCoinJoin: AuthorizeCoinJoin;
    BIP32Address: BIP32Address;
    GetPublicKeyMultiple: GetPublicKeyMultiple;
    PublicKeyMultiple: PublicKeyMultiple;
    SignPsbt: SignPsbt;
    SignedPsbt: SignedPsbt;
    FirmwareErase: FirmwareErase;
    FirmwareRequest: FirmwareRequest;
    FirmwareUpload: FirmwareUpload;
    SelfTest: SelfTest;
    FirmwareErase_ex: FirmwareErase_ex;
    Reboot: Reboot;
    FirmwareUpdateEmmc: FirmwareUpdateEmmc;
    CardanoBlockchainPointerType: CardanoBlockchainPointerType;
    CardanoNativeScript: CardanoNativeScript;
    CardanoGetNativeScriptHash: CardanoGetNativeScriptHash;
    CardanoNativeScriptHash: CardanoNativeScriptHash;
    CardanoAddressParametersType: CardanoAddressParametersType;
    CardanoGetAddress: CardanoGetAddress;
    CardanoAddress: CardanoAddress;
    CardanoGetPublicKey: CardanoGetPublicKey;
    CardanoPublicKey: CardanoPublicKey;
    CardanoSignTxInit: CardanoSignTxInit;
    CardanoTxInput: CardanoTxInput;
    CardanoTxOutput: CardanoTxOutput;
    CardanoAssetGroup: CardanoAssetGroup;
    CardanoToken: CardanoToken;
    CardanoTxInlineDatumChunk: CardanoTxInlineDatumChunk;
    CardanoTxReferenceScriptChunk: CardanoTxReferenceScriptChunk;
    CardanoPoolOwner: CardanoPoolOwner;
    CardanoPoolRelayParameters: CardanoPoolRelayParameters;
    CardanoPoolMetadataType: CardanoPoolMetadataType;
    CardanoPoolParametersType: CardanoPoolParametersType;
    CardanoTxCertificate: CardanoTxCertificate;
    CardanoTxWithdrawal: CardanoTxWithdrawal;
    CardanoGovernanceRegistrationDelegation: CardanoGovernanceRegistrationDelegation;
    CardanoGovernanceRegistrationParametersType: CardanoGovernanceRegistrationParametersType;
    CardanoTxAuxiliaryData: CardanoTxAuxiliaryData;
    CardanoTxMint: CardanoTxMint;
    CardanoTxCollateralInput: CardanoTxCollateralInput;
    CardanoTxRequiredSigner: CardanoTxRequiredSigner;
    CardanoTxReferenceInput: CardanoTxReferenceInput;
    CardanoTxItemAck: CardanoTxItemAck;
    CardanoTxAuxiliaryDataSupplement: CardanoTxAuxiliaryDataSupplement;
    CardanoTxWitnessRequest: CardanoTxWitnessRequest;
    CardanoTxWitnessResponse: CardanoTxWitnessResponse;
    CardanoTxHostAck: CardanoTxHostAck;
    CardanoTxBodyHash: CardanoTxBodyHash;
    CardanoSignTxFinished: CardanoSignTxFinished;
    CardanoSignMessage: CardanoSignMessage;
    CardanoMessageSignature: CardanoMessageSignature;
    Success: Success;
    Failure: Failure;
    ButtonRequest: ButtonRequest;
    ButtonAck: ButtonAck;
    PinMatrixRequest: PinMatrixRequest;
    PinMatrixAck: PinMatrixAck;
    PassphraseRequest: PassphraseRequest;
    PassphraseAck: PassphraseAck;
    Deprecated_PassphraseStateRequest: Deprecated_PassphraseStateRequest;
    Deprecated_PassphraseStateAck: Deprecated_PassphraseStateAck;
    BixinPinInputOnDevice: BixinPinInputOnDevice;
    ConfluxGetAddress: ConfluxGetAddress;
    ConfluxAddress: ConfluxAddress;
    ConfluxSignTx: ConfluxSignTx;
    ConfluxTxRequest: ConfluxTxRequest;
    ConfluxTxAck: ConfluxTxAck;
    ConfluxSignMessage: ConfluxSignMessage;
    ConfluxMessageSignature: ConfluxMessageSignature;
    ConfluxSignMessageCIP23: ConfluxSignMessageCIP23;
    CosmosGetAddress: CosmosGetAddress;
    CosmosAddress: CosmosAddress;
    CosmosSignTx: CosmosSignTx;
    CosmosSignedTx: CosmosSignedTx;
    CipherKeyValue: CipherKeyValue;
    CipheredKeyValue: CipheredKeyValue;
    IdentityType: IdentityType;
    SignIdentity: SignIdentity;
    SignedIdentity: SignedIdentity;
    GetECDHSessionKey: GetECDHSessionKey;
    ECDHSessionKey: ECDHSessionKey;
    Path: Path;
    BatchGetPublickeys: BatchGetPublickeys;
    EcdsaPublicKeys: EcdsaPublicKeys;
    DnxGetAddress: DnxGetAddress;
    DnxAddress: DnxAddress;
    DnxSignTx: DnxSignTx;
    DnxTxKey: DnxTxKey;
    DnxComputedKeyImage: DnxComputedKeyImage;
    DnxInputRequest: DnxInputRequest;
    DnxInputAck: DnxInputAck;
    DnxRTSigsRequest: DnxRTSigsRequest;
    DnxSignedTx: DnxSignedTx;
    EmmcFixPermission: EmmcFixPermission;
    EmmcPath: EmmcPath;
    EmmcPathInfo: EmmcPathInfo;
    EmmcFile: EmmcFile;
    EmmcFileRead: EmmcFileRead;
    EmmcFileWrite: EmmcFileWrite;
    EmmcFileDelete: EmmcFileDelete;
    EmmcDir: EmmcDir;
    EmmcDirList: EmmcDirList;
    EmmcDirMake: EmmcDirMake;
    EmmcDirRemove: EmmcDirRemove;
    EosGetPublicKey: EosGetPublicKey;
    EosPublicKey: EosPublicKey;
    EosTxHeader: EosTxHeader;
    EosSignTx: EosSignTx;
    EosTxActionRequest: EosTxActionRequest;
    EosAsset: EosAsset;
    EosPermissionLevel: EosPermissionLevel;
    EosAuthorizationKey: EosAuthorizationKey;
    EosAuthorizationAccount: EosAuthorizationAccount;
    EosAuthorizationWait: EosAuthorizationWait;
    EosAuthorization: EosAuthorization;
    EosActionCommon: EosActionCommon;
    EosActionTransfer: EosActionTransfer;
    EosActionDelegate: EosActionDelegate;
    EosActionUndelegate: EosActionUndelegate;
    EosActionRefund: EosActionRefund;
    EosActionBuyRam: EosActionBuyRam;
    EosActionBuyRamBytes: EosActionBuyRamBytes;
    EosActionSellRam: EosActionSellRam;
    EosActionVoteProducer: EosActionVoteProducer;
    EosActionUpdateAuth: EosActionUpdateAuth;
    EosActionDeleteAuth: EosActionDeleteAuth;
    EosActionLinkAuth: EosActionLinkAuth;
    EosActionUnlinkAuth: EosActionUnlinkAuth;
    EosActionNewAccount: EosActionNewAccount;
    EosActionUnknown: EosActionUnknown;
    EosTxActionAck: EosTxActionAck;
    EosSignedTx: EosSignedTx;
    EthereumNetworkInfo: EthereumNetworkInfo;
    EthereumTokenInfo: EthereumTokenInfo;
    EthereumDefinitions: EthereumDefinitions;
    EthereumSignTypedDataChargerWallet: EthereumSignTypedDataChargerWallet;
    EthereumTypedDataStructRequestChargerWallet: EthereumTypedDataStructRequestChargerWallet;
    EthereumStructMemberChargerWallet: EthereumStructMemberChargerWallet;
    EthereumFieldTypeChargerWallet: EthereumFieldTypeChargerWallet;
    EthereumTypedDataStructAckChargerWallet: EthereumTypedDataStructAckChargerWallet;
    EthereumTypedDataValueRequestChargerWallet: EthereumTypedDataValueRequestChargerWallet;
    EthereumTypedDataValueAckChargerWallet: EthereumTypedDataValueAckChargerWallet;
    EthereumSignTypedData: EthereumSignTypedData;
    EthereumTypedDataStructRequest: EthereumTypedDataStructRequest;
    EthereumFieldType: EthereumFieldType;
    EthereumStructMember: EthereumStructMember;
    EthereumTypedDataStructAck: EthereumTypedDataStructAck;
    EthereumTypedDataValueRequest: EthereumTypedDataValueRequest;
    EthereumTypedDataValueAck: EthereumTypedDataValueAck;
    EthereumGetPublicKeyChargerWallet: EthereumGetPublicKeyChargerWallet;
    EthereumPublicKeyChargerWallet: EthereumPublicKeyChargerWallet;
    EthereumGetAddressChargerWallet: EthereumGetAddressChargerWallet;
    EthereumAddressChargerWallet: EthereumAddressChargerWallet;
    EthereumSignTxChargerWallet: EthereumSignTxChargerWallet;
    EthereumAccessListChargerWallet: EthereumAccessListChargerWallet;
    EthereumSignTxEIP1559ChargerWallet: EthereumSignTxEIP1559ChargerWallet;
    EthereumTxRequestChargerWallet: EthereumTxRequestChargerWallet;
    EthereumTxAckChargerWallet: EthereumTxAckChargerWallet;
    EthereumSignMessageChargerWallet: EthereumSignMessageChargerWallet;
    EthereumMessageSignatureChargerWallet: EthereumMessageSignatureChargerWallet;
    EthereumVerifyMessageChargerWallet: EthereumVerifyMessageChargerWallet;
    EthereumSignTypedHashChargerWallet: EthereumSignTypedHashChargerWallet;
    EthereumTypedDataSignatureChargerWallet: EthereumTypedDataSignatureChargerWallet;
    EthereumSignMessageEIP712: EthereumSignMessageEIP712;
    EthereumGetPublicKey: EthereumGetPublicKey;
    EthereumPublicKey: EthereumPublicKey;
    EthereumGetAddress: EthereumGetAddress;
    EthereumAddress: EthereumAddress;
    EthereumSignTx: EthereumSignTx;
    EthereumAccessList: EthereumAccessList;
    EthereumSignTxEIP1559: EthereumSignTxEIP1559;
    EthereumTxRequest: EthereumTxRequest;
    EthereumTxAck: EthereumTxAck;
    EthereumSignMessage: EthereumSignMessage;
    EthereumMessageSignature: EthereumMessageSignature;
    EthereumVerifyMessage: EthereumVerifyMessage;
    EthereumSignTypedHash: EthereumSignTypedHash;
    EthereumTypedDataSignature: EthereumTypedDataSignature;
    FilecoinGetAddress: FilecoinGetAddress;
    FilecoinAddress: FilecoinAddress;
    FilecoinSignTx: FilecoinSignTx;
    FilecoinSignedTx: FilecoinSignedTx;
    KaspaGetAddress: KaspaGetAddress;
    KaspaAddress: KaspaAddress;
    KaspaSignTx: KaspaSignTx;
    KaspaTxInputRequest: KaspaTxInputRequest;
    KaspaTxInputAck: KaspaTxInputAck;
    KaspaSignedTx: KaspaSignedTx;
    LnurlAuth: LnurlAuth;
    LnurlAuthResp: LnurlAuthResp;
    Initialize: Initialize;
    GetFeatures: GetFeatures;
    ChargerwalletGetFeatures: ChargerwalletGetFeatures;
    Features: Features;
    ChargerwalletFeatures: ChargerwalletFeatures;
    LockDevice: LockDevice;
    EndSession: EndSession;
    ApplySettings: ApplySettings;
    ApplyFlags: ApplyFlags;
    ChangePin: ChangePin;
    ChangeWipeCode: ChangeWipeCode;
    SdProtect: SdProtect;
    Ping: Ping;
    Cancel: Cancel;
    GetEntropy: GetEntropy;
    Entropy: Entropy;
    WipeDevice: WipeDevice;
    ResetDevice: ResetDevice;
    BackupDevice: BackupDevice;
    EntropyRequest: EntropyRequest;
    EntropyAck: EntropyAck;
    RecoveryDevice: RecoveryDevice;
    WordRequest: WordRequest;
    WordAck: WordAck;
    SetU2FCounter: SetU2FCounter;
    GetNextU2FCounter: GetNextU2FCounter;
    NextU2FCounter: NextU2FCounter;
    DoPreauthorized: DoPreauthorized;
    PreauthorizedRequest: PreauthorizedRequest;
    CancelAuthorization: CancelAuthorization;
    BixinSeedOperate: BixinSeedOperate;
    BixinMessageSE: BixinMessageSE;
    BixinOutMessageSE: BixinOutMessageSE;
    DeviceBackToBoot: DeviceBackToBoot;
    BixinBackupRequest: BixinBackupRequest;
    BixinBackupAck: BixinBackupAck;
    BixinRestoreRequest: BixinRestoreRequest;
    BixinRestoreAck: BixinRestoreAck;
    BixinVerifyDeviceRequest: BixinVerifyDeviceRequest;
    BixinVerifyDeviceAck: BixinVerifyDeviceAck;
    BixinWhiteListRequest: BixinWhiteListRequest;
    BixinWhiteListAck: BixinWhiteListAck;
    BixinLoadDevice: BixinLoadDevice;
    BixinBackupDevice: BixinBackupDevice;
    BixinBackupDeviceAck: BixinBackupDeviceAck;
    DeviceInfoSettings: DeviceInfoSettings;
    GetDeviceInfo: GetDeviceInfo;
    DeviceInfo: DeviceInfo;
    ReadSEPublicKey: ReadSEPublicKey;
    SEPublicKey: SEPublicKey;
    WriteSEPublicCert: WriteSEPublicCert;
    ReadSEPublicCert: ReadSEPublicCert;
    SEPublicCert: SEPublicCert;
    SpiFlashWrite: SpiFlashWrite;
    SpiFlashRead: SpiFlashRead;
    SpiFlashData: SpiFlashData;
    SESignMessage: SESignMessage;
    SEMessageSignature: SEMessageSignature;
    ResourceUpload: ResourceUpload;
    ZoomRequest: ZoomRequest;
    ResourceRequest: ResourceRequest;
    ResourceAck: ResourceAck;
    ResourceUpdate: ResourceUpdate;
    NFTWriteInfo: NFTWriteInfo;
    NFTWriteData: NFTWriteData;
    RebootToBootloader: RebootToBootloader;
    RebootToBoardloader: RebootToBoardloader;
    ListResDir: ListResDir;
    FileInfo: FileInfo;
    FileInfoList: FileInfoList;
    DeviceEraseSector: DeviceEraseSector;
    MoneroRctKeyPublic: MoneroRctKeyPublic;
    MoneroOutputEntry: MoneroOutputEntry;
    MoneroMultisigKLRki: MoneroMultisigKLRki;
    MoneroTransactionSourceEntry: MoneroTransactionSourceEntry;
    MoneroAccountPublicAddress: MoneroAccountPublicAddress;
    MoneroTransactionDestinationEntry: MoneroTransactionDestinationEntry;
    MoneroTransactionRsigData: MoneroTransactionRsigData;
    MoneroGetAddress: MoneroGetAddress;
    MoneroAddress: MoneroAddress;
    MoneroGetWatchKey: MoneroGetWatchKey;
    MoneroWatchKey: MoneroWatchKey;
    MoneroTransactionData: MoneroTransactionData;
    MoneroTransactionInitRequest: MoneroTransactionInitRequest;
    MoneroTransactionInitAck: MoneroTransactionInitAck;
    MoneroTransactionSetInputRequest: MoneroTransactionSetInputRequest;
    MoneroTransactionSetInputAck: MoneroTransactionSetInputAck;
    MoneroTransactionInputsPermutationRequest: MoneroTransactionInputsPermutationRequest;
    MoneroTransactionInputsPermutationAck: MoneroTransactionInputsPermutationAck;
    MoneroTransactionInputViniRequest: MoneroTransactionInputViniRequest;
    MoneroTransactionInputViniAck: MoneroTransactionInputViniAck;
    MoneroTransactionAllInputsSetRequest: MoneroTransactionAllInputsSetRequest;
    MoneroTransactionAllInputsSetAck: MoneroTransactionAllInputsSetAck;
    MoneroTransactionSetOutputRequest: MoneroTransactionSetOutputRequest;
    MoneroTransactionSetOutputAck: MoneroTransactionSetOutputAck;
    MoneroTransactionAllOutSetRequest: MoneroTransactionAllOutSetRequest;
    MoneroRingCtSig: MoneroRingCtSig;
    MoneroTransactionAllOutSetAck: MoneroTransactionAllOutSetAck;
    MoneroTransactionSignInputRequest: MoneroTransactionSignInputRequest;
    MoneroTransactionSignInputAck: MoneroTransactionSignInputAck;
    MoneroTransactionFinalRequest: MoneroTransactionFinalRequest;
    MoneroTransactionFinalAck: MoneroTransactionFinalAck;
    MoneroSubAddressIndicesList: MoneroSubAddressIndicesList;
    MoneroKeyImageExportInitRequest: MoneroKeyImageExportInitRequest;
    MoneroKeyImageExportInitAck: MoneroKeyImageExportInitAck;
    MoneroTransferDetails: MoneroTransferDetails;
    MoneroKeyImageSyncStepRequest: MoneroKeyImageSyncStepRequest;
    MoneroExportedKeyImage: MoneroExportedKeyImage;
    MoneroKeyImageSyncStepAck: MoneroKeyImageSyncStepAck;
    MoneroKeyImageSyncFinalRequest: MoneroKeyImageSyncFinalRequest;
    MoneroKeyImageSyncFinalAck: MoneroKeyImageSyncFinalAck;
    MoneroGetTxKeyRequest: MoneroGetTxKeyRequest;
    MoneroGetTxKeyAck: MoneroGetTxKeyAck;
    MoneroLiveRefreshStartRequest: MoneroLiveRefreshStartRequest;
    MoneroLiveRefreshStartAck: MoneroLiveRefreshStartAck;
    MoneroLiveRefreshStepRequest: MoneroLiveRefreshStepRequest;
    MoneroLiveRefreshStepAck: MoneroLiveRefreshStepAck;
    MoneroLiveRefreshFinalRequest: MoneroLiveRefreshFinalRequest;
    MoneroLiveRefreshFinalAck: MoneroLiveRefreshFinalAck;
    NearGetAddress: NearGetAddress;
    NearAddress: NearAddress;
    NearSignTx: NearSignTx;
    NearSignedTx: NearSignedTx;
    NEMGetAddress: NEMGetAddress;
    NEMAddress: NEMAddress;
    NEMTransactionCommon: NEMTransactionCommon;
    NEMMosaic: NEMMosaic;
    NEMTransfer: NEMTransfer;
    NEMProvisionNamespace: NEMProvisionNamespace;
    NEMMosaicDefinition: NEMMosaicDefinition;
    NEMMosaicCreation: NEMMosaicCreation;
    NEMMosaicSupplyChange: NEMMosaicSupplyChange;
    NEMCosignatoryModification: NEMCosignatoryModification;
    NEMAggregateModification: NEMAggregateModification;
    NEMImportanceTransfer: NEMImportanceTransfer;
    NEMSignTx: NEMSignTx;
    NEMSignedTx: NEMSignedTx;
    NEMDecryptMessage: NEMDecryptMessage;
    NEMDecryptedMessage: NEMDecryptedMessage;
    NervosGetAddress: NervosGetAddress;
    NervosAddress: NervosAddress;
    NervosSignTx: NervosSignTx;
    NervosSignedTx: NervosSignedTx;
    NervosTxRequest: NervosTxRequest;
    NervosTxAck: NervosTxAck;
    NexaGetAddress: NexaGetAddress;
    NexaAddress: NexaAddress;
    NexaSignTx: NexaSignTx;
    NexaTxInputRequest: NexaTxInputRequest;
    NexaTxInputAck: NexaTxInputAck;
    NexaSignedTx: NexaSignedTx;
    NostrGetPublicKey: NostrGetPublicKey;
    NostrPublicKey: NostrPublicKey;
    NostrSignEvent: NostrSignEvent;
    NostrSignedEvent: NostrSignedEvent;
    NostrSignSchnorr: NostrSignSchnorr;
    NostrSignedSchnorr: NostrSignedSchnorr;
    NostrEncryptMessage: NostrEncryptMessage;
    NostrEncryptedMessage: NostrEncryptedMessage;
    NostrDecryptMessage: NostrDecryptMessage;
    NostrDecryptedMessage: NostrDecryptedMessage;
    PolkadotGetAddress: PolkadotGetAddress;
    PolkadotAddress: PolkadotAddress;
    PolkadotSignTx: PolkadotSignTx;
    PolkadotSignedTx: PolkadotSignedTx;
    RippleGetAddress: RippleGetAddress;
    RippleAddress: RippleAddress;
    RipplePayment: RipplePayment;
    RippleSignTx: RippleSignTx;
    RippleSignedTx: RippleSignedTx;
    ScdoGetAddress: ScdoGetAddress;
    ScdoAddress: ScdoAddress;
    ScdoSignTx: ScdoSignTx;
    ScdoSignedTx: ScdoSignedTx;
    ScdoTxAck: ScdoTxAck;
    ScdoSignMessage: ScdoSignMessage;
    ScdoSignedMessage: ScdoSignedMessage;
    SolanaGetAddress: SolanaGetAddress;
    SolanaAddress: SolanaAddress;
    SolanaSignTx: SolanaSignTx;
    SolanaSignedTx: SolanaSignedTx;
    StarcoinGetAddress: StarcoinGetAddress;
    StarcoinAddress: StarcoinAddress;
    StarcoinGetPublicKey: StarcoinGetPublicKey;
    StarcoinPublicKey: StarcoinPublicKey;
    StarcoinSignTx: StarcoinSignTx;
    StarcoinSignedTx: StarcoinSignedTx;
    StarcoinSignMessage: StarcoinSignMessage;
    StarcoinMessageSignature: StarcoinMessageSignature;
    StarcoinVerifyMessage: StarcoinVerifyMessage;
    StellarAsset: StellarAsset;
    StellarGetAddress: StellarGetAddress;
    StellarAddress: StellarAddress;
    StellarSignTx: StellarSignTx;
    StellarTxOpRequest: StellarTxOpRequest;
    StellarPaymentOp: StellarPaymentOp;
    StellarCreateAccountOp: StellarCreateAccountOp;
    StellarPathPaymentStrictReceiveOp: StellarPathPaymentStrictReceiveOp;
    StellarPathPaymentStrictSendOp: StellarPathPaymentStrictSendOp;
    StellarManageSellOfferOp: StellarManageSellOfferOp;
    StellarManageBuyOfferOp: StellarManageBuyOfferOp;
    StellarCreatePassiveSellOfferOp: StellarCreatePassiveSellOfferOp;
    StellarSetOptionsOp: StellarSetOptionsOp;
    StellarChangeTrustOp: StellarChangeTrustOp;
    StellarAllowTrustOp: StellarAllowTrustOp;
    StellarAccountMergeOp: StellarAccountMergeOp;
    StellarManageDataOp: StellarManageDataOp;
    StellarBumpSequenceOp: StellarBumpSequenceOp;
    StellarSignedTx: StellarSignedTx;
    SuiGetAddress: SuiGetAddress;
    SuiAddress: SuiAddress;
    SuiSignTx: SuiSignTx;
    SuiSignedTx: SuiSignedTx;
    SuiTxRequest: SuiTxRequest;
    SuiTxAck: SuiTxAck;
    SuiSignMessage: SuiSignMessage;
    SuiMessageSignature: SuiMessageSignature;
    TezosGetAddress: TezosGetAddress;
    TezosAddress: TezosAddress;
    TezosGetPublicKey: TezosGetPublicKey;
    TezosPublicKey: TezosPublicKey;
    TezosContractID: TezosContractID;
    TezosRevealOp: TezosRevealOp;
    TezosManagerTransfer: TezosManagerTransfer;
    TezosParametersManager: TezosParametersManager;
    TezosTransactionOp: TezosTransactionOp;
    TezosOriginationOp: TezosOriginationOp;
    TezosDelegationOp: TezosDelegationOp;
    TezosProposalOp: TezosProposalOp;
    TezosBallotOp: TezosBallotOp;
    TezosSignTx: TezosSignTx;
    TezosSignedTx: TezosSignedTx;
    TonGetAddress: TonGetAddress;
    TonAddress: TonAddress;
    TonSignMessage: TonSignMessage;
    TonSignedMessage: TonSignedMessage;
    TonSignProof: TonSignProof;
    TonSignedProof: TonSignedProof;
    TronGetAddress: TronGetAddress;
    TronAddress: TronAddress;
    TronTransferContract: TronTransferContract;
    TronTriggerSmartContract: TronTriggerSmartContract;
    TronFreezeBalanceContract: TronFreezeBalanceContract;
    TronUnfreezeBalanceContract: TronUnfreezeBalanceContract;
    TronWithdrawBalanceContract: TronWithdrawBalanceContract;
    TronFreezeBalanceV2Contract: TronFreezeBalanceV2Contract;
    TronUnfreezeBalanceV2Contract: TronUnfreezeBalanceV2Contract;
    TronWithdrawExpireUnfreezeContract: TronWithdrawExpireUnfreezeContract;
    TronDelegateResourceContract: TronDelegateResourceContract;
    TronUnDelegateResourceContract: TronUnDelegateResourceContract;
    TronContract: TronContract;
    TronSignTx: TronSignTx;
    TronSignedTx: TronSignedTx;
    TronSignMessage: TronSignMessage;
    TronMessageSignature: TronMessageSignature;
    facotry: facotry;
};
type MessageKey = keyof MessageType;
type MessageResponse<T extends MessageKey> = {
    type: T;
    message: MessageType[T];
};
type TypedCall = <T extends MessageKey, R extends MessageKey>(type: T, resType: R, message?: MessageType[T]) => Promise<MessageResponse<R>>;

type messages_UintType = UintType;
type messages_AlephiumGetAddress = AlephiumGetAddress;
type messages_AlephiumAddress = AlephiumAddress;
type messages_AlephiumSignTx = AlephiumSignTx;
type messages_AlephiumSignedTx = AlephiumSignedTx;
type messages_AlephiumTxRequest = AlephiumTxRequest;
type messages_AlephiumTxAck = AlephiumTxAck;
type messages_AlephiumBytecodeRequest = AlephiumBytecodeRequest;
type messages_AlephiumBytecodeAck = AlephiumBytecodeAck;
type messages_AlephiumSignMessage = AlephiumSignMessage;
type messages_AlephiumMessageSignature = AlephiumMessageSignature;
type messages_AlgorandGetAddress = AlgorandGetAddress;
type messages_AlgorandAddress = AlgorandAddress;
type messages_AlgorandSignTx = AlgorandSignTx;
type messages_AlgorandSignedTx = AlgorandSignedTx;
type messages_AptosGetAddress = AptosGetAddress;
type messages_AptosAddress = AptosAddress;
type messages_AptosSignTx = AptosSignTx;
type messages_AptosSignedTx = AptosSignedTx;
type messages_AptosMessagePayload = AptosMessagePayload;
type messages_AptosSignMessage = AptosSignMessage;
type messages_AptosMessageSignature = AptosMessageSignature;
type messages_BinanceGetAddress = BinanceGetAddress;
type messages_BinanceAddress = BinanceAddress;
type messages_BinanceGetPublicKey = BinanceGetPublicKey;
type messages_BinancePublicKey = BinancePublicKey;
type messages_BinanceSignTx = BinanceSignTx;
type messages_BinanceTxRequest = BinanceTxRequest;
type messages_BinanceCoin = BinanceCoin;
type messages_BinanceInputOutput = BinanceInputOutput;
type messages_BinanceTransferMsg = BinanceTransferMsg;
type messages_BinanceOrderType = BinanceOrderType;
declare const messages_BinanceOrderType: typeof BinanceOrderType;
type messages_BinanceOrderSide = BinanceOrderSide;
declare const messages_BinanceOrderSide: typeof BinanceOrderSide;
type messages_BinanceTimeInForce = BinanceTimeInForce;
declare const messages_BinanceTimeInForce: typeof BinanceTimeInForce;
type messages_BinanceOrderMsg = BinanceOrderMsg;
type messages_BinanceCancelMsg = BinanceCancelMsg;
type messages_BinanceSignedTx = BinanceSignedTx;
type messages_Enum_InputScriptType = Enum_InputScriptType;
declare const messages_Enum_InputScriptType: typeof Enum_InputScriptType;
type messages_InputScriptType = InputScriptType;
type messages_Enum_OutputScriptType = Enum_OutputScriptType;
declare const messages_Enum_OutputScriptType: typeof Enum_OutputScriptType;
type messages_OutputScriptType = OutputScriptType;
type messages_DecredStakingSpendType = DecredStakingSpendType;
declare const messages_DecredStakingSpendType: typeof DecredStakingSpendType;
type messages_AmountUnit = AmountUnit;
declare const messages_AmountUnit: typeof AmountUnit;
type messages_HDNodeType = HDNodeType;
type messages_HDNodePathType = HDNodePathType;
type messages_MultisigRedeemScriptType = MultisigRedeemScriptType;
type messages_GetPublicKey = GetPublicKey;
type messages_PublicKey = PublicKey;
type messages_GetAddress = GetAddress;
type messages_Address = Address;
type messages_GetOwnershipId = GetOwnershipId;
type messages_OwnershipId = OwnershipId;
type messages_SignMessage = SignMessage;
type messages_MessageSignature = MessageSignature;
type messages_VerifyMessage = VerifyMessage;
type messages_SignTx = SignTx;
type messages_Enum_RequestType = Enum_RequestType;
declare const messages_Enum_RequestType: typeof Enum_RequestType;
type messages_RequestType = RequestType;
type messages_TxRequestDetailsType = TxRequestDetailsType;
type messages_TxRequestSerializedType = TxRequestSerializedType;
type messages_TxRequest = TxRequest;
type messages_InternalInputScriptType = InternalInputScriptType;
type messages_TxInputType = TxInputType;
type messages_TxInput = TxInput;
type messages_TxOutputBinType = TxOutputBinType;
type messages_ChangeOutputScriptType = ChangeOutputScriptType;
type messages_TxOutputType = TxOutputType;
type messages_TxOutput = TxOutput;
type messages_PrevTx = PrevTx;
type messages_PrevInput = PrevInput;
type messages_PrevOutput = PrevOutput;
type messages_TxAckResponse = TxAckResponse;
type messages_TxAck = TxAck;
type messages_TxAckInputWrapper = TxAckInputWrapper;
type messages_TxAckInput = TxAckInput;
type messages_TxAckOutputWrapper = TxAckOutputWrapper;
type messages_TxAckOutput = TxAckOutput;
type messages_TxAckPrevMeta = TxAckPrevMeta;
type messages_TxAckPrevInputWrapper = TxAckPrevInputWrapper;
type messages_TxAckPrevInput = TxAckPrevInput;
type messages_TxAckPrevOutputWrapper = TxAckPrevOutputWrapper;
type messages_TxAckPrevOutput = TxAckPrevOutput;
type messages_TxAckPrevExtraDataWrapper = TxAckPrevExtraDataWrapper;
type messages_TxAckPrevExtraData = TxAckPrevExtraData;
type messages_GetOwnershipProof = GetOwnershipProof;
type messages_OwnershipProof = OwnershipProof;
type messages_AuthorizeCoinJoin = AuthorizeCoinJoin;
type messages_BIP32Address = BIP32Address;
type messages_GetPublicKeyMultiple = GetPublicKeyMultiple;
type messages_PublicKeyMultiple = PublicKeyMultiple;
type messages_SignPsbt = SignPsbt;
type messages_SignedPsbt = SignedPsbt;
type messages_FirmwareErase = FirmwareErase;
type messages_FirmwareRequest = FirmwareRequest;
type messages_FirmwareUpload = FirmwareUpload;
type messages_SelfTest = SelfTest;
type messages_FirmwareErase_ex = FirmwareErase_ex;
type messages_RebootType = RebootType;
declare const messages_RebootType: typeof RebootType;
type messages_Reboot = Reboot;
type messages_FirmwareUpdateEmmc = FirmwareUpdateEmmc;
type messages_CardanoDerivationType = CardanoDerivationType;
declare const messages_CardanoDerivationType: typeof CardanoDerivationType;
type messages_CardanoAddressType = CardanoAddressType;
declare const messages_CardanoAddressType: typeof CardanoAddressType;
type messages_CardanoNativeScriptType = CardanoNativeScriptType;
declare const messages_CardanoNativeScriptType: typeof CardanoNativeScriptType;
type messages_CardanoNativeScriptHashDisplayFormat = CardanoNativeScriptHashDisplayFormat;
declare const messages_CardanoNativeScriptHashDisplayFormat: typeof CardanoNativeScriptHashDisplayFormat;
type messages_CardanoTxOutputSerializationFormat = CardanoTxOutputSerializationFormat;
declare const messages_CardanoTxOutputSerializationFormat: typeof CardanoTxOutputSerializationFormat;
type messages_CardanoCertificateType = CardanoCertificateType;
declare const messages_CardanoCertificateType: typeof CardanoCertificateType;
type messages_CardanoPoolRelayType = CardanoPoolRelayType;
declare const messages_CardanoPoolRelayType: typeof CardanoPoolRelayType;
type messages_CardanoTxAuxiliaryDataSupplementType = CardanoTxAuxiliaryDataSupplementType;
declare const messages_CardanoTxAuxiliaryDataSupplementType: typeof CardanoTxAuxiliaryDataSupplementType;
type messages_CardanoGovernanceRegistrationFormat = CardanoGovernanceRegistrationFormat;
declare const messages_CardanoGovernanceRegistrationFormat: typeof CardanoGovernanceRegistrationFormat;
type messages_CardanoTxSigningMode = CardanoTxSigningMode;
declare const messages_CardanoTxSigningMode: typeof CardanoTxSigningMode;
type messages_CardanoTxWitnessType = CardanoTxWitnessType;
declare const messages_CardanoTxWitnessType: typeof CardanoTxWitnessType;
type messages_CardanoBlockchainPointerType = CardanoBlockchainPointerType;
type messages_CardanoNativeScript = CardanoNativeScript;
type messages_CardanoGetNativeScriptHash = CardanoGetNativeScriptHash;
type messages_CardanoNativeScriptHash = CardanoNativeScriptHash;
type messages_CardanoAddressParametersType = CardanoAddressParametersType;
type messages_CardanoGetAddress = CardanoGetAddress;
type messages_CardanoAddress = CardanoAddress;
type messages_CardanoGetPublicKey = CardanoGetPublicKey;
type messages_CardanoPublicKey = CardanoPublicKey;
type messages_CardanoSignTxInit = CardanoSignTxInit;
type messages_CardanoTxInput = CardanoTxInput;
type messages_CardanoTxOutput = CardanoTxOutput;
type messages_CardanoAssetGroup = CardanoAssetGroup;
type messages_CardanoToken = CardanoToken;
type messages_CardanoTxInlineDatumChunk = CardanoTxInlineDatumChunk;
type messages_CardanoTxReferenceScriptChunk = CardanoTxReferenceScriptChunk;
type messages_CardanoPoolOwner = CardanoPoolOwner;
type messages_CardanoPoolRelayParameters = CardanoPoolRelayParameters;
type messages_CardanoPoolMetadataType = CardanoPoolMetadataType;
type messages_CardanoPoolParametersType = CardanoPoolParametersType;
type messages_CardanoTxCertificate = CardanoTxCertificate;
type messages_CardanoTxWithdrawal = CardanoTxWithdrawal;
type messages_CardanoGovernanceRegistrationDelegation = CardanoGovernanceRegistrationDelegation;
type messages_CardanoGovernanceRegistrationParametersType = CardanoGovernanceRegistrationParametersType;
type messages_CardanoTxAuxiliaryData = CardanoTxAuxiliaryData;
type messages_CardanoTxMint = CardanoTxMint;
type messages_CardanoTxCollateralInput = CardanoTxCollateralInput;
type messages_CardanoTxRequiredSigner = CardanoTxRequiredSigner;
type messages_CardanoTxReferenceInput = CardanoTxReferenceInput;
type messages_CardanoTxItemAck = CardanoTxItemAck;
type messages_CardanoTxAuxiliaryDataSupplement = CardanoTxAuxiliaryDataSupplement;
type messages_CardanoTxWitnessRequest = CardanoTxWitnessRequest;
type messages_CardanoTxWitnessResponse = CardanoTxWitnessResponse;
type messages_CardanoTxHostAck = CardanoTxHostAck;
type messages_CardanoTxBodyHash = CardanoTxBodyHash;
type messages_CardanoSignTxFinished = CardanoSignTxFinished;
type messages_CardanoSignMessage = CardanoSignMessage;
type messages_CardanoMessageSignature = CardanoMessageSignature;
type messages_Success = Success;
type messages_FailureType = FailureType;
declare const messages_FailureType: typeof FailureType;
type messages_Failure = Failure;
type messages_Enum_ButtonRequestType = Enum_ButtonRequestType;
declare const messages_Enum_ButtonRequestType: typeof Enum_ButtonRequestType;
type messages_ButtonRequestType = ButtonRequestType;
type messages_ButtonRequest = ButtonRequest;
type messages_ButtonAck = ButtonAck;
type messages_Enum_PinMatrixRequestType = Enum_PinMatrixRequestType;
declare const messages_Enum_PinMatrixRequestType: typeof Enum_PinMatrixRequestType;
type messages_PinMatrixRequestType = PinMatrixRequestType;
type messages_PinMatrixRequest = PinMatrixRequest;
type messages_PinMatrixAck = PinMatrixAck;
type messages_PassphraseRequest = PassphraseRequest;
type messages_PassphraseAck = PassphraseAck;
type messages_Deprecated_PassphraseStateRequest = Deprecated_PassphraseStateRequest;
type messages_Deprecated_PassphraseStateAck = Deprecated_PassphraseStateAck;
type messages_BixinPinInputOnDevice = BixinPinInputOnDevice;
type messages_ConfluxGetAddress = ConfluxGetAddress;
type messages_ConfluxAddress = ConfluxAddress;
type messages_ConfluxSignTx = ConfluxSignTx;
type messages_ConfluxTxRequest = ConfluxTxRequest;
type messages_ConfluxTxAck = ConfluxTxAck;
type messages_ConfluxSignMessage = ConfluxSignMessage;
type messages_ConfluxMessageSignature = ConfluxMessageSignature;
type messages_ConfluxSignMessageCIP23 = ConfluxSignMessageCIP23;
type messages_CosmosGetAddress = CosmosGetAddress;
type messages_CosmosAddress = CosmosAddress;
type messages_CosmosSignTx = CosmosSignTx;
type messages_CosmosSignedTx = CosmosSignedTx;
type messages_CipherKeyValue = CipherKeyValue;
type messages_CipheredKeyValue = CipheredKeyValue;
type messages_IdentityType = IdentityType;
type messages_SignIdentity = SignIdentity;
type messages_SignedIdentity = SignedIdentity;
type messages_GetECDHSessionKey = GetECDHSessionKey;
type messages_ECDHSessionKey = ECDHSessionKey;
type messages_Path = Path;
type messages_BatchGetPublickeys = BatchGetPublickeys;
type messages_EcdsaPublicKeys = EcdsaPublicKeys;
type messages_DnxGetAddress = DnxGetAddress;
type messages_DnxAddress = DnxAddress;
type messages_DnxSignTx = DnxSignTx;
type messages_DnxTxKey = DnxTxKey;
type messages_DnxComputedKeyImage = DnxComputedKeyImage;
type messages_DnxInputRequest = DnxInputRequest;
type messages_DnxInputAck = DnxInputAck;
type messages_DnxRTSigsRequest = DnxRTSigsRequest;
type messages_DnxSignedTx = DnxSignedTx;
type messages_EmmcFixPermission = EmmcFixPermission;
type messages_EmmcPath = EmmcPath;
type messages_EmmcPathInfo = EmmcPathInfo;
type messages_EmmcFile = EmmcFile;
type messages_EmmcFileRead = EmmcFileRead;
type messages_EmmcFileWrite = EmmcFileWrite;
type messages_EmmcFileDelete = EmmcFileDelete;
type messages_EmmcDir = EmmcDir;
type messages_EmmcDirList = EmmcDirList;
type messages_EmmcDirMake = EmmcDirMake;
type messages_EmmcDirRemove = EmmcDirRemove;
type messages_EosGetPublicKey = EosGetPublicKey;
type messages_EosPublicKey = EosPublicKey;
type messages_EosTxHeader = EosTxHeader;
type messages_EosSignTx = EosSignTx;
type messages_EosTxActionRequest = EosTxActionRequest;
type messages_EosAsset = EosAsset;
type messages_EosPermissionLevel = EosPermissionLevel;
type messages_EosAuthorizationKey = EosAuthorizationKey;
type messages_EosAuthorizationAccount = EosAuthorizationAccount;
type messages_EosAuthorizationWait = EosAuthorizationWait;
type messages_EosAuthorization = EosAuthorization;
type messages_EosActionCommon = EosActionCommon;
type messages_EosActionTransfer = EosActionTransfer;
type messages_EosActionDelegate = EosActionDelegate;
type messages_EosActionUndelegate = EosActionUndelegate;
type messages_EosActionRefund = EosActionRefund;
type messages_EosActionBuyRam = EosActionBuyRam;
type messages_EosActionBuyRamBytes = EosActionBuyRamBytes;
type messages_EosActionSellRam = EosActionSellRam;
type messages_EosActionVoteProducer = EosActionVoteProducer;
type messages_EosActionUpdateAuth = EosActionUpdateAuth;
type messages_EosActionDeleteAuth = EosActionDeleteAuth;
type messages_EosActionLinkAuth = EosActionLinkAuth;
type messages_EosActionUnlinkAuth = EosActionUnlinkAuth;
type messages_EosActionNewAccount = EosActionNewAccount;
type messages_EosActionUnknown = EosActionUnknown;
type messages_EosTxActionAck = EosTxActionAck;
type messages_EosSignedTx = EosSignedTx;
type messages_EthereumDefinitionType = EthereumDefinitionType;
declare const messages_EthereumDefinitionType: typeof EthereumDefinitionType;
type messages_EthereumNetworkInfo = EthereumNetworkInfo;
type messages_EthereumTokenInfo = EthereumTokenInfo;
type messages_EthereumDefinitions = EthereumDefinitions;
type messages_EthereumSignTypedDataChargerWallet = EthereumSignTypedDataChargerWallet;
type messages_EthereumTypedDataStructRequestChargerWallet = EthereumTypedDataStructRequestChargerWallet;
type messages_EthereumStructMemberChargerWallet = EthereumStructMemberChargerWallet;
type messages_EthereumFieldTypeChargerWallet = EthereumFieldTypeChargerWallet;
type messages_EthereumDataTypeChargerWallet = EthereumDataTypeChargerWallet;
declare const messages_EthereumDataTypeChargerWallet: typeof EthereumDataTypeChargerWallet;
type messages_EthereumTypedDataStructAckChargerWallet = EthereumTypedDataStructAckChargerWallet;
type messages_EthereumTypedDataValueRequestChargerWallet = EthereumTypedDataValueRequestChargerWallet;
type messages_EthereumTypedDataValueAckChargerWallet = EthereumTypedDataValueAckChargerWallet;
type messages_EthereumSignTypedData = EthereumSignTypedData;
type messages_EthereumTypedDataStructRequest = EthereumTypedDataStructRequest;
type messages_EthereumDataType = EthereumDataType;
declare const messages_EthereumDataType: typeof EthereumDataType;
type messages_EthereumFieldType = EthereumFieldType;
type messages_EthereumStructMember = EthereumStructMember;
type messages_EthereumTypedDataStructAck = EthereumTypedDataStructAck;
type messages_EthereumTypedDataValueRequest = EthereumTypedDataValueRequest;
type messages_EthereumTypedDataValueAck = EthereumTypedDataValueAck;
type messages_EthereumGetPublicKeyChargerWallet = EthereumGetPublicKeyChargerWallet;
type messages_EthereumPublicKeyChargerWallet = EthereumPublicKeyChargerWallet;
type messages_EthereumGetAddressChargerWallet = EthereumGetAddressChargerWallet;
type messages_EthereumAddressChargerWallet = EthereumAddressChargerWallet;
type messages_EthereumSignTxChargerWallet = EthereumSignTxChargerWallet;
type messages_EthereumAccessListChargerWallet = EthereumAccessListChargerWallet;
type messages_EthereumSignTxEIP1559ChargerWallet = EthereumSignTxEIP1559ChargerWallet;
type messages_EthereumTxRequestChargerWallet = EthereumTxRequestChargerWallet;
type messages_EthereumTxAckChargerWallet = EthereumTxAckChargerWallet;
type messages_EthereumSignMessageChargerWallet = EthereumSignMessageChargerWallet;
type messages_EthereumMessageSignatureChargerWallet = EthereumMessageSignatureChargerWallet;
type messages_EthereumVerifyMessageChargerWallet = EthereumVerifyMessageChargerWallet;
type messages_EthereumSignTypedHashChargerWallet = EthereumSignTypedHashChargerWallet;
type messages_EthereumTypedDataSignatureChargerWallet = EthereumTypedDataSignatureChargerWallet;
type messages_EthereumSignMessageEIP712 = EthereumSignMessageEIP712;
type messages_EthereumGetPublicKey = EthereumGetPublicKey;
type messages_EthereumPublicKey = EthereumPublicKey;
type messages_EthereumGetAddress = EthereumGetAddress;
type messages_EthereumAddress = EthereumAddress;
type messages_EthereumSignTx = EthereumSignTx;
type messages_EthereumAccessList = EthereumAccessList;
type messages_EthereumSignTxEIP1559 = EthereumSignTxEIP1559;
type messages_EthereumTxRequest = EthereumTxRequest;
type messages_EthereumTxAck = EthereumTxAck;
type messages_EthereumSignMessage = EthereumSignMessage;
type messages_EthereumMessageSignature = EthereumMessageSignature;
type messages_EthereumVerifyMessage = EthereumVerifyMessage;
type messages_EthereumSignTypedHash = EthereumSignTypedHash;
type messages_EthereumTypedDataSignature = EthereumTypedDataSignature;
type messages_FilecoinGetAddress = FilecoinGetAddress;
type messages_FilecoinAddress = FilecoinAddress;
type messages_FilecoinSignTx = FilecoinSignTx;
type messages_FilecoinSignedTx = FilecoinSignedTx;
type messages_KaspaGetAddress = KaspaGetAddress;
type messages_KaspaAddress = KaspaAddress;
type messages_KaspaSignTx = KaspaSignTx;
type messages_KaspaTxInputRequest = KaspaTxInputRequest;
type messages_KaspaTxInputAck = KaspaTxInputAck;
type messages_KaspaSignedTx = KaspaSignedTx;
type messages_LnurlAuth = LnurlAuth;
type messages_LnurlAuthResp = LnurlAuthResp;
type messages_Enum_BackupType = Enum_BackupType;
declare const messages_Enum_BackupType: typeof Enum_BackupType;
type messages_BackupType = BackupType;
type messages_Enum_SafetyCheckLevel = Enum_SafetyCheckLevel;
declare const messages_Enum_SafetyCheckLevel: typeof Enum_SafetyCheckLevel;
type messages_SafetyCheckLevel = SafetyCheckLevel;
type messages_Initialize = Initialize;
type messages_GetFeatures = GetFeatures;
type messages_ChargerwalletGetFeatures = ChargerwalletGetFeatures;
type messages_ChargerWalletDeviceType = ChargerWalletDeviceType;
declare const messages_ChargerWalletDeviceType: typeof ChargerWalletDeviceType;
type messages_ChargerWalletSeType = ChargerWalletSeType;
declare const messages_ChargerWalletSeType: typeof ChargerWalletSeType;
type messages_ChargerWalletSEState = ChargerWalletSEState;
declare const messages_ChargerWalletSEState: typeof ChargerWalletSEState;
type messages_Enum_Capability = Enum_Capability;
declare const messages_Enum_Capability: typeof Enum_Capability;
type messages_Capability = Capability;
type messages_Features = Features;
type messages_ChargerwalletFeatures = ChargerwalletFeatures;
type messages_LockDevice = LockDevice;
type messages_EndSession = EndSession;
type messages_ExportType = ExportType;
declare const messages_ExportType: typeof ExportType;
type messages_ApplySettings = ApplySettings;
type messages_ApplyFlags = ApplyFlags;
type messages_ChangePin = ChangePin;
type messages_ChangeWipeCode = ChangeWipeCode;
type messages_SdProtectOperationType = SdProtectOperationType;
declare const messages_SdProtectOperationType: typeof SdProtectOperationType;
type messages_SdProtect = SdProtect;
type messages_Ping = Ping;
type messages_Cancel = Cancel;
type messages_GetEntropy = GetEntropy;
type messages_Entropy = Entropy;
type messages_WipeDevice = WipeDevice;
type messages_ResetDevice = ResetDevice;
type messages_BackupDevice = BackupDevice;
type messages_EntropyRequest = EntropyRequest;
type messages_EntropyAck = EntropyAck;
type messages_RecoveryDeviceType = RecoveryDeviceType;
declare const messages_RecoveryDeviceType: typeof RecoveryDeviceType;
type messages_RecoveryDevice = RecoveryDevice;
type messages_Enum_WordRequestType = Enum_WordRequestType;
declare const messages_Enum_WordRequestType: typeof Enum_WordRequestType;
type messages_WordRequestType = WordRequestType;
type messages_WordRequest = WordRequest;
type messages_WordAck = WordAck;
type messages_SetU2FCounter = SetU2FCounter;
type messages_GetNextU2FCounter = GetNextU2FCounter;
type messages_NextU2FCounter = NextU2FCounter;
type messages_DoPreauthorized = DoPreauthorized;
type messages_PreauthorizedRequest = PreauthorizedRequest;
type messages_CancelAuthorization = CancelAuthorization;
type messages_SeedRequestType = SeedRequestType;
declare const messages_SeedRequestType: typeof SeedRequestType;
type messages_BixinSeedOperate = BixinSeedOperate;
type messages_BixinMessageSE = BixinMessageSE;
type messages_BixinOutMessageSE = BixinOutMessageSE;
type messages_DeviceBackToBoot = DeviceBackToBoot;
type messages_BixinBackupRequest = BixinBackupRequest;
type messages_BixinBackupAck = BixinBackupAck;
type messages_BixinRestoreRequest = BixinRestoreRequest;
type messages_BixinRestoreAck = BixinRestoreAck;
type messages_BixinVerifyDeviceRequest = BixinVerifyDeviceRequest;
type messages_BixinVerifyDeviceAck = BixinVerifyDeviceAck;
type messages_WL_OperationType = WL_OperationType;
declare const messages_WL_OperationType: typeof WL_OperationType;
type messages_BixinWhiteListRequest = BixinWhiteListRequest;
type messages_BixinWhiteListAck = BixinWhiteListAck;
type messages_BixinLoadDevice = BixinLoadDevice;
type messages_BixinBackupDevice = BixinBackupDevice;
type messages_BixinBackupDeviceAck = BixinBackupDeviceAck;
type messages_DeviceInfoSettings = DeviceInfoSettings;
type messages_GetDeviceInfo = GetDeviceInfo;
type messages_DeviceInfo = DeviceInfo;
type messages_ReadSEPublicKey = ReadSEPublicKey;
type messages_SEPublicKey = SEPublicKey;
type messages_WriteSEPublicCert = WriteSEPublicCert;
type messages_ReadSEPublicCert = ReadSEPublicCert;
type messages_SEPublicCert = SEPublicCert;
type messages_SpiFlashWrite = SpiFlashWrite;
type messages_SpiFlashRead = SpiFlashRead;
type messages_SpiFlashData = SpiFlashData;
type messages_SESignMessage = SESignMessage;
type messages_SEMessageSignature = SEMessageSignature;
type messages_ResourceType = ResourceType;
declare const messages_ResourceType: typeof ResourceType;
type messages_ResourceUpload = ResourceUpload;
type messages_ZoomRequest = ZoomRequest;
type messages_ResourceRequest = ResourceRequest;
type messages_ResourceAck = ResourceAck;
type messages_ResourceUpdate = ResourceUpdate;
type messages_NFTWriteInfo = NFTWriteInfo;
type messages_NFTWriteData = NFTWriteData;
type messages_RebootToBootloader = RebootToBootloader;
type messages_RebootToBoardloader = RebootToBoardloader;
type messages_ListResDir = ListResDir;
type messages_FileInfo = FileInfo;
type messages_FileInfoList = FileInfoList;
type messages_DeviceEraseSector = DeviceEraseSector;
type messages_MoneroRctKeyPublic = MoneroRctKeyPublic;
type messages_MoneroOutputEntry = MoneroOutputEntry;
type messages_MoneroMultisigKLRki = MoneroMultisigKLRki;
type messages_MoneroTransactionSourceEntry = MoneroTransactionSourceEntry;
type messages_MoneroAccountPublicAddress = MoneroAccountPublicAddress;
type messages_MoneroTransactionDestinationEntry = MoneroTransactionDestinationEntry;
type messages_MoneroTransactionRsigData = MoneroTransactionRsigData;
type messages_MoneroGetAddress = MoneroGetAddress;
type messages_MoneroAddress = MoneroAddress;
type messages_MoneroGetWatchKey = MoneroGetWatchKey;
type messages_MoneroWatchKey = MoneroWatchKey;
type messages_MoneroTransactionData = MoneroTransactionData;
type messages_MoneroTransactionInitRequest = MoneroTransactionInitRequest;
type messages_MoneroTransactionInitAck = MoneroTransactionInitAck;
type messages_MoneroTransactionSetInputRequest = MoneroTransactionSetInputRequest;
type messages_MoneroTransactionSetInputAck = MoneroTransactionSetInputAck;
type messages_MoneroTransactionInputsPermutationRequest = MoneroTransactionInputsPermutationRequest;
type messages_MoneroTransactionInputsPermutationAck = MoneroTransactionInputsPermutationAck;
type messages_MoneroTransactionInputViniRequest = MoneroTransactionInputViniRequest;
type messages_MoneroTransactionInputViniAck = MoneroTransactionInputViniAck;
type messages_MoneroTransactionAllInputsSetRequest = MoneroTransactionAllInputsSetRequest;
type messages_MoneroTransactionAllInputsSetAck = MoneroTransactionAllInputsSetAck;
type messages_MoneroTransactionSetOutputRequest = MoneroTransactionSetOutputRequest;
type messages_MoneroTransactionSetOutputAck = MoneroTransactionSetOutputAck;
type messages_MoneroTransactionAllOutSetRequest = MoneroTransactionAllOutSetRequest;
type messages_MoneroRingCtSig = MoneroRingCtSig;
type messages_MoneroTransactionAllOutSetAck = MoneroTransactionAllOutSetAck;
type messages_MoneroTransactionSignInputRequest = MoneroTransactionSignInputRequest;
type messages_MoneroTransactionSignInputAck = MoneroTransactionSignInputAck;
type messages_MoneroTransactionFinalRequest = MoneroTransactionFinalRequest;
type messages_MoneroTransactionFinalAck = MoneroTransactionFinalAck;
type messages_MoneroSubAddressIndicesList = MoneroSubAddressIndicesList;
type messages_MoneroKeyImageExportInitRequest = MoneroKeyImageExportInitRequest;
type messages_MoneroKeyImageExportInitAck = MoneroKeyImageExportInitAck;
type messages_MoneroTransferDetails = MoneroTransferDetails;
type messages_MoneroKeyImageSyncStepRequest = MoneroKeyImageSyncStepRequest;
type messages_MoneroExportedKeyImage = MoneroExportedKeyImage;
type messages_MoneroKeyImageSyncStepAck = MoneroKeyImageSyncStepAck;
type messages_MoneroKeyImageSyncFinalRequest = MoneroKeyImageSyncFinalRequest;
type messages_MoneroKeyImageSyncFinalAck = MoneroKeyImageSyncFinalAck;
type messages_MoneroGetTxKeyRequest = MoneroGetTxKeyRequest;
type messages_MoneroGetTxKeyAck = MoneroGetTxKeyAck;
type messages_MoneroLiveRefreshStartRequest = MoneroLiveRefreshStartRequest;
type messages_MoneroLiveRefreshStartAck = MoneroLiveRefreshStartAck;
type messages_MoneroLiveRefreshStepRequest = MoneroLiveRefreshStepRequest;
type messages_MoneroLiveRefreshStepAck = MoneroLiveRefreshStepAck;
type messages_MoneroLiveRefreshFinalRequest = MoneroLiveRefreshFinalRequest;
type messages_MoneroLiveRefreshFinalAck = MoneroLiveRefreshFinalAck;
type messages_NearGetAddress = NearGetAddress;
type messages_NearAddress = NearAddress;
type messages_NearSignTx = NearSignTx;
type messages_NearSignedTx = NearSignedTx;
type messages_NEMGetAddress = NEMGetAddress;
type messages_NEMAddress = NEMAddress;
type messages_NEMTransactionCommon = NEMTransactionCommon;
type messages_NEMMosaic = NEMMosaic;
type messages_NEMTransfer = NEMTransfer;
type messages_NEMProvisionNamespace = NEMProvisionNamespace;
type messages_NEMMosaicLevy = NEMMosaicLevy;
declare const messages_NEMMosaicLevy: typeof NEMMosaicLevy;
type messages_NEMMosaicDefinition = NEMMosaicDefinition;
type messages_NEMMosaicCreation = NEMMosaicCreation;
type messages_NEMSupplyChangeType = NEMSupplyChangeType;
declare const messages_NEMSupplyChangeType: typeof NEMSupplyChangeType;
type messages_NEMMosaicSupplyChange = NEMMosaicSupplyChange;
type messages_NEMModificationType = NEMModificationType;
declare const messages_NEMModificationType: typeof NEMModificationType;
type messages_NEMCosignatoryModification = NEMCosignatoryModification;
type messages_NEMAggregateModification = NEMAggregateModification;
type messages_NEMImportanceTransferMode = NEMImportanceTransferMode;
declare const messages_NEMImportanceTransferMode: typeof NEMImportanceTransferMode;
type messages_NEMImportanceTransfer = NEMImportanceTransfer;
type messages_NEMSignTx = NEMSignTx;
type messages_NEMSignedTx = NEMSignedTx;
type messages_NEMDecryptMessage = NEMDecryptMessage;
type messages_NEMDecryptedMessage = NEMDecryptedMessage;
type messages_NervosGetAddress = NervosGetAddress;
type messages_NervosAddress = NervosAddress;
type messages_NervosSignTx = NervosSignTx;
type messages_NervosSignedTx = NervosSignedTx;
type messages_NervosTxRequest = NervosTxRequest;
type messages_NervosTxAck = NervosTxAck;
type messages_NexaGetAddress = NexaGetAddress;
type messages_NexaAddress = NexaAddress;
type messages_NexaSignTx = NexaSignTx;
type messages_NexaTxInputRequest = NexaTxInputRequest;
type messages_NexaTxInputAck = NexaTxInputAck;
type messages_NexaSignedTx = NexaSignedTx;
type messages_NostrGetPublicKey = NostrGetPublicKey;
type messages_NostrPublicKey = NostrPublicKey;
type messages_NostrSignEvent = NostrSignEvent;
type messages_NostrSignedEvent = NostrSignedEvent;
type messages_NostrSignSchnorr = NostrSignSchnorr;
type messages_NostrSignedSchnorr = NostrSignedSchnorr;
type messages_NostrEncryptMessage = NostrEncryptMessage;
type messages_NostrEncryptedMessage = NostrEncryptedMessage;
type messages_NostrDecryptMessage = NostrDecryptMessage;
type messages_NostrDecryptedMessage = NostrDecryptedMessage;
type messages_PolkadotGetAddress = PolkadotGetAddress;
type messages_PolkadotAddress = PolkadotAddress;
type messages_PolkadotSignTx = PolkadotSignTx;
type messages_PolkadotSignedTx = PolkadotSignedTx;
type messages_RippleGetAddress = RippleGetAddress;
type messages_RippleAddress = RippleAddress;
type messages_RipplePayment = RipplePayment;
type messages_RippleSignTx = RippleSignTx;
type messages_RippleSignedTx = RippleSignedTx;
type messages_ScdoGetAddress = ScdoGetAddress;
type messages_ScdoAddress = ScdoAddress;
type messages_ScdoSignTx = ScdoSignTx;
type messages_ScdoSignedTx = ScdoSignedTx;
type messages_ScdoTxAck = ScdoTxAck;
type messages_ScdoSignMessage = ScdoSignMessage;
type messages_ScdoSignedMessage = ScdoSignedMessage;
type messages_SolanaGetAddress = SolanaGetAddress;
type messages_SolanaAddress = SolanaAddress;
type messages_SolanaSignTx = SolanaSignTx;
type messages_SolanaSignedTx = SolanaSignedTx;
type messages_StarcoinGetAddress = StarcoinGetAddress;
type messages_StarcoinAddress = StarcoinAddress;
type messages_StarcoinGetPublicKey = StarcoinGetPublicKey;
type messages_StarcoinPublicKey = StarcoinPublicKey;
type messages_StarcoinSignTx = StarcoinSignTx;
type messages_StarcoinSignedTx = StarcoinSignedTx;
type messages_StarcoinSignMessage = StarcoinSignMessage;
type messages_StarcoinMessageSignature = StarcoinMessageSignature;
type messages_StarcoinVerifyMessage = StarcoinVerifyMessage;
type messages_StellarAssetType = StellarAssetType;
declare const messages_StellarAssetType: typeof StellarAssetType;
type messages_StellarAsset = StellarAsset;
type messages_StellarGetAddress = StellarGetAddress;
type messages_StellarAddress = StellarAddress;
type messages_StellarMemoType = StellarMemoType;
declare const messages_StellarMemoType: typeof StellarMemoType;
type messages_StellarSignTx = StellarSignTx;
type messages_StellarTxOpRequest = StellarTxOpRequest;
type messages_StellarPaymentOp = StellarPaymentOp;
type messages_StellarCreateAccountOp = StellarCreateAccountOp;
type messages_StellarPathPaymentStrictReceiveOp = StellarPathPaymentStrictReceiveOp;
type messages_StellarPathPaymentStrictSendOp = StellarPathPaymentStrictSendOp;
type messages_StellarManageSellOfferOp = StellarManageSellOfferOp;
type messages_StellarManageBuyOfferOp = StellarManageBuyOfferOp;
type messages_StellarCreatePassiveSellOfferOp = StellarCreatePassiveSellOfferOp;
type messages_StellarSignerType = StellarSignerType;
declare const messages_StellarSignerType: typeof StellarSignerType;
type messages_StellarSetOptionsOp = StellarSetOptionsOp;
type messages_StellarChangeTrustOp = StellarChangeTrustOp;
type messages_StellarAllowTrustOp = StellarAllowTrustOp;
type messages_StellarAccountMergeOp = StellarAccountMergeOp;
type messages_StellarManageDataOp = StellarManageDataOp;
type messages_StellarBumpSequenceOp = StellarBumpSequenceOp;
type messages_StellarSignedTx = StellarSignedTx;
type messages_SuiGetAddress = SuiGetAddress;
type messages_SuiAddress = SuiAddress;
type messages_SuiSignTx = SuiSignTx;
type messages_SuiSignedTx = SuiSignedTx;
type messages_SuiTxRequest = SuiTxRequest;
type messages_SuiTxAck = SuiTxAck;
type messages_SuiSignMessage = SuiSignMessage;
type messages_SuiMessageSignature = SuiMessageSignature;
type messages_TezosGetAddress = TezosGetAddress;
type messages_TezosAddress = TezosAddress;
type messages_TezosGetPublicKey = TezosGetPublicKey;
type messages_TezosPublicKey = TezosPublicKey;
type messages_TezosContractType = TezosContractType;
declare const messages_TezosContractType: typeof TezosContractType;
type messages_TezosContractID = TezosContractID;
type messages_TezosRevealOp = TezosRevealOp;
type messages_TezosManagerTransfer = TezosManagerTransfer;
type messages_TezosParametersManager = TezosParametersManager;
type messages_TezosTransactionOp = TezosTransactionOp;
type messages_TezosOriginationOp = TezosOriginationOp;
type messages_TezosDelegationOp = TezosDelegationOp;
type messages_TezosProposalOp = TezosProposalOp;
type messages_TezosBallotType = TezosBallotType;
declare const messages_TezosBallotType: typeof TezosBallotType;
type messages_TezosBallotOp = TezosBallotOp;
type messages_TezosSignTx = TezosSignTx;
type messages_TezosSignedTx = TezosSignedTx;
type messages_TonWalletVersion = TonWalletVersion;
declare const messages_TonWalletVersion: typeof TonWalletVersion;
type messages_TonWorkChain = TonWorkChain;
declare const messages_TonWorkChain: typeof TonWorkChain;
type messages_TonGetAddress = TonGetAddress;
type messages_TonAddress = TonAddress;
type messages_TonSignMessage = TonSignMessage;
type messages_TonSignedMessage = TonSignedMessage;
type messages_TonSignProof = TonSignProof;
type messages_TonSignedProof = TonSignedProof;
type messages_TronGetAddress = TronGetAddress;
type messages_TronAddress = TronAddress;
type messages_TronTransferContract = TronTransferContract;
type messages_TronTriggerSmartContract = TronTriggerSmartContract;
type messages_TronResourceCode = TronResourceCode;
declare const messages_TronResourceCode: typeof TronResourceCode;
type messages_TronFreezeBalanceContract = TronFreezeBalanceContract;
type messages_TronUnfreezeBalanceContract = TronUnfreezeBalanceContract;
type messages_TronWithdrawBalanceContract = TronWithdrawBalanceContract;
type messages_TronFreezeBalanceV2Contract = TronFreezeBalanceV2Contract;
type messages_TronUnfreezeBalanceV2Contract = TronUnfreezeBalanceV2Contract;
type messages_TronWithdrawExpireUnfreezeContract = TronWithdrawExpireUnfreezeContract;
type messages_TronDelegateResourceContract = TronDelegateResourceContract;
type messages_TronUnDelegateResourceContract = TronUnDelegateResourceContract;
type messages_TronContract = TronContract;
type messages_TronSignTx = TronSignTx;
type messages_TronSignedTx = TronSignedTx;
type messages_TronSignMessage = TronSignMessage;
type messages_TronMessageSignature = TronMessageSignature;
type messages_facotry = facotry;
type messages_CommandFlags = CommandFlags;
declare const messages_CommandFlags: typeof CommandFlags;
type messages_MessageType = MessageType;
type messages_MessageKey = MessageKey;
type messages_MessageResponse<T extends MessageKey> = MessageResponse<T>;
type messages_TypedCall = TypedCall;
declare namespace messages {
  export {
    messages_UintType as UintType,
    messages_AlephiumGetAddress as AlephiumGetAddress,
    messages_AlephiumAddress as AlephiumAddress,
    messages_AlephiumSignTx as AlephiumSignTx,
    messages_AlephiumSignedTx as AlephiumSignedTx,
    messages_AlephiumTxRequest as AlephiumTxRequest,
    messages_AlephiumTxAck as AlephiumTxAck,
    messages_AlephiumBytecodeRequest as AlephiumBytecodeRequest,
    messages_AlephiumBytecodeAck as AlephiumBytecodeAck,
    messages_AlephiumSignMessage as AlephiumSignMessage,
    messages_AlephiumMessageSignature as AlephiumMessageSignature,
    messages_AlgorandGetAddress as AlgorandGetAddress,
    messages_AlgorandAddress as AlgorandAddress,
    messages_AlgorandSignTx as AlgorandSignTx,
    messages_AlgorandSignedTx as AlgorandSignedTx,
    messages_AptosGetAddress as AptosGetAddress,
    messages_AptosAddress as AptosAddress,
    messages_AptosSignTx as AptosSignTx,
    messages_AptosSignedTx as AptosSignedTx,
    messages_AptosMessagePayload as AptosMessagePayload,
    messages_AptosSignMessage as AptosSignMessage,
    messages_AptosMessageSignature as AptosMessageSignature,
    messages_BinanceGetAddress as BinanceGetAddress,
    messages_BinanceAddress as BinanceAddress,
    messages_BinanceGetPublicKey as BinanceGetPublicKey,
    messages_BinancePublicKey as BinancePublicKey,
    messages_BinanceSignTx as BinanceSignTx,
    messages_BinanceTxRequest as BinanceTxRequest,
    messages_BinanceCoin as BinanceCoin,
    messages_BinanceInputOutput as BinanceInputOutput,
    messages_BinanceTransferMsg as BinanceTransferMsg,
    messages_BinanceOrderType as BinanceOrderType,
    messages_BinanceOrderSide as BinanceOrderSide,
    messages_BinanceTimeInForce as BinanceTimeInForce,
    messages_BinanceOrderMsg as BinanceOrderMsg,
    messages_BinanceCancelMsg as BinanceCancelMsg,
    messages_BinanceSignedTx as BinanceSignedTx,
    messages_Enum_InputScriptType as Enum_InputScriptType,
    messages_InputScriptType as InputScriptType,
    messages_Enum_OutputScriptType as Enum_OutputScriptType,
    messages_OutputScriptType as OutputScriptType,
    messages_DecredStakingSpendType as DecredStakingSpendType,
    messages_AmountUnit as AmountUnit,
    messages_HDNodeType as HDNodeType,
    messages_HDNodePathType as HDNodePathType,
    messages_MultisigRedeemScriptType as MultisigRedeemScriptType,
    messages_GetPublicKey as GetPublicKey,
    messages_PublicKey as PublicKey,
    messages_GetAddress as GetAddress,
    messages_Address as Address,
    messages_GetOwnershipId as GetOwnershipId,
    messages_OwnershipId as OwnershipId,
    messages_SignMessage as SignMessage,
    messages_MessageSignature as MessageSignature,
    messages_VerifyMessage as VerifyMessage,
    messages_SignTx as SignTx,
    messages_Enum_RequestType as Enum_RequestType,
    messages_RequestType as RequestType,
    messages_TxRequestDetailsType as TxRequestDetailsType,
    messages_TxRequestSerializedType as TxRequestSerializedType,
    messages_TxRequest as TxRequest,
    messages_InternalInputScriptType as InternalInputScriptType,
    messages_TxInputType as TxInputType,
    messages_TxInput as TxInput,
    messages_TxOutputBinType as TxOutputBinType,
    messages_ChangeOutputScriptType as ChangeOutputScriptType,
    messages_TxOutputType as TxOutputType,
    messages_TxOutput as TxOutput,
    messages_PrevTx as PrevTx,
    messages_PrevInput as PrevInput,
    messages_PrevOutput as PrevOutput,
    messages_TxAckResponse as TxAckResponse,
    messages_TxAck as TxAck,
    messages_TxAckInputWrapper as TxAckInputWrapper,
    messages_TxAckInput as TxAckInput,
    messages_TxAckOutputWrapper as TxAckOutputWrapper,
    messages_TxAckOutput as TxAckOutput,
    messages_TxAckPrevMeta as TxAckPrevMeta,
    messages_TxAckPrevInputWrapper as TxAckPrevInputWrapper,
    messages_TxAckPrevInput as TxAckPrevInput,
    messages_TxAckPrevOutputWrapper as TxAckPrevOutputWrapper,
    messages_TxAckPrevOutput as TxAckPrevOutput,
    messages_TxAckPrevExtraDataWrapper as TxAckPrevExtraDataWrapper,
    messages_TxAckPrevExtraData as TxAckPrevExtraData,
    messages_GetOwnershipProof as GetOwnershipProof,
    messages_OwnershipProof as OwnershipProof,
    messages_AuthorizeCoinJoin as AuthorizeCoinJoin,
    messages_BIP32Address as BIP32Address,
    messages_GetPublicKeyMultiple as GetPublicKeyMultiple,
    messages_PublicKeyMultiple as PublicKeyMultiple,
    messages_SignPsbt as SignPsbt,
    messages_SignedPsbt as SignedPsbt,
    messages_FirmwareErase as FirmwareErase,
    messages_FirmwareRequest as FirmwareRequest,
    messages_FirmwareUpload as FirmwareUpload,
    messages_SelfTest as SelfTest,
    messages_FirmwareErase_ex as FirmwareErase_ex,
    messages_RebootType as RebootType,
    messages_Reboot as Reboot,
    messages_FirmwareUpdateEmmc as FirmwareUpdateEmmc,
    messages_CardanoDerivationType as CardanoDerivationType,
    messages_CardanoAddressType as CardanoAddressType,
    messages_CardanoNativeScriptType as CardanoNativeScriptType,
    messages_CardanoNativeScriptHashDisplayFormat as CardanoNativeScriptHashDisplayFormat,
    messages_CardanoTxOutputSerializationFormat as CardanoTxOutputSerializationFormat,
    messages_CardanoCertificateType as CardanoCertificateType,
    messages_CardanoPoolRelayType as CardanoPoolRelayType,
    messages_CardanoTxAuxiliaryDataSupplementType as CardanoTxAuxiliaryDataSupplementType,
    messages_CardanoGovernanceRegistrationFormat as CardanoGovernanceRegistrationFormat,
    messages_CardanoTxSigningMode as CardanoTxSigningMode,
    messages_CardanoTxWitnessType as CardanoTxWitnessType,
    messages_CardanoBlockchainPointerType as CardanoBlockchainPointerType,
    messages_CardanoNativeScript as CardanoNativeScript,
    messages_CardanoGetNativeScriptHash as CardanoGetNativeScriptHash,
    messages_CardanoNativeScriptHash as CardanoNativeScriptHash,
    messages_CardanoAddressParametersType as CardanoAddressParametersType,
    messages_CardanoGetAddress as CardanoGetAddress,
    messages_CardanoAddress as CardanoAddress,
    messages_CardanoGetPublicKey as CardanoGetPublicKey,
    messages_CardanoPublicKey as CardanoPublicKey,
    messages_CardanoSignTxInit as CardanoSignTxInit,
    messages_CardanoTxInput as CardanoTxInput,
    messages_CardanoTxOutput as CardanoTxOutput,
    messages_CardanoAssetGroup as CardanoAssetGroup,
    messages_CardanoToken as CardanoToken,
    messages_CardanoTxInlineDatumChunk as CardanoTxInlineDatumChunk,
    messages_CardanoTxReferenceScriptChunk as CardanoTxReferenceScriptChunk,
    messages_CardanoPoolOwner as CardanoPoolOwner,
    messages_CardanoPoolRelayParameters as CardanoPoolRelayParameters,
    messages_CardanoPoolMetadataType as CardanoPoolMetadataType,
    messages_CardanoPoolParametersType as CardanoPoolParametersType,
    messages_CardanoTxCertificate as CardanoTxCertificate,
    messages_CardanoTxWithdrawal as CardanoTxWithdrawal,
    messages_CardanoGovernanceRegistrationDelegation as CardanoGovernanceRegistrationDelegation,
    messages_CardanoGovernanceRegistrationParametersType as CardanoGovernanceRegistrationParametersType,
    messages_CardanoTxAuxiliaryData as CardanoTxAuxiliaryData,
    messages_CardanoTxMint as CardanoTxMint,
    messages_CardanoTxCollateralInput as CardanoTxCollateralInput,
    messages_CardanoTxRequiredSigner as CardanoTxRequiredSigner,
    messages_CardanoTxReferenceInput as CardanoTxReferenceInput,
    messages_CardanoTxItemAck as CardanoTxItemAck,
    messages_CardanoTxAuxiliaryDataSupplement as CardanoTxAuxiliaryDataSupplement,
    messages_CardanoTxWitnessRequest as CardanoTxWitnessRequest,
    messages_CardanoTxWitnessResponse as CardanoTxWitnessResponse,
    messages_CardanoTxHostAck as CardanoTxHostAck,
    messages_CardanoTxBodyHash as CardanoTxBodyHash,
    messages_CardanoSignTxFinished as CardanoSignTxFinished,
    messages_CardanoSignMessage as CardanoSignMessage,
    messages_CardanoMessageSignature as CardanoMessageSignature,
    messages_Success as Success,
    messages_FailureType as FailureType,
    messages_Failure as Failure,
    messages_Enum_ButtonRequestType as Enum_ButtonRequestType,
    messages_ButtonRequestType as ButtonRequestType,
    messages_ButtonRequest as ButtonRequest,
    messages_ButtonAck as ButtonAck,
    messages_Enum_PinMatrixRequestType as Enum_PinMatrixRequestType,
    messages_PinMatrixRequestType as PinMatrixRequestType,
    messages_PinMatrixRequest as PinMatrixRequest,
    messages_PinMatrixAck as PinMatrixAck,
    messages_PassphraseRequest as PassphraseRequest,
    messages_PassphraseAck as PassphraseAck,
    messages_Deprecated_PassphraseStateRequest as Deprecated_PassphraseStateRequest,
    messages_Deprecated_PassphraseStateAck as Deprecated_PassphraseStateAck,
    messages_BixinPinInputOnDevice as BixinPinInputOnDevice,
    messages_ConfluxGetAddress as ConfluxGetAddress,
    messages_ConfluxAddress as ConfluxAddress,
    messages_ConfluxSignTx as ConfluxSignTx,
    messages_ConfluxTxRequest as ConfluxTxRequest,
    messages_ConfluxTxAck as ConfluxTxAck,
    messages_ConfluxSignMessage as ConfluxSignMessage,
    messages_ConfluxMessageSignature as ConfluxMessageSignature,
    messages_ConfluxSignMessageCIP23 as ConfluxSignMessageCIP23,
    messages_CosmosGetAddress as CosmosGetAddress,
    messages_CosmosAddress as CosmosAddress,
    messages_CosmosSignTx as CosmosSignTx,
    messages_CosmosSignedTx as CosmosSignedTx,
    messages_CipherKeyValue as CipherKeyValue,
    messages_CipheredKeyValue as CipheredKeyValue,
    messages_IdentityType as IdentityType,
    messages_SignIdentity as SignIdentity,
    messages_SignedIdentity as SignedIdentity,
    messages_GetECDHSessionKey as GetECDHSessionKey,
    messages_ECDHSessionKey as ECDHSessionKey,
    messages_Path as Path,
    messages_BatchGetPublickeys as BatchGetPublickeys,
    messages_EcdsaPublicKeys as EcdsaPublicKeys,
    messages_DnxGetAddress as DnxGetAddress,
    messages_DnxAddress as DnxAddress,
    messages_DnxSignTx as DnxSignTx,
    messages_DnxTxKey as DnxTxKey,
    messages_DnxComputedKeyImage as DnxComputedKeyImage,
    messages_DnxInputRequest as DnxInputRequest,
    messages_DnxInputAck as DnxInputAck,
    messages_DnxRTSigsRequest as DnxRTSigsRequest,
    messages_DnxSignedTx as DnxSignedTx,
    messages_EmmcFixPermission as EmmcFixPermission,
    messages_EmmcPath as EmmcPath,
    messages_EmmcPathInfo as EmmcPathInfo,
    messages_EmmcFile as EmmcFile,
    messages_EmmcFileRead as EmmcFileRead,
    messages_EmmcFileWrite as EmmcFileWrite,
    messages_EmmcFileDelete as EmmcFileDelete,
    messages_EmmcDir as EmmcDir,
    messages_EmmcDirList as EmmcDirList,
    messages_EmmcDirMake as EmmcDirMake,
    messages_EmmcDirRemove as EmmcDirRemove,
    messages_EosGetPublicKey as EosGetPublicKey,
    messages_EosPublicKey as EosPublicKey,
    messages_EosTxHeader as EosTxHeader,
    messages_EosSignTx as EosSignTx,
    messages_EosTxActionRequest as EosTxActionRequest,
    messages_EosAsset as EosAsset,
    messages_EosPermissionLevel as EosPermissionLevel,
    messages_EosAuthorizationKey as EosAuthorizationKey,
    messages_EosAuthorizationAccount as EosAuthorizationAccount,
    messages_EosAuthorizationWait as EosAuthorizationWait,
    messages_EosAuthorization as EosAuthorization,
    messages_EosActionCommon as EosActionCommon,
    messages_EosActionTransfer as EosActionTransfer,
    messages_EosActionDelegate as EosActionDelegate,
    messages_EosActionUndelegate as EosActionUndelegate,
    messages_EosActionRefund as EosActionRefund,
    messages_EosActionBuyRam as EosActionBuyRam,
    messages_EosActionBuyRamBytes as EosActionBuyRamBytes,
    messages_EosActionSellRam as EosActionSellRam,
    messages_EosActionVoteProducer as EosActionVoteProducer,
    messages_EosActionUpdateAuth as EosActionUpdateAuth,
    messages_EosActionDeleteAuth as EosActionDeleteAuth,
    messages_EosActionLinkAuth as EosActionLinkAuth,
    messages_EosActionUnlinkAuth as EosActionUnlinkAuth,
    messages_EosActionNewAccount as EosActionNewAccount,
    messages_EosActionUnknown as EosActionUnknown,
    messages_EosTxActionAck as EosTxActionAck,
    messages_EosSignedTx as EosSignedTx,
    messages_EthereumDefinitionType as EthereumDefinitionType,
    messages_EthereumNetworkInfo as EthereumNetworkInfo,
    messages_EthereumTokenInfo as EthereumTokenInfo,
    messages_EthereumDefinitions as EthereumDefinitions,
    messages_EthereumSignTypedDataChargerWallet as EthereumSignTypedDataChargerWallet,
    messages_EthereumTypedDataStructRequestChargerWallet as EthereumTypedDataStructRequestChargerWallet,
    messages_EthereumStructMemberChargerWallet as EthereumStructMemberChargerWallet,
    messages_EthereumFieldTypeChargerWallet as EthereumFieldTypeChargerWallet,
    messages_EthereumDataTypeChargerWallet as EthereumDataTypeChargerWallet,
    messages_EthereumTypedDataStructAckChargerWallet as EthereumTypedDataStructAckChargerWallet,
    messages_EthereumTypedDataValueRequestChargerWallet as EthereumTypedDataValueRequestChargerWallet,
    messages_EthereumTypedDataValueAckChargerWallet as EthereumTypedDataValueAckChargerWallet,
    messages_EthereumSignTypedData as EthereumSignTypedData,
    messages_EthereumTypedDataStructRequest as EthereumTypedDataStructRequest,
    messages_EthereumDataType as EthereumDataType,
    messages_EthereumFieldType as EthereumFieldType,
    messages_EthereumStructMember as EthereumStructMember,
    messages_EthereumTypedDataStructAck as EthereumTypedDataStructAck,
    messages_EthereumTypedDataValueRequest as EthereumTypedDataValueRequest,
    messages_EthereumTypedDataValueAck as EthereumTypedDataValueAck,
    messages_EthereumGetPublicKeyChargerWallet as EthereumGetPublicKeyChargerWallet,
    messages_EthereumPublicKeyChargerWallet as EthereumPublicKeyChargerWallet,
    messages_EthereumGetAddressChargerWallet as EthereumGetAddressChargerWallet,
    messages_EthereumAddressChargerWallet as EthereumAddressChargerWallet,
    messages_EthereumSignTxChargerWallet as EthereumSignTxChargerWallet,
    messages_EthereumAccessListChargerWallet as EthereumAccessListChargerWallet,
    messages_EthereumSignTxEIP1559ChargerWallet as EthereumSignTxEIP1559ChargerWallet,
    messages_EthereumTxRequestChargerWallet as EthereumTxRequestChargerWallet,
    messages_EthereumTxAckChargerWallet as EthereumTxAckChargerWallet,
    messages_EthereumSignMessageChargerWallet as EthereumSignMessageChargerWallet,
    messages_EthereumMessageSignatureChargerWallet as EthereumMessageSignatureChargerWallet,
    messages_EthereumVerifyMessageChargerWallet as EthereumVerifyMessageChargerWallet,
    messages_EthereumSignTypedHashChargerWallet as EthereumSignTypedHashChargerWallet,
    messages_EthereumTypedDataSignatureChargerWallet as EthereumTypedDataSignatureChargerWallet,
    messages_EthereumSignMessageEIP712 as EthereumSignMessageEIP712,
    messages_EthereumGetPublicKey as EthereumGetPublicKey,
    messages_EthereumPublicKey as EthereumPublicKey,
    messages_EthereumGetAddress as EthereumGetAddress,
    messages_EthereumAddress as EthereumAddress,
    messages_EthereumSignTx as EthereumSignTx,
    messages_EthereumAccessList as EthereumAccessList,
    messages_EthereumSignTxEIP1559 as EthereumSignTxEIP1559,
    messages_EthereumTxRequest as EthereumTxRequest,
    messages_EthereumTxAck as EthereumTxAck,
    messages_EthereumSignMessage as EthereumSignMessage,
    messages_EthereumMessageSignature as EthereumMessageSignature,
    messages_EthereumVerifyMessage as EthereumVerifyMessage,
    messages_EthereumSignTypedHash as EthereumSignTypedHash,
    messages_EthereumTypedDataSignature as EthereumTypedDataSignature,
    messages_FilecoinGetAddress as FilecoinGetAddress,
    messages_FilecoinAddress as FilecoinAddress,
    messages_FilecoinSignTx as FilecoinSignTx,
    messages_FilecoinSignedTx as FilecoinSignedTx,
    messages_KaspaGetAddress as KaspaGetAddress,
    messages_KaspaAddress as KaspaAddress,
    messages_KaspaSignTx as KaspaSignTx,
    messages_KaspaTxInputRequest as KaspaTxInputRequest,
    messages_KaspaTxInputAck as KaspaTxInputAck,
    messages_KaspaSignedTx as KaspaSignedTx,
    messages_LnurlAuth as LnurlAuth,
    messages_LnurlAuthResp as LnurlAuthResp,
    messages_Enum_BackupType as Enum_BackupType,
    messages_BackupType as BackupType,
    messages_Enum_SafetyCheckLevel as Enum_SafetyCheckLevel,
    messages_SafetyCheckLevel as SafetyCheckLevel,
    messages_Initialize as Initialize,
    messages_GetFeatures as GetFeatures,
    messages_ChargerwalletGetFeatures as ChargerwalletGetFeatures,
    messages_ChargerWalletDeviceType as ChargerWalletDeviceType,
    messages_ChargerWalletSeType as ChargerWalletSeType,
    messages_ChargerWalletSEState as ChargerWalletSEState,
    messages_Enum_Capability as Enum_Capability,
    messages_Capability as Capability,
    messages_Features as Features,
    messages_ChargerwalletFeatures as ChargerwalletFeatures,
    messages_LockDevice as LockDevice,
    messages_EndSession as EndSession,
    messages_ExportType as ExportType,
    messages_ApplySettings as ApplySettings,
    messages_ApplyFlags as ApplyFlags,
    messages_ChangePin as ChangePin,
    messages_ChangeWipeCode as ChangeWipeCode,
    messages_SdProtectOperationType as SdProtectOperationType,
    messages_SdProtect as SdProtect,
    messages_Ping as Ping,
    messages_Cancel as Cancel,
    messages_GetEntropy as GetEntropy,
    messages_Entropy as Entropy,
    messages_WipeDevice as WipeDevice,
    messages_ResetDevice as ResetDevice,
    messages_BackupDevice as BackupDevice,
    messages_EntropyRequest as EntropyRequest,
    messages_EntropyAck as EntropyAck,
    messages_RecoveryDeviceType as RecoveryDeviceType,
    messages_RecoveryDevice as RecoveryDevice,
    messages_Enum_WordRequestType as Enum_WordRequestType,
    messages_WordRequestType as WordRequestType,
    messages_WordRequest as WordRequest,
    messages_WordAck as WordAck,
    messages_SetU2FCounter as SetU2FCounter,
    messages_GetNextU2FCounter as GetNextU2FCounter,
    messages_NextU2FCounter as NextU2FCounter,
    messages_DoPreauthorized as DoPreauthorized,
    messages_PreauthorizedRequest as PreauthorizedRequest,
    messages_CancelAuthorization as CancelAuthorization,
    messages_SeedRequestType as SeedRequestType,
    messages_BixinSeedOperate as BixinSeedOperate,
    messages_BixinMessageSE as BixinMessageSE,
    messages_BixinOutMessageSE as BixinOutMessageSE,
    messages_DeviceBackToBoot as DeviceBackToBoot,
    messages_BixinBackupRequest as BixinBackupRequest,
    messages_BixinBackupAck as BixinBackupAck,
    messages_BixinRestoreRequest as BixinRestoreRequest,
    messages_BixinRestoreAck as BixinRestoreAck,
    messages_BixinVerifyDeviceRequest as BixinVerifyDeviceRequest,
    messages_BixinVerifyDeviceAck as BixinVerifyDeviceAck,
    messages_WL_OperationType as WL_OperationType,
    messages_BixinWhiteListRequest as BixinWhiteListRequest,
    messages_BixinWhiteListAck as BixinWhiteListAck,
    messages_BixinLoadDevice as BixinLoadDevice,
    messages_BixinBackupDevice as BixinBackupDevice,
    messages_BixinBackupDeviceAck as BixinBackupDeviceAck,
    messages_DeviceInfoSettings as DeviceInfoSettings,
    messages_GetDeviceInfo as GetDeviceInfo,
    messages_DeviceInfo as DeviceInfo,
    messages_ReadSEPublicKey as ReadSEPublicKey,
    messages_SEPublicKey as SEPublicKey,
    messages_WriteSEPublicCert as WriteSEPublicCert,
    messages_ReadSEPublicCert as ReadSEPublicCert,
    messages_SEPublicCert as SEPublicCert,
    messages_SpiFlashWrite as SpiFlashWrite,
    messages_SpiFlashRead as SpiFlashRead,
    messages_SpiFlashData as SpiFlashData,
    messages_SESignMessage as SESignMessage,
    messages_SEMessageSignature as SEMessageSignature,
    messages_ResourceType as ResourceType,
    messages_ResourceUpload as ResourceUpload,
    messages_ZoomRequest as ZoomRequest,
    messages_ResourceRequest as ResourceRequest,
    messages_ResourceAck as ResourceAck,
    messages_ResourceUpdate as ResourceUpdate,
    messages_NFTWriteInfo as NFTWriteInfo,
    messages_NFTWriteData as NFTWriteData,
    messages_RebootToBootloader as RebootToBootloader,
    messages_RebootToBoardloader as RebootToBoardloader,
    messages_ListResDir as ListResDir,
    messages_FileInfo as FileInfo,
    messages_FileInfoList as FileInfoList,
    messages_DeviceEraseSector as DeviceEraseSector,
    messages_MoneroRctKeyPublic as MoneroRctKeyPublic,
    messages_MoneroOutputEntry as MoneroOutputEntry,
    messages_MoneroMultisigKLRki as MoneroMultisigKLRki,
    messages_MoneroTransactionSourceEntry as MoneroTransactionSourceEntry,
    messages_MoneroAccountPublicAddress as MoneroAccountPublicAddress,
    messages_MoneroTransactionDestinationEntry as MoneroTransactionDestinationEntry,
    messages_MoneroTransactionRsigData as MoneroTransactionRsigData,
    messages_MoneroGetAddress as MoneroGetAddress,
    messages_MoneroAddress as MoneroAddress,
    messages_MoneroGetWatchKey as MoneroGetWatchKey,
    messages_MoneroWatchKey as MoneroWatchKey,
    messages_MoneroTransactionData as MoneroTransactionData,
    messages_MoneroTransactionInitRequest as MoneroTransactionInitRequest,
    messages_MoneroTransactionInitAck as MoneroTransactionInitAck,
    messages_MoneroTransactionSetInputRequest as MoneroTransactionSetInputRequest,
    messages_MoneroTransactionSetInputAck as MoneroTransactionSetInputAck,
    messages_MoneroTransactionInputsPermutationRequest as MoneroTransactionInputsPermutationRequest,
    messages_MoneroTransactionInputsPermutationAck as MoneroTransactionInputsPermutationAck,
    messages_MoneroTransactionInputViniRequest as MoneroTransactionInputViniRequest,
    messages_MoneroTransactionInputViniAck as MoneroTransactionInputViniAck,
    messages_MoneroTransactionAllInputsSetRequest as MoneroTransactionAllInputsSetRequest,
    messages_MoneroTransactionAllInputsSetAck as MoneroTransactionAllInputsSetAck,
    messages_MoneroTransactionSetOutputRequest as MoneroTransactionSetOutputRequest,
    messages_MoneroTransactionSetOutputAck as MoneroTransactionSetOutputAck,
    messages_MoneroTransactionAllOutSetRequest as MoneroTransactionAllOutSetRequest,
    messages_MoneroRingCtSig as MoneroRingCtSig,
    messages_MoneroTransactionAllOutSetAck as MoneroTransactionAllOutSetAck,
    messages_MoneroTransactionSignInputRequest as MoneroTransactionSignInputRequest,
    messages_MoneroTransactionSignInputAck as MoneroTransactionSignInputAck,
    messages_MoneroTransactionFinalRequest as MoneroTransactionFinalRequest,
    messages_MoneroTransactionFinalAck as MoneroTransactionFinalAck,
    messages_MoneroSubAddressIndicesList as MoneroSubAddressIndicesList,
    messages_MoneroKeyImageExportInitRequest as MoneroKeyImageExportInitRequest,
    messages_MoneroKeyImageExportInitAck as MoneroKeyImageExportInitAck,
    messages_MoneroTransferDetails as MoneroTransferDetails,
    messages_MoneroKeyImageSyncStepRequest as MoneroKeyImageSyncStepRequest,
    messages_MoneroExportedKeyImage as MoneroExportedKeyImage,
    messages_MoneroKeyImageSyncStepAck as MoneroKeyImageSyncStepAck,
    messages_MoneroKeyImageSyncFinalRequest as MoneroKeyImageSyncFinalRequest,
    messages_MoneroKeyImageSyncFinalAck as MoneroKeyImageSyncFinalAck,
    messages_MoneroGetTxKeyRequest as MoneroGetTxKeyRequest,
    messages_MoneroGetTxKeyAck as MoneroGetTxKeyAck,
    messages_MoneroLiveRefreshStartRequest as MoneroLiveRefreshStartRequest,
    messages_MoneroLiveRefreshStartAck as MoneroLiveRefreshStartAck,
    messages_MoneroLiveRefreshStepRequest as MoneroLiveRefreshStepRequest,
    messages_MoneroLiveRefreshStepAck as MoneroLiveRefreshStepAck,
    messages_MoneroLiveRefreshFinalRequest as MoneroLiveRefreshFinalRequest,
    messages_MoneroLiveRefreshFinalAck as MoneroLiveRefreshFinalAck,
    messages_NearGetAddress as NearGetAddress,
    messages_NearAddress as NearAddress,
    messages_NearSignTx as NearSignTx,
    messages_NearSignedTx as NearSignedTx,
    messages_NEMGetAddress as NEMGetAddress,
    messages_NEMAddress as NEMAddress,
    messages_NEMTransactionCommon as NEMTransactionCommon,
    messages_NEMMosaic as NEMMosaic,
    messages_NEMTransfer as NEMTransfer,
    messages_NEMProvisionNamespace as NEMProvisionNamespace,
    messages_NEMMosaicLevy as NEMMosaicLevy,
    messages_NEMMosaicDefinition as NEMMosaicDefinition,
    messages_NEMMosaicCreation as NEMMosaicCreation,
    messages_NEMSupplyChangeType as NEMSupplyChangeType,
    messages_NEMMosaicSupplyChange as NEMMosaicSupplyChange,
    messages_NEMModificationType as NEMModificationType,
    messages_NEMCosignatoryModification as NEMCosignatoryModification,
    messages_NEMAggregateModification as NEMAggregateModification,
    messages_NEMImportanceTransferMode as NEMImportanceTransferMode,
    messages_NEMImportanceTransfer as NEMImportanceTransfer,
    messages_NEMSignTx as NEMSignTx,
    messages_NEMSignedTx as NEMSignedTx,
    messages_NEMDecryptMessage as NEMDecryptMessage,
    messages_NEMDecryptedMessage as NEMDecryptedMessage,
    messages_NervosGetAddress as NervosGetAddress,
    messages_NervosAddress as NervosAddress,
    messages_NervosSignTx as NervosSignTx,
    messages_NervosSignedTx as NervosSignedTx,
    messages_NervosTxRequest as NervosTxRequest,
    messages_NervosTxAck as NervosTxAck,
    messages_NexaGetAddress as NexaGetAddress,
    messages_NexaAddress as NexaAddress,
    messages_NexaSignTx as NexaSignTx,
    messages_NexaTxInputRequest as NexaTxInputRequest,
    messages_NexaTxInputAck as NexaTxInputAck,
    messages_NexaSignedTx as NexaSignedTx,
    messages_NostrGetPublicKey as NostrGetPublicKey,
    messages_NostrPublicKey as NostrPublicKey,
    messages_NostrSignEvent as NostrSignEvent,
    messages_NostrSignedEvent as NostrSignedEvent,
    messages_NostrSignSchnorr as NostrSignSchnorr,
    messages_NostrSignedSchnorr as NostrSignedSchnorr,
    messages_NostrEncryptMessage as NostrEncryptMessage,
    messages_NostrEncryptedMessage as NostrEncryptedMessage,
    messages_NostrDecryptMessage as NostrDecryptMessage,
    messages_NostrDecryptedMessage as NostrDecryptedMessage,
    messages_PolkadotGetAddress as PolkadotGetAddress,
    messages_PolkadotAddress as PolkadotAddress,
    messages_PolkadotSignTx as PolkadotSignTx,
    messages_PolkadotSignedTx as PolkadotSignedTx,
    messages_RippleGetAddress as RippleGetAddress,
    messages_RippleAddress as RippleAddress,
    messages_RipplePayment as RipplePayment,
    messages_RippleSignTx as RippleSignTx,
    messages_RippleSignedTx as RippleSignedTx,
    messages_ScdoGetAddress as ScdoGetAddress,
    messages_ScdoAddress as ScdoAddress,
    messages_ScdoSignTx as ScdoSignTx,
    messages_ScdoSignedTx as ScdoSignedTx,
    messages_ScdoTxAck as ScdoTxAck,
    messages_ScdoSignMessage as ScdoSignMessage,
    messages_ScdoSignedMessage as ScdoSignedMessage,
    messages_SolanaGetAddress as SolanaGetAddress,
    messages_SolanaAddress as SolanaAddress,
    messages_SolanaSignTx as SolanaSignTx,
    messages_SolanaSignedTx as SolanaSignedTx,
    messages_StarcoinGetAddress as StarcoinGetAddress,
    messages_StarcoinAddress as StarcoinAddress,
    messages_StarcoinGetPublicKey as StarcoinGetPublicKey,
    messages_StarcoinPublicKey as StarcoinPublicKey,
    messages_StarcoinSignTx as StarcoinSignTx,
    messages_StarcoinSignedTx as StarcoinSignedTx,
    messages_StarcoinSignMessage as StarcoinSignMessage,
    messages_StarcoinMessageSignature as StarcoinMessageSignature,
    messages_StarcoinVerifyMessage as StarcoinVerifyMessage,
    messages_StellarAssetType as StellarAssetType,
    messages_StellarAsset as StellarAsset,
    messages_StellarGetAddress as StellarGetAddress,
    messages_StellarAddress as StellarAddress,
    messages_StellarMemoType as StellarMemoType,
    messages_StellarSignTx as StellarSignTx,
    messages_StellarTxOpRequest as StellarTxOpRequest,
    messages_StellarPaymentOp as StellarPaymentOp,
    messages_StellarCreateAccountOp as StellarCreateAccountOp,
    messages_StellarPathPaymentStrictReceiveOp as StellarPathPaymentStrictReceiveOp,
    messages_StellarPathPaymentStrictSendOp as StellarPathPaymentStrictSendOp,
    messages_StellarManageSellOfferOp as StellarManageSellOfferOp,
    messages_StellarManageBuyOfferOp as StellarManageBuyOfferOp,
    messages_StellarCreatePassiveSellOfferOp as StellarCreatePassiveSellOfferOp,
    messages_StellarSignerType as StellarSignerType,
    messages_StellarSetOptionsOp as StellarSetOptionsOp,
    messages_StellarChangeTrustOp as StellarChangeTrustOp,
    messages_StellarAllowTrustOp as StellarAllowTrustOp,
    messages_StellarAccountMergeOp as StellarAccountMergeOp,
    messages_StellarManageDataOp as StellarManageDataOp,
    messages_StellarBumpSequenceOp as StellarBumpSequenceOp,
    messages_StellarSignedTx as StellarSignedTx,
    messages_SuiGetAddress as SuiGetAddress,
    messages_SuiAddress as SuiAddress,
    messages_SuiSignTx as SuiSignTx,
    messages_SuiSignedTx as SuiSignedTx,
    messages_SuiTxRequest as SuiTxRequest,
    messages_SuiTxAck as SuiTxAck,
    messages_SuiSignMessage as SuiSignMessage,
    messages_SuiMessageSignature as SuiMessageSignature,
    messages_TezosGetAddress as TezosGetAddress,
    messages_TezosAddress as TezosAddress,
    messages_TezosGetPublicKey as TezosGetPublicKey,
    messages_TezosPublicKey as TezosPublicKey,
    messages_TezosContractType as TezosContractType,
    messages_TezosContractID as TezosContractID,
    messages_TezosRevealOp as TezosRevealOp,
    messages_TezosManagerTransfer as TezosManagerTransfer,
    messages_TezosParametersManager as TezosParametersManager,
    messages_TezosTransactionOp as TezosTransactionOp,
    messages_TezosOriginationOp as TezosOriginationOp,
    messages_TezosDelegationOp as TezosDelegationOp,
    messages_TezosProposalOp as TezosProposalOp,
    messages_TezosBallotType as TezosBallotType,
    messages_TezosBallotOp as TezosBallotOp,
    messages_TezosSignTx as TezosSignTx,
    messages_TezosSignedTx as TezosSignedTx,
    messages_TonWalletVersion as TonWalletVersion,
    messages_TonWorkChain as TonWorkChain,
    messages_TonGetAddress as TonGetAddress,
    messages_TonAddress as TonAddress,
    messages_TonSignMessage as TonSignMessage,
    messages_TonSignedMessage as TonSignedMessage,
    messages_TonSignProof as TonSignProof,
    messages_TonSignedProof as TonSignedProof,
    messages_TronGetAddress as TronGetAddress,
    messages_TronAddress as TronAddress,
    messages_TronTransferContract as TronTransferContract,
    messages_TronTriggerSmartContract as TronTriggerSmartContract,
    messages_TronResourceCode as TronResourceCode,
    messages_TronFreezeBalanceContract as TronFreezeBalanceContract,
    messages_TronUnfreezeBalanceContract as TronUnfreezeBalanceContract,
    messages_TronWithdrawBalanceContract as TronWithdrawBalanceContract,
    messages_TronFreezeBalanceV2Contract as TronFreezeBalanceV2Contract,
    messages_TronUnfreezeBalanceV2Contract as TronUnfreezeBalanceV2Contract,
    messages_TronWithdrawExpireUnfreezeContract as TronWithdrawExpireUnfreezeContract,
    messages_TronDelegateResourceContract as TronDelegateResourceContract,
    messages_TronUnDelegateResourceContract as TronUnDelegateResourceContract,
    messages_TronContract as TronContract,
    messages_TronSignTx as TronSignTx,
    messages_TronSignedTx as TronSignedTx,
    messages_TronSignMessage as TronSignMessage,
    messages_TronMessageSignature as TronMessageSignature,
    messages_facotry as facotry,
    messages_CommandFlags as CommandFlags,
    messages_MessageType as MessageType,
    messages_MessageKey as MessageKey,
    messages_MessageResponse as MessageResponse,
    messages_TypedCall as TypedCall,
  };
}

declare function info(res: any): {
    version: string;
    configured: boolean;
};
declare function version(version: any): string;
declare function devices(res: any): Array<ChargerWalletDeviceInfoWithSession>;
declare function acquire(res: any): string;
declare function call(res: any): MessageFromChargerWallet;

declare const check_info: typeof info;
declare const check_version: typeof version;
declare const check_devices: typeof devices;
declare const check_acquire: typeof acquire;
declare const check_call: typeof call;
declare namespace check {
  export {
    check_info as info,
    check_version as version,
    check_devices as devices,
    check_acquire as acquire,
    check_call as call,
  };
}

declare const LogBlockCommand: Set<string>;

declare const MESSAGE_TOP_CHAR = 63;
declare const MESSAGE_HEADER_BYTE = 35;
declare const HEADER_SIZE: number;
declare const BUFFER_SIZE = 63;
declare const COMMON_HEADER_SIZE = 6;

declare const _default: {
    check: typeof check;
    buildOne: typeof buildOne;
    buildBuffers: (messages: protobuf.Root, name: string, data: Record<string, unknown>) => ByteBuffer[];
    buildEncodeBuffers: (messages: protobuf.Root, name: string, data: Record<string, unknown>) => Buffer[];
    receiveOne: typeof receiveOne;
    parseConfigure: typeof parseConfigure;
    decodeProtocol: typeof decodeProtocol;
};

export { AcquireInput, Address, AlephiumAddress, AlephiumBytecodeAck, AlephiumBytecodeRequest, AlephiumGetAddress, AlephiumMessageSignature, AlephiumSignMessage, AlephiumSignTx, AlephiumSignedTx, AlephiumTxAck, AlephiumTxRequest, AlgorandAddress, AlgorandGetAddress, AlgorandSignTx, AlgorandSignedTx, AmountUnit, ApplyFlags, ApplySettings, AptosAddress, AptosGetAddress, AptosMessagePayload, AptosMessageSignature, AptosSignMessage, AptosSignTx, AptosSignedTx, AuthorizeCoinJoin, BIP32Address, BUFFER_SIZE, BackupDevice, BackupType, BatchGetPublickeys, BinanceAddress, BinanceCancelMsg, BinanceCoin, BinanceGetAddress, BinanceGetPublicKey, BinanceInputOutput, BinanceOrderMsg, BinanceOrderSide, BinanceOrderType, BinancePublicKey, BinanceSignTx, BinanceSignedTx, BinanceTimeInForce, BinanceTransferMsg, BinanceTxRequest, BixinBackupAck, BixinBackupDevice, BixinBackupDeviceAck, BixinBackupRequest, BixinLoadDevice, BixinMessageSE, BixinOutMessageSE, BixinPinInputOnDevice, BixinRestoreAck, BixinRestoreRequest, BixinSeedOperate, BixinVerifyDeviceAck, BixinVerifyDeviceRequest, BixinWhiteListAck, BixinWhiteListRequest, ButtonAck, ButtonRequest, ButtonRequestType, COMMON_HEADER_SIZE, Cancel, CancelAuthorization, Capability, CardanoAddress, CardanoAddressParametersType, CardanoAddressType, CardanoAssetGroup, CardanoBlockchainPointerType, CardanoCertificateType, CardanoDerivationType, CardanoGetAddress, CardanoGetNativeScriptHash, CardanoGetPublicKey, CardanoGovernanceRegistrationDelegation, CardanoGovernanceRegistrationFormat, CardanoGovernanceRegistrationParametersType, CardanoMessageSignature, CardanoNativeScript, CardanoNativeScriptHash, CardanoNativeScriptHashDisplayFormat, CardanoNativeScriptType, CardanoPoolMetadataType, CardanoPoolOwner, CardanoPoolParametersType, CardanoPoolRelayParameters, CardanoPoolRelayType, CardanoPublicKey, CardanoSignMessage, CardanoSignTxFinished, CardanoSignTxInit, CardanoToken, CardanoTxAuxiliaryData, CardanoTxAuxiliaryDataSupplement, CardanoTxAuxiliaryDataSupplementType, CardanoTxBodyHash, CardanoTxCertificate, CardanoTxCollateralInput, CardanoTxHostAck, CardanoTxInlineDatumChunk, CardanoTxInput, CardanoTxItemAck, CardanoTxMint, CardanoTxOutput, CardanoTxOutputSerializationFormat, CardanoTxReferenceInput, CardanoTxReferenceScriptChunk, CardanoTxRequiredSigner, CardanoTxSigningMode, CardanoTxWithdrawal, CardanoTxWitnessRequest, CardanoTxWitnessResponse, CardanoTxWitnessType, ChangeOutputScriptType, ChangePin, ChangeWipeCode, CipherKeyValue, CipheredKeyValue, CommandFlags, ConfluxAddress, ConfluxGetAddress, ConfluxMessageSignature, ConfluxSignMessage, ConfluxSignMessageCIP23, ConfluxSignTx, ConfluxTxAck, ConfluxTxRequest, CosmosAddress, CosmosGetAddress, CosmosSignTx, CosmosSignedTx, DecredStakingSpendType, Deprecated_PassphraseStateAck, Deprecated_PassphraseStateRequest, DeviceBackToBoot, DeviceEraseSector, DeviceInfo, DeviceInfoSettings, DnxAddress, DnxComputedKeyImage, DnxGetAddress, DnxInputAck, DnxInputRequest, DnxRTSigsRequest, DnxSignTx, DnxSignedTx, DnxTxKey, DoPreauthorized, ECDHSessionKey, EcdsaPublicKeys, EmmcDir, EmmcDirList, EmmcDirMake, EmmcDirRemove, EmmcFile, EmmcFileDelete, EmmcFileRead, EmmcFileWrite, EmmcFixPermission, EmmcPath, EmmcPathInfo, EndSession, Entropy, EntropyAck, EntropyRequest, Enum_BackupType, Enum_ButtonRequestType, Enum_Capability, Enum_InputScriptType, Enum_OutputScriptType, Enum_PinMatrixRequestType, Enum_RequestType, Enum_SafetyCheckLevel, Enum_WordRequestType, EosActionBuyRam, EosActionBuyRamBytes, EosActionCommon, EosActionDelegate, EosActionDeleteAuth, EosActionLinkAuth, EosActionNewAccount, EosActionRefund, EosActionSellRam, EosActionTransfer, EosActionUndelegate, EosActionUnknown, EosActionUnlinkAuth, EosActionUpdateAuth, EosActionVoteProducer, EosAsset, EosAuthorization, EosAuthorizationAccount, EosAuthorizationKey, EosAuthorizationWait, EosGetPublicKey, EosPermissionLevel, EosPublicKey, EosSignTx, EosSignedTx, EosTxActionAck, EosTxActionRequest, EosTxHeader, EthereumAccessList, EthereumAccessListChargerWallet, EthereumAddress, EthereumAddressChargerWallet, EthereumDataType, EthereumDataTypeChargerWallet, EthereumDefinitionType, EthereumDefinitions, EthereumFieldType, EthereumFieldTypeChargerWallet, EthereumGetAddress, EthereumGetAddressChargerWallet, EthereumGetPublicKey, EthereumGetPublicKeyChargerWallet, EthereumMessageSignature, EthereumMessageSignatureChargerWallet, EthereumNetworkInfo, EthereumPublicKey, EthereumPublicKeyChargerWallet, EthereumSignMessage, EthereumSignMessageEIP712, EthereumSignMessageChargerWallet, EthereumSignTx, EthereumSignTxEIP1559, EthereumSignTxEIP1559ChargerWallet, EthereumSignTxChargerWallet, EthereumSignTypedData, EthereumSignTypedDataChargerWallet, EthereumSignTypedHash, EthereumSignTypedHashChargerWallet, EthereumStructMember, EthereumStructMemberChargerWallet, EthereumTokenInfo, EthereumTxAck, EthereumTxAckChargerWallet, EthereumTxRequest, EthereumTxRequestChargerWallet, EthereumTypedDataSignature, EthereumTypedDataSignatureChargerWallet, EthereumTypedDataStructAck, EthereumTypedDataStructAckChargerWallet, EthereumTypedDataStructRequest, EthereumTypedDataStructRequestChargerWallet, EthereumTypedDataValueAck, EthereumTypedDataValueAckChargerWallet, EthereumTypedDataValueRequest, EthereumTypedDataValueRequestChargerWallet, EthereumVerifyMessage, EthereumVerifyMessageChargerWallet, ExportType, Failure, FailureType, Features, FileInfo, FileInfoList, FilecoinAddress, FilecoinGetAddress, FilecoinSignTx, FilecoinSignedTx, FirmwareErase, FirmwareErase_ex, FirmwareRequest, FirmwareUpdateEmmc, FirmwareUpload, GetAddress, GetDeviceInfo, GetECDHSessionKey, GetEntropy, GetFeatures, GetNextU2FCounter, GetOwnershipId, GetOwnershipProof, GetPublicKey, GetPublicKeyMultiple, HDNodePathType, HDNodeType, HEADER_SIZE, IdentityType, Initialize, InputScriptType, InternalInputScriptType, KaspaAddress, KaspaGetAddress, KaspaSignTx, KaspaSignedTx, KaspaTxInputAck, KaspaTxInputRequest, ListResDir, LnurlAuth, LnurlAuthResp, LockDevice, LogBlockCommand, LowLevelDevice, LowlevelTransportSharedPlugin, MESSAGE_HEADER_BYTE, MESSAGE_TOP_CHAR, MessageFromChargerWallet, MessageKey, MessageResponse, MessageSignature, MessageType, messages as Messages, MoneroAccountPublicAddress, MoneroAddress, MoneroExportedKeyImage, MoneroGetAddress, MoneroGetTxKeyAck, MoneroGetTxKeyRequest, MoneroGetWatchKey, MoneroKeyImageExportInitAck, MoneroKeyImageExportInitRequest, MoneroKeyImageSyncFinalAck, MoneroKeyImageSyncFinalRequest, MoneroKeyImageSyncStepAck, MoneroKeyImageSyncStepRequest, MoneroLiveRefreshFinalAck, MoneroLiveRefreshFinalRequest, MoneroLiveRefreshStartAck, MoneroLiveRefreshStartRequest, MoneroLiveRefreshStepAck, MoneroLiveRefreshStepRequest, MoneroMultisigKLRki, MoneroOutputEntry, MoneroRctKeyPublic, MoneroRingCtSig, MoneroSubAddressIndicesList, MoneroTransactionAllInputsSetAck, MoneroTransactionAllInputsSetRequest, MoneroTransactionAllOutSetAck, MoneroTransactionAllOutSetRequest, MoneroTransactionData, MoneroTransactionDestinationEntry, MoneroTransactionFinalAck, MoneroTransactionFinalRequest, MoneroTransactionInitAck, MoneroTransactionInitRequest, MoneroTransactionInputViniAck, MoneroTransactionInputViniRequest, MoneroTransactionInputsPermutationAck, MoneroTransactionInputsPermutationRequest, MoneroTransactionRsigData, MoneroTransactionSetInputAck, MoneroTransactionSetInputRequest, MoneroTransactionSetOutputAck, MoneroTransactionSetOutputRequest, MoneroTransactionSignInputAck, MoneroTransactionSignInputRequest, MoneroTransactionSourceEntry, MoneroTransferDetails, MoneroWatchKey, MultisigRedeemScriptType, NEMAddress, NEMAggregateModification, NEMCosignatoryModification, NEMDecryptMessage, NEMDecryptedMessage, NEMGetAddress, NEMImportanceTransfer, NEMImportanceTransferMode, NEMModificationType, NEMMosaic, NEMMosaicCreation, NEMMosaicDefinition, NEMMosaicLevy, NEMMosaicSupplyChange, NEMProvisionNamespace, NEMSignTx, NEMSignedTx, NEMSupplyChangeType, NEMTransactionCommon, NEMTransfer, NFTWriteData, NFTWriteInfo, NearAddress, NearGetAddress, NearSignTx, NearSignedTx, NervosAddress, NervosGetAddress, NervosSignTx, NervosSignedTx, NervosTxAck, NervosTxRequest, NexaAddress, NexaGetAddress, NexaSignTx, NexaSignedTx, NexaTxInputAck, NexaTxInputRequest, NextU2FCounter, NostrDecryptMessage, NostrDecryptedMessage, NostrEncryptMessage, NostrEncryptedMessage, NostrGetPublicKey, NostrPublicKey, NostrSignEvent, NostrSignSchnorr, NostrSignedEvent, NostrSignedSchnorr, ChargerWalletDeviceInfo, ChargerWalletDeviceInfoWithSession, ChargerWalletDeviceType, ChargerWalletMobileDeviceInfo, ChargerWalletSEState, ChargerWalletSeType, ChargerwalletFeatures, ChargerwalletGetFeatures, OutputScriptType, OwnershipId, OwnershipProof, PassphraseAck, PassphraseRequest, Path, PinMatrixAck, PinMatrixRequest, PinMatrixRequestType, Ping, PolkadotAddress, PolkadotGetAddress, PolkadotSignTx, PolkadotSignedTx, PreauthorizedRequest, PrevInput, PrevOutput, PrevTx, PublicKey, PublicKeyMultiple, ReadSEPublicCert, ReadSEPublicKey, Reboot, RebootToBoardloader, RebootToBootloader, RebootType, RecoveryDevice, RecoveryDeviceType, RequestType, ResetDevice, ResourceAck, ResourceRequest, ResourceType, ResourceUpdate, ResourceUpload, RippleAddress, RippleGetAddress, RipplePayment, RippleSignTx, RippleSignedTx, SEMessageSignature, SEPublicCert, SEPublicKey, SESignMessage, SafetyCheckLevel, ScdoAddress, ScdoGetAddress, ScdoSignMessage, ScdoSignTx, ScdoSignedMessage, ScdoSignedTx, ScdoTxAck, SdProtect, SdProtectOperationType, SeedRequestType, SelfTest, SetU2FCounter, SignIdentity, SignMessage, SignPsbt, SignTx, SignedIdentity, SignedPsbt, SolanaAddress, SolanaGetAddress, SolanaSignTx, SolanaSignedTx, SpiFlashData, SpiFlashRead, SpiFlashWrite, StarcoinAddress, StarcoinGetAddress, StarcoinGetPublicKey, StarcoinMessageSignature, StarcoinPublicKey, StarcoinSignMessage, StarcoinSignTx, StarcoinSignedTx, StarcoinVerifyMessage, StellarAccountMergeOp, StellarAddress, StellarAllowTrustOp, StellarAsset, StellarAssetType, StellarBumpSequenceOp, StellarChangeTrustOp, StellarCreateAccountOp, StellarCreatePassiveSellOfferOp, StellarGetAddress, StellarManageBuyOfferOp, StellarManageDataOp, StellarManageSellOfferOp, StellarMemoType, StellarPathPaymentStrictReceiveOp, StellarPathPaymentStrictSendOp, StellarPaymentOp, StellarSetOptionsOp, StellarSignTx, StellarSignedTx, StellarSignerType, StellarTxOpRequest, Success, SuiAddress, SuiGetAddress, SuiMessageSignature, SuiSignMessage, SuiSignTx, SuiSignedTx, SuiTxAck, SuiTxRequest, TezosAddress, TezosBallotOp, TezosBallotType, TezosContractID, TezosContractType, TezosDelegationOp, TezosGetAddress, TezosGetPublicKey, TezosManagerTransfer, TezosOriginationOp, TezosParametersManager, TezosProposalOp, TezosPublicKey, TezosRevealOp, TezosSignTx, TezosSignedTx, TezosTransactionOp, TonAddress, TonGetAddress, TonSignMessage, TonSignProof, TonSignedMessage, TonSignedProof, TonWalletVersion, TonWorkChain, Transport, TronAddress, TronContract, TronDelegateResourceContract, TronFreezeBalanceContract, TronFreezeBalanceV2Contract, TronGetAddress, TronMessageSignature, TronResourceCode, TronSignMessage, TronSignTx, TronSignedTx, TronTransferContract, TronTriggerSmartContract, TronUnDelegateResourceContract, TronUnfreezeBalanceContract, TronUnfreezeBalanceV2Contract, TronWithdrawBalanceContract, TronWithdrawExpireUnfreezeContract, TxAck, TxAckInput, TxAckInputWrapper, TxAckOutput, TxAckOutputWrapper, TxAckPrevExtraData, TxAckPrevExtraDataWrapper, TxAckPrevInput, TxAckPrevInputWrapper, TxAckPrevMeta, TxAckPrevOutput, TxAckPrevOutputWrapper, TxAckResponse, TxInput, TxInputType, TxOutput, TxOutputBinType, TxOutputType, TxRequest, TxRequestDetailsType, TxRequestSerializedType, TypedCall, UintType, VerifyMessage, WL_OperationType, WipeDevice, WordAck, WordRequest, WordRequestType, WriteSEPublicCert, ZoomRequest, _default as default, facotry };
