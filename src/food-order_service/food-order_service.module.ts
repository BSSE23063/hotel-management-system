import { Module } from '@nestjs/common';
import { FoodOrderServiceService } from './food-order_service.service';
import { FoodOrderServiceController } from './food-order_service.controller';
import { FoodOrderService } from './entities/food-order_service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodInventoryModule } from 'src/food_inventory/food_inventory.module';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports:[TypeOrmModule.forFeature([FoodOrderService])
,FoodInventoryModule
],
  controllers: [FoodOrderServiceController],
  providers: [FoodOrderServiceService],
  exports:[FoodOrderServiceService]
})
export class FoodOrderServiceModule {}
