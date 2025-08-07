import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './entities/booking.entity';
import { Repository } from 'typeorm';
import { RoomService } from 'src/room/room.service';
import { AdminService } from 'src/admin/admin.service';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    private readonly roomservice: RoomService,
    private readonly adaminservice: AdminService,
  ) {}
  async create(createBookingDto: CreateBookingDto) {
    let id1: number | undefined = createBookingDto.Admin_id;
    let id2: number | undefined = createBookingDto.room_id;
    if (!id1 || !id2) {
      throw new BadRequestException();
    }
    const target1 = await this.adaminservice.findOne(id1);
    const target2 = await this.roomservice.findOne(id2);

    if (!target1 || !target2) {
      throw new NotFoundException();
    }
    createBookingDto['admin'] = target1;
    createBookingDto['Rooms'] = target2;
    const room = this.bookingRepository.create(createBookingDto);

    return await this.bookingRepository.save(room);
  }

  findAll() {
    return this.bookingRepository.find();
  }

  async findOne(id: number) {
    const target = await this.bookingRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return target;
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const target = await this.bookingRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    Object.assign(target, updateBookingDto);
    return this.bookingRepository.save(target);
  }

  async remove(id: number) {
    const target = await this.bookingRepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return await this.bookingRepository.remove(target);
  }
}
