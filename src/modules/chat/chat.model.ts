import {
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';
import { Message } from '../message/message.model';

@Table({ tableName: 'Chats', timestamps: true, underscored: true })
export class Chat extends Model {
  @ForeignKey(() => User)
  @Column
  userId1: number;

  @ForeignKey(() => User)
  @Column
  userId2: number;

  @HasMany(() => Message, { as: 'messages' })
  messages: Message[];
}
