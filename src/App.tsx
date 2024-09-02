import { useEffect, useState } from "react";
import "./App.css";
import { Difficulty, totalQuestions } from "./constants";
import { getQuestionList } from "./services/fetchQuestions";
import { IQuestion, IUserAnswer } from "./type";

function App() {
  const [start, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const questionListing = await getQuestionList(
        totalQuestions,
        Difficulty.EASY
      );
      setQuestions(questionListing);
      setLoading(false);
    };

    fetchQuestions();
  }, []);

  return <div className="App"></div>;
}

export default App;
