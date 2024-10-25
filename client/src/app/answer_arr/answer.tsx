import React from 'react';

interface AnswerItems {
  id: number;
  text: string;
  click: string;
  isSelected: boolean;
  onClick: (answer: string, id: number) => void;
}

const AnswerArr: React.FC<AnswerItems> = ({ id, text, click, isSelected, onClick }) => {
  return (
    <div
      key = {id}
      onClick={() => onClick(click, id)}
      style={{ color: isSelected ? 'blue' : 'black' }}
    >
      {text}
    </div>
  );
};

export default AnswerArr;
