/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  imports:[JwtModule.register({
      secret: process.env.jwt_secret,
      signOptions: {expiresIn: "3600s"}
    }),
    
  ],
  providers: [AuthService, UserService, JwtService, ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
