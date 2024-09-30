import { SequelizeModule } from '@nestjs/sequelize';
import { MessagesController } from './message.controller';
import { MessageService } from './message.service';
import { Message } from './message.model';
import { Module } from '@nestjs/common';

@Module({
  imports: [SequelizeModule.forFeature([Message])],
  controllers: [MessagesController],
  providers: [MessageService],
})
export class MessageModule {}
