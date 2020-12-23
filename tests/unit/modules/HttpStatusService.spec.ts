import { HttpStatusService } from "@/modules/http-status/HttpStatusService";

const httpStatusCode: HttpStatusService = HttpStatusService.getInstance();

describe("HttpStatusService", () => {
  it("status code 400 is Bad Request should be true", () => {
    const e = "Bad Request";
    const a = httpStatusCode.getHttpStatusMessage("400");
    expect(a).toBe(e);
  });

  it("status code 99 is Invalid status code should be true", () => {
    const e = "Invalid status code";
    const a = httpStatusCode.getHttpStatusMessage("99");
    expect(a).toBe(e);
  });
});
