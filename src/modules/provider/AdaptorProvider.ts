import { ISpecialistAdaptor } from "@/modules/specialist/interfaces";
import { SpecialistAdaptor, SpecialistMapping } from "@/modules/specialist";

export class AdaptorProvider {
  private static instance: AdaptorProvider = new AdaptorProvider();

  static getInstance(): AdaptorProvider {
    return this.instance;
  }

  specialist(): ISpecialistAdaptor {
    const instance: ISpecialistAdaptor = SpecialistAdaptor.getInstance();
    instance.setSpecialistMapping(SpecialistMapping.getInstance());
    return instance;
  }
}
