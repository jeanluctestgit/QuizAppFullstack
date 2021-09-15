import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import QuizContext from './helpers/Contexts';
import QuestionsService from './services/questions.service';
import axios from 'axios';
import { useCache } from 'react-use-cache';
import {useQuery} from 'react-query';
import Administration from './components/Administration';

function App() {
  const [GameState , setGameState] = useState('menu');
  const [score , setScore] = useState(0);

  const [Questions,setQuestions] = useState([]);

  const { isLoading, error, data } = useQuery('fetchQuestions', QuestionsService.getQuestions().then(
    response => {
      setQuestions(response.data);
    }
  ))
  /*const { isFetching, data: questions, updateCache } = useCache(
    () =>,
    `Questions`
  );*/

    useEffect(() => {
      /*QuestionsService.getQuestions().then(
        response => {
          setQuestions(response.data);
        }
      )*/
    },[])

  return (
    <div className="App">
        <h1>Quiz App</h1>
      <QuizContext.Provider value = {{GameState , setGameState , score , setScore , Questions , setQuestions}}>
        {
          GameState === 'menu' && <MainMenu/>
        }    
        {
          GameState === 'quiz' && <Quiz/>
        }
        {
          GameState === 'end' && <EndScreen/>
        }
        {
          GameState === 'admin' && <Administration/>
        }
      </QuizContext.Provider>
    </div>
  );
}

export default App;
