import { useNavigate } from "react-router-dom"

export const Error = () => {

  let navi = useNavigate();

  return (
    <div className="error-page">
      <p>404 Not Found</p>
      <button onClick={() => navi('/')}>돌아가기</button>
    </div>
  )
}