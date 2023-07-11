/* eslint-disable prettier/prettier */
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto, UpdateUserDto } from './dto/createUserDto';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
    async findOne(id:any){
        return await this.userRepository.findOne({where: {id}})
    }

    async create(createUserDto:CreateUserDto){
        const user = await this.userRepository.create({...createUserDto})
        return await this.userRepository.save(user);
    }

    async update(id:number, updateUserDto: UpdateUserDto){
        return await this.userRepository.update(id, updateUserDto);
    }

    async findOneWithUserName(userName:string){
        return this.userRepository.findOne({
            where:{email:userName}
        })
    }
}
