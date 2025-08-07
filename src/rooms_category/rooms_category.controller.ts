import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsCategoryService } from './rooms_category.service';
import { CreateRoomsCategoryDto } from './dto/create-rooms_category.dto';
import { UpdateRoomsCategoryDto } from './dto/update-rooms_category.dto';

@Controller('rooms-category')
export class RoomsCategoryController {
  constructor(private readonly roomsCategoryService: RoomsCategoryService) {}

  @Post()
  create(@Body() createRoomsCategoryDto: CreateRoomsCategoryDto) {
    return this.roomsCategoryService.create(createRoomsCategoryDto); 
  }

  @Get()
  findAll() {
    return this.roomsCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomsCategoryDto: UpdateRoomsCategoryDto) {
    return this.roomsCategoryService.update(+id, updateRoomsCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsCategoryService.remove(+id);
  }
}
