import { Injectable } from '@nestjs/common';
import { GameStateDto } from './dto/game-state.dto';
import { PlayerService } from 'src/player/player.service';
import { PlayerMoveDto } from './dto/play-move.dto';

@Injectable()
export class GameService {
  #board: String[];
  #players: PlayerService[];
  #symbols: String[];

  constructor() {
    this.#board = ['', '', '', '', '', '', '', '', ''];
    this.#symbols = ['X', 'O'];
    this.#players = [];
  }

  getState(playerId: number): GameStateDto {
    if (this.#players.length !== 2)
      return { board: this.#board, turn: false, started: false };
    return {
      board: this.#board,
      turn: this.#players[0].id === playerId,
      started: true,
    };
  }

  addPlayer(name: String) {
    if (this.#players.length !== 2) {
      const playerId = this.#players.length;
      const newPlayer: PlayerService = new PlayerService(
        name,
        playerId,
        this.#symbols[playerId],
      );
      this.#players.push(newPlayer);
      return { id: playerId };
    }
  }

  playMove(playerMove: PlayerMoveDto) {
    const currentPlayer = this.#players[0];
    // if (currentPlayer.id === playerMove.id) {
    currentPlayer.updateMove(playerMove.move);
    this.#board[playerMove.move] =
      this.#board[playerMove.move] || this.#symbols[playerMove.id];
    this.#players = this.#players.reverse();
    // }
  }
}
