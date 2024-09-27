import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
