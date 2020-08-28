import React from 'react';
import Answer from './answer';

function Card(props){

 
    return (
        <div>
            <div>Card Info:</div>
            <div key={props.cardInfo.id} >
            {props.cardInfo.map((card, index) => {
              return ( index === props.index ?  
                <div key={card.id}>
               <h2>{card.question}</h2>
               <Answer card={card} />
               {/* <h2>{card.answer}</h2> */}
               </div>
               : "" 
               
              )
            })}
          </div>
        </div>
    )
}

export default Card;