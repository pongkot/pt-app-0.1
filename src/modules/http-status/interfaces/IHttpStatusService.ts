// TODO move it out
export interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

export interface IHttpStatusService {
  getHttpStatus(statusCode: string): IHttpStatusCode;
  setHttpStatusCodeDocs(docs: Array<IHttpStatusCode>): this;
}
