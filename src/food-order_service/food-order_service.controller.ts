import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoodOrderServiceService } from './food-order_service.service';
import { CreateFoodOrderServiceDto } from './dto/create-food-order_service.dto';
import { UpdateFoodOrderServiceDto } from './dto/update-food-order_service.dto';

@Controller('food-order-service')
export class FoodOrderServiceController {
  constructor(private readonly foodOrderServiceService: FoodOrderServiceService) {}

  @Post()
  create(@Body() createFoodOrderServiceDto: CreateFoodOrderServiceDto) {
    return this.foodOrderServiceService.create(createFoodOrderServiceDto);
  }

  @Get()
  findAll() {
    return this.foodOrderServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foodOrderServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoodOrderServiceDto: UpdateFoodOrderServiceDto) {
    return this.foodOrderServiceService.update(+id, updateFoodOrderServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foodOrderServiceService.remove(+id);
  }
}
