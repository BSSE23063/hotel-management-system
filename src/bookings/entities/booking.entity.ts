import { Admin } from "src/admin/entities/admin.entity";
import { Room } from "src/room/entities/room.entity";
import { Service } from "src/services/entities/service.entity";
import {  Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity("Booking")
export class Booking {

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    booking_date:Date

    @Column({type:"timestamp"})
    booking_time:Date

    @Column()
    arrival_date:Date

    @Column()
    departure_date:Date

    @ManyToOne(()=>Admin,(Admin)=>Admin.bookings)
    @JoinColumn({
        name:"Admin_id"
    })
    admin:Admin
    
    @ManyToOne(()=>Room,(Room)=>Room.bookings)
    @JoinColumn({
        name:"room_id"
    })
    Rooms:Room


    @OneToMany(()=>Service,(Service)=>Service.booking,{cascade:true,onDelete:"CASCADE"})
    service:Service[]

    

}



