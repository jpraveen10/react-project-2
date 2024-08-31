import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(()=>{
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    },[]);

    return() => clearInterval(timer);
  },[]);

  const formatTimeWithLeadingZero = (num) => {
    return num <10 ? `0${num}` : num;    //time hour ku munnadi zeo vara vaika use panna
  }


  const formatHour =(hour) => {
    return hour===0 ? 12:hour > 12 ? hour -12:hour;  //railway time la irunthu normal time ku set panna use panna 
  }

  const formatDate = (date) => {
    const options = {weekday: "long", year: "numeric" , month:"long", day : "numeric"}
    return date.toLocaleDateString(undefined,options);
  }

  return (
    <>
      <div className="digital-clock">
        <h1>Digital Clock</h1>

        <div className="time">{formatTimeWithLeadingZero(formatHour(currentTime.getHours()))} :{formatTimeWithLeadingZero(currentTime.getMinutes())} :{formatTimeWithLeadingZero(currentTime.getSeconds())}
        {currentTime.getHours() >= 12 ? " PM" : " AM"} 
        </div>

        <div className="date">{formatDate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
