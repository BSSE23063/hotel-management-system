import { FoodOrderService } from 'src/food-order_service/entities/food-order_service.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('inventory')
export class FoodInventory {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  type: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @OneToMany(
    () => FoodOrderService,
    (FoodOrderService) => FoodOrderService.inventory,
    { cascade: true, onDelete: 'CASCADE' },
  )
  food_order: FoodOrderService[];
}
