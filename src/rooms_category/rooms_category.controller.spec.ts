import { Test, TestingModule } from '@nestjs/testing';
import { RoomsCategoryController } from './rooms_category.controller';
import { RoomsCategoryService } from './rooms_category.service';

describe('RoomsCategoryController', () => {
  let controller: RoomsCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsCategoryController],
      providers: [RoomsCategoryService],
    }).compile();

    controller = module.get<RoomsCategoryController>(RoomsCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
