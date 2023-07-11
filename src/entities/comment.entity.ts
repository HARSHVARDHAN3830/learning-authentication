/* eslint-disable prettier/prettier */
import { Topic } from './topic.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from './user.entity';

@Entity("comments")
export class Comment{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text:string;


    @ManyToOne(
        (type) => User,
        (user)=>user.comments
    )
    user:User;

    @ManyToOne(
        (type) => Topic,
        (topic) => topic.comment
    )
    topic:Topic;
}