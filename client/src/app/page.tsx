"use client";
import {useRouter} from "next/navigation";

export default function Home() {
  const router = useRouter();

  const changePage = () => {
    router.push('/name_question');
  }
  return (
    <div>
      <div className="">
        <h1>거절을 못하는 당신을 위하여..</h1>
      </div>
      <div>
        게임 설명
      </div>
      <div onClick={changePage}>
        게임 시작
      </div>
    </div>
  );
}
