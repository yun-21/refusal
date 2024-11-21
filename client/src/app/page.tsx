"use client";
import { useState } from "react";
import StartModal from "./startModal";

export default function Home() {
  const [modal, setModal] = useState(false);

  const modalClick = () => {
    setModal(!modal);
  }
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center w-100">
        왜 안먹는거야 왜지? 왜?죠?
      </div>
      <div className="text-black">
        게임 설명
      </div>
      <div onClick={modalClick}>
        게임 시작
      </div>
      <StartModal open={modal} close={modalClick}/>
    </div>
  );
}
