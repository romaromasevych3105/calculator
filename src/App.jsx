import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [time, setTime] = useState(0)
  const [start, setStart] = useState(false)
  const [stop, setStop] = useState(false)
  const [wait, setWait] = useState(false)
  const [rest, setRest] = useState(false)

  const timeFormat = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    const hoursFormat = (hours < 1 || hours > 23) ? '00' : (hours >= 1 && hours <= 9) ? `0${hours}` : `${hours}`;
    const minutesFormat = (minutes < 10) ? ((minutes === 0) ? '00' : `0${minutes}`) : `${minutes}`;
    const secondsFormant = (seconds < 10) ? `0${seconds}` : `${seconds}`;

    return `${hoursFormat}:${minutesFormat}:${secondsFormant}`;
  }
  useEffect(() => {
    let tick = null
    if (start) {
      tick = setInterval(() => {
        setTime(prevTime => prevTime + 1000)
      }, 1000)
      setWait(false)
      setStop(false)
    }
    if (stop) {
      clearInterval(tick)
      setWait(false)
      setStart(false)
      setTime(0)
    }
    if (wait) {
      setStart(false)
    }
    if (rest) {
      setTime(0)
      setStart(true)
      setWait(false)
      setRest(false)
    }
    return () => clearInterval(tick)
  }, [start, stop, wait, rest])

  return (
    <div className='wrapp'>
      <div className="time">
        {timeFormat(time)}
      </div>
      <div className="btn__wrapp">
        <button className="btn" onClick={() => { setStart(true) }}>Start</button>
        <button className="btn" onClick={() => { setStop(true) }}>Stop</button>
        <button className="btn" onDoubleClick={() => { setWait(true) }}>Wait</button>
        <button className="btn" onClick={() => { setRest(true) }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
