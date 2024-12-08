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
      .then((res) => {
        console.log(res);
        // 브라우저 환경에서만 sessionStorage 사용
        if (typeof window !== 'undefined') {
          sessionStorage.setItem('name', name);
        }
        router.push('/first_question');
      })
      .catch((error) => console.error('Error:', error));
  }
  const nameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }
  return (
    <div className='text-black w-full h-full flex flex-col justify-center items-center bg-slate-300'>
      <div className='bg-blue-700 w-96 h-6 flex'>
        <div>Plz answer me</div>
        <div className='ml-64 bg-zinc-200 w-4 h-4 flex justify-center items-center mt-1'>x</div>
      </div>
      <div className='bg-red-300 w-96 h-52'>
        <h1>당신의 이름은 무엇입니까?</h1>
        <div>저장되는 것은 아니오니, 안심하세요.</div>
        <input type="text" onChange={nameChange} placeholder="이름 적으시오." />
        <div onClick={nameSend} className='bg-gray-400 w-20 text-center border-gray-500 border-x-2 border-b-2 border-r-4 border-t-gray-300 border-t-2 shadow-md mt-2'>시작하기</div>
      </div>
    </div>
  );
}
