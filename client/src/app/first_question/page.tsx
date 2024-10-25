'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function First() {
  const [nameFromStorage, setNameFromStorage] = useState<string | null>(null);
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = sessionStorage.getItem('name');
      setNameFromStorage(storedName);
    }
  }, []);

  const testCheck = () => {
    return fetch("http://localhost:3001/testCheck", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({answer: answer}),
    })
    .then((res)=>{
      return res.text()
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((err) => console.log(err))
  }

  const question = [
    {id: 1, text: '(오늘도 야근해야겠네..)아, 네 저 주세요!', click: 'pushover'},
    {id: 2, text: '아, 죄송해요. 저도 지금 일이 좀 쌓여서요..', click: 'like'},
    {id: 3, text: '싫은데요? 제가 왜요.', click: 'dislike'}
  ]
  const checkClick = (answer: string) => {
    setAnswer(answer)
  }
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨의 일은 산더미이다. 하지만 당신의 동료가 자신이 해야할 일이 너무 많다며, 일 하나를 주려고 한다. 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <div key={answer.id} onClick={() => checkClick(answer.click)}>{answer.text}</div>
        ))}
      </div>
      <div>
        <Link href="/second_question"><button onClick={testCheck}>다음으로</button></Link>
      </div>
    </div>
  );
}
