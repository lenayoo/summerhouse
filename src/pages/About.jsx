import Nav from './Nav'

function About() {
  return (
    <>
      <Nav />
      <div className="about-intro">
        <img src="/public/main-4.JPG" alt="mom and niece" className="about" />
        <div className="about-intro__text">
          <p>
            공기 좋고 물 맑은 누구나{' '}
            <strong>(유집사의 허가를 미리 받은 사람이라면)</strong>
            언제든 편히 쉴 수 있는 여주 2층집입니다.
          </p>
        </div>
      </div>
    </>
  )
}

export default About
