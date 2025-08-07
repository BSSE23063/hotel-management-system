import { IsCreditCard, IsDateString, IsInt, isInt, IsNumber, IsString, length, Length, Min } from "class-validator";
import { Timestamp } from "typeorm";

export class CreatePaymentDto {
@IsInt()
bookingpayment_id:number;
@IsNumber()
@Min(1)
amount:number;
@IsCreditCard()
card_number:string;
@IsString()
@Length(5,5,{message:"Must enter the expiry date in MM\YY format"})
expiry:string;
@IsString()
@Length(3,4)
cvv:string;
@IsDateString()
paid_at:Date
}


