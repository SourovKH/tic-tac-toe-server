import { Injectable } from '@nestjs/common';

export class PlayerService {
  name: String;
  id: number;
  symbol: String;
  #moves: number[];

  constructor(name: String, id: number, symbol: String) {
    this.name = name;
    this.id = id;
    this.symbol = symbol;
    this.#moves = [];
  }

  updateMove(move: number) {
    this.#moves.push(move);
  }

  getMoves() {
    return [...this.#moves];
  }
}
