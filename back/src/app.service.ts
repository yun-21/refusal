import { Injectable } from '@nestjs/common';
import { UserDTO } from './dto/dto';

@Injectable()
export class AppService {
  private arr = [];

  answerResult(answer: string) {
    this.arr.push(answer);
    console.log(this.arr);
  }
  check() {
    this.arr.pop();
    console.log(this.arr);
  }

  result() {
    const pushoverMessages = {
      0: '전생에 칼이셨나봐요. 정말 칼 같이 거절을 잘 하시네요.',
      1: '거절을 정말 잘하시는 편이세요~!',
      2: {
        positive: '당신은 호감상인 거절을 잘해내는 분이네요.',
        negative: '당신은 비호감상인 거절을 잘해내는 분이네요.',
      },
      3: '거절 연습을 할 정도까지는 아니지만 거절을 잘 못하는 편이신 것 같습니다.',
      4: '당신은 거절하는 연습이 필요한 것 같아요~. 연습이 필요하다면 시작을 누르시고, 필요 없으시다면 이대로 종료해도 됩니다.',
    };
    if (this.gomin !== 0) {
      return '거절을 할 때가 있고 안 할 때가 있답니다..';
    }
    const pushoverMessage =
      this.pushoverCount === 2
        ? this.likeCount > this.dislikeCount
          ? pushoverMessages[2].positive
          : pushoverMessages[2].negative
        : pushoverMessages[this.pushoverCount];
    const additionalMessage =
      this.likeCount > this.dislikeCount
        ? ''
        : ' 근데 살짝 호감형인 사람이 되어볼까요?';

    return pushoverMessage + additionalMessage;
  }

  sendName(user: UserDTO) {
    console.log(user);
    return user;
  }
}
