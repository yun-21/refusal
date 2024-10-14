'use client';
export default function LikeResult() {
  const test = () => {
    return fetch("http://localhost:3001/test", {
      method: 'POST'
    })
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      console.log(data.all);
    })
    .catch((err) => console.log(err))
  }
  return (
    <div onClick={test}>test</div>
  )
}