import logo from './logo.svg';
import './App.css';
import { useState ,useEffect} from 'react';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import EndScreen from './components/EndScreen';
import QuizContext from './helpers/Contexts';
import QuestionsService from './services/questions.service';

function App() {
  const [GameState , setGameState] = useState('menu');
  const [score , setScore] = useState(0);

  const [Questions,setQuestions] = useState([]);

    useEffect(() => {
        QuestionsService.getQuestions().then(
            response => {
                console.log(response.data);
                setQuestions(response.data)
            }
        )
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
      </QuizContext.Provider>
    </div>
  );
}

export default App;
