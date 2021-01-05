
interface UserMeta {
  [propsName: string]: string;
}

interface ObjectCallback {
  url: string; // After a file is uploaded successfully, the OSS sends a callback request to this URL.
  host?: string; // The host header value for initiating callback requests.
  body: string; // The value of the request body when a callback is initiated, for example, key=$(key)&etag=$(etag)&my_var=$(x:my_var).
  contentType?: string; // The Content-Type of the callback requests initiatiated, It supports application/x-www-form-urlencoded and application/json, and the former is the default value.
  customValue?: object;
  headers?: object; //  extra headers, detail see RFC 2616
}

export interface MultipartDownload {
  parallel?: number;
  partSize?: number;
  versionId?: string;
  enableCRC64?: boolean;
  progress?: (doneParts: number, totalParts: number, info: {
    status: number,
    headers: object,
    size: number,
    rt: number
  }) => any;
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
