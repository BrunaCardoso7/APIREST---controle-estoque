import { Injectable } from '@nestjs/common';
//objetos para transferências de dados = dto
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
