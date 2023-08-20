import React from 'react';
import './App.css';
import Header from './Components/Header';
import {Routes, Route} from 'react-router-dom'
import MainWrapper from './UI/MainWrapper';
import Quiz from './Pages/QuizPage/Quiz';
import Rank from './Pages/RankPage/Rank';
import Home from './Pages/HomePage/Home';
import Result from './Pages/ResultPage/Result';
import Explain from './Pages/ExplainPage/Explain';
import Solution from './Pages/SolutionPage/Solution';
import Footer from './Components/Footer';
function App() {
  
  

  return (
    <div className="App">
      <Header />
      <MainWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/rank" element={<Rank />} />
        <Route path='/result' element={<Result />} />
        <Route path='/explain' element={<Explain />} />
        <Route path='/solution' element={<Solution />} />
      </Routes>
      </MainWrapper>
      <Footer />
      </div>
    
  );
}

export default App;
