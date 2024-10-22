'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
export default function Third() {
  const [nameFromStorage, setNameFromStorage] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // sessionStorage에 값 설정
      sessionStorage.setItem('name', 'value');
      // sessionStorage에서 값 가져오기
      const storedName = sessionStorage.getItem('name');
      setNameFromStorage(storedName);
    }
  }, []);
  // const nameFromStorage = sessionStorage.getItem('name');
  const like = () => {
    return fetch("http://localhost:3001/like", {
      method: 'POST'
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
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
  // const pushover = () => {
  //   return fetch("http://localhost:3001/pushover", {
  //     method: 'POST'
  //   })
  //   .then((res) => {
  //     return res.json()
  //   })
  //   .then((data) => {
  //     console.log(data.pushover);
  //     router.push('/result')
  //   })
  //   .catch((err) => console.log(err))
  // }
  const notRefusal = () => {
    return fetch("http://localhost:3001/notRefusal", {
      method: 'POST'
    })
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.pushover);
    })
    .catch((err) => console.log(err))
  }
  const question = [
    {id: 1, text: '(일이 더 중요하지..)친구야, 나 오늘 야근하게 됐어.. 다음에 만나자. 그때 내가 맛있는거 쏠게!', click: like},
    {id: 2, text: '친구야, 나 오늘 야근 잡혔네.. 미안하다. 다음에 만나자.', click: dislike},
    {id: 3, text: '죄송합니다. 제가 오늘 중요한 약속이 있어서요. 내일 일을 두 배로 열심히 하도록 하겠습니다.', click: notRefusal}
  ]
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 친구와 중요한 약속이 있지만, 직장에서 긴급한 일이 발생해 야근을 해야하는 상황이다. 당신은 어떻게 할 것인가?</h1>
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
