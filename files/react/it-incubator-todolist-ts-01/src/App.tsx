import React, { useState } from 'react';
import './App.css';
import { Todo } from './todo';
import { v1 } from 'uuid';

export type Filter = 'all' |
    'active' | 'completed'

export type Money = 'Dollars' | 'RUBLS'

export function App() {

    // debugger
    let initialState = [
        {
            id: v1(),
            task: 'lesson 1',
            checked: true,
        },
    {
            id: v1(),
            task: 'lesson 2',
            checked: false,
        },
        {
            id: v1(),
            task: 'lesson 3',
            checked: false,
        },
    ];

    let [state, setState] = useState(initialState)

    function removeItem(id: string) {
        // debugger
        let filteredTasks = state.filter((t) => {
            return t.id !== id
        }
        )
        setState(filteredTasks)
    }

function addItem(task:string){
    let newTask = {
        id: v1(),
        task: task,
        checked: false,
    }
    let newTasks=[newTask,...state]
    setState(newTasks)
}

    let [filter, setFilter] = useState<Filter>('active')
    let tasksForToDoList = state

    if (filter === 'completed') {
        tasksForToDoList = state.filter((el) => el.checked === true)
    }
    if (filter === 'active') {
        tasksForToDoList = state.filter((el) => el.checked === false)
    }

    const initialMoney = [
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ]

    let filtringMoney=initialMoney
    let [money, setMoney]=useState<Money>('Dollars')
    
    const filterMoney = (money: Money) => {
        setMoney(money)
    }

    if (money === 'Dollars'){
        filtringMoney = initialMoney.filter((i) => i.banknots === 'Dollars')
    }
    if (money === 'RUBLS') {
        filtringMoney = initialMoney.filter((i) => i.banknots === 'RUBLS')
    }

    console.log(filtringMoney)


    const changeFilter = (newFilter: Filter) => {
        setFilter(newFilter)
    }


    return (
        <div>

            <Todo Store={tasksForToDoList} removeItem={removeItem} changeFilter={changeFilter} 
                filterMoney={filterMoney} addItem={addItem}
            />
        </div>
    );


}
