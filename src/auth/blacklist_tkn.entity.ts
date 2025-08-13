import { Injectable } from "@nestjs/common";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('Blacklist_tkn')
export class blacklist_tkn{

    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    token:string
}