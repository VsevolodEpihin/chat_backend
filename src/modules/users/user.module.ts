import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

import { User } from './user.model';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports: [SequelizeModule.forFeature([User])],
})
export class UserModule {}
