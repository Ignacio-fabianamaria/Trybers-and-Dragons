import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType:EnergyType;
  static archetypeInstances = 0;
  constructor(_name:string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger.archetypeInstances += 1;
  }

  get energyType():EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this.archetypeInstances;
  }
}

export default Ranger;