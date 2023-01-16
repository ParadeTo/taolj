import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  HeroesServiceController,
  HeroesServiceControllerMethods,
} from './gen-code/hero';

interface Hero {
  id: number;
  name: string;
}

interface HeroById {
  id: number;
}

@Controller('hero')
@HeroesServiceControllerMethods()
export class HeroesController implements HeroesServiceController {
  findOne(data: HeroById): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    console.log(data);
    return items.find(({ id }) => id === data.id);
  }
}
