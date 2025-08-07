import { Module } from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { BookingsController } from './bookings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { AdminModule } from 'src/admin/admin.module';
import { RoomModule } from 'src/room/room.module';

@Module({
  imports:[TypeOrmModule.forFeature([Booking])
,AdminModule,
RoomModule
],
  controllers: [BookingsController],
  providers: [BookingsService],
  exports:[BookingsService]
})
export class BookingsModule {}
