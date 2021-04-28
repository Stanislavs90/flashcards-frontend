import React, { useState } from 'react'


function Answer(props){

    const [ display, setDisplay] = useState(false)

    return (
        <div>
            <button onClick = {(display)=>setDisplay(true)}>Display Answer</button> 
            {display ? 
            
            <div>
            <br/>
            {props.card.answer}
            </div>
            
            : null}
        </div>
    )
}

export default Answer;