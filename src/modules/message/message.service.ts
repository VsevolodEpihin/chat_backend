import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './message.model';
import { CreateMessageDto } from './dto/create-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectModel(Message) private readonly messageRepository: typeof Message,
  ) {}

  async createMessage(data: CreateMessageDto) {
    try {
      return await this.messageRepository.create({ ...data });
    } catch (error) {
      console.error('Error creating message:', error);
      throw new Error('Could not create message');
    }
  }
}
