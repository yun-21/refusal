'use client';
import { useRouter } from 'next/navigation';
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
      router.push('/five_question')
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
      router.push('/five_question')
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
      router.push('/five_question')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <div>
        <h1>{nameFromStorage}씨는 승진할 수 있는 기회인 중요한 발표를 맡았다. 그런데 다른 팀원이 자신이 발표하면 안되겠냐고 양보해달라고 한다. 승진을 한다면 다른 팀으로 배정된다. 이때 당신은 어떻게 할 것인가?</h1>
      </div>
      <div>
        <div onClick={dislike}>
          이건 제가 맡은 일이고, 승진도 걸린 중요한 발표에요. 그렇게 하고 싶으셨으면 진즉에 지원하시지 그러셨어요.
        </div>
        <div onClick={like}>
          이번 발표는 제 경력에 중요한 기회라 제가 꼭 맡고 싶습니다. 팀원으로서 앞으로 더 많은 기회를 만들 수 있도록 함께 노력할테니, 다른 기회가 왔을 때 도와드리겠습니다.
        </div>
        <div onClick={pushover}>
          (승진 얘기 없었을 때는 가만히 있더니.. 승진할 수 있다고 하니까 발표를 하겠다고?..) 아.. 제가 이 발표를 놓치면 안될 것 같아서요. 혹시 떙떙씨에게도 이 기회를 잡아야 할 이유가 있나요?
        </div>
      </div>
    </div>
  );
}
