import React, { ChangeEvent, useState } from 'react';

type Props = {
 
    addItem: (task: string)=>void
}


export function FullInput(props: Props) {
    // debugger

    let [inputValue, setInputValue] = useState('')

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.currentTarget.value)
    }
    return (
        <div >
                    <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)} onKeyPress={(e) => {
                        //не работает
                        if(e.charCode===13&&e.ctrlKey){
                            props.addItem(inputValue)
                        }
                    }} />
                    <button onClick={() => props.addItem(inputValue)} >+</button>
     other
            <input onChange={onChangeHandler} />
            <button onClick={()=>props.addItem(inputValue)} >+</button>

{/* хочу сделать для моего кселикса добавление  */}
             
             
      
        </div >
    );
}

