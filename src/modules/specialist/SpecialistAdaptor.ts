import { ISpecialistAdaptor } from "@/modules/specialist/interfaces";
import { SpecialistProfileModel } from "@/modules/specialist/SpecialistProfileModel";
import { SpecialistMapping } from "@/modules/specialist/SpecialistMapping";

export class SpecialistAdaptor implements ISpecialistAdaptor {
  private static instance: SpecialistAdaptor = new SpecialistAdaptor();
  private specialistMapping: SpecialistMapping;

  static getInstance(): SpecialistAdaptor {
    return this.instance;
  }

  async getProfileById(id: string): Promise<SpecialistProfileModel> {
    const response: Response = await fetch(
      `http://localhost:3000/specialist/id1/${id}`,
      { method: "GET", credentials: "same-origin" }
    );

    const result = await response.json();

    if (result["statusCode"]) {
      throw new Error(result["message"]);
    } else {
      return this.specialistMapping.toSpecialistProfileModel(result);
    }
  }

  setSpecialistMapping(instance: SpecialistMapping): this {
    this.specialistMapping = instance;
    return this;
  }
}
