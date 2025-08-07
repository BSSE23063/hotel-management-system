import { Admin } from "src/admin/entities/admin.entity";
import { Booking } from "src/bookings/entities/booking.entity";
import { Payment } from "src/payments/entities/payment.entity";
import { RoomsCategory } from "src/rooms_category/entities/rooms_category.entity";
import { Service } from "src/services/entities/service.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("Rooms")
export class Room {

@PrimaryGeneratedColumn()
id:number

@Column()
room_no:string

@ManyToOne(()=>RoomsCategory,(RoomsCategory)=>RoomsCategory.Rooms)
@JoinColumn({
    name:"room_category"
})
room_category_ids:RoomsCategory

@Column()
floor_no:string

@ManyToOne(()=>Admin,(Admin)=>Admin.rooms)
@JoinColumn({
    name:"Admin_id"
})
admins:Admin


@OneToMany(()=>Booking,(Booking)=>Booking.Rooms,{cascade:true,onDelete:"CASCADE"})
bookings:Booking[]

@OneToOne(()=>Payment,(Payment)=>Payment.room,{cascade:true,onDelete:"CASCADE"})
payment:Payment


@OneToMany(()=>Service,(Service)=>Service.room,{cascade:true,onDelete:"CASCADE"})
services:Service[]

}
