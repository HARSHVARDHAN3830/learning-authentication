/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './../auth.service';
import {AuthService} from '../auth.service'
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";

@Injectable()
export class LocalStartegy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService){
        super();
    }


    async validate(username:string, password:string){
        const user = await this.authService.validateUser(username, password);
        if(!user){
            throw new UnauthorizedException();
        }
        return user;
    }
}