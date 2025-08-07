import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';
import { FoodOrderServiceService } from 'src/food-order_service/food-order_service.service';
import { RoomServiceService } from 'src/room_service/room_service.service';
import { BookingsService } from 'src/bookings/bookings.service';
import { RoomService } from 'src/room/room.service';

@Injectable()
export class ServicesService {
   constructor(
    @InjectRepository(Service)
    private readonly Servicerepository:Repository<Service>,
    private readonly foodOrderService:FoodOrderServiceService,
    private readonly Roomserviceservice:RoomServiceService,
    private readonly bookingservice:BookingsService,
    private readonly RoomService:RoomService,
    
      ){}
 async create(createServiceDto: CreateServiceDto) {
    let id1: number | undefined = createServiceDto.room_id;
    let id2: number | undefined = createServiceDto.booking_id;
    let id3: number | undefined = createServiceDto.roomservice_id;
    let id4: number | undefined = createServiceDto.foodorder_id;



          if (!id1 || !id2 || !id3 || !id4) {
            throw new BadRequestException();
          }
          const target3 = await this.Roomserviceservice.findOne(id3);
          const target2 = await this.bookingservice.findOne(id2);
          const target1 = await this.RoomService.findOne(id1);
          const target4 = await this.foodOrderService.findOne(id4);



          if (!target3 || !target2 || !target1 || !target4) {
            throw new NotFoundException();
          }
          createServiceDto['room'] = target1;
          createServiceDto['booking'] = target2;
          createServiceDto['room_service'] = target3;
          createServiceDto['foodService'] = target4;

          
          const service = this.Servicerepository.create(createServiceDto) 
          return await this.Servicerepository.save(service);
  }

  findAll() {
    return this.Servicerepository.find();
  }

 async findOne(id: number) {
    const target=await  this.Servicerepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        return target;
  }

 async update(id: number, updateServiceDto: UpdateServiceDto) {
      const target=await  this.Servicerepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    Object.assign(target,updateServiceDto);
    return await this.Servicerepository.save(target);
  }

 async remove(id: number) {
    const target=await  this.Servicerepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    return await this.Servicerepository.remove(target);
  }
}
