"use client";
import { useState } from "react";
import StartModal from "./startModal";

export default function Home() {
  const [modal, setModal] = useState(false);

  const modalClick = () => {
    setModal(!modal);
  }
  return (
    <div>
      <div className="">
        <h1>거절을 못하는 당신을 위하여..</h1>
      </div>
      <div>
        게임 설명
      </div>
      <div onClick={modalClick}>
        게임 시작
      </div>
      <StartModal open={modal} close={modalClick}/>
    </div>
  );
}
