import { Comment } from './comment.entity';
/* eslint-disable prettier/prettier */

import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("topic")
export class Topic{

    @PrimaryGeneratedColumn()
    id:string;

    @Column()
    title:string;

    @Column()
    description:string;

    @OneToMany(
        (type) => Comment,
        (comment) => comment.topic)
    comment: Comment[]

}