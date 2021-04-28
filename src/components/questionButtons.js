import React from 'react'

export default function questionButtons(props) {

    const previous = () => {
        props.prev()
    }


    const next = () => {
        props.next()
    }

    return (
        <div className="QuestionButton">
            
            <button onClick={previous}>Previous Question</button> <button onClick={next}>Next Question</button><br/> 
    
        </div>
    )
}
