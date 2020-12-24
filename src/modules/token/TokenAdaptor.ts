import { ITokenAdaptor } from "@/modules/token/interfaces";

// TODO refactor to dynamic config
export class TokenAdaptor implements ITokenAdaptor {
  private static instance: TokenAdaptor = new TokenAdaptor();

  static getInstance(): TokenAdaptor {
    return this.instance;
  }

  // TODO define type
  async decode(token: string): Promise<string> {
    const url = `http://localhost:3000/token/decode?token=${token}`;
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin"
    });
    const result = await response.json();
    if (result["statusCode"]) {
      throw new Error(result["message"]);
    } else {
      return JSON.stringify(result);
    }
  }
}
