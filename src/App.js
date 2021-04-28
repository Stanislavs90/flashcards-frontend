import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card';
import Header from './components/header';
import QuestionButton from './components/questionButtons';
import QAInput from './components/QAInput';
import APIService from '../src/api-service';
import AddDelete from './components/AddDelete';

function App() {


  const [cardInfo, setCardInfo] = useState([]);
  const [index, setIndex] = useState(0)

  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()


  useEffect(()=>{

    APIService.getAll(setCardInfo)
  }, [index])

  const addCard = () => {
      APIService.updateCard(question, answer)
    }
  
  const nextQuestionHandler = () => setIndex(Number(index) + 1)
  
  const PreviousQuestionHandler = () => setIndex(Number(index) - 1)

  
 // map over API data coming in
  let idInfo = cardInfo.map((card, index)=>{
    return card.id;
  })

  // find last element added
  let maxId = Math.max(...idInfo)
  
  // delete last element added
  const deleteCard = (cardInfo, index) => {
    APIService.deleteCard(cardInfo, index, maxId)
  }


  return (
    <div className="App">
        <Header/>
        <div className= "Cardinfo">
          <Card  cardInfo={cardInfo} index={index}/>
        </div>
            <QuestionButton  next={nextQuestionHandler} prev={PreviousQuestionHandler}/>
            <QAInput setQuestion={setQuestion} setAnswer={setAnswer}/>
            <AddDelete add={addCard}  delete={deleteCard}  />
    </div>
  );


}

export default App;