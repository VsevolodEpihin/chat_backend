import { SequelizeModule } from '@nestjs/sequelize';
import { ChatsController } from './chat.controller';
import { ChatService } from './chat.service';
import { Module } from '@nestjs/common';
import { Chat } from './chat.model';
import { Message } from '../message/message.model';
import { User } from '../users/user.model';

@Module({
  imports: [SequelizeModule.forFeature([Chat, Message, User])],
  controllers: [ChatsController],
  providers: [ChatService],
})
export class ChatsModule {}
