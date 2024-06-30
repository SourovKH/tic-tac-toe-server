import { HttpException, HttpStatus } from '@nestjs/common';

export class LobbyIsFullException extends HttpException {
  constructor() {
    super('Lobby is full', HttpStatus.BAD_REQUEST);
  }
}
