'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export default function FourBonus() {
  const [nameFromStorage, setNameFromStorage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedName = sessionStorage.getItem('name');
      setNameFromStorage(storedName);
    }
  }, []);
  
  const like = () => {
    return fetch("http://localhost:3001/like", {
      method: 'POST'
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data.like);
      })
      .catch((err) => console.log(err))
  }
  const dislike = () => {
    return fetch("http://localhost:3001/dislike", {
      method: 'POST'
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data.dislike);
      })
      .catch((err) => console.log(err))
  }

  const question = [
    { id: 1, text: '땡구씨에게 더 필요한 것 같으니까.. 양보해드릴게요. 다음에 이런 기회가 또 있다면 저에게 양보해주세요!', click: like },
    { id: 2, text: '이번에 땡땡씨가 부탁해서 양보해드리는 것이에요. 다음에는 양보 못해요~!', click: dislike },
    { id: 3, text: '다음에 기회가 있다면 도와드릴게요.', click: dislike }
  ]
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 승진할 수 있는 기회인 중요한 발표를 맡았다. 그런데 다른 팀원이 자신이 발표하면 안되겠냐고 양보해달라고 한다. 승진을 한다면 다른 팀으로 배정된다. 이때 당신은 어떻게 할 것인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <Link key={answer.id} href="/five_question">
            <div onClick={answer.click}>{answer.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
