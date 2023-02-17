import { EnergyType } from '../Energy';

abstract class Archetype {
  constructor(
    private _name:string,
    private _special:number,
    private _cost:number,
  ) {}

  get name() {
    return this._name;
  }

  get special() {
    return this._special;
  }

  get cost() {
    return this._cost;
  }

  static createdArchetypeInstances():number {
    throw new Error('Not implemented');
  }

  // declarando  a assinatura do método
  abstract get energyType():EnergyType;
}

export default Archetype;