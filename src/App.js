import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card'
import Add from './components/add'
import API from './api-service'


function App() {


  const [cardInfo, setCardInfo] = useState([]);
  const [index, setIndex] = useState(0)

  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()

  const newCard = {question: question , answer:answer}

  useEffect(()=>{
    fetch(`http://localhost:8000/flashcards/`, {
      method: 'GET',
      headers:{
        'Content-Type':'application/json'
        
      }
    })
    .then(resp => resp.json())
    .then(resp => setCardInfo(resp)) 
    .catch(error => console.log(error))
  }, [index])

  const addCard = () => 
    fetch(`http://localhost:8000/flashcards/`, {
        method: 'POST',
        headers:{
          'Content-Type':'application/json'
          
        }, 
        body: JSON.stringify({ 
          question: question, 
          answer: answer })
      })
      .then(resp => resp.json())
      .catch(error => console.log(error))
  
  const nextQuestionHandler = () => setIndex(Number(index) + 1)
  

  const PreviousQuestionHandler = () => setIndex(Number(index) - 1)





  return (
    <div className="App">
        <header className="App-header">
            <h1>My Flashcard App</h1>
        </header>
        <Card cardInfo={cardInfo} index={index}/>
      <div>
      <button onClick={PreviousQuestionHandler}>Previous Question</button> <button onClick={nextQuestionHandler}>Next Question</button><br/> 
      </div>
      <div>
            <div>
                <label>Question:</label>
                <input htmlFor="Question" id="Question" type="text" onChange={e => setQuestion(e.target.value)}/><br/>
                <label>Answer:</label>
                <input htmlFor="Answer" id="Answer" type="text" onChange={e => setAnswer(e.target.value)}/>
            </div>  
            <button onClick={addCard}>Add flashcard</button><br/> 
      </div>
      
        
    
  
      
    </div>
  );


}

export default App;