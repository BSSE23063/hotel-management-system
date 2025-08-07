import { Booking } from "src/bookings/entities/booking.entity";
import { FoodOrderService } from "src/food-order_service/entities/food-order_service.entity";
import { Room } from "src/room/entities/room.entity";
import { RoomService } from "src/room_service/entities/room_service.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";


@Entity("service")
export class Service {

@PrimaryGeneratedColumn()
id:number


@Column({type:"timestamp"})
service_time:Date

@Column()
service_bill:number

@ManyToOne(()=>Room,(Room)=>Room.services)
@JoinColumn({
    name:"room_id"
})
room:Room


@ManyToOne(()=>Booking,(Booking)=>Booking.service)
@JoinColumn({
    name:"bookikng_id"
})
booking:Booking


@ManyToOne(()=>RoomService,(RoomService)=>RoomService.service)
@JoinColumn({
    name:"roomservice_id"
})
room_service:RoomService


@ManyToOne(()=>FoodOrderService,(FoodOrderService)=>FoodOrderService.service)
@JoinColumn({
    name:"foodorder_id"
})
foodService:FoodOrderService

}
