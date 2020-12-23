import { HttpStatusService } from "@/modules/http-status/HttpStatusService";
import { httpStatusCode } from "@/modules/common/httpStatusCode";

const httpStatusCodeService: HttpStatusService = HttpStatusService.getInstance().setHttpStatusCodeDocs(
  httpStatusCode
);

describe("HttpStatusService", () => {
  it("status code 400 is Bad Request should be true", () => {
    const e = "Bad Request";
    const a = httpStatusCodeService.getHttpStatusMessage("400");
    expect(a).toBe(e);
  });

  it("status code 99 is Invalid status code should be true", () => {
    const e = "Invalid status code";
    const a = httpStatusCodeService.getHttpStatusMessage("99");
    expect(a).toBe(e);
  });
});
