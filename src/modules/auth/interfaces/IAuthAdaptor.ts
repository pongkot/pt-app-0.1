export interface IAuthAdaptor {
  getVerify(token: string): Promise<boolean>;
}
