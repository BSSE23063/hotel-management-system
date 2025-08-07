import { Room } from "src/room/entities/room.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity("payment")
export class Payment {
@PrimaryGeneratedColumn()
id:number

@Column()
amount:number

@Column({unique:true})
card_number:string

@Column()
expiry:string

@Column()
cvv:string

@Column({type:"timestamp"})
paid_at:Date

@OneToOne(()=>Room,(Room)=>Room.payment)
@JoinColumn({
    name:"bookingpayment_id"
})
room:Room

}


