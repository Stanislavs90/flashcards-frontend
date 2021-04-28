import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card'



function App() {


  const [cardInfo, setCardInfo] = useState([]);
  const [index, setIndex] = useState(0)

  const [question, setQuestion] = useState()
  const [answer, setAnswer] = useState()


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


  
 // Map over API data coming
  let idInfo = cardInfo.map((card, index)=>{
    return card.id;
  })

  // find last element added
  let maxId = Math.max(...idInfo)
  
  // delete last element added
  const deleteCard = (cardInfo, index) => 
  fetch(`http://localhost:8000/flashcards/${maxId}/`, {
      method: 'DELETE',
      headers:{
        'Content-Type':'application/json'
        
      }
    })
    .then(resp => resp.json())
    .catch(error => console.log(error))


  return (
    <div className="App">
        <header className="App-header">
            <h1>My Flashcard App</h1>
        </header>
        <div className= "Cardinfo">
        <Card  cardInfo={cardInfo} index={index}/>
        </div>
      <div className="QuestionButton">
      <button onClick={PreviousQuestionHandler}>Previous Question</button> <button onClick={nextQuestionHandler}>Next Question</button><br/> 
      </div>
      <div>
            <div className="QA">
                <label>Question:</label>
                <input htmlFor="Question" id="Question" type="text" onChange={e => setQuestion(e.target.value)}/><br/>
                <label>Answer:</label>
                <input htmlFor="Answer" id="Answer" type="text" onChange={e => setAnswer(e.target.value)}/>
            </div>
            <div className="AddDelete">
            <button onClick={addCard}>Add flashcard</button><br/>
            <button onClick={deleteCard}>Delete flashcard</button>
            </div>
      </div>
    </div>
  );


}

export default App;