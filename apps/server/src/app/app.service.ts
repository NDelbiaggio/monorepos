import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): any[] {
    return ['Storybook', 'Cypress', 'Angular', 'Nestjs'];
  }
}
