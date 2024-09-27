import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { User } from './modules/users/user.model';
import { AuthModule } from './modules/auth/auth.module';
import { CustomJwtModule } from './modules/jwt/jwt.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        dialect: config.get('DB_DIALECT'),
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        models: [User],
        logging: console.log,
      }),
    }),
    UserModule,
    AuthModule,
    CustomJwtModule,
  ],
})
export class AppModule {}
