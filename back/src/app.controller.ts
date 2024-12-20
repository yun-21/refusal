import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/nameSend')
  sendName(@Body() userName: UserDTO) {
    return this.appService.sendName(userName);
  }

  @Post('/answerResult')
  answerResult(@Body() body: { answer: string }) {
    return this.appService.answerResult(body.answer);
  }
  @Post('/check')
  check() {
    return this.appService.check();
  }

  @Post('/result')
  result() {
    return this.appService.result();
  }
}
