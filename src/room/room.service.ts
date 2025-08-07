import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomsCategoryService } from 'src/rooms_category/rooms_category.service';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomsRepository: Repository<Room>,
    private readonly roomcatservice:RoomsCategoryService,
    private readonly adaminservice:AdminService,

  ) {}
 async create(createRoomDto: CreateRoomDto) {
     let id1: number | undefined = createRoomDto.Admin_id;
     let id2: number | undefined = createRoomDto.room_category_id;
    if (!id1||!id2) {
      throw new BadRequestException();
    }
    const target1 = await this.adaminservice.findOne(id1);
    const target2 = await this.roomcatservice.findOne(id2);

    if (!target1||!target2) {
      throw new NotFoundException();
    }
    createRoomDto['admins'] = target1;
    createRoomDto['room_category_ids'] = target2;
    const user = this.roomsRepository.create(createRoomDto);
    
    return await this.roomsRepository.save(user);
  }

  findAll() {
    return this.roomsRepository.find();
  }

 async findOne(id: number) {
     const target = await this.roomsRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return target;
  }

 async update(id: number, updateRoomDto: UpdateRoomDto) {
    const target = await this.roomsRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    Object.assign(target, updateRoomDto);
    return this.roomsRepository.save(target);
  }

 async remove(id: number) {
     const target = await this.roomsRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return await this.roomsRepository.remove(target);
  }
}
