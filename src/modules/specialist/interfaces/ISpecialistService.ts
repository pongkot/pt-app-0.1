import { SpecialistProfileModel } from "@/modules/specialist";

export interface ISelectOption {
  text: string;
  value: string;
}

export interface ISpecialistService {
  getSpecialistOption(
    specialistProfile: SpecialistProfileModel
  ): Array<ISelectOption>;
}
