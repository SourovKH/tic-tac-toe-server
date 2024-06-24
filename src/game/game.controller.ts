import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateDto } from './dto/game-state.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/state')
  getState(): GameStateDto {
    return this.gameService.getState();
  }
}
