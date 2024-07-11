import { Injectable } from '@nestjs/common';
import { Iroot_return } from './app.interface';

@Injectable()
export class AppService {
  getHello(): Iroot_return {
    return {
      'message' : 'Identity Reconciliation Service Running...'
    };
  }
}
