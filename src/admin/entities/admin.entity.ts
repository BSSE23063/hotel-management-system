import { Booking } from 'src/bookings/entities/booking.entity';
import { Customer } from 'src/customer/entities/customer.entity';
import { Room } from 'src/room/entities/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admins')
export class Admin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone_no: string;

  @Column({default:"admin"})
  role:string

  @OneToMany(() => Booking, (Booking) => Booking.admin, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  bookings: Booking[];

  @OneToMany(() => Room, (Room) => Room.admins, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  rooms: Room[];

  @OneToMany(() => Customer, (Customer) => Customer.admins, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  customers: Customer[];
}
