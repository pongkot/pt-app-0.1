import { SpecialistMapping } from "@/modules/specialist/SpecialistMapping";
import { SpecialistProfileModel } from "@/modules/specialist";

const mapping: SpecialistMapping = SpecialistMapping.getInstance();

describe("SpecialistProfileModel", () => {
  it("map doc with out teams should be true", () => {
    const doc = {
      id: "1",
      name: "sam",
      surname: "fisher",
      role: "cia"
    };
    const a: SpecialistProfileModel = mapping.toSpecialistProfileModel(doc);
    const e: SpecialistProfileModel = new SpecialistProfileModel()
      .setId(doc.id)
      .setName(doc.name)
      .setSurname(doc.surname);
    expect(a).toMatchObject(e);
  });

  it("map doc with teams should be true", () => {
    const doc = {
      id: "1",
      name: "sam",
      surname: "fisher",
      role: "cia",
      teams: [
        {
          id: "2",
          name: "anna",
          surname: "grimsdottir"
        }
      ]
    };
    const a: SpecialistProfileModel = mapping.toSpecialistProfileModel(doc);
    const e: SpecialistProfileModel = new SpecialistProfileModel()
      .setId(doc.id)
      .setName(doc.name)
      .setSurname(doc.surname)
      .setTeams([
        new SpecialistProfileModel()
          .setId(doc.teams[0].id)
          .setName(doc.teams[0].name)
          .setSurname(doc.teams[0].surname)
      ]);
    expect(a).toMatchObject(e);
  });
});
