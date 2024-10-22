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

  result() {
    if (this.gomin !== 0) {
      return '거절을 할 때가 있고 안 할 때가 있답니다..';
    } else if (this.likeCount > this.dislikeCount) {
      if (this.pushoverCount === 0) {
        return '전생에 칼이셨나봐요. 정말 칼 같이 거절을 잘 하시네요.';
      } else if (this.pushoverCount === 1) {
        return '거절을 정말 잘하시는 편이세요~!';
      } else if (this.pushoverCount === 2) {
        return '당신은 호감상인 거절을 잘해내는 분이네요.';
      } else if (this.pushoverCount === 3) {
        return '거절 연습을 할 정도까지는 아니지만 거절을 잘 못하는 편이신 것 같습니다.';
      } else if (this.pushoverCount === 4) {
        return '당신은 거절하는 연습이 필요한 것 같아요~. 연습이 필요하다면 시작을 누르시고, 필요 없으시다면 이대로 종료해도됩니다.';
      }
    } else {
      if (this.pushoverCount === 0) {
        return '전생에 칼이셨나봐요. 정말 칼 같이 거절을 잘 하시네요.';
      } else if (this.pushoverCount === 1) {
        return '거절을 정말 잘하시는 편이세요~! 근데 살짝 호감형인 사람이 되어볼까요?';
      } else if (this.pushoverCount === 2) {
        return '당신은 비호감상인 거절을 잘해내는 분이네요.';
      } else if (this.pushoverCount === 3) {
        return '거절 연습을 할 정도까지는 아니지만 거절을 잘 못하는 편이신 것 같습니다. 비호감적인 면이 보이는 것 같습니다. 유의하셔야할 것 같아요!';
      } else if (this.pushoverCount === 4) {
        return '당신은 거절하는 연습이 필요한 것 같아요~ 연습이 필요하다면 시작을 누르시고, 필요 없으시다면 이대로 종료해도됩니다.';
      }
    }
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
