import React from 'react';
import frontEnd from '../table/table1';
import backEnd from '../table/table2'
import './button.css';

const button = () => {
    return (
        <>
            <main>
                <button onClick={frontEnd}>Frontend</button>
                <button onClick={backEnd}>Backend</button>
            </main>
        </>
    
    )

    
}

export default button