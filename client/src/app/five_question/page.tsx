'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AnswerArr from '../answer_arr/answer';

export default function Five() {
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
    if (answer) { // 선택된 대답이 있을 때만 fetch 실행
      try {
        const response = await fetch("http://localhost:3001/finalResult", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answer: answer }),
        });
        const data = await response.text();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('답변을 선택해 주세요.'); // 선택되지 않았을 때 경고
    }
  }

  const checkClick = (answer: string, id: number) => {
    setAnswer(answer)
    setColorChange(id);
  }

  const question = [
    { id: 1, text: '(일이 더 중요하지..)친구야, 나 오늘 야근하게 됐어.. 다음에 만나자. 그때 내가 맛있는거 쏠게!', click: 'like' },
    { id: 2, text: '친구야, 나 오늘 야근 잡혔네.. 미안하다. 다음에 만나자.', click: 'dislike' },
    { id: 3, text: '죄송합니다. 제가 오늘 중요한 약속이 있어서요. 내일 일을 두 배로 열심히 하도록 하겠습니다.', click: 'notRefusal' }
  ]
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 친구와 중요한 약속이 있지만, 직장에서 긴급한 일이 발생해 야근을 해야하는 상황이다. 당신은 어떻게 할 것인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <AnswerArr key={answer.id} id={answer.id} text={answer.text} click={answer.click} isSelected={colorChange === answer.id} onClick={checkClick} />
        ))}
      </div>
      <div>
        <Link href="/four_question"><button>뒤로가기</button></Link>
        <Link href="/result"><button onClick={answerFetch}>결과보기</button></Link>
      </div>
    </div>
  );
}
