import React from 'react'

function StartScreen({topic="react", numQuestions, dispatch, timeRemaining, dispatchHome}) {
  console.log("timeRemaining--", timeRemaining);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  return (
    <div className="start">
        <h2>Welcome to the {topic} Quiz!</h2>
        <div class="button-group">
            <button className="btn btn-ui primary" onClick={()=>dispatch({type: "start"})} >Let's start</button>
            <button className="btn btn-ui" onClick={()=>dispatchHome({type: "back-to-home"})} >Back to home page</button>
        </div>
        <h3>{numQuestions } questions to test your {topic} mastery</h3>
        <h4>{`You have ${minutes} minutes ${seconds} seconds to finish the quiz`}</h4>
    </div>
  )
}

export default StartScreen