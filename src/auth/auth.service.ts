/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {

    constructor(private readonly userService:UserService){}
    async validateUser(userName: string, password:string){
        const user = await this.userService.findOneWithUserName(userName);
        if(user && (await bcrypt.compare(password, user.password))){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }
}
