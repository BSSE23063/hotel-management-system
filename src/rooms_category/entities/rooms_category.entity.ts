import { Room } from "src/room/entities/room.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class RoomsCategory {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    type:string 

    @Column()
    no_of_beds:number


    @OneToMany(()=>Room,(Room)=>Room.room_category_ids,{cascade:true,onDelete:"CASCADE"})
    Rooms:Room[]
}
