/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { LocalStartegy } from './starategies/local-strategy';
import { JwtStrategy } from './starategies/jwt-strategy';
import { RefreshJwtStrategy } from './starategies/refreshToken.startegy';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
   JwtModule.register({
    secret: `${process.env.jwt_secret}`,
    signOptions: {expiresIn:'60s'},
  }),
],
  providers: [
    AuthService, 
    UserService, 
    LocalStartegy,
    JwtStrategy,
    RefreshJwtStrategy
  ],
  controllers: [AuthController]
})
export class AuthModule {}
