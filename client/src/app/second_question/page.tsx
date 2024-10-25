'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AnswerFetch from '../answer_fetch/answer_fetch';
import AnswerArr from '../answer_arr/answer';

export default function Second() {
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
    { id: 1, text: '오늘은 제가 중요한 미팅이 있어서요. 혹시 내일 저녁에 회식하는 것이 어떠할까요?', click: 'like' },
    { id: 2, text: '(미팅 상대에게 양해를 구하고 팀원들과 회식해야겠네..)좋죠. 갑시다.', click: 'dislike' },
    { id: 3, text: '저녁에 약속이 있기 때문에, 저는 회식에 참석하지 못하겠습니다.', click: 'pushover' }
  ]
  const check = () => {
    return fetch("http://localhost:3001/check", {
      method: 'POST'
    })
  }
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 중요한 미팅 저녁 약속이 있다. {nameFromStorage}씨의 팀원들이 회식을 제안한다. 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <AnswerArr key={answer.id} id={answer.id} text={answer.text} click={answer.click} isSelected={colorChange === answer.id} onClick={checkClick}/>
        ))}
      </div>
      <div>
        <Link href="/first_question"><button onClick={check}>뒤로가기</button></Link>
        <Link href="/third_question"><button onClick={answerFetch}>다음으로</button></Link>
      </div>
    </div>
  );
}
