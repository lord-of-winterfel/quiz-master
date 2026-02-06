import React, { useReducer, useEffect } from "react";
import db from "./db-v2";
import Questionnaire from "./Questionnaire";
import Card from "./components/Card";
import Header from "./Header-v2";
const { questionsArray } = db;
console.log("questionsArray---", questionsArray);
const topicsArray = [{title: "Javascript", iconUrl: "js.svg"},{title: "React", iconUrl: "logo192.png"}, {title:"CSS", iconUrl: "css.svg"}]

function App() {
  const initialState= {
  topic: null,
  topicIndex: null,
}
  const reducer = (state, action)=> {
    switch(action.type){
      case "launch-questionnaire":
        console.log("action---", action);
        return {
          ...state,
          topic: action.payload.topic,
          topicIndex: action.payload.index
        }
      case "back-to-home":
        console.log("DispatchHome---");
        return {
          ...initialState,
          topic:null,
          topicIndex:null
        }
    }
  }
  const [state, dispatchHome] = useReducer(reducer, initialState);
  console.log("state--", state);
  const {topic, topicIndex} = state;
  console.log("topic---, topicIndex", topic, topicIndex);
  return (
    <div className="app app-v2">
      <Header/>
      {!topic && (
        <div className="topic-grid">
        {topicsArray.map((topic, index)=> (
          <Card topic={topic} dispatch={dispatchHome} index={index} key={topic.title} />
        ))}
      </div>
      )}
      {topic && (
        <Questionnaire questionsArray={questionsArray[topicIndex].questions} topic={topic} dispatchHome={dispatchHome} iconUrl={questionsArray[topicIndex].imageUrl}/>
      )}
    </div>
  );
}

export default App;
