import Race from './Race';

class Dwarf extends Race {
  private static racesInstances = 0;
  constructor(
    name:string, 
    dexterity:number, 
    private _maxLifePoints = 80, 
  ) {
    super(name, dexterity);
    Dwarf.racesInstances += 1;
  }

  get maxLifePoints():number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this.racesInstances;
  }
}

export default Dwarf;