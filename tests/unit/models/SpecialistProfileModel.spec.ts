import { SpecialistProfileModel } from "@/modules/specialist";

const model: SpecialistProfileModel = new SpecialistProfileModel();

describe("SpecialistProfileModel", () => {
  it("set id get id should be true", () => {
    const id = "1";
    model.setId(id);
    expect(model.getId()).toBe(id);
  });

  it("set name get name should be true", () => {
    const name = "sam";
    model.setName(name);
    expect(model.getName()).toBe(name);
  });

  it("set surname get surname should be true", () => {
    const surname = "fisher";
    model.setSurname(surname);
    expect(model.getSurname()).toBe(surname);
  });

  it("set teams get teams should be true", () => {
    const teams = [
      new SpecialistProfileModel()
        .setId("1")
        .setName("sam")
        .setSurname("fisher")
    ];
    model.setTeams(teams);
    expect(model.getTeams()).toMatchObject(teams);
  });
});
