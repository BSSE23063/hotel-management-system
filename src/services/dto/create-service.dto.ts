import { Timestamp } from 'typeorm';

export class CreateServiceDto {
  room_id: number;
  service_time: Timestamp;
  booking_id: number;
  service_bill: number;
  roomservice_id: number;
  foodorder_id:number;
}
