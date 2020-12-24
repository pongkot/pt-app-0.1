export class SpecialistProfileModel {
  private id: string;
  private name: string;
  private surname: string;
  private teams?: Array<SpecialistProfileModel>;

  getId(): string {
    return this.id;
  }

  setId(id: string): this {
    this.id = id;
    return this;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): this {
    this.name = name;
    return this;
  }

  getSurname(): string {
    return this.surname;
  }

  setSurname(surname: string): this {
    this.surname = surname;
    return this;
  }

  getTeams(): Array<SpecialistProfileModel> {
    return this.teams;
  }

  setTeams(teams: Array<SpecialistProfileModel>): this {
    this.teams = teams;
    return this;
  }
}
