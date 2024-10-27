'use client';
export default function Result() {
  const result = () => {
    return fetch("http://localhost:3001/result", {
      method: 'POST'
    })
    .then((res)=>{
      return res.text()
    })
    .then((data)=>{
      console.log(data);
    })
    .catch((err) => console.log(err))
  }
  return (
    <div onClick={result}>test</div>
  )
}