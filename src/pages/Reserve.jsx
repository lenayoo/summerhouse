import { useState } from 'react'
import Nav from './Nav'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import '../style.css'

function Reserve() {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  return (
    <>
      <Nav />
      <div className="reserve">
        <div>
          <h3>방문하고 싶은 날을 선택해 주세요</h3>
        </div>
        <form>
          <div className="reserve-calendar">
            <Calendar value={selectedDate} onChange={handleDateChange} />
          </div>
          <button>제출하기</button>
        </form>
        <div>
          {/* 예약하기 버튼 또는 다음 단계로 이동하는 버튼 등 추가적인 내용 */}
        </div>
      </div>
    </>
  )
}

export default Reserve
