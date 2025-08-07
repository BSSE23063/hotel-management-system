import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminrepository: Repository<Admin>,
  ) {}
  async create(createAdminDto: CreateAdminDto) {
    const admin = this.adminrepository.create(createAdminDto);
    return await this.adminrepository.save(admin);
  }

  findAll() {
    return this.adminrepository.find();
  }

  async findOne(id: number) {
    const target = await this.adminrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return target;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const target = await this.adminrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    Object.assign(target, updateAdminDto);
    return await this.adminrepository.save(target);
  }

  async remove(id: number) {
    const target = await this.adminrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return await this.adminrepository.remove(target);
  }

async findOnebynameandid(id: number, name: string) {
     const admin = await this.adminrepository.findOne({where:{id}});
  if(admin){
    if(admin.name==name){
      return admin;
    }
  }
  return null;
  }

}
