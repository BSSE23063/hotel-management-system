import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import { AdminModule } from './admin/admin.module';
import { CustomerModule } from './customer/customer.module';
import { RoomModule } from './room/room.module';
import { RoomsCategoryModule } from './rooms_category/rooms_category.module';
import { PaymentsModule } from './payments/payments.module';
import { ServicesModule } from './services/services.module';
import { RoomServiceModule } from './room_service/room_service.module';
import { FoodOrderServiceModule } from './food-order_service/food-order_service.module';
import { FoodInventoryModule } from './food_inventory/food_inventory.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/entities/admin.entity';
import { Booking } from './bookings/entities/booking.entity';
import { Customer } from './customer/entities/customer.entity';
import { FoodInventory } from './food_inventory/entities/food_inventory.entity';
import { FoodOrderService } from './food-order_service/entities/food-order_service.entity';
import { Payment } from './payments/entities/payment.entity';
import { Room } from './room/entities/room.entity';
import { RoomService } from './room_service/entities/room_service.entity';
import { RoomsCategory } from './rooms_category/entities/rooms_category.entity';
import { Service } from './services/entities/service.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),

        password: configService.get<string>('DB_PASSWORD')?.toString(),
        database: configService.get('DB_DATABASE'),
        synchronize: configService.get<boolean>('DB_SYNC'),
        entities: [
          Admin,
          Booking,
          Customer,
          FoodInventory,
          FoodOrderService,
          Payment,
          Room,
          RoomService,
          RoomsCategory,
          Service,
        ],
      }),
    }),

    BookingsModule,
    AdminModule,
    CustomerModule,
    RoomModule,
    RoomsCategoryModule,
    PaymentsModule,
    ServicesModule,
    RoomServiceModule,
    FoodOrderServiceModule,
    FoodInventoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
