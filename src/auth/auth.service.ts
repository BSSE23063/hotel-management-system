import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminService } from 'src/admin/admin.service';
import { Admin } from 'src/admin/entities/admin.entity';
import { CustomerService } from 'src/customer/customer.service';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { blacklist_tkn } from './blacklist_tkn.entity';
import {createblacklisttkn} from './tkn.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(blacklist_tkn)
    private readonly tknrepository: Repository<blacklist_tkn>,
    private readonly adminService: AdminService,
    private readonly customerService: CustomerService,
    private jwtService: JwtService
  ) {}

    async validateUser(name: string, password: string): Promise<any> {
    console.log(`Validating User: name=${name}, password=${password}`);
    
    const admin = await this.adminService.findOnebynameandpass(name,password);
    if(admin){
    return { password: admin.password, name: admin.name, role: admin.role };
    }

    const customer = await this.customerService.findOnebynameandpass(name,password);
    

    if (customer) {
        return { password: customer.password, name: customer.name, role: customer.role };
    }

    console.log('No User or admin Found');
    return null;
}

async login(user: any) {
    console.log('Login Called with User:', user);
    const payload = { name: user.name, password: user.password, role: user.role };
    const token = this.jwtService.sign(payload);
    console.log('Generated Token:', token);

    return  token;
}

async logout(token:string){
  console.log(token);
 // console.log(token.token , typeof(token));
  // if(token){
   const target= this.tknrepository.create({token});
   console.log("target"+target.token);
   return await this.tknrepository.save(target);
  // }
}

}
