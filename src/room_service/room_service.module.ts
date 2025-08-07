import { Module } from '@nestjs/common';
import { RoomServiceService } from './room_service.service';
import { RoomServiceController } from './room_service.controller';
import { RoomService } from './entities/room_service.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([RoomService])],
  controllers: [RoomServiceController],
  providers: [RoomServiceService],
  exports:[RoomServiceService],
})
export class RoomServiceModule {}
