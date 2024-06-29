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
      const playerSymbol = this.#symbols[playerId];
      const newPlayer: PlayerService = new PlayerService(
        name,
        playerId,
        playerSymbol,
      );
      this.#players.push(newPlayer);
      return { id: playerId, symbol: playerSymbol };
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

  otherPlayerDetails(id: number) {
    const otherPlayer: PlayerService = this.#players.filter(
      (player) => player.id !== id,
    )[0];
    return otherPlayer
      ? { name: otherPlayer.name, symbol: otherPlayer.symbol }
      : {};
  }
}
