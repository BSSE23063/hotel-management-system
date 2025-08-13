import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from 'src/customer/customer.module';
import { AdminModule } from 'src/admin/admin.module';
import { blacklist_tkn } from './blacklist_tkn.entity';
import { RoleGuard } from './role.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([blacklist_tkn]),
    PassportModule,
    ConfigModule, 
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
    CustomerModule,
    AdminModule,
  ],
  providers: [AuthService, JwtStrategy, RoleGuard ],
  controllers: [AuthController],
  exports: [AuthService,JwtModule,RoleGuard],
})
export class AuthModule {}
