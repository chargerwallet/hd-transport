/// <reference types="node" />
import { Root } from 'protobufjs/light';
import ByteBuffer from 'bytebuffer';
export declare function buildOne(messages: Root, name: string, data: Record<string, unknown>): Buffer;
export declare const buildEncodeBuffers: (messages: Root, name: string, data: Record<string, unknown>) => Buffer[];
export declare const buildBuffers: (messages: Root, name: string, data: Record<string, unknown>) => ByteBuffer[];
//# sourceMappingURL=send.d.ts.map