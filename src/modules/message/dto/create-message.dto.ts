import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateMessageDto {
  @IsNumber()
  chatId: number;

  @IsNumber()
  senderId: number;

  @IsString()
  @IsNotEmpty()
  message: string;
}
