import React, {useEffect} from 'react'

function Timer({dispatch, timeRemaining}) {
  console.log("timeRemaining---", timeRemaining);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  console.log(minutes, seconds);
  useEffect(()=>{
    const timer = setInterval(()=>{
       dispatch({type: "tick"});
    }, 1000);
    return ()=> clearInterval(timer);
  }, [])
  return (
    <div className="timer">
        Time left : {`${minutes < 10 ? '0' : ""}${minutes}m : ${seconds < 10 ? '0' : ""}${seconds}s `}
    </div>
  )
}

export default Timer