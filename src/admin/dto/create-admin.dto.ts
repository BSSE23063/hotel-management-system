import { IsInt, IsString, Length } from 'class-validator'

export class CreateAdminDto {
    
    @IsString()
    @Length(1,10,{message:'Name flied could not be empty'})
    name:string;
    
    @IsString()
    @Length(10,13,{message:'Wrong Phone number field'})
    phone_no:string;
    
    @IsString()
    @Length(5,13,{message:'Wrong Password input'})
    password:string;
    
    @IsString()
    @Length(5,5,{message:'Wrong role input'})
    role:string

}
