'use client';
import { useRouter } from 'next/navigation';
export default function First() {
  const router = useRouter();
  const like = () => {
    return fetch("http://localhost:3001/like", {
      method: 'POST'
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.like);
      router.push('/second_question')
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
      router.push('/second_question')
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
      router.push('/second_question')
    })
    .catch((err) => console.log(err))
  }
  const nameFromStorage = sessionStorage.getItem('name');
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨의 일은 산더미이다. 하지만 당신의 동료가 자신이 해야할 일이 너무 많다며, 일 하나를 주려고 한다. 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        <div onClick={pushover}>
          (오늘도 야근해야겠네..)아, 네 저 주세요!
        </div>
        <div onClick={like}>
          아, 죄송해요. 저도 지금 일이 좀 쌓여서요..
        </div>
        <div onClick={dislike}>
          싫은데요? 제가 왜요.
        </div>
      </div>
    </div>
  );
}
