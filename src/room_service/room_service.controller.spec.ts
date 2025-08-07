import { Test, TestingModule } from '@nestjs/testing';
import { RoomServiceController } from './room_service.controller';
import { RoomServiceService } from './room_service.service';

describe('RoomServiceController', () => {
  let controller: RoomServiceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomServiceController],
      providers: [RoomServiceService],
    }).compile();

    controller = module.get<RoomServiceController>(RoomServiceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
