import { Controller, Get, Query} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  factorial(num: number): number {
    if (num === 0) {
      return 1; 
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i; 
    }
    return result;
  }

  @Get('factorial')
  calculateFactorial(@Query('n') number: string): string {
    const num = parseInt(number, 10);

    const result = this.factorial(num);
    return `The factorial: ${result}`;
  }
}