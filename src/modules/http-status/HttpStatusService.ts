import { Logger } from "../common/Logger";
import { IHttpStatusCode, IHttpStatusService } from "./interfaces";

export class HttpStatusService implements IHttpStatusService {
  private static instance: IHttpStatusService = new HttpStatusService();
  private httpStatusCodeDocs: Array<IHttpStatusCode> = [];
  private readonly logger: Logger = new Logger("HttpStatusService");

  static getInstance(): IHttpStatusService {
    return this.instance;
  }

  setHttpStatusCodeDocs(docs: Array<IHttpStatusCode>): this {
    this.httpStatusCodeDocs = docs;
    return this;
  }

  getHttpStatus(statusCode: string): IHttpStatusCode {
    const pickUpStatusCode: Array<IHttpStatusCode> = this.httpStatusCodeDocs.filter(
      (doc: IHttpStatusCode) => doc.statusCode === statusCode
    );
    const result: IHttpStatusCode = {
      statusCode: "-1",
      message: "Invalid status code"
    };
    if (pickUpStatusCode.length > 0) {
      result.statusCode = pickUpStatusCode[0].statusCode;
      result.message = pickUpStatusCode[0].message;
    }
    return result;
  }
}
