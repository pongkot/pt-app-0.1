import { IAuthAdaptor } from "@/modules/auth/interfaces";
import { Logger } from "@/modules/common/Logger";

// TODO refactor dynamic config
export class AuthAdaptor implements IAuthAdaptor {
  private static instance: AuthAdaptor = new AuthAdaptor();
  private readonly logger: Logger = new Logger("AuthAdaptor");

  static getInstance(): AuthAdaptor {
    return this.instance;
  }

  async getVerify(token: string): Promise<boolean> {
    const response: Response = await fetch(
      "http://localhost:3000/auth/verify",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const result: string = await response.text();
    return result.toUpperCase() === "TRUE";
  }
}
