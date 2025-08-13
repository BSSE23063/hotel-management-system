import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './entities/customer.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminModule } from 'src/admin/admin.module';
import { JwtModule } from '@nestjs/jwt';
import { blacklist_tkn } from 'src/auth/blacklist_tkn.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer,blacklist_tkn]), AdminModule,JwtModule],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports:[CustomerService]
})
export class CustomerModule {}
