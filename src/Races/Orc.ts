import Race from './Race';

class Orc extends Race {
  private static racesInstances = 0;

  constructor(
    name:string,
    dexterity:number,
    private _maxLifePoints = 74,
  ) {
    super(name, dexterity);
    Orc.racesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Orc;