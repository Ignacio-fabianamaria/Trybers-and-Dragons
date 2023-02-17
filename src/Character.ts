import Archetype from './Archetypes';
import { EnergyType } from './Energy';
import IFighter from './Fighter/Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements IFighter {
  private _name:string;
  private _dexterity:number; 
  private _race: Race;
  /* private _archetype: Archetype;
  private _maxLifePoints:number; 
  private _lifePoints:number;
  private _strength:number;
  private _defense:number;
  private _energy:EnergyType;
   */
  constructor(name:string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
  }
}

export default Character;