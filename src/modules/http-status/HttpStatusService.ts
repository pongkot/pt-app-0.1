import { httpStatusCode } from "@/modules/common/httpStatusCode";
import { IHttpStatusService } from "./interfaces";

interface IHttpStatusCode {
  statusCode: string;
  message: string;
}

export class HttpStatusService implements IHttpStatusService {
  private static instance: HttpStatusService = new HttpStatusService();

  static getInstance(): HttpStatusService {
    return this.instance;
  }

  constructor(
    private readonly httpStatusCodeDocs: Array<IHttpStatusCode> = httpStatusCode
  ) {}

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
