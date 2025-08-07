import { Module } from '@nestjs/common';
import { RoomsCategoryService } from './rooms_category.service';
import { RoomsCategoryController } from './rooms_category.controller';
import { RoomsCategory } from './entities/rooms_category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([RoomsCategory])],
  controllers: [RoomsCategoryController],
  providers: [RoomsCategoryService],
  exports:[RoomsCategoryService],
})
export class RoomsCategoryModule {}
