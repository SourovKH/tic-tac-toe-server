import { IsNotEmpty, IsString } from "class-validator";

export class JoinGameDto {
  @IsString()
  @IsNotEmpty()
  name: String;
}
