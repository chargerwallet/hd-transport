import * as protobuf from 'protobufjs/light';
export declare function parseConfigure(data: protobuf.INamespace): protobuf.Root;
export declare const createMessageFromName: (messages: protobuf.Root, name: string) => {
    Message: protobuf.Type;
    messageType: number;
};
export declare const createMessageFromType: (messages: protobuf.Root, typeId: number) => {
    Message: protobuf.Type;
    messageName: string;
};
//# sourceMappingURL=messages.d.ts.map