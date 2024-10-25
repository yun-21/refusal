const AnswerFetch = async (answer: string) => {
  if (answer) { // 선택된 대답이 있을 때만 fetch 실행
    try {
      const response = await fetch("http://localhost:3001/answerResult", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer: answer }),
      });
      const data = await response.text();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  } else {
    alert('답변을 선택해 주세요.'); // 선택되지 않았을 때 경고
  }
}
export default AnswerFetch;