import { initialPieces } from './piece';

export class Player {
  constructor(name, hand) {
    this.name = name;
    this.hand = hand;
    this.pieces = initialPieces();
  }
}
