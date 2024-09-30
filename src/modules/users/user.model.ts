import { Model, Table, Column } from 'sequelize-typescript';

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
}
