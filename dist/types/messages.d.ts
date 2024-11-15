/// <reference types="node" />
export type UintType = string | number;
export type AlephiumGetAddress = {
    address_n: number[];
    show_display?: boolean;
    include_public_key?: boolean;
    target_group?: number;
};
export type AlephiumAddress = {
    address: string;
    public_key?: string;
    derived_path: number[];
};
export type AlephiumSignTx = {
    address_n: number[];
    data_initial_chunk: string;
    data_length?: number;
};
export type AlephiumSignedTx = {
    signature: string;
    address: string;
};
export type AlephiumTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
export type AlephiumTxAck = {
    data_chunk: string;
};
export type AlephiumBytecodeRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
export type AlephiumBytecodeAck = {
    bytecode_data: string;
};
export type AlephiumSignMessage = {
    address_n: number[];
    message?: string;
    message_type?: string;
};
export type AlephiumMessageSignature = {
    signature?: string;
    address?: string;
};
export type AlgorandGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type AlgorandAddress = {
    address?: string;
};
export type AlgorandSignTx = {
    address_n: number[];
    raw_tx: string;
};
export type AlgorandSignedTx = {
    signature: string;
};
export type AptosGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type AptosAddress = {
    address?: string;
};
export type AptosSignTx = {
    address_n: number[];
    raw_tx: string;
};
export type AptosSignedTx = {
    public_key: string;
    signature: string;
};
export type AptosMessagePayload = {
    address?: string;
    chain_id?: string;
    application?: string;
    nonce: string;
    message: string;
};
export type AptosSignMessage = {
    address_n: number[];
    payload: AptosMessagePayload;
};
export type AptosMessageSignature = {
    signature: string;
    address: string;
};
export type BinanceGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type BinanceAddress = {
    address: string;
};
export type BinanceGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type BinancePublicKey = {
    public_key: string;
};
export type BinanceSignTx = {
    address_n: number[];
    msg_count?: number;
    account_number?: number;
    chain_id?: string;
    memo?: string;
    sequence?: number;
    source?: number;
};
export type BinanceTxRequest = {};
export type BinanceCoin = {
    amount?: UintType;
    denom?: string;
};
export type BinanceInputOutput = {
    address?: string;
    coins: BinanceCoin[];
};
export type BinanceTransferMsg = {
    inputs: BinanceInputOutput[];
    outputs: BinanceInputOutput[];
};
export declare enum BinanceOrderType {
    OT_UNKNOWN = 0,
    MARKET = 1,
    LIMIT = 2,
    OT_RESERVED = 3
}
export declare enum BinanceOrderSide {
    SIDE_UNKNOWN = 0,
    BUY = 1,
    SELL = 2
}
export declare enum BinanceTimeInForce {
    TIF_UNKNOWN = 0,
    GTE = 1,
    TIF_RESERVED = 2,
    IOC = 3
}
export type BinanceOrderMsg = {
    id?: string;
    ordertype?: BinanceOrderType;
    price?: number;
    quantity?: number;
    sender?: string;
    side?: BinanceOrderSide;
    symbol?: string;
    timeinforce?: BinanceTimeInForce;
};
export type BinanceCancelMsg = {
    refid?: string;
    sender?: string;
    symbol?: string;
};
export type BinanceSignedTx = {
    signature: string;
    public_key: string;
};
export declare enum Enum_InputScriptType {
    SPENDADDRESS = 0,
    SPENDMULTISIG = 1,
    EXTERNAL = 2,
    SPENDWITNESS = 3,
    SPENDP2SHWITNESS = 4,
    SPENDTAPROOT = 5
}
export type InputScriptType = keyof typeof Enum_InputScriptType;
export declare enum Enum_OutputScriptType {
    PAYTOADDRESS = 0,
    PAYTOSCRIPTHASH = 1,
    PAYTOMULTISIG = 2,
    PAYTOOPRETURN = 3,
    PAYTOWITNESS = 4,
    PAYTOP2SHWITNESS = 5,
    PAYTOTAPROOT = 6
}
export type OutputScriptType = keyof typeof Enum_OutputScriptType;
export declare enum DecredStakingSpendType {
    SSGen = 0,
    SSRTX = 1
}
export declare enum AmountUnit {
    BITCOIN = 0,
    MILLIBITCOIN = 1,
    MICROBITCOIN = 2,
    SATOSHI = 3
}
export type HDNodeType = {
    depth: number;
    fingerprint: number;
    child_num: number;
    chain_code: string;
    private_key?: string;
    public_key: string;
};
export type HDNodePathType = {
    node: HDNodeType | string;
    address_n: number[];
};
export type MultisigRedeemScriptType = {
    pubkeys: HDNodePathType[];
    signatures: string[];
    m: number;
    nodes?: HDNodeType[];
    address_n?: number[];
};
export type GetPublicKey = {
    address_n: number[];
    ecdsa_curve_name?: string;
    show_display?: boolean;
    coin_name?: string;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
export type PublicKey = {
    node: HDNodeType;
    xpub: string;
    root_fingerprint?: number;
};
export type GetAddress = {
    address_n: number[];
    coin_name?: string;
    show_display?: boolean;
    multisig?: MultisigRedeemScriptType;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
export type Address = {
    address: string;
};
export type GetOwnershipId = {
    address_n: number[];
    coin_name?: string;
    multisig?: MultisigRedeemScriptType;
    script_type?: InputScriptType;
};
export type OwnershipId = {
    ownership_id: string;
};
export type SignMessage = {
    address_n: number[];
    message: string;
    coin_name?: string;
    script_type?: InputScriptType;
    no_script_type?: boolean;
    is_bip322_simple?: boolean;
};
export type MessageSignature = {
    address: string;
    signature: string;
};
export type VerifyMessage = {
    address: string;
    signature: string;
    message: string;
    coin_name?: string;
};
export type SignTx = {
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
export declare enum Enum_RequestType {
    TXINPUT = 0,
    TXOUTPUT = 1,
    TXMETA = 2,
    TXFINISHED = 3,
    TXEXTRADATA = 4,
    TXORIGINPUT = 5,
    TXORIGOUTPUT = 6
}
export type RequestType = keyof typeof Enum_RequestType;
export type TxRequestDetailsType = {
    request_index: number;
    tx_hash?: string;
    extra_data_len?: number;
    extra_data_offset?: number;
};
export type TxRequestSerializedType = {
    signature_index?: number;
    signature?: string;
    serialized_tx?: string;
};
export type TxRequest = {
    request_type: RequestType;
    details: TxRequestDetailsType;
    serialized?: TxRequestSerializedType;
};
export type InternalInputScriptType = Exclude<InputScriptType, 'EXTERNAL'>;
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
export type TxInputType = (CommonTxInputType & {
    address_n: number[];
    script_type?: InternalInputScriptType;
}) | (CommonTxInputType & {
    address_n?: typeof undefined;
    script_type: 'EXTERNAL';
    script_pubkey: string;
});
export type TxInput = TxInputType;
export type TxOutputBinType = {
    amount: UintType;
    script_pubkey: string;
    decred_script_version?: number;
};
export type ChangeOutputScriptType = Exclude<OutputScriptType, 'PAYTOOPRETURN'>;
export type TxOutputType = {
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
export type TxOutput = TxOutputType;
export type PrevTx = {
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
export type PrevInput = {
    prev_hash: string;
    prev_index: number;
    script_sig: string;
    sequence: number;
    decred_tree?: number;
};
export type PrevOutput = {
    amount: UintType;
    script_pubkey: string;
    decred_script_version?: number;
};
export type TxAckResponse = {
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
export type TxAck = {
    tx: TxAckResponse;
};
export type TxAckInputWrapper = {
    input: TxInput;
};
export type TxAckInput = {
    tx: TxAckInputWrapper;
};
export type TxAckOutputWrapper = {
    output: TxOutput;
};
export type TxAckOutput = {
    tx: TxAckOutputWrapper;
};
export type TxAckPrevMeta = {
    tx: PrevTx;
};
export type TxAckPrevInputWrapper = {
    input: PrevInput;
};
export type TxAckPrevInput = {
    tx: TxAckPrevInputWrapper;
};
export type TxAckPrevOutputWrapper = {
    output: PrevOutput;
};
export type TxAckPrevOutput = {
    tx: TxAckPrevOutputWrapper;
};
export type TxAckPrevExtraDataWrapper = {
    extra_data_chunk: string;
};
export type TxAckPrevExtraData = {
    tx: TxAckPrevExtraDataWrapper;
};
export type GetOwnershipProof = {
    address_n: number[];
    coin_name?: string;
    script_type?: InputScriptType;
    multisig?: MultisigRedeemScriptType;
    user_confirmation?: boolean;
    ownership_ids?: string[];
    commitment_data?: string;
};
export type OwnershipProof = {
    ownership_proof: string;
    signature: string;
};
export type AuthorizeCoinJoin = {
    coordinator: string;
    max_total_fee: number;
    fee_per_anonymity?: number;
    address_n: number[];
    coin_name?: string;
    script_type?: InputScriptType;
    amount_unit?: AmountUnit;
};
export type BIP32Address = {
    address_n: number[];
};
export type GetPublicKeyMultiple = {
    addresses: BIP32Address[];
    ecdsa_curve_name?: string;
    show_display?: boolean;
    coin_name?: string;
    script_type?: InputScriptType;
    ignore_xpub_magic?: boolean;
};
export type PublicKeyMultiple = {
    xpubs: string[];
};
export type SignPsbt = {
    psbt: string;
    coin_name?: string;
};
export type SignedPsbt = {
    psbt: string;
};
export type FirmwareErase = {
    length?: number;
};
export type FirmwareRequest = {
    offset?: number;
    length?: number;
};
export type FirmwareUpload = {
    payload: Buffer | ArrayBuffer;
    hash?: string;
};
export type SelfTest = {
    payload?: string;
};
export type FirmwareErase_ex = {
    length?: number;
};
export declare enum RebootType {
    Normal = 0,
    Boardloader = 1,
    BootLoader = 2
}
export type Reboot = {
    reboot_type: RebootType;
};
export type FirmwareUpdateEmmc = {
    path: string;
    reboot_on_success?: boolean;
};
export declare enum CardanoDerivationType {
    LEDGER = 0,
    ICARUS = 1,
    ICARUS_TREZOR = 2
}
export declare enum CardanoAddressType {
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
export declare enum CardanoNativeScriptType {
    PUB_KEY = 0,
    ALL = 1,
    ANY = 2,
    N_OF_K = 3,
    INVALID_BEFORE = 4,
    INVALID_HEREAFTER = 5
}
export declare enum CardanoNativeScriptHashDisplayFormat {
    HIDE = 0,
    BECH32 = 1,
    POLICY_ID = 2
}
export declare enum CardanoTxOutputSerializationFormat {
    ARRAY_LEGACY = 0,
    MAP_BABBAGE = 1
}
export declare enum CardanoCertificateType {
    STAKE_REGISTRATION = 0,
    STAKE_DEREGISTRATION = 1,
    STAKE_DELEGATION = 2,
    STAKE_POOL_REGISTRATION = 3
}
export declare enum CardanoPoolRelayType {
    SINGLE_HOST_IP = 0,
    SINGLE_HOST_NAME = 1,
    MULTIPLE_HOST_NAME = 2
}
export declare enum CardanoTxAuxiliaryDataSupplementType {
    NONE = 0,
    GOVERNANCE_REGISTRATION_SIGNATURE = 1
}
export declare enum CardanoGovernanceRegistrationFormat {
    CIP15 = 0,
    CIP36 = 1
}
export declare enum CardanoTxSigningMode {
    ORDINARY_TRANSACTION = 0,
    POOL_REGISTRATION_AS_OWNER = 1,
    MULTISIG_TRANSACTION = 2,
    PLUTUS_TRANSACTION = 3
}
export declare enum CardanoTxWitnessType {
    BYRON_WITNESS = 0,
    SHELLEY_WITNESS = 1
}
export type CardanoBlockchainPointerType = {
    block_index: number;
    tx_index: number;
    certificate_index: number;
};
export type CardanoNativeScript = {
    type: CardanoNativeScriptType;
    scripts?: CardanoNativeScript[];
    key_hash?: string;
    key_path?: number[];
    required_signatures_count?: number;
    invalid_before?: UintType;
    invalid_hereafter?: UintType;
};
export type CardanoGetNativeScriptHash = {
    script: CardanoNativeScript;
    display_format: CardanoNativeScriptHashDisplayFormat;
    derivation_type: CardanoDerivationType;
};
export type CardanoNativeScriptHash = {
    script_hash: string;
};
export type CardanoAddressParametersType = {
    address_type: CardanoAddressType;
    address_n: number[];
    address_n_staking: number[];
    staking_key_hash?: string;
    certificate_pointer?: CardanoBlockchainPointerType;
    script_payment_hash?: string;
    script_staking_hash?: string;
};
export type CardanoGetAddress = {
    show_display?: boolean;
    protocol_magic: number;
    network_id: number;
    address_parameters: CardanoAddressParametersType;
    derivation_type: CardanoDerivationType;
};
export type CardanoAddress = {
    address: string;
};
export type CardanoGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
    derivation_type: CardanoDerivationType;
};
export type CardanoPublicKey = {
    xpub: string;
    node: HDNodeType;
};
export type CardanoSignTxInit = {
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
export type CardanoTxInput = {
    prev_hash: string;
    prev_index: number;
};
export type CardanoTxOutput = {
    address?: string;
    address_parameters?: CardanoAddressParametersType;
    amount: UintType;
    asset_groups_count: number;
    datum_hash?: string;
    format?: CardanoTxOutputSerializationFormat;
    inline_datum_size?: number;
    reference_script_size?: number;
};
export type CardanoAssetGroup = {
    policy_id: string;
    tokens_count: number;
};
export type CardanoToken = {
    asset_name_bytes: string;
    amount?: UintType;
    mint_amount?: UintType;
};
export type CardanoTxInlineDatumChunk = {
    data: string;
};
export type CardanoTxReferenceScriptChunk = {
    data: string;
};
export type CardanoPoolOwner = {
    staking_key_path?: number[];
    staking_key_hash?: string;
};
export type CardanoPoolRelayParameters = {
    type: CardanoPoolRelayType;
    ipv4_address?: string;
    ipv6_address?: string;
    host_name?: string;
    port?: number;
};
export type CardanoPoolMetadataType = {
    url: string;
    hash: string;
};
export type CardanoPoolParametersType = {
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
export type CardanoTxCertificate = {
    type: CardanoCertificateType;
    path?: number[];
    pool?: string;
    pool_parameters?: CardanoPoolParametersType;
    script_hash?: string;
    key_hash?: string;
};
export type CardanoTxWithdrawal = {
    path?: number[];
    amount: UintType;
    script_hash?: string;
    key_hash?: string;
};
export type CardanoGovernanceRegistrationDelegation = {
    voting_public_key: string;
    weight: number;
};
export type CardanoGovernanceRegistrationParametersType = {
    voting_public_key?: string;
    staking_path: number[];
    reward_address_parameters: CardanoAddressParametersType;
    nonce: number;
    format?: CardanoGovernanceRegistrationFormat;
    delegations: CardanoGovernanceRegistrationDelegation[];
    voting_purpose?: number;
};
export type CardanoTxAuxiliaryData = {
    governance_registration_parameters?: CardanoGovernanceRegistrationParametersType;
    hash?: string;
};
export type CardanoTxMint = {
    asset_groups_count: number;
};
export type CardanoTxCollateralInput = {
    prev_hash: string;
    prev_index: number;
};
export type CardanoTxRequiredSigner = {
    key_hash?: string;
    key_path?: number[];
};
export type CardanoTxReferenceInput = {
    prev_hash: string;
    prev_index: number;
};
export type CardanoTxItemAck = {};
export type CardanoTxAuxiliaryDataSupplement = {
    type: CardanoTxAuxiliaryDataSupplementType;
    auxiliary_data_hash?: string;
    governance_signature?: string;
};
export type CardanoTxWitnessRequest = {
    path: number[];
};
export type CardanoTxWitnessResponse = {
    type: CardanoTxWitnessType;
    pub_key: string;
    signature: string;
    chain_code?: string;
};
export type CardanoTxHostAck = {};
export type CardanoTxBodyHash = {
    tx_hash: string;
};
export type CardanoSignTxFinished = {};
export type CardanoSignMessage = {
    address_n: number[];
    message: string;
    derivation_type: CardanoDerivationType;
    network_id: number;
    address_type?: CardanoAddressType;
};
export type CardanoMessageSignature = {
    signature: string;
    key: string;
};
export type Success = {
    message: string;
};
export declare enum FailureType {
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
export type Failure = {
    code?: FailureType;
    message?: string;
};
export declare enum Enum_ButtonRequestType {
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
export type ButtonRequestType = keyof typeof Enum_ButtonRequestType;
export type ButtonRequest = {
    code?: ButtonRequestType;
    pages?: number;
};
export type ButtonAck = {};
export declare enum Enum_PinMatrixRequestType {
    PinMatrixRequestType_Current = 1,
    PinMatrixRequestType_NewFirst = 2,
    PinMatrixRequestType_NewSecond = 3,
    PinMatrixRequestType_WipeCodeFirst = 4,
    PinMatrixRequestType_WipeCodeSecond = 5,
    PinMatrixRequestType_BackupFirst = 6,
    PinMatrixRequestType_BackupSecond = 7
}
export type PinMatrixRequestType = keyof typeof Enum_PinMatrixRequestType;
export type PinMatrixRequest = {
    type?: PinMatrixRequestType;
};
export type PinMatrixAck = {
    pin: string;
    new_pin?: string;
};
export type PassphraseRequest = {
    _on_device?: boolean;
};
export type PassphraseAck = {
    passphrase?: string;
    _state?: string;
    on_device?: boolean;
};
export type Deprecated_PassphraseStateRequest = {
    state?: string;
};
export type Deprecated_PassphraseStateAck = {};
export type BixinPinInputOnDevice = {};
export type ConfluxGetAddress = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
export type ConfluxAddress = {
    address?: string;
};
export type ConfluxSignTx = {
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
export type ConfluxTxRequest = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
export type ConfluxTxAck = {
    data_chunk?: string;
};
export type ConfluxSignMessage = {
    address_n: number[];
    message?: string;
};
export type ConfluxMessageSignature = {
    signature?: string;
    address?: string;
};
export type ConfluxSignMessageCIP23 = {
    address_n: number[];
    domain_hash?: string;
    message_hash?: string;
};
export type CosmosGetAddress = {
    address_n: number[];
    hrp?: string;
    show_display?: boolean;
};
export type CosmosAddress = {
    address?: string;
};
export type CosmosSignTx = {
    address_n: number[];
    raw_tx: string;
};
export type CosmosSignedTx = {
    signature: string;
};
export type CipherKeyValue = {
    address_n: number[];
    key: string;
    value: string;
    encrypt?: boolean;
    ask_on_encrypt?: boolean;
    ask_on_decrypt?: boolean;
    iv?: string;
};
export type CipheredKeyValue = {
    value: string;
};
export type IdentityType = {
    proto?: string;
    user?: string;
    host?: string;
    port?: string;
    path?: string;
    index?: number;
};
export type SignIdentity = {
    identity: IdentityType;
    challenge_hidden?: string;
    challenge_visual?: string;
    ecdsa_curve_name?: string;
};
export type SignedIdentity = {
    address: string;
    public_key: string;
    signature: string;
};
export type GetECDHSessionKey = {
    identity: IdentityType;
    peer_public_key: string;
    ecdsa_curve_name?: string;
};
export type ECDHSessionKey = {
    session_key: string;
    public_key?: string;
};
export type Path = {
    address_n: number[];
};
export type BatchGetPublickeys = {
    ecdsa_curve_name?: string;
    paths: Path[];
};
export type EcdsaPublicKeys = {
    public_keys: string[];
};
export type DnxGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type DnxAddress = {
    address?: string;
};
export type DnxSignTx = {
    address_n: number[];
    inputs_count: number;
    to_address: string;
    amount: UintType;
    fee: UintType;
    payment_id?: string;
};
export type DnxTxKey = {
    ephemeral_tx_sec_key?: string;
    ephemeral_tx_pub_key?: string;
};
export type DnxComputedKeyImage = {
    key_image?: string;
};
export type DnxInputRequest = {
    request_index?: number;
    tx_key?: DnxTxKey;
    computed_key_image?: DnxComputedKeyImage;
};
export type DnxInputAck = {
    prev_index: number;
    global_index: number;
    tx_pubkey: string;
    prev_out_pubkey: string;
    amount: UintType;
};
export type DnxRTSigsRequest = {};
export type DnxSignedTx = {
    signatures: string[];
    output_keys: string[];
};
export type EmmcFixPermission = {};
export type EmmcPath = {
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
export type EmmcPathInfo = {
    path: string;
};
export type EmmcFile = {
    path: string;
    offset: number;
    len: number;
    data?: string;
    data_hash?: number;
    processed_byte?: number;
};
export type EmmcFileRead = {
    file: EmmcFile;
    ui_percentage?: number;
};
export type EmmcFileWrite = {
    file: EmmcFile;
    overwrite: boolean;
    append: boolean;
    ui_percentage?: number;
};
export type EmmcFileDelete = {
    path: string;
};
export type EmmcDir = {
    path: string;
    child_dirs?: string;
    child_files?: string;
};
export type EmmcDirList = {
    path: string;
};
export type EmmcDirMake = {
    path: string;
};
export type EmmcDirRemove = {
    path: string;
};
export type EosGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type EosPublicKey = {
    wif_public_key: string;
    raw_public_key: string;
};
export type EosTxHeader = {
    expiration: number;
    ref_block_num: number;
    ref_block_prefix: number;
    max_net_usage_words: number;
    max_cpu_usage_ms: number;
    delay_sec: number;
};
export type EosSignTx = {
    address_n: number[];
    chain_id?: string;
    header?: EosTxHeader;
    num_actions?: number;
};
export type EosTxActionRequest = {
    data_size?: number;
};
export type EosAsset = {
    amount?: UintType;
    symbol?: string;
};
export type EosPermissionLevel = {
    actor?: string;
    permission?: string;
};
export type EosAuthorizationKey = {
    type?: number;
    key: string;
    address_n?: number[];
    weight: number;
};
export type EosAuthorizationAccount = {
    account?: EosPermissionLevel;
    weight?: number;
};
export type EosAuthorizationWait = {
    wait_sec?: number;
    weight?: number;
};
export type EosAuthorization = {
    threshold?: number;
    keys: EosAuthorizationKey[];
    accounts: EosAuthorizationAccount[];
    waits: EosAuthorizationWait[];
};
export type EosActionCommon = {
    account?: string;
    name?: string;
    authorization: EosPermissionLevel[];
};
export type EosActionTransfer = {
    sender?: string;
    receiver?: string;
    quantity?: EosAsset;
    memo?: string;
};
export type EosActionDelegate = {
    sender?: string;
    receiver?: string;
    net_quantity?: EosAsset;
    cpu_quantity?: EosAsset;
    transfer?: boolean;
};
export type EosActionUndelegate = {
    sender?: string;
    receiver?: string;
    net_quantity?: EosAsset;
    cpu_quantity?: EosAsset;
};
export type EosActionRefund = {
    owner?: string;
};
export type EosActionBuyRam = {
    payer?: string;
    receiver?: string;
    quantity?: EosAsset;
};
export type EosActionBuyRamBytes = {
    payer?: string;
    receiver?: string;
    bytes?: number;
};
export type EosActionSellRam = {
    account?: string;
    bytes?: number;
};
export type EosActionVoteProducer = {
    voter?: string;
    proxy?: string;
    producers: string[];
};
export type EosActionUpdateAuth = {
    account?: string;
    permission?: string;
    parent?: string;
    auth?: EosAuthorization;
};
export type EosActionDeleteAuth = {
    account?: string;
    permission?: string;
};
export type EosActionLinkAuth = {
    account?: string;
    code?: string;
    type?: string;
    requirement?: string;
};
export type EosActionUnlinkAuth = {
    account?: string;
    code?: string;
    type?: string;
};
export type EosActionNewAccount = {
    creator?: string;
    name?: string;
    owner?: EosAuthorization;
    active?: EosAuthorization;
};
export type EosActionUnknown = {
    data_size: number;
    data_chunk?: string;
};
export type EosTxActionAck = {
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
export type EosSignedTx = {
    signature: string;
};
export declare enum EthereumDefinitionType {
    NETWORK = 0,
    TOKEN = 1
}
export type EthereumNetworkInfo = {
    chain_id: number;
    symbol: string;
    slip44: number;
    name: string;
    icon?: string;
    primary_color?: number;
};
export type EthereumTokenInfo = {
    address: string;
    chain_id: number;
    symbol: string;
    decimals: number;
    name: string;
};
export type EthereumDefinitions = {
    encoded_network?: ArrayBuffer;
    encoded_token?: ArrayBuffer;
};
export type EthereumSignTypedDataChargerWallet = {
    address_n: number[];
    primary_type: string;
    metamask_v4_compat?: boolean;
    chain_id?: number;
};
export type EthereumTypedDataStructRequestChargerWallet = {
    name: string;
};
export type EthereumStructMemberChargerWallet = {
    type: EthereumFieldTypeChargerWallet;
    name: string;
};
export type EthereumFieldTypeChargerWallet = {
    data_type: EthereumDataTypeChargerWallet;
    size?: number;
    entry_type?: EthereumFieldTypeChargerWallet;
    struct_name?: string;
};
export declare enum EthereumDataTypeChargerWallet {
    UINT = 1,
    INT = 2,
    BYTES = 3,
    STRING = 4,
    BOOL = 5,
    ADDRESS = 6,
    ARRAY = 7,
    STRUCT = 8
}
export type EthereumTypedDataStructAckChargerWallet = {
    members: EthereumStructMemberChargerWallet[];
};
export type EthereumTypedDataValueRequestChargerWallet = {
    member_path: number[];
};
export type EthereumTypedDataValueAckChargerWallet = {
    value: string;
};
export type EthereumSignTypedData = {
    address_n: number[];
    primary_type: string;
    metamask_v4_compat?: boolean;
    definitions?: EthereumDefinitions;
};
export type EthereumTypedDataStructRequest = {
    name: string;
};
export declare enum EthereumDataType {
    UINT = 1,
    INT = 2,
    BYTES = 3,
    STRING = 4,
    BOOL = 5,
    ADDRESS = 6,
    ARRAY = 7,
    STRUCT = 8
}
export type EthereumFieldType = {
    data_type: EthereumDataType;
    size?: number;
    entry_type?: EthereumFieldType;
    struct_name?: string;
};
export type EthereumStructMember = {
    type: EthereumFieldType;
    name: string;
};
export type EthereumTypedDataStructAck = {
    members: EthereumStructMember[];
};
export type EthereumTypedDataValueRequest = {
    member_path: number[];
};
export type EthereumTypedDataValueAck = {
    value: string;
};
export type EthereumGetPublicKeyChargerWallet = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
export type EthereumPublicKeyChargerWallet = {
    node: HDNodeType;
    xpub: string;
};
export type EthereumGetAddressChargerWallet = {
    address_n: number[];
    show_display?: boolean;
    chain_id?: number;
};
export type EthereumAddressChargerWallet = {
    _old_address?: string;
    address?: string;
};
export type EthereumSignTxChargerWallet = {
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
export type EthereumAccessListChargerWallet = {
    address: string;
    storage_keys: string[];
};
export type EthereumSignTxEIP1559ChargerWallet = {
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
export type EthereumTxRequestChargerWallet = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
export type EthereumTxAckChargerWallet = {
    data_chunk: string;
};
export type EthereumSignMessageChargerWallet = {
    address_n: number[];
    message: string;
    chain_id?: number;
};
export type EthereumMessageSignatureChargerWallet = {
    signature: string;
    address: string;
};
export type EthereumVerifyMessageChargerWallet = {
    signature: string;
    message: string;
    address: string;
    chain_id?: number;
};
export type EthereumSignTypedHashChargerWallet = {
    address_n: number[];
    domain_separator_hash: string;
    message_hash?: string;
    chain_id?: number;
};
export type EthereumTypedDataSignatureChargerWallet = {
    signature: string;
    address: string;
};
export type EthereumSignMessageEIP712 = {
    address_n: number[];
    domain_hash?: string;
    message_hash?: string;
};
export type EthereumGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type EthereumPublicKey = {
    node: HDNodeType;
    xpub: string;
};
export type EthereumGetAddress = {
    address_n: number[];
    show_display?: boolean;
    encoded_network?: ArrayBuffer;
};
export type EthereumAddress = {
    _old_address?: string;
    address: string;
};
export type EthereumSignTx = {
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
export type EthereumAccessList = {
    address: string;
    storage_keys: string[];
};
export type EthereumSignTxEIP1559 = {
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
export type EthereumTxRequest = {
    data_length?: number;
    signature_v?: number;
    signature_r?: string;
    signature_s?: string;
};
export type EthereumTxAck = {
    data_chunk: string;
};
export type EthereumSignMessage = {
    address_n: number[];
    message: string;
    encoded_network?: ArrayBuffer;
};
export type EthereumMessageSignature = {
    signature: string;
    address: string;
};
export type EthereumVerifyMessage = {
    signature: string;
    message: string;
    address: string;
};
export type EthereumSignTypedHash = {
    address_n: number[];
    domain_separator_hash: string;
    message_hash?: string;
    encoded_network?: ArrayBuffer;
};
export type EthereumTypedDataSignature = {
    signature: string;
    address: string;
};
export type FilecoinGetAddress = {
    address_n: number[];
    show_display?: boolean;
    testnet?: boolean;
};
export type FilecoinAddress = {
    address?: string;
};
export type FilecoinSignTx = {
    address_n: number[];
    raw_tx: string;
    testnet?: boolean;
};
export type FilecoinSignedTx = {
    signature: string;
};
export type KaspaGetAddress = {
    address_n: number[];
    show_display?: boolean;
    prefix?: string;
    scheme?: string;
};
export type KaspaAddress = {
    address: string;
};
export type KaspaSignTx = {
    address_n: number[];
    raw_message: string;
    scheme?: string;
    prefix?: string;
    input_count?: number;
};
export type KaspaTxInputRequest = {
    request_index: number;
    signature?: string;
};
export type KaspaTxInputAck = {
    address_n: number[];
    raw_message: string;
};
export type KaspaSignedTx = {
    signature: string;
};
export type LnurlAuth = {
    domain: string;
    data: string;
};
export type LnurlAuthResp = {
    publickey?: string;
    path?: string;
    signature?: string;
};
export declare enum Enum_BackupType {
    Bip39 = 0,
    Slip39_Basic = 1,
    Slip39_Advanced = 2
}
export type BackupType = keyof typeof Enum_BackupType;
export declare enum Enum_SafetyCheckLevel {
    Strict = 0,
    PromptAlways = 1,
    PromptTemporarily = 2
}
export type SafetyCheckLevel = keyof typeof Enum_SafetyCheckLevel;
export type Initialize = {
    session_id?: string;
    _skip_passphrase?: boolean;
    derive_cardano?: boolean;
};
export type GetFeatures = {};
export type ChargerwalletGetFeatures = {};
export declare enum ChargerWalletDeviceType {
    CLASSIC = 0,
    CLASSIC1S = 1,
    MINI = 2,
    TOUCH = 3,
    PRO = 5
}
export declare enum ChargerWalletSeType {
    THD89 = 0,
    SE608A = 1
}
export declare enum ChargerWalletSEState {
    BOOT = 0,
    APP = 1
}
export declare enum Enum_Capability {
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
export type Capability = keyof typeof Enum_Capability;
export type Features = {
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
export type ChargerwalletFeatures = {
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
export type LockDevice = {};
export type EndSession = {};
export declare enum ExportType {
    SeedEncExportType_NO = 0,
    SeedEncExportType_YES = 1,
    MnemonicPlainExportType_YES = 2
}
export type ApplySettings = {
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
export type ApplyFlags = {
    flags: number;
};
export type ChangePin = {
    remove?: boolean;
};
export type ChangeWipeCode = {
    remove?: boolean;
};
export declare enum SdProtectOperationType {
    DISABLE = 0,
    ENABLE = 1,
    REFRESH = 2
}
export type SdProtect = {
    operation: SdProtectOperationType;
};
export type Ping = {
    message?: string;
    button_protection?: boolean;
};
export type Cancel = {};
export type GetEntropy = {
    size: number;
};
export type Entropy = {
    entropy: string;
};
export type WipeDevice = {};
export type ResetDevice = {
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
export type BackupDevice = {};
export type EntropyRequest = {};
export type EntropyAck = {
    entropy: string;
};
export declare enum RecoveryDeviceType {
    RecoveryDeviceType_ScrambledWords = 0,
    RecoveryDeviceType_Matrix = 1
}
export type RecoveryDevice = {
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
export declare enum Enum_WordRequestType {
    WordRequestType_Plain = 0,
    WordRequestType_Matrix9 = 1,
    WordRequestType_Matrix6 = 2
}
export type WordRequestType = keyof typeof Enum_WordRequestType;
export type WordRequest = {
    type: WordRequestType;
};
export type WordAck = {
    word: string;
};
export type SetU2FCounter = {
    u2f_counter: number;
};
export type GetNextU2FCounter = {};
export type NextU2FCounter = {
    u2f_counter: number;
};
export type DoPreauthorized = {};
export type PreauthorizedRequest = {};
export type CancelAuthorization = {};
export declare enum SeedRequestType {
    SeedRequestType_Gen = 0,
    SeedRequestType_EncExport = 1,
    SeedRequestType_EncImport = 2
}
export type BixinSeedOperate = {
    type: SeedRequestType;
    seed_importData?: string;
};
export type BixinMessageSE = {
    inputmessage: string;
};
export type BixinOutMessageSE = {
    outmessage?: string;
};
export type DeviceBackToBoot = {};
export type BixinBackupRequest = {};
export type BixinBackupAck = {
    data: string;
};
export type BixinRestoreRequest = {
    data: string;
    language?: string;
    label?: string;
    passphrase_protection?: boolean;
};
export type BixinRestoreAck = {
    data: string;
};
export type BixinVerifyDeviceRequest = {
    data: string;
};
export type BixinVerifyDeviceAck = {
    cert: string;
    signature: string;
};
export declare enum WL_OperationType {
    WL_OperationType_Add = 0,
    WL_OperationType_Delete = 1,
    WL_OperationType_Inquire = 2
}
export type BixinWhiteListRequest = {
    type: WL_OperationType;
    addr_in?: string;
};
export type BixinWhiteListAck = {
    address: string[];
};
export type BixinLoadDevice = {
    mnemonics: string;
    language?: string;
    label?: string;
    skip_checksum?: boolean;
};
export type BixinBackupDevice = {};
export type BixinBackupDeviceAck = {
    mnemonics: string;
};
export type DeviceInfoSettings = {
    serial_no?: string;
    cpu_info?: string;
    pre_firmware?: string;
};
export type GetDeviceInfo = {};
export type DeviceInfo = {
    serial_no?: string;
    spiFlash_info?: string;
    SE_info?: string;
    NFT_voucher?: string;
    cpu_info?: string;
    pre_firmware?: string;
};
export type ReadSEPublicKey = {};
export type SEPublicKey = {
    public_key: string;
};
export type WriteSEPublicCert = {
    public_cert: string;
};
export type ReadSEPublicCert = {};
export type SEPublicCert = {
    public_cert: string;
};
export type SpiFlashWrite = {
    address: number;
    data: string;
};
export type SpiFlashRead = {
    address: number;
    len: number;
};
export type SpiFlashData = {
    data: string;
};
export type SESignMessage = {
    message: string;
};
export type SEMessageSignature = {
    signature: string;
};
export declare enum ResourceType {
    WallPaper = 0,
    Nft = 1
}
export type ResourceUpload = {
    extension: string;
    data_length: number;
    res_type: ResourceType;
    nft_meta_data?: string;
    zoom_data_length: number;
    file_name_no_ext?: string;
};
export type ZoomRequest = {
    offset?: number;
    data_length: number;
};
export type ResourceRequest = {
    offset?: number;
    data_length: number;
};
export type ResourceAck = {
    data_chunk: string;
    hash?: string;
};
export type ResourceUpdate = {
    file_name: string;
    data_length: number;
    initial_data_chunk: string;
    hash?: string;
};
export type NFTWriteInfo = {
    index: number;
    width: number;
    height: number;
    name_zh?: string;
    name_en?: string;
};
export type NFTWriteData = {
    index: number;
    data: string;
    offset: number;
};
export type RebootToBootloader = {};
export type RebootToBoardloader = {};
export type ListResDir = {
    path: string;
};
export type FileInfo = {
    name: string;
    size: number;
};
export type FileInfoList = {
    files: FileInfo[];
};
export type DeviceEraseSector = {
    sector: number;
};
export type MoneroRctKeyPublic = {
    dest?: string;
    commitment?: string;
};
export type MoneroOutputEntry = {
    idx?: number;
    key?: MoneroRctKeyPublic;
};
export type MoneroMultisigKLRki = {
    K?: string;
    L?: string;
    R?: string;
    ki?: string;
};
export type MoneroTransactionSourceEntry = {
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
export type MoneroAccountPublicAddress = {
    spend_public_key?: string;
    view_public_key?: string;
};
export type MoneroTransactionDestinationEntry = {
    amount?: UintType;
    addr?: MoneroAccountPublicAddress;
    is_subaddress?: boolean;
    original?: string;
    is_integrated?: boolean;
};
export type MoneroTransactionRsigData = {
    rsig_type?: number;
    offload_type?: number;
    grouping: number[];
    mask?: string;
    rsig?: string;
    rsig_parts: string[];
    bp_version?: number;
};
export type MoneroGetAddress = {
    address_n: number[];
    show_display?: boolean;
    network_type?: number;
    account?: number;
    minor?: number;
    payment_id?: string;
};
export type MoneroAddress = {
    address?: string;
};
export type MoneroGetWatchKey = {
    address_n: number[];
    network_type?: number;
};
export type MoneroWatchKey = {
    watch_key?: string;
    address?: string;
};
export type MoneroTransactionData = {
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
export type MoneroTransactionInitRequest = {
    version?: number;
    address_n: number[];
    network_type?: number;
    tsx_data?: MoneroTransactionData;
};
export type MoneroTransactionInitAck = {
    hmacs: string[];
    rsig_data?: MoneroTransactionRsigData;
};
export type MoneroTransactionSetInputRequest = {
    src_entr?: MoneroTransactionSourceEntry;
};
export type MoneroTransactionSetInputAck = {
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    pseudo_out_alpha?: string;
    spend_key?: string;
};
export type MoneroTransactionInputsPermutationRequest = {
    perm: number[];
};
export type MoneroTransactionInputsPermutationAck = {};
export type MoneroTransactionInputViniRequest = {
    src_entr?: MoneroTransactionSourceEntry;
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    orig_idx?: number;
};
export type MoneroTransactionInputViniAck = {};
export type MoneroTransactionAllInputsSetRequest = {};
export type MoneroTransactionAllInputsSetAck = {
    rsig_data?: MoneroTransactionRsigData;
};
export type MoneroTransactionSetOutputRequest = {
    dst_entr?: MoneroTransactionDestinationEntry;
    dst_entr_hmac?: string;
    rsig_data?: MoneroTransactionRsigData;
    is_offloaded_bp?: boolean;
};
export type MoneroTransactionSetOutputAck = {
    tx_out?: string;
    vouti_hmac?: string;
    rsig_data?: MoneroTransactionRsigData;
    out_pk?: string;
    ecdh_info?: string;
};
export type MoneroTransactionAllOutSetRequest = {
    rsig_data?: MoneroTransactionRsigData;
};
export type MoneroRingCtSig = {
    txn_fee?: number;
    message?: string;
    rv_type?: number;
};
export type MoneroTransactionAllOutSetAck = {
    extra?: string;
    tx_prefix_hash?: string;
    rv?: MoneroRingCtSig;
    full_message_hash?: string;
};
export type MoneroTransactionSignInputRequest = {
    src_entr?: MoneroTransactionSourceEntry;
    vini?: string;
    vini_hmac?: string;
    pseudo_out?: string;
    pseudo_out_hmac?: string;
    pseudo_out_alpha?: string;
    spend_key?: string;
    orig_idx?: number;
};
export type MoneroTransactionSignInputAck = {
    signature?: string;
    pseudo_out?: string;
};
export type MoneroTransactionFinalRequest = {};
export type MoneroTransactionFinalAck = {
    cout_key?: string;
    salt?: string;
    rand_mult?: string;
    tx_enc_keys?: string;
    opening_key?: string;
};
export type MoneroSubAddressIndicesList = {
    account?: number;
    minor_indices: number[];
};
export type MoneroKeyImageExportInitRequest = {
    num?: number;
    hash?: string;
    address_n: number[];
    network_type?: number;
    subs: MoneroSubAddressIndicesList[];
};
export type MoneroKeyImageExportInitAck = {};
export type MoneroTransferDetails = {
    out_key?: string;
    tx_pub_key?: string;
    additional_tx_pub_keys: string[];
    internal_output_index?: number;
    sub_addr_major?: number;
    sub_addr_minor?: number;
};
export type MoneroKeyImageSyncStepRequest = {
    tdis: MoneroTransferDetails[];
};
export type MoneroExportedKeyImage = {
    iv?: string;
    blob?: string;
};
export type MoneroKeyImageSyncStepAck = {
    kis: MoneroExportedKeyImage[];
};
export type MoneroKeyImageSyncFinalRequest = {};
export type MoneroKeyImageSyncFinalAck = {
    enc_key?: string;
};
export type MoneroGetTxKeyRequest = {
    address_n: number[];
    network_type?: number;
    salt1?: string;
    salt2?: string;
    tx_enc_keys?: string;
    tx_prefix_hash?: string;
    reason?: number;
    view_public_key?: string;
};
export type MoneroGetTxKeyAck = {
    salt?: string;
    tx_keys?: string;
    tx_derivations?: string;
};
export type MoneroLiveRefreshStartRequest = {
    address_n: number[];
    network_type?: number;
};
export type MoneroLiveRefreshStartAck = {};
export type MoneroLiveRefreshStepRequest = {
    out_key?: string;
    recv_deriv?: string;
    real_out_idx?: number;
    sub_addr_major?: number;
    sub_addr_minor?: number;
};
export type MoneroLiveRefreshStepAck = {
    salt?: string;
    key_image?: string;
};
export type MoneroLiveRefreshFinalRequest = {};
export type MoneroLiveRefreshFinalAck = {};
export type NearGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type NearAddress = {
    address?: string;
};
export type NearSignTx = {
    address_n: number[];
    raw_tx: string;
};
export type NearSignedTx = {
    signature: string;
};
export type NEMGetAddress = {
    address_n: number[];
    network?: number;
    show_display?: boolean;
};
export type NEMAddress = {
    address: string;
};
export type NEMTransactionCommon = {
    address_n?: number[];
    network?: number;
    timestamp?: number;
    fee?: UintType;
    deadline?: number;
    signer?: string;
};
export type NEMMosaic = {
    namespace?: string;
    mosaic?: string;
    quantity?: number;
};
export type NEMTransfer = {
    recipient?: string;
    amount?: UintType;
    payload?: string;
    public_key?: string;
    mosaics?: NEMMosaic[];
};
export type NEMProvisionNamespace = {
    namespace?: string;
    parent?: string;
    sink?: string;
    fee?: UintType;
};
export declare enum NEMMosaicLevy {
    MosaicLevy_Absolute = 1,
    MosaicLevy_Percentile = 2
}
export type NEMMosaicDefinition = {
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
export type NEMMosaicCreation = {
    definition?: NEMMosaicDefinition;
    sink?: string;
    fee?: UintType;
};
export declare enum NEMSupplyChangeType {
    SupplyChange_Increase = 1,
    SupplyChange_Decrease = 2
}
export type NEMMosaicSupplyChange = {
    namespace?: string;
    mosaic?: string;
    type?: NEMSupplyChangeType;
    delta?: number;
};
export declare enum NEMModificationType {
    CosignatoryModification_Add = 1,
    CosignatoryModification_Delete = 2
}
export type NEMCosignatoryModification = {
    type?: NEMModificationType;
    public_key?: string;
};
export type NEMAggregateModification = {
    modifications?: NEMCosignatoryModification[];
    relative_change?: number;
};
export declare enum NEMImportanceTransferMode {
    ImportanceTransfer_Activate = 1,
    ImportanceTransfer_Deactivate = 2
}
export type NEMImportanceTransfer = {
    mode?: NEMImportanceTransferMode;
    public_key?: string;
};
export type NEMSignTx = {
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
export type NEMSignedTx = {
    data: string;
    signature: string;
};
export type NEMDecryptMessage = {
    address_n: number[];
    network?: number;
    public_key?: string;
    payload?: string;
};
export type NEMDecryptedMessage = {
    payload: string;
};
export type NervosGetAddress = {
    address_n: number[];
    network: string;
    show_display?: boolean;
};
export type NervosAddress = {
    address: string;
};
export type NervosSignTx = {
    address_n: number[];
    data_initial_chunk: string;
    witness_buffer: string;
    network: string;
    data_length?: number;
};
export type NervosSignedTx = {
    signature: string;
    address: string;
};
export type NervosTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
export type NervosTxAck = {
    data_chunk: string;
};
export type NexaGetAddress = {
    address_n: number[];
    show_display?: boolean;
    prefix?: string;
};
export type NexaAddress = {
    address: string;
    public_key: string;
};
export type NexaSignTx = {
    address_n: number[];
    raw_message: string;
    prefix?: string;
    input_count?: number;
};
export type NexaTxInputRequest = {
    request_index: number;
    signature?: string;
};
export type NexaTxInputAck = {
    address_n: number[];
    raw_message: string;
};
export type NexaSignedTx = {
    signature: string;
};
export type NostrGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type NostrPublicKey = {
    publickey?: string;
    npub?: string;
};
export type NostrSignEvent = {
    address_n: number[];
    event: string;
};
export type NostrSignedEvent = {
    event: string;
};
export type NostrSignSchnorr = {
    address_n: number[];
    hash: string;
};
export type NostrSignedSchnorr = {
    signature: string;
};
export type NostrEncryptMessage = {
    address_n: number[];
    pubkey: string;
    msg: string;
    show_display?: boolean;
};
export type NostrEncryptedMessage = {
    msg: string;
};
export type NostrDecryptMessage = {
    address_n: number[];
    pubkey: string;
    msg: string;
    show_display?: boolean;
};
export type NostrDecryptedMessage = {
    msg: string;
};
export type PolkadotGetAddress = {
    address_n: number[];
    prefix: number;
    network: string;
    show_display?: boolean;
};
export type PolkadotAddress = {
    address?: string;
    public_key?: string;
};
export type PolkadotSignTx = {
    address_n: number[];
    raw_tx: string;
    network: string;
};
export type PolkadotSignedTx = {
    signature: string;
};
export type RippleGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type RippleAddress = {
    address: string;
};
export type RipplePayment = {
    amount: UintType;
    destination: string;
    destination_tag?: number;
};
export type RippleSignTx = {
    address_n: number[];
    fee?: UintType;
    flags?: number;
    sequence?: number;
    last_ledger_sequence?: number;
    payment?: RipplePayment;
};
export type RippleSignedTx = {
    signature: string;
    serialized_tx: string;
};
export type ScdoGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type ScdoAddress = {
    address: string;
};
export type ScdoSignTx = {
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
export type ScdoSignedTx = {
    data_length?: number;
    signature?: string;
};
export type ScdoTxAck = {
    data_chunk?: string;
};
export type ScdoSignMessage = {
    address_n: number[];
    message?: string;
};
export type ScdoSignedMessage = {
    signature?: string;
    address?: string;
};
export type SolanaGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type SolanaAddress = {
    address?: string;
};
export type SolanaSignTx = {
    address_n: number[];
    raw_tx: string;
};
export type SolanaSignedTx = {
    signature?: string;
};
export type StarcoinGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type StarcoinAddress = {
    address?: string;
};
export type StarcoinGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type StarcoinPublicKey = {
    public_key: string;
};
export type StarcoinSignTx = {
    address_n: number[];
    raw_tx?: string;
};
export type StarcoinSignedTx = {
    public_key: string;
    signature: string;
};
export type StarcoinSignMessage = {
    address_n: number[];
    message?: string;
};
export type StarcoinMessageSignature = {
    public_key: string;
    signature: string;
};
export type StarcoinVerifyMessage = {
    public_key?: string;
    signature?: string;
    message?: string;
};
export declare enum StellarAssetType {
    NATIVE = 0,
    ALPHANUM4 = 1,
    ALPHANUM12 = 2
}
export type StellarAsset = {
    type: StellarAssetType;
    code?: string;
    issuer?: string;
};
export type StellarGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type StellarAddress = {
    address: string;
};
export declare enum StellarMemoType {
    NONE = 0,
    TEXT = 1,
    ID = 2,
    HASH = 3,
    RETURN = 4
}
export type StellarSignTx = {
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
export type StellarTxOpRequest = {};
export type StellarPaymentOp = {
    source_account?: string;
    destination_account: string;
    asset: StellarAsset;
    amount: UintType;
};
export type StellarCreateAccountOp = {
    source_account?: string;
    new_account: string;
    starting_balance: UintType;
};
export type StellarPathPaymentStrictReceiveOp = {
    source_account?: string;
    send_asset: StellarAsset;
    send_max: UintType;
    destination_account: string;
    destination_asset: StellarAsset;
    destination_amount: UintType;
    paths?: StellarAsset[];
};
export type StellarPathPaymentStrictSendOp = {
    source_account?: string;
    send_asset: StellarAsset;
    send_amount: UintType;
    destination_account: string;
    destination_asset: StellarAsset;
    destination_min: UintType;
    paths?: StellarAsset[];
};
export type StellarManageSellOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
    offer_id: UintType;
};
export type StellarManageBuyOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
    offer_id: UintType;
};
export type StellarCreatePassiveSellOfferOp = {
    source_account?: string;
    selling_asset: StellarAsset;
    buying_asset: StellarAsset;
    amount: UintType;
    price_n: number;
    price_d: number;
};
export declare enum StellarSignerType {
    ACCOUNT = 0,
    PRE_AUTH = 1,
    HASH = 2
}
export type StellarSetOptionsOp = {
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
export type StellarChangeTrustOp = {
    source_account?: string;
    asset: StellarAsset;
    limit: UintType;
};
export type StellarAllowTrustOp = {
    source_account?: string;
    trusted_account: string;
    asset_type: StellarAssetType;
    asset_code?: string;
    is_authorized: boolean;
};
export type StellarAccountMergeOp = {
    source_account?: string;
    destination_account: string;
};
export type StellarManageDataOp = {
    source_account?: string;
    key: string;
    value?: Buffer | string;
};
export type StellarBumpSequenceOp = {
    source_account?: string;
    bump_to: UintType;
};
export type StellarSignedTx = {
    public_key: string;
    signature: string;
};
export type SuiGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type SuiAddress = {
    address?: string;
};
export type SuiSignTx = {
    address_n: number[];
    raw_tx: string;
    data_initial_chunk?: string;
    data_length?: number;
};
export type SuiSignedTx = {
    public_key: string;
    signature: string;
};
export type SuiTxRequest = {
    data_length?: number;
    public_key?: string;
    signature?: string;
};
export type SuiTxAck = {
    data_chunk: string;
};
export type SuiSignMessage = {
    address_n: number[];
    message: string;
};
export type SuiMessageSignature = {
    signature: string;
    address: string;
};
export type TezosGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type TezosAddress = {
    address: string;
};
export type TezosGetPublicKey = {
    address_n: number[];
    show_display?: boolean;
};
export type TezosPublicKey = {
    public_key: string;
};
export declare enum TezosContractType {
    Implicit = 0,
    Originated = 1
}
export type TezosContractID = {
    tag: number;
    hash: Uint8Array;
};
export type TezosRevealOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    public_key: Uint8Array;
};
export type TezosManagerTransfer = {
    destination?: TezosContractID;
    amount?: UintType;
};
export type TezosParametersManager = {
    set_delegate?: Uint8Array;
    cancel_delegate?: boolean;
    transfer?: TezosManagerTransfer;
};
export type TezosTransactionOp = {
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
export type TezosOriginationOp = {
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
export type TezosDelegationOp = {
    source: Uint8Array;
    fee: UintType;
    counter: number;
    gas_limit: number;
    storage_limit: number;
    delegate: Uint8Array;
};
export type TezosProposalOp = {
    source?: string;
    period?: number;
    proposals: string[];
};
export declare enum TezosBallotType {
    Yay = 0,
    Nay = 1,
    Pass = 2
}
export type TezosBallotOp = {
    source?: string;
    period?: number;
    proposal?: string;
    ballot?: TezosBallotType;
};
export type TezosSignTx = {
    address_n: number[];
    branch: Uint8Array;
    reveal?: TezosRevealOp;
    transaction?: TezosTransactionOp;
    origination?: TezosOriginationOp;
    delegation?: TezosDelegationOp;
    proposal?: TezosProposalOp;
    ballot?: TezosBallotOp;
};
export type TezosSignedTx = {
    signature: string;
    sig_op_contents: string;
    operation_hash: string;
};
export declare enum TonWalletVersion {
    V4R2 = 3
}
export declare enum TonWorkChain {
    BASECHAIN = 0,
    MASTERCHAIN = 1
}
export type TonGetAddress = {
    address_n: number[];
    show_display?: boolean;
    wallet_version?: TonWalletVersion;
    is_bounceable?: boolean;
    is_testnet_only?: boolean;
    workchain?: TonWorkChain;
    wallet_id?: number;
};
export type TonAddress = {
    public_key: string;
    address: string;
};
export type TonSignMessage = {
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
export type TonSignedMessage = {
    signature?: string;
    signning_message?: string;
};
export type TonSignProof = {
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
export type TonSignedProof = {
    signature?: string;
};
export type TronGetAddress = {
    address_n: number[];
    show_display?: boolean;
};
export type TronAddress = {
    address?: string;
};
export type TronTransferContract = {
    to_address?: string;
    amount?: UintType;
};
export type TronTriggerSmartContract = {
    contract_address?: string;
    call_value?: number;
    data?: string;
    call_token_value?: number;
    asset_id?: number;
};
export declare enum TronResourceCode {
    BANDWIDTH = 0,
    ENERGY = 1
}
export type TronFreezeBalanceContract = {
    frozen_balance?: number;
    frozen_duration?: number;
    resource?: TronResourceCode;
    receiver_address?: string;
};
export type TronUnfreezeBalanceContract = {
    resource?: TronResourceCode;
    receiver_address?: string;
};
export type TronWithdrawBalanceContract = {
    owner_address?: string;
};
export type TronFreezeBalanceV2Contract = {
    frozen_balance?: number;
    resource?: TronResourceCode;
};
export type TronUnfreezeBalanceV2Contract = {
    unfreeze_balance?: number;
    resource?: TronResourceCode;
};
export type TronWithdrawExpireUnfreezeContract = {};
export type TronDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiver_address?: string;
    lock?: boolean;
};
export type TronUnDelegateResourceContract = {
    resource?: TronResourceCode;
    balance?: number;
    receiver_address?: string;
};
export type TronContract = {
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
export type TronSignTx = {
    address_n: number[];
    ref_block_bytes: string;
    ref_block_hash: string;
    expiration: number;
    data?: string;
    contract: TronContract;
    timestamp: number;
    fee_limit?: number;
};
export type TronSignedTx = {
    signature: string;
    serialized_tx?: string;
};
export type TronSignMessage = {
    address_n: number[];
    message: string;
};
export type TronMessageSignature = {
    address: string;
    signature: string;
};
export type facotry = {};
export declare enum CommandFlags {
    Default = 0,
    Factory_Only = 1
}
export type MessageType = {
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
export type MessageKey = keyof MessageType;
export type MessageResponse<T extends MessageKey> = {
    type: T;
    message: MessageType[T];
};
export type TypedCall = <T extends MessageKey, R extends MessageKey>(type: T, resType: R, message?: MessageType[T]) => Promise<MessageResponse<R>>;
export {};
//# sourceMappingURL=messages.d.ts.map