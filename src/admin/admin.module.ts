import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { Admin } from './entities/admin.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { blacklist_tkn } from 'src/auth/blacklist_tkn.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Admin, blacklist_tkn]),JwtModule,JwtModule],
  controllers: [AdminController],
  providers: [AdminService],
  exports:[AdminService]
})
export class AdminModule {}
