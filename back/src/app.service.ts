import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/dto';

@Injectable()
export class AppService {
  private likeCount = 0;
  private dislikeCount = 0;
  private pushoverCount = 0;
  
  getHello(): string {
    return '커밋테스트';
  }

  sendName(user: UserDTO) {
    console.log(user);
    return user;
  }
  likeCounter(){
    this.likeCount++;
    console.log('likeCount:', this.likeCount); // 로그로 값 확인
    return { like: this.likeCount };
  }
  dislikeCounter(){
    this.dislikeCount++;
    console.log('dislikeCount:', this.dislikeCount); // 로그로 값 확인
    return { dislike: this.dislikeCount };
  }
  pushoverCounter(){
    this.pushoverCount++;
    console.log('pushoverCount:', this.pushoverCount); // 로그로 값 확인
    return { pushover: this.pushoverCount };
  }
}
