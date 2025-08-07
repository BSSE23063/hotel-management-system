import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodInventoryDto } from './dto/create-food_inventory.dto';
import { UpdateFoodInventoryDto } from './dto/update-food_inventory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodInventory } from './entities/food_inventory.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FoodInventoryService {
   constructor(
  @InjectRepository(FoodInventory)
  private readonly inventoryrepository:Repository<FoodInventory>
  
    ){}
 async create(createFoodInventoryDto: CreateFoodInventoryDto) {
    const inventory= this.inventoryrepository.create(createFoodInventoryDto);
    return await this.inventoryrepository.save(inventory);
  }

  findAll() {
    return this.inventoryrepository.find();
  }

 async findOne(id: number) {
   const target=await  this.inventoryrepository.findOne({where:{id}});
       if(!target){
         throw new NotFoundException();
       }
       return target;
  }

 async update(id: number, updateFoodInventoryDto: UpdateFoodInventoryDto) {
     const target=await  this.inventoryrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    Object.assign(target,updateFoodInventoryDto);
    return await this.inventoryrepository.save(target);
  }

 async remove(id: number) {
    const target=await  this.inventoryrepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    return await this.inventoryrepository.remove(target);
  }
}
