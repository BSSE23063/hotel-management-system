import { IsString, Length } from 'class-validator';

export class CreateCustomerDto {
  name: string;
  email: string;
  phone_no: string;
  Admin_id: number;
  @IsString()
  @Length(5, 13, { message: 'Wrong Password input' })
  password: string;
  role:string;
}
