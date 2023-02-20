import IFighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _playerOne:IFighter,
    private _playerTwo:IFighter,
  ) {
    super(_playerOne);
    this._playerOne = _playerOne;
    this._playerTwo = _playerTwo;
  }

  fight(): number {
    // se os pontos de vida do playerOne e playerTwo forem acima de 0 eles podem duelar
    if (this._playerOne.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this._playerOne.attack(this._playerTwo);// playerOne ataca playerTwo
      this._playerTwo.attack(this._playerOne);// playerTwo ataca playerOne
    }
    return super.fight();// retorna o metodo fight da class Battle que possui as regras da batalha
    // Se o retorno for 1, o player quer foi usado como parâmetro do super ganhou, 
    // se retornar -1 a vitória fica com o player que não foi o parâmetro do super
  }
}

export default PVP;