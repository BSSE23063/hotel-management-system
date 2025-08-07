import { Module } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';
import { Room } from './entities/room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsCategoryModule } from 'src/rooms_category/rooms_category.module';
import { AdminModule } from 'src/admin/admin.module';

@Module({
  imports:[TypeOrmModule.forFeature([Room])
 ,RoomsCategoryModule,
 AdminModule,
],
  controllers: [RoomController],
  providers: [RoomService],
  exports:[RoomService]
})
export class RoomModule {}
