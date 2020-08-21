import React from 'react';

function card(props){

  console.log(props)
    return (
        <div>
            <div>Card Info:</div>
            <div key={props.cardInfo.id} >
            {props.cardInfo.map((card, index) => {
              return ( index == props.index ?  
                <div key={card.id}>
               <h2>{card.question}</h2>
               <h2>{card.answer}</h2>
               </div>
               : "" 
              )
            })}
          </div>
        </div>
    )
}

export default card;