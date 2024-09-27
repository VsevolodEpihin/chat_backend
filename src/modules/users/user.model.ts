import { Model, Table, Column } from 'sequelize-typescript';

// import { Chat } from '../chat/chat.model';

@Table({ tableName: 'Users', timestamps: true, underscored: true })
export class User extends Model {
  @Column({
    allowNull: false,
  })
  login: string;

  @Column({
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    allowNull: false,
  })
  password: string;

  @Column
  imageUrl: string;

  // @BelongsToMany(() => User, () => Chat, 'userId1', 'userId2')
  // chatParticipants: User[];
}
