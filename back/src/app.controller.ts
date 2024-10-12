import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserDTO } from './dto/dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/nameSend')
  sendName(@Body() userName: UserDTO) {
    return this.appService.sendName(userName);
  }

  @Post('/like')
  likeCount(){
    return this.appService.likeCounter();
  }
  @Post('/dislike')
  dislikeCount(){
    return this.appService.dislikeCounter();
  }
  @Post('/pushover')
  pushoverCount(){
    return this.appService.pushoverCounter();
  }
}
