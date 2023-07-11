/* eslint-disable prettier/prettier */
import { PartialType } from "@nestjs/mapped-types";
import { IsEmail, IsString } from "class-validator";    

export class CreateUserDto{
    @IsString()
    name:string;

    @IsEmail()
    email:string;

    @IsString()
    password:string;
}

// A DTO( data transfer object ) defines the type of the body which has to be used by the type of the data
// for exampke above mentioned are the type of data that a user should get



export class UpdateUserDto extends PartialType(CreateUserDto){}