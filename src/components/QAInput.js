import React from 'react'

export default function QAInput({setAnswer, setQuestion}) {
    return (
        <div>
            <div className="QA">
                <label>Question:</label>
                <input htmlFor="Question" id="Question" type="text" onChange={e => setQuestion(e.target.value)}/><br/>
                <label>Answer:</label>
                <input htmlFor="Answer" id="Answer" type="text" onChange={e => setAnswer(e.target.value)}/>
            </div>
        </div>
    )
}
