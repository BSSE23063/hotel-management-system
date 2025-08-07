import { Test, TestingModule } from '@nestjs/testing';
import { FoodOrderServiceController } from './food-order_service.controller';
import { FoodOrderServiceService } from './food-order_service.service';

describe('FoodOrderServiceController', () => {
  let controller: FoodOrderServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FoodOrderServiceController],
      providers: [FoodOrderServiceService],
    }).compile();

    controller = module.get<FoodOrderServiceController>(FoodOrderServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
