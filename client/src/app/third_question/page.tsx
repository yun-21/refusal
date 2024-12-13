'use client';
import Link from 'next/link'
import { useState, useEffect } from 'react';
import AnswerFetch from '../answer_fetch/answer_fetch';
import AnswerArr from '../answer_arr/answer';

export default function Third() {
  const [nameFromStorage, setNameFromStorage] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>('');
  const [colorChange, setColorChange] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = sessionStorage.getItem('name');
      setNameFromStorage(storedName);
    }
  }, []);

  const answerFetch = async () => {
    await AnswerFetch(answer)
  }

  const checkClick = (answer: string, id: number) => {
    setAnswer(answer)
    setColorChange(id);
  }
  
  const question = [
    { id: 1, text: '다른 친구를 부르는 것도 정말 좋은데, 나는 오늘 너랑만 재밌게 놀고싶어!', click: 'like' },
    { id: 2, text: '여럿이서 노는게 제일 재밌지! 불러 불러~', click: 'pushover' },
    { id: 3, text: '야, 너 나랑 둘이 노는게 재미 없냐?', click: 'dislike' }
  ]
  return (
    <div className='text-black'>
      <div>
        <div className='text-5xl font-bold'>{nameFromStorage}씨의 친구와 단 둘이 놀기로 하였다. 하지만 친구가 갑자기 다른 친구를 부른다고 한다. 오늘은 이 친구에게 고민상담 좀 하려고 했는데.. 이때의 당신은 어떻게 할 것 인가?</div>
      </div>
      <div>
        {question.map((answer) => (
          <AnswerArr key={answer.id} id={answer.id} text={answer.text} click={answer.click} isSelected={colorChange === answer.id} onClick={checkClick}/>        ))}
      </div>
      <div>
        <Link href="/second_question"><button>뒤로가기</button></Link>
        <Link href="/four_question"><button onClick={answerFetch}>다음으로</button></Link>
      </div>
    </div>
  );
}
