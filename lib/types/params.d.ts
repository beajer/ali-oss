interface UserMeta {
    [propsName: string]: string;
}
interface ObjectCallback {
    url: string;
    host?: string;
    body: string;
    contentType?: string;
    customValue?: object;
    headers?: object;
}
export interface MultipartDownload {
    parallel?: number;
    partSize?: number;
    versionId?: string;
    enableCRC64?: boolean;
    progress?: (doneParts: number, totalParts: number) => any;
    checkpoint?: true | string;
    meta?: UserMeta;
    callback?: ObjectCallback;
    headers?: object;
    ref?: (ref: {
        cancel: (needDestoryed: boolean) => void;
    }) => void;
}
export interface MultipartDownloadRuntime extends MultipartDownload {
    parallel: number;
    partSize: number;
    enableCRC64: boolean;
}
export {};
