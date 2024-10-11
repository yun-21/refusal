'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function Name() {
  const router = useRouter();
  const [name, setName] = useState('');
  const nameSend = () => {
    return fetch('http://localhost:3001/nameSend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
    })
    .then((res)=>{
      console.log(res);
      sessionStorage.setItem('name', name);
      router.push('/first_question');
    })
    .catch((error) => console.error('Error:', error));
  }
  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <div>
      <h1>당신의 이름은 무엇입니까?</h1>
      <div>저장되는 것은 아니오니, 안심하세요.</div>
      <input type="text" onChange={nameChange} placeholder="이름 적으시오." />
      <div onClick={nameSend}>시작하기</div>
    </div>
  );
}
