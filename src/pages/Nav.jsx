import { Link } from 'react-router-dom'
import '../style.css'

function Nav() {
  return (
    <div className="nav">
      <div>
        <img src="/logo.png" width="100px" height="100px" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/reserve">예약하기</Link>
        </li>
        <li>
          <Link to="/sightseeing">주변 볼 거리</Link>
        </li>
        <li>
          <Link to="/contact">연락하기</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
