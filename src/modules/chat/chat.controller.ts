import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ChatService } from './chat.service';

@Controller('chats')
export class ChatsController {
  constructor(private readonly chatsService: ChatService) {}
  @Get()
  getAllChats() {
    return this.chatsService.getAllChats();
  }

  @Post()
  createChat(@Body() chatData: { userId1: string; userId2: string }) {
    console.log(chatData);
    return this.chatsService.createChat(chatData);
  }

  @Get(':id')
  getOneChatById(@Param() id: string) {
    return this.chatsService.getOneChatById(Number(id));
  }

  @Get('search-by-login')
  getOneChatByLogin(@Query('login') login: string) {
    return this.chatsService.getOneChatByLogin(login);
  }

  @Get('search-by-message')
  searchChatsByMessage(@Query('content') content: string) {
    return this.chatsService.searchChatByMessage(content);
  }
}
