import Nav from './Nav'

function Contact() {
  return (
    <>
      <Nav />
      <div className="contact">
        <div>
          <h3>You know who to contact to....</h3>
          <p>
            아래 사진의 사람들의 연락처를 모를 경우{' '}
            <strong>lenayoo17@gmail.com</strong>으로 문의 바랍니다.
          </p>
        </div>
        <div>
          <img src="/contact2.JPG" className="contact-img" />
        </div>
        <div>
          <p>
            방명록을 남겨주세요!
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact
