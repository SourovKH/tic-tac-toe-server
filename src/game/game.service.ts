import { Injectable } from '@nestjs/common';
import { GameStateDto } from './dto/game-state.dto';

@Injectable()
export class GameService {
  #board;
  #players;

  constructor() {
    this.#board = ['', '', '', '', '', '', '', '', ''];
    this.#players = ['Sourov', 'Sauma'];
  }

  getState(): GameStateDto {
    return { board: this.#board, turn: true, currentPlayer: this.#players[0] };
  }
}
