import { ISpecialistService } from "@/modules/specialist/interfaces";
import { SpecialistService } from "@/modules/specialist/SpecialistService";

export class ServiceProvider {
  private static instance: ServiceProvider = new ServiceProvider();

  static getInstance(): ServiceProvider {
    return this.instance;
  }

  specialist(): ISpecialistService {
    return SpecialistService.getInstance();
  }
}
