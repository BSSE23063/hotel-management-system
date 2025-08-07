import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { Repository } from 'typeorm';
import { BookingsService } from 'src/bookings/bookings.service';

@Injectable()
export class PaymentsService {
   constructor(
  @InjectRepository(Payment)
  private readonly paymentrepository:Repository<Payment>,
  private readonly bookingservice:BookingsService
  
    ){}
 async create(createPaymentDto: CreatePaymentDto) {
   let id: number | undefined = createPaymentDto.bookingpayment_id;
       if (!id) {
         throw new BadRequestException();
       }
       const target = await this.bookingservice.findOne(id);
       if (!target) {
         throw new NotFoundException();
       }
       createPaymentDto['room'] = target;
       const payment = this.paymentrepository.create(createPaymentDto) 
       return await this.paymentrepository.save(payment);
  }

  findAll() {
    return this.paymentrepository.find();
  }

 async findOne(id: number) {
     const target=await  this.paymentrepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        return target;
  }

 async update(id: number, updatePaymentDto: UpdatePaymentDto) {
     const target=await  this.paymentrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    Object.assign(target,updatePaymentDto);
    return await this.paymentrepository.save(target);
  }

 async remove(id: number) {
    const target=await  this.paymentrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    return await this.paymentrepository.remove(target);
  }
}
