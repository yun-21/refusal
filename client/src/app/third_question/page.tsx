'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
export default function Third() {
  const router = useRouter();
  const nameFromStorage = sessionStorage.getItem('name');
  const like = () => {
    return fetch("http://localhost:3001/like", {
      method: 'POST'
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.like);
      router.push('/four_question')
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
      router.push('/four_question')
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
      router.push('/four_question')
    })
    .catch((err) => console.log(err))
  }
  const question = [
    {id: 1, text: '다른 친구를 부르는 것도 정말 좋은데, 나는 오늘 너랑만 재밌게 놀고싶어!', click: like},
    {id: 2, text: '여럿이서 노는게 제일 재밌지! 불러 불러~', click: pushover},
    {id: 3, text: '야, 너 나랑 둘이 노는게 재미 없냐?', click: dislike}
  ]
  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨의 친구와 단 둘이 놀기로 하였다. 하지만 친구가 갑자기 다른 친구를 부른다고 한다. 오늘은 이 친구에게 고민상담 좀 하려고 했는데.. 이때의 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        {question.map((answer) => (
          <Link key={answer.id} href="/four_question"> 
            <div onClick={answer.click}>{answer.text}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
