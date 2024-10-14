'use client';
import { useRouter } from 'next/navigation';
export default function Second() {
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
      router.push('/third_question')
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
      router.push('/third_question')
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
      router.push('/third_question')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 중요한 미팅 저녁 약속이 있다. {nameFromStorage}씨의 팀원들이 회식을 제안한다. 당신은 어떻게 할 것 인가?</h1>
      </div>
      <div>
        <div onClick={like}>
          오늘은 제가 중요한 미팅이 있어서요. 혹시 내일 저녁에 회식하는 것이 어떠할까요?
        </div>
        <div onClick={dislike}>
          (미팅 상대에게 양해를 구하고 팀원들과 회식해야겠네..)좋죠. 갑시다.
        </div>
        <div onClick={pushover}>
          저녁에 약속이 있기 때문에, 저는 회식에 참석하지 못하겠습니다.
        </div>
      </div>
    </div>
  );
}
