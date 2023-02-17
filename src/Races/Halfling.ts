import Race from './Race';

class Halfling extends Race {
  private static racesInstances = 0;

  constructor(
    name:string,
    dexterity:number,
    private _maxLifePoints = 60,
  ) {
    super(name, dexterity);
    Halfling.racesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Halfling;