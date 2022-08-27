import React from 'react';
import { Accordion } from './Accordion/Accordion';

import './App.css';
import { Rating } from './Rating/Rating';

function App(props:any) {
    return (
        <div className="App">
            <Accordion title=' this is accordion' collapsed={true}/>
            <Accordion title=' this is accordion' collapsed={false} />
          <Rating value={5}/>
        </div>
    );

}


export default App;
