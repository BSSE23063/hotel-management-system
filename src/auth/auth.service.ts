import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entities/admin.entity';
import { CustomerService } from 'src/customer/customer.service';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    
    private readonly adminService: AdminService,

    private readonly customerService: CustomerService,
    private jwtService: JwtService
  ) {}

    async validateUser(name: string, id: number): Promise<any> {
    console.log(`Validating User: name=${name}, id=${id}`);
    const admin = await this.adminService.findOnebynameandid(id, name);
    console.log('Admin Found:', admin);

    if (admin) {
        return { id: admin.id, name: admin.name, role: admin.role };
    }

    const customer = await this.customerService.findOnebynameAndId(id, name);
    console.log('Customer Found:', customer);

    if (customer) {
        return { id: customer.id, name: customer.name, role: customer.role };
    }

    console.log('No User Found');
    return null;
}

async login(user: any) {
    console.log('Login Called with User:', user);
    const payload = { name: user.name, id: user.id, role: user.role };
    const token = this.jwtService.sign(payload);
    console.log('Generated Token:', token);

    return  token;
}

}
