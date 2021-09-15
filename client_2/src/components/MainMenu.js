import React, { useContext } from 'react';
import QuizContext from '../helpers/Contexts';

function MainMenu(props) {
    const {setGameState} = useContext(QuizContext);
    return (
        <div className="MainMenu">
           
            <button className="btn" onClick = {() => {
                setGameState("quiz")
            }}>
                Start Quiz
            </button>

            <button className="btn" onClick = {() => {
                setGameState("admin")
            }}>
                Administration
            </button>
        </div>
    );
}

export default MainMenu;