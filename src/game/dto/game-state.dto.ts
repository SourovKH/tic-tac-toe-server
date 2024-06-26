import { IsNotEmpty, IsNumber, isNumber } from "class-validator";

export class GameStateDto{
  board: Array<String>;
  turn: Boolean;
  started: Boolean;
}

export class GameStateReqDto {
  @IsNotEmpty()
  id: String;
}