import React from 'react'

export default function AddDelete(props) {

    const add = () =>{
        props.add()
    }

    const _delete = () =>{
        props.delete()
    }


    return (
    <div className="AddDelete">
        <button onClick={add}>Add flashcard</button><br/>
        <button onClick={_delete}>Delete flashcard</button>
    </div>
)
}
