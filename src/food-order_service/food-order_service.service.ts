import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFoodOrderServiceDto } from './dto/create-food-order_service.dto';
import { UpdateFoodOrderServiceDto } from './dto/update-food-order_service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { FoodOrderService } from './entities/food-order_service.entity';
import { Repository } from 'typeorm';
import { FoodInventoryService } from 'src/food_inventory/food_inventory.service';
import { ServicesService } from 'src/services/services.service';

@Injectable()
export class FoodOrderServiceService {
  constructor(
    @InjectRepository(FoodOrderService)
    private readonly FoodOrderRepository:Repository<FoodOrderService>,
    private readonly FoodinventService:FoodInventoryService,
   

  ){}
 async create(createFoodOrderServiceDto: CreateFoodOrderServiceDto) {
     let id1: number | undefined = createFoodOrderServiceDto.foodinventory_id;
     

        if (!id1 ) {
          throw new BadRequestException();
        }
        const target1 = await this.FoodinventService.findOne(id1);
        

        if (!target1 ) {
          throw new NotFoundException();
        }
        createFoodOrderServiceDto['inventory'] = target1;
        

        const Order = this.FoodOrderRepository.create(createFoodOrderServiceDto);
        
        return await this.FoodOrderRepository.save(Order);
  }

  findAll() {
    return this.FoodOrderRepository.find();
  }

 async findOne(id: number) {
    const target=await  this.FoodOrderRepository.findOne({where:{id}});
        if(!target){
          throw new NotFoundException();
        }
        return await this.FoodOrderRepository.save(target);
  }

 async update(id: number, updateFoodOrderServiceDto: UpdateFoodOrderServiceDto) {
   const target=await  this.FoodOrderRepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    Object.assign(target,updateFoodOrderServiceDto);
    return await this.FoodOrderRepository.save(target);
  }

 async remove(id: number) {
    const target=await  this.FoodOrderRepository.findOne({where:{id}});
    if(!target){
      throw new NotFoundException();
    }
    return await this.FoodOrderRepository.remove(target);
  }
  }

