import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomServiceService } from './room_service.service';
import { CreateRoomServiceDto } from './dto/create-room_service.dto';
import { UpdateRoomServiceDto } from './dto/update-room_service.dto';

@Controller('room-service')
export class RoomServiceController {
  constructor(private readonly roomServiceService: RoomServiceService) {}

  @Post()
  create(@Body() createRoomServiceDto: CreateRoomServiceDto) {
    return this.roomServiceService.create(createRoomServiceDto);
  }

  @Get()
  findAll() {
    return this.roomServiceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomServiceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomServiceDto: UpdateRoomServiceDto) {
    return this.roomServiceService.update(+id, updateRoomServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomServiceService.remove(+id);
  }
}
