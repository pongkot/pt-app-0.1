import { SpecialistProfileModel } from "@/modules/specialist/SpecialistProfileModel";

export interface ISpecialistAdaptor {
  getProfileById(): Promise<SpecialistProfileModel>;
}
