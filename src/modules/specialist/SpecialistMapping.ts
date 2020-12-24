import { SpecialistProfileModel } from "@/modules/specialist/SpecialistProfileModel";

export class SpecialistMapping {
  private static instance: SpecialistMapping = new SpecialistMapping();

  static getInstance(): SpecialistMapping {
    return this.instance;
  }

  toSpecialistProfileModel(doc: {
    id: string;
    name: string;
    surname: string;
    role: string;
    teams?: Array<{ id: string; name: string; surname: string }>;
  }): SpecialistProfileModel {
    const model: SpecialistProfileModel = new SpecialistProfileModel();

    model
      .setId(doc.id)
      .setName(doc.name)
      .setSurname(doc.surname);

    if (doc.teams) {
      const list: Array<SpecialistProfileModel> = [];

      doc.teams.forEach(
        (doc: { id: string; name: string; surname: string }) => {
          const _model = new SpecialistProfileModel()
            .setId(doc.id)
            .setName(doc.name)
            .setSurname(doc.surname);
          list.push(_model);
        }
      );

      model.setTeams(list);
    }

    return model;
  }
}
