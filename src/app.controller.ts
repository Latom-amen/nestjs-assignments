import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  isPrime(num: number): boolean {
    if (num <= 1) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false; 
      }
    }
    return true; 
  }

  @Get('checkprime')
  checkPrime(@Query('n') number: string): string {
    const num = parseInt(number, 10);
    if (this.isPrime(num)) {
      return `is prime number: ${num}`;
    } else {
      return `is not prime number: ${num} `;
    }
  }
}