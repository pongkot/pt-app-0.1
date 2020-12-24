import { SpecialistProfileModel } from "@/modules/specialist/SpecialistProfileModel";
import { SpecialistMapping } from "@/modules/specialist";

export interface ISpecialistAdaptor {
  getProfileById(id: string): Promise<SpecialistProfileModel>;
  setSpecialistMapping(instance: SpecialistMapping): this;
}
