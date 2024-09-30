import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

import { Chat } from '../chat/chat.model';
import { User } from '../users/user.model';

@Table({ tableName: 'Messages', timestamps: true, underscored: true })
export class Message extends Model {
  @ForeignKey(() => Chat)
  @Column
  chatId: number;

  @ForeignKey(() => User)
  @Column
  senderId: number;

  @Column({
    allowNull: false,
  })
  message: string;
}
