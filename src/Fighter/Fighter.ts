import { EnergyType } from '../Energy';

export interface Fighter {
  lifePoints: number;
  strength:number;
  defense:number;
  energy?:EnergyType;
}
  
export default Fighter;