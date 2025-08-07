export class CreateBookingDto {
    Admin_id?:number;
    booking_date:Date;
    booking_time:Date;
    arrival_date:Date;
    departure_date:Date
    room_id?:number;
}
