import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { Payment } from './entities/payment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsModule } from 'src/bookings/bookings.module';

@Module({
  imports:[TypeOrmModule.forFeature([Payment])
,BookingsModule
],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
