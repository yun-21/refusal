"use client";
import { useState } from "react";
import StartModal from "./startModal";
import ExplainStartModal from "./explainModal";

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
      <div className="flex flex-col items-center w-100 h-1/6 justify-center">  
        <div className="text-7xl font-black text-cyan-950 w-[1000px] h-28 flex items-center justify-center border-4 border-double border-opacity-30 shadow-xl border-blue-400 bg-slate-200">
          <div className="drop-shadow-[8px_12px_4px_rgba(0,0,0,0.8)]">
            거절을 못하는 당신을 위하여..
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center justify-center h-4/6 bg-neutral-100 mt-10">
        <div className="bg-blue-50 w-32 h-10 flex justify-center items-center rounded-xl shadow-lg shadow-blue-500 font-bold hover:bg-blue-100">
          <div onClick={explanModalClick} className="text-black">
            게임 설명
          </div>
        </div>
        <div className="bg-red-50 w-32 h-10 flex justify-center items-center shadow-lg shadow-red-500 rounded-xl font-bold hover:bg-red-100">
          <div onClick={modalClick} className="text-black">
            게임 시작
          </div>
        </div>
      </div>

      <ExplainStartModal open={explanModal} close={explanModalClick} />
      <StartModal open={modal} close={modalClick} />
    </div >
  );
}
