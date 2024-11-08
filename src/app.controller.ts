import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { query } from 'express';


  @Controller()
export class AppController {

  @Get('fibonacci')
  getFibonacci(@Query('n') number: string): string[] {
    const n = parseInt(number, 10);
    return this.generateFibonacciSteps(n);
  }

  private generateFibonacciSteps(count: number): string[] {
    const fibonacci: number[] = [0, 1];
    const steps: string[] = [];

    steps.push(`0`);
    if (count > 1) steps.push(`1`);

    for (let i = 2; i < count; i++) {
      const nextValue = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(nextValue);
      steps.push(`${nextValue}`);
    }

    return steps;
  }
}