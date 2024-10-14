import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/dto';

@Injectable()
export class AppService {
  private likeCount = 0;
  private dislikeCount = 0;
  private pushoverCount = 0;
  private gomin = 0;

  // 나중에 삭제할 문
  getHello(): string {
    return '커밋테스트';
  }

  test() {
    console.log('likeCount:', this.likeCount); // 로그로 값 확인
    return {
      all: {
        like: this.likeCount,
        dislike: this.dislikeCount,
        pushover: this.pushoverCount,
      },
    };
  }

  sendName(user: UserDTO) {
    console.log(user);
    return user;
  }
  likeCounter() {
    this.likeCount++;
    console.log('likeCount:', this.likeCount); // 로그로 값 확인
    return { like: this.likeCount };
  }
  dislikeCounter() {
    this.dislikeCount++;
    console.log('dislikeCount:', this.dislikeCount); // 로그로 값 확인
    return { dislike: this.dislikeCount };
  }
  pushoverCounter() {
    this.pushoverCount++;
    console.log('pushoverCount:', this.pushoverCount); // 로그로 값 확인
    return { pushover: this.pushoverCount };
  }
  notRefusalEnding() {
    return { gomin: this.gomin };
  }
}
