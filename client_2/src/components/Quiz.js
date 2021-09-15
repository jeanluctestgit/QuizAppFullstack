import React, { useContext, useState } from 'react';
import QuizContext from '../helpers/Contexts';

//import { Questions } from '../helpers/QuestionsBank';


function Quiz(props) {
    const [currQuestion , setCurrQuestion] = useState(0);
    const [optionChosen , setOptionChosen] = useState("");
    const {setGameState} = useContext(QuizContext);
    const {score , setScore} = useContext(QuizContext);
    const {Questions} = useContext(QuizContext);
    
    function reset (){
        document.querySelectorAll('.btn-success').forEach(e => {
            e.classList.remove("btn-success");
        })
    }

    return (
        <div className="Quiz">
            <h2>{Questions.length > 0 && Questions[currQuestion].prompt}</h2>
            <button className="btn"  onClick = {(e) => {
                setOptionChosen("A")
                reset()
                e.target.classList.toggle("btn-success");
            }}>{Questions.length > 0 &&  Questions[currQuestion].optionA}</button>
            <button className="btn" onClick = {(e) => {
                setOptionChosen("B")
                reset()
                e.target.classList.toggle("btn-success");
            }}>{Questions.length > 0 &&  Questions[currQuestion].optionB}</button>
            <button className="btn" onClick = {(e) => {
                setOptionChosen("C")
                reset()
                e.target.classList.toggle("btn-success");
            }}>{Questions.length > 0 &&  Questions[currQuestion].optionC}</button>
            <button className="btn" onClick = {(e) => {
                setOptionChosen("D")
                reset()
                e.target.classList.toggle("btn-success");
            }}>{Questions.length > 0 &&  Questions[currQuestion].optionD}</button>
            <button className="btn" onClick = {() => {
                reset()
              if(Questions.length > 0)
              {
                if(optionChosen === Questions[currQuestion].answer)
                {
                    setScore(score + 1);
                }
                  
                if(currQuestion === Questions.length - 1)
                {
                    setGameState('end');
                }
                setCurrQuestion(currQuestion + 1)
              }
                
            }}>Next Question</button>
        </div>
    );
}

export default Quiz;