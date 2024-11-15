import type { ChargerWalletDeviceInfoWithSession, MessageFromChargerWallet } from '../types';
export declare function info(res: any): {
    version: string;
    configured: boolean;
};
export declare function version(version: any): string;
export declare function devices(res: any): Array<ChargerWalletDeviceInfoWithSession>;
export declare function acquire(res: any): string;
export declare function call(res: any): MessageFromChargerWallet;
//# sourceMappingURL=highlevel-checks.d.ts.map