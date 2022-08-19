import Game from "./chess/game";

const chess = new Game()
let desk = chess.desk
console.log(desk.coords['A1'].color)
console.log(Game.states)