import { PartialType } from '@nestjs/mapped-types';
import { CreateRoomsCategoryDto } from './create-rooms_category.dto';

export class UpdateRoomsCategoryDto extends PartialType(CreateRoomsCategoryDto) {}
