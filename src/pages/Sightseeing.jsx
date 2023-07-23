import Nav from './Nav'
import { GoogleMap, LoadScript } from '@react-google-maps/api'

function Sightseeing() {
  const center = {
    lat: 37.275928,
    lng: 127.630842,
  }
  return (
    <>
      <Nav />
      <LoadScript
        googleMapsApiKey="AIzaSyCiwtnT6hriZCfuOmh3-ZYAyIVwfzpmvKk" // 구글 지도 API 키
      >
        <GoogleMap
          id="googleMap" // 지도를 보여줄 DOM 요소의 ID
          mapContainerStyle={{ width: '100%', height: '400px' }} // 지도의 크기 설정
          center={center} // 지도의 초기 중심 위치 설정
          zoom={13} // 지도의 초기 줌 레벨 설정
        />
      </LoadScript>
    </>
  )
}

export default Sightseeing
