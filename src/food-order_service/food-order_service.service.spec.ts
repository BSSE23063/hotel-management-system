import { Test, TestingModule } from '@nestjs/testing';
import { FoodOrderServiceService } from './food-order_service.service';

describe('FoodOrderServiceService', () => {
  let service: FoodOrderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FoodOrderServiceService],
    }).compile();

    service = module.get<FoodOrderServiceService>(FoodOrderServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
