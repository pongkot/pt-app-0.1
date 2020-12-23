export interface IHttpStatusService {
  getHttpStatusMessage(statusCode: string): string;
}
