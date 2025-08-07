import { Test, TestingModule } from '@nestjs/testing';
import { RoomsCategoryService } from './rooms_category.service';

describe('RoomsCategoryService', () => {
  let service: RoomsCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsCategoryService],
    }).compile();

    service = module.get<RoomsCategoryService>(RoomsCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
