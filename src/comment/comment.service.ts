/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {

    findUSerComment(userId:string){
        return "this is the comment of the user";
    }
}
