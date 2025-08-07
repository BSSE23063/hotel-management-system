import { Service } from 'src/services/entities/service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roomservice')
export class RoomService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  roomservice_bill: number;

 @OneToMany(()=>Service,(Service)=>Service.room_service,{cascade:true,onDelete:"CASCADE"})
 service:Service

}
