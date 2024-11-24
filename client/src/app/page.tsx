"use client";
import { useState } from "react";
import StartModal from "./startModal";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [explanModal, setExplanModal] = useState(false);

  const modalClick = () => {
    setModal(!modal);
  }
  const explanModalClick = () => {
    setExplanModal(!explanModal);
  }
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center w-100 ">
        <div className="text-5xl font-bold text-black">
          거절을 못하는 당신을 위하여..
        </div>
      </div>
      <div onClick={explanModalClick} className="text-black">
        게임 설명
      </div>
      <div onClick={modalClick} className="text-black">
        게임 시작
      </div>
      <StartModal open={modal} close={modalClick} />
    </div>
  );
}
