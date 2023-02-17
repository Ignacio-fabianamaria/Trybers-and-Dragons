import Race from './Race';

class Elf extends Race {
  private static racesInstances = 0;

  constructor(
    name:string,
    dexterity:number,
    private _maxLifePoints = 99,
  ) {
    super(name, dexterity);
    Elf.racesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Elf;