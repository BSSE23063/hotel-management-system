import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
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

  async findOnebynameandpass( name: string,password:string) {
    const admin = await this.adminrepository.findOne({ where: {name} });
   if(admin){
         const ispasswordvalid= await bcrypt.compare(password,admin.password);
         if(ispasswordvalid){
          return { password: admin.password, name: admin.name, role: admin.role };
         }
         return null;
  }
}
}
