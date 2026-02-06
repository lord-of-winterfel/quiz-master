import React from 'react'

function Card({dispatch, topic, index}) {
  return (
    <div className="topic-grid-item" onClick={()=> dispatch({type: "launch-questionnaire", payload: {topic: topic.title, index: index}})}>
        <img src={topic.iconUrl} alt={topic.title} style={{height:"60px", width:"auto", marginBottom:"15px" }} />
        <p>{topic.title}</p>
        </div>
  )
}

export default Card