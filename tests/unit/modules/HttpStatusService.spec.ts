import { HttpStatusService } from "@/modules/http-status/HttpStatusService";
import {
  IHttpStatusCode,
  IHttpStatusService
} from "@/modules/http-status/interfaces";

const mockHttpStatus: Array<IHttpStatusCode> = [
  {
    statusCode: "404",
    message: "Not Found"
  }
];

const httpStatusCodeService: IHttpStatusService = HttpStatusService.getInstance();

httpStatusCodeService.setHttpStatusCodeDocs(mockHttpStatus);

describe("HttpStatusService", () => {
  it("status code 404 is Not Found should be true", () => {
    const statusCode = "404";
    const e: IHttpStatusCode = {
      statusCode,
      message: "Not Found"
    };
    const a: IHttpStatusCode = httpStatusCodeService.getHttpStatus(statusCode);
    expect(a).toMatchObject(e);
  });

  it("status code 99 is Invalid status code should be true", () => {
    const statusCode = "99";
    const e: IHttpStatusCode = {
      statusCode: "-1",
      message: "Invalid status code"
    };
    const a: IHttpStatusCode = httpStatusCodeService.getHttpStatus(statusCode);
    expect(a).toMatchObject(e);
  });
});
