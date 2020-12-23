import { IHttpStatusService } from "./interfaces";

interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

export class HttpStatusService implements IHttpStatusService {
  private static instance: HttpStatusService = new HttpStatusService();
  private httpStatusCodeDocs: Array<IHttpStatusCode> = [];

  static getInstance(): HttpStatusService {
    return this.instance;
  }

  setHttpStatusCodeDocs(docs: Array<IHttpStatusCode>): this {
    this.httpStatusCodeDocs = docs;
    return this;
  }

  getHttpStatusMessage(statusCode: string): string {
    const pickUpStatusCode: Array<IHttpStatusCode> = this.httpStatusCodeDocs.filter(
      (doc: IHttpStatusCode) => doc.statusCode === statusCode
    );
    const result: string = pickUpStatusCode[0]
      ? pickUpStatusCode[0].message
      : "Invalid status code";
    return result;
  }
}
