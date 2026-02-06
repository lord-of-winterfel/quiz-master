import React, { useReducer, useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";


const  Questionnaire = ({
  questionsArray,
  topic,
  dispatchHome,
  iconUrl
}) => {
  console.log("questionsArray--", questionsArray);
  const timePerQuestion = 30;
  const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    newHighScore: false,
    attempts: 0,
    timeRemaining: null
  }

  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        console.log("data received", action.payload);
        return {
          ...state,
          questions: action.payload,
          status: "ready",
          timeRemaining: state.questions.length * timePerQuestion
        }
      case "dataFailed":
        return {
          ...state,
          status: "error",
        }
      case "start":
        return {
          ...state,
          status: "active",
        }
      case "tick":
        console.log("inside set timer");
        return {
          ...state,
          timeRemaining: state.timeRemaining - 1,
          status: state.timeRemaining === 0 ? "finished": state.status

        }
      case "newAnswer":
        const question = state.questions.at(state.index);
        return {
          ...state,
          answer: action.payload,
          points: action.payload === question.correctOption 
          ? state.points + question.points
          : state.points,
        }
      case "nextQuestion":
        return {
          ...state,
          index: state.index + 1,
          answer: null
        }
      case "finished":
        return {
          ...state,
          attempts: state.attempts + 1,
          highscore: state.points > state.highscore ? state.points : state.highscore,
          newHighScore: state.highscore > 0 ? state.points > state.highscore ? true : false : false,
          status: "finished",
        }
      case "restart":
        return {
          ...initialState,
          questions: state.questions,
          highscore: state.highscore,
          attempts: state.attempts,
          timeRemaining: state.questions.length * timePerQuestion,
          status: 'ready',

        }
      default:
        throw new Error("Action unknown");
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const {questions, status, index, answer, points, highscore, newHighScore, attempts, timeRemaining} = state;
  const numQuestions = state.questions.length;
  const maxPoints = questions.reduce((acc, question)=> acc + question.points  , 0);

  useEffect(() => {
    dispatch({
      type: "dataReceived",
      payload: questionsArray
    })
  }, []);

  return (
    <div className="app">
      <Header topic={topic} iconUrl={iconUrl}/>
      <Main>
        {status === "loading" &&
          <Loader />}
        {status === "error" &&
          <Error />}
        {status === "ready" &&
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} timeRemaining={timeRemaining} topic={topic} dispatchHome={dispatchHome} />}
        {status === "active" &&(
          <>
            <Progress index={index} numQuestions={numQuestions} points={points} maxPoints={maxPoints} answer={answer} />
            <Question question={questions[index]} dispatch={dispatch} answer={answer} />
            <Footer>
              <Timer dispatch={dispatch} timeRemaining={timeRemaining} />
              <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} highscore={highscore} />
            </Footer>
          </>
        )}
        {status === "finished" &&(
          <FinishedScreen points={points} maxPoints={maxPoints} highscore={highscore} newHighScore={newHighScore} dispatch={dispatch} attempts={attempts} />
        )}
        
      </Main>
    </div>
  );
}

export default Questionnaire;
