import { IHttpStatusCode } from "../common/interfaces";
import { Logger } from "../common/Logger";
import { IHttpStatusService } from "./interfaces";

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
      (doc: IHttpStatusCode) => doc.code === statusCode
    );
    const result: IHttpStatusCode = {
      code: "-1",
      phrase: "Invalid status code"
    };
    if (pickUpStatusCode.length > 0) {
      result.code = pickUpStatusCode[0].code;
      result.phrase = pickUpStatusCode[0].phrase;
    }
    return result;
  }
}
