'use client';
import Link from 'next/link';
export default function First() {
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
  const pushover = () => {
    return fetch("http://localhost:3001/pushover", {
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
  const nameFromStorage = sessionStorage.getItem('name');
  const question = [
    {id: 1, text: '(오늘도 야근해야겠네..)아, 네 저 주세요!', click: pushover},
    {id: 2, text: '아, 죄송해요. 저도 지금 일이 좀 쌓여서요..', click: like},
    {id: 3, text: '싫은데요? 제가 왜요.', click: dislike}
  ]
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨의 일은 산더미이다. 하지만 당신의 동료가 자신이 해야할 일이 너무 많다며, 일 하나를 주려고 한다. 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <Link key={answer.id} href="/second_question"> 
            <div onClick={answer.click}>{answer.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
