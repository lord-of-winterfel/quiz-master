import React from 'react'

function Options({question, dispatch, answer}) {

  const hasAnswered = answer !== null;

  return (
    <div className="options">
        <h4 className="question-header">{question.question}</h4>
        {question.options.map((option, index)=> (
            <div style={{display:"flex", alignItems:"center", position:"relative"}}>
            <button 
            className={`btn btn-option ${index === answer ? 'answer': ""} ${hasAnswered ? index === question.correctOption ? 'correct': 'wrong': ""} ${hasAnswered && index === answer && index !== question.correctOption && "wrong-answer" }`} 
            key={option} 
            onClick={()=> dispatch({type: "newAnswer", payload: index})}
            disabled={answer !== null}
            >
                {option}
            </button>
            {hasAnswered && index === answer && index !== question.correctOption &&  <span style={{position:"absolute", right: "-43px", fontSize:"20px"}}>❌</span>}
            {hasAnswered && index === question.correctOption &&  <span style={{position:"absolute", right: "-43px", fontSize:"20px"}}>✅</span>}
            </div>
        ))}
    </div>
  )
}

export default Options