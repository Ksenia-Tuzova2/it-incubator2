import React, { useState } from 'react';
import { Filter,Money } from './App';

type Props = {
    Store: { id: string; task: string; checked: boolean; }[]
    removeItem: Function;
    changeFilter: (newFilter: Filter) => void
    filterMoney: (money: Money)=>void
    addItem: (task: string)=>void
}


export function Todo(props: Props) {
    // debugger

    let [inputValue, setInputValue] = useState('')
    return (
        <div >
            <div>
                <h3>{props.Store[0].task}</h3>
                <div>
                    <input value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value)}/>
                    <button onClick={() => props.addItem(inputValue)} onKeyPress={(e)=>console.log(e)}>+</button>
                </div>
                <ul>
                    {

                        props.Store.map((el: any) => {
                            return <li key={el.id}><input type="checkbox" checked={el.checked} /> <span>{el.task}</span>
                                {/* вызываем колбек функцию ремувайтем, перндаем ей данные  */}
                                <button onClick={() => { props.removeItem(el.id) }}>x</button>
                            </li>
                        })
                    }
                </ul>
                <div>
                    {

                    }
                    <button onClick={() => { props.changeFilter('all') }}>All</button>
                    <button onClick={() => { props.changeFilter('active') }}>Active</button>
                    <button onClick={() => { props.changeFilter('completed') }}>Completed</button>
                    {/* <button onClick={() => { props.filterMoney('Dollars') }}>Dollar</button>
                    <button onClick={() => { props.filterMoney('RUBLS') }}>RUBLS</button> */}
                    <button onClick={()=>{props.filterMoney('Dollars')}}>Dollars</button>
                    <button onClick={() => { props.filterMoney('RUBLS') }}>'RUBLS'</button>
                </div>
            </div>
        </div >
    );
}

