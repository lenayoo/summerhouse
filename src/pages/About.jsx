import Nav from './Nav'
import { useState, useEffect } from 'react'

function About() {
  // display size': width 950px 반응형 넣기
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const [screenHeight, setScreenHeight] = useState(window.innerHeight)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      setScreenHeight(window.innerHeight)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  console.log(screenWidth, screenHeight)

  return (
    <>
      <Nav />
      <div className="about-intro">
        <img src="/main-4.JPG" alt="mom and niece" className="about" />
        <div className="about-intro__text">
          <p>
            공기 좋고 물 맑은 누구나{'  '}
            <strong>(유집사의 허가를 미리 받은 사람이라면)</strong>
            언제든 편히 쉴 수 있는 여주 2층집입니다.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
