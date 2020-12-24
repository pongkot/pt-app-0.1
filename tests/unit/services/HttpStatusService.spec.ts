import { HttpStatusService } from "@/modules/http-status/HttpStatusService";
import { IHttpStatusService } from "@/modules/http-status/interfaces";
import { IHttpStatusCode } from "@/modules/common/interfaces";

const mockHttpStatus: Array<IHttpStatusCode> = [
  {
    code: "404",
    phrase: "Not Found"
  }
];

const httpStatusCodeService: IHttpStatusService = HttpStatusService.getInstance();

httpStatusCodeService.setHttpStatusCodeDocs(mockHttpStatus);

describe("HttpStatusService", () => {
  it("status code 404 is Not Found should be true", () => {
    const statusCode = "404";
    const e: IHttpStatusCode = {
      code: statusCode,
      phrase: "Not Found"
    };
    const a: IHttpStatusCode = httpStatusCodeService.getHttpStatus(statusCode);
    expect(a).toMatchObject(e);
  });

  it("status code 99 is Invalid status code should be true", () => {
    const statusCode = "99";
    const e: IHttpStatusCode = {
      code: "-1",
      phrase: "Invalid status code"
    };
    const a: IHttpStatusCode = httpStatusCodeService.getHttpStatus(statusCode);
    expect(a).toMatchObject(e);
  });
});
