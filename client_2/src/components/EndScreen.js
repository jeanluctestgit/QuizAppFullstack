import React, { useContext } from 'react';
import QuizContext from '../helpers/Contexts';


function EndScreen(props) {
    const {score , Questions} = useContext(QuizContext);
    return (
        <div className="EndScreen">
            <h2>
            Votre score est : {score} / {Questions.length}
            </h2>
        </div>
    );
}

export default EndScreen;