import React from 'react'

function FinishedScreen({points, maxPoints, highscore,newHighScore, dispatch, attempts}) {
  const percentage = (points / maxPoints) * 100;
  return (
    <>
        <p className="result" style={{marginTop: "4rem"}}>You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.ceil(percentage)}%)</p>
        {newHighScore ? <p className="highscore">Woohoo! You've made a new highscore of {highscore} points</p> : 
        attempts > 1 && <p className="highscore">(Highscore : {highscore} points)</p>
        }
        <button className="btn btn-centered" style={{marginTop: "4rem"}} onClick={()=> {
            dispatch({type: "restart"})
        }
        }>Restart quiz</button>
    </>
  )
}

export default FinishedScreen