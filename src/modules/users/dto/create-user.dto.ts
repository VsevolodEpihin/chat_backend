import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

import { createTransformParams } from '../../../utils/util.dto';
import { Optional } from '@nestjs/common';

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @Transform(createTransformParams)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Transform(createTransformParams)
  login: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  @Optional()
  imageUrl: string;
}
