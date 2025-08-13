import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminService } from 'src/admin/admin.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerrepository: Repository<Customer>,
    private readonly adminservice: AdminService,
  ) {}
  async create(createCustomerDto: CreateCustomerDto) {
    let id: number | undefined = createCustomerDto.Admin_id;
    if (!id) {
      throw new BadRequestException();
    }
    const target = await this.adminservice.findOne(id);
    if (!target) {
      throw new NotFoundException();
    }
    createCustomerDto['admins'] = target;
    const customer = this.customerrepository.create(createCustomerDto);

    return await this.customerrepository.save(customer);
  }

  findAll() {
    return this.customerrepository.find();
  }

  async findOne(id: number) {
    const target = await this.customerrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return await this.customerrepository.save(target);
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    const target = await this.customerrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    Object.assign(target, updateCustomerDto);
    return await this.customerrepository.save(target);
  }

  async remove(id: number) {
    const target = await this.customerrepository.findOne({ where: { id } });
    if (!target) {
      throw new NotFoundException();
    }
    return await this.customerrepository.remove(target);
  }
  
async findOnebynameandpass(name: string,password: string) {
  const customer = await this.customerrepository.findOne({ where: {name} });
     if(customer){
      if(customer.password=='random'){
        return { password: customer.password, name: customer.name, role: customer.role };
      }
           const ispasswordvalid= await bcrypt.compare(password,customer.password);
           if(ispasswordvalid){
            return { password: customer.password, name: customer.name, role: customer.role };
           }
           return null;
    }
  
}

}
