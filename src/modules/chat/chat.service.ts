import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';

import { Chat } from './chat.model';
import { Injectable } from '@nestjs/common';
import { User } from '../users/user.model';
import { Message } from '../message/message.model';

@Injectable()
export class ChatService {
  constructor(
    @InjectModel(Chat) private readonly chatRepository: typeof Chat,
    @InjectModel(Message) private readonly messageRepository: typeof Message,
  ) {}

  getAllChats() {
    return this.chatRepository.findAll({
      include: [
        {
          model: Message,
          as: 'messages',
          limit: 1,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
  }

  getOneChatById(id: number) {
    return this.chatRepository.findOne({
      where: { id },
      include: [
        { model: Message, as: 'messages', order: [['createdAt', 'DESC']] },
      ],
    });
  }

  async getOneChatByLogin(login: string) {
    return this.chatRepository.findAll({
      include: [
        {
          model: User,
          where: { login },
        },
        {
          model: Message,
          as: 'messages',
          limit: 1,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
  }

  async searchChatByMessage(content: string) {
    const messages = await this.messageRepository.findAll({
      where: {
        message: {
          [Op.like]: `%${content}%`,
        },
      },
    });

    const chatIds = messages.map((msg) => msg.chatId);
    return this.chatRepository.findAll({
      where: { id: chatIds },
      include: [
        {
          model: Message,
          as: 'messages',
          limit: 1,
          order: [['createdAt', 'DESC']],
        },
      ],
    });
  }

  createChat(chatData) {
    console.log(chatData);
    return this.chatRepository.create(chatData);
  }
}
