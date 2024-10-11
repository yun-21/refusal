'use client';
export default function First() {
  const nameFromStorage = sessionStorage.getItem('name');
  return (
    <div>
      {nameFromStorage}
    </div>
  );
}
