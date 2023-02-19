import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    private _lifePoints:number = 85,
    private _strength:number = 63,
  ) {}

  get lifePoints() {
    return this._lifePoints;
  }

  get strength() {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    const demage = this._lifePoints - attackPoints;

    if (this._lifePoints - demage === 0) {
      this._lifePoints = -1;
    }
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;