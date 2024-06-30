import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { GameService } from './game.service';
import { GameStateDto, GameStateReqDto } from './dto/game-state.dto';
import { JoinGameDto } from './dto/join-game.dto';
import { PlayerMoveDto } from './dto/play-move.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/state')
  getState(@Body() userDetails: GameStateReqDto): GameStateDto {
    return this.gameService.getState(+userDetails.id);
  }

  @Post('/join')
  joinGame(@Body() joinGameDto: JoinGameDto) {
    return this.gameService.addPlayer(joinGameDto.name);
  }

  @Post('/move')
  playMove(@Body() playerMoveDto: PlayerMoveDto) {
    this.gameService.playMove(playerMoveDto);
  }

  @Get('/other-player/:id')
  getOtherPlayer(@Param('id', ParseIntPipe) id: number) {
    return this.gameService.otherPlayerDetails(id);
  }
}
