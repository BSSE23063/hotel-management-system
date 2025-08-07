import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomServiceDto } from './dto/create-room_service.dto';
import { UpdateRoomServiceDto } from './dto/update-room_service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomService } from './entities/room_service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomServiceService {
  constructor(
  @InjectRepository(RoomService)
  private readonly RoomServicerepository:Repository<RoomService>
  
    ){}
 async create(createRoomServiceDto: CreateRoomServiceDto) {
    const RoomService= this.RoomServicerepository.create(createRoomServiceDto);
    return await this.RoomServicerepository.save(RoomService);
  }

  findAll() {
    return this.RoomServicerepository.find();
  }

 async findOne(id: number) {
    const target=await  this.RoomServicerepository.findOne({where:{id}});
       if(!target){
         throw new NotFoundException();
       }
       return target;
  }

 async update(id: number, updateRoomServiceDto: UpdateRoomServiceDto) {
      const target=await  this.RoomServicerepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        Object.assign(target,updateRoomServiceDto);
        return await this.RoomServicerepository.save(target);
  }

 async remove(id: number) {
     const target=await  this.RoomServicerepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        return await this.RoomServicerepository.remove(target);
  }
}
