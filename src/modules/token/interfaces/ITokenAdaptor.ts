export interface ITokenAdaptor {
  decode(token: string): Promise<string>;
}
