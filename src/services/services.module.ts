import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { Service } from './entities/service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomServiceModule } from 'src/room_service/room_service.module';
import { RoomModule } from 'src/room/room.module';
import { BookingsModule } from 'src/bookings/bookings.module';
import { FoodOrderServiceModule } from 'src/food-order_service/food-order_service.module';

@Module({
  imports:[TypeOrmModule.forFeature([Service]),RoomServiceModule,RoomModule,BookingsModule,FoodOrderServiceModule],
  controllers: [ServicesController],
  providers: [ServicesService],
  exports:[ServicesService],
  
})
export class ServicesModule {}
