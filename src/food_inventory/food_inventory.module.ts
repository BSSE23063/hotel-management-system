import { Module } from '@nestjs/common';
import { FoodInventoryService } from './food_inventory.service';
import { FoodInventoryController } from './food_inventory.controller';
import { FoodInventory } from './entities/food_inventory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from 'src/bookings/bookings.module';

@Module({
  imports:[TypeOrmModule.forFeature([FoodInventory]),
BookingsModule
],
  controllers: [FoodInventoryController],
  providers: [FoodInventoryService],
  exports:[FoodInventoryService]
})
export class FoodInventoryModule {}
