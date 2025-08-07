import { Admin } from 'src/admin/entities/admin.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customer')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone_no: string;

  @Column({ default: 'customer' })
  role: string;

  @ManyToOne(() => Admin, (Admin) => Admin.customers)
  @JoinColumn({
    name: 'Admin_id',
  })
  admins: Admin;
}
