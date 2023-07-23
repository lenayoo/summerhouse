import { Link } from 'react-router-dom'
import '../style.css'

function Home() {
  return (
    <div className="body">
      <h1>
        여주 여름 별장에 오신 것을 <br />
        환영합니다!
      </h1>
      <button>
        <Link to="./about">구경하기 & 예약하기</Link>
      </button>
    </div>
  )
}

export default Home
