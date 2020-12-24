import { IHttpStatusCode } from "@/modules/common/interfaces";

export interface IHttpStatusService {
  getHttpStatus(statusCode: string): IHttpStatusCode;
  setHttpStatusCodeDocs(docs: Array<IHttpStatusCode>): this;
}
