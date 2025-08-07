import { PartialType } from '@nestjs/mapped-types';
import { CreateFoodOrderServiceDto } from './create-food-order_service.dto';

export class UpdateFoodOrderServiceDto extends PartialType(CreateFoodOrderServiceDto) {}
