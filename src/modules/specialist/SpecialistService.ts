import {
  ISelectOption,
  ISpecialistService
} from "@/modules/specialist/interfaces";
import { SpecialistProfileModel } from "@/modules/specialist/SpecialistProfileModel";

export class SpecialistService implements ISpecialistService {
  private static instance: SpecialistService = new SpecialistService();

  static getInstance(): SpecialistService {
    return this.instance;
  }

  getSpecialistOption(
    specialistProfile: SpecialistProfileModel
  ): Array<ISelectOption> {
    const list = [
      {
        text: `${specialistProfile.getName()} ${specialistProfile.getSurname()}`,
        value: specialistProfile.getId()
      }
    ];

    if (specialistProfile.getTeams()) {
      specialistProfile.getTeams().forEach(Specialist => {
        const item = {
          text: `${Specialist.getName()} ${Specialist.getSurname()}`,
          value: Specialist.getId()
        };
        list.push(item);
      });
    }

    return list;
  }
}
