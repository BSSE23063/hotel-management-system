import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomsCategoryDto } from './dto/create-rooms_category.dto';
import { UpdateRoomsCategoryDto } from './dto/update-rooms_category.dto';
import { RoomsCategory } from './entities/rooms_category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsCategoryService {
   constructor(
  @InjectRepository(RoomsCategory)
  private readonly Rcategoryrepository:Repository<RoomsCategory>
  
    ){}

 async create(createRoomsCategoryDto: CreateRoomsCategoryDto) {
    const category= this.Rcategoryrepository.create(createRoomsCategoryDto);
    return await this.Rcategoryrepository.save(category);
  }

  findAll() {
    return this.Rcategoryrepository.find();
  }

 async findOne(id: number) {
     const target=await  this.Rcategoryrepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        return target;
  }

 async update(id: number, updateRoomsCategoryDto: UpdateRoomsCategoryDto) {
   const target=await  this.Rcategoryrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    Object.assign(target,updateRoomsCategoryDto);
    return await this.Rcategoryrepository.save(target);
  }

 async remove(id: number) {
    const target=await  this.Rcategoryrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    return await this.Rcategoryrepository.remove(target);
  }
}
