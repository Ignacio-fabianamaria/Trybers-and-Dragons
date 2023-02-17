//  criar um tipo novo, o type EnergyType;
export type EnergyType = 'mana' | 'stamina';

export interface IEnergy {
  type_:EnergyType;
  amount:number;
}

export default IEnergy;