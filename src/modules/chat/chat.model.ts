import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table({ tableName: 'Chats', timestamps: true, underscored: true })
export class Chat extends Model {
  @ForeignKey(() => User)
  @Column
  userId1: number;

  @ForeignKey(() => User)
  @Column
  userId2: number;
}
