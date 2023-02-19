import React from 'react';
import button from '../component/button/button';
import './homepage.css';


const homepage = () => {
    return(
    <>
        <header>
            <h1>Learnable Leaderboard</h1>
        </header>
        <main>
            {button}
        </main>
    </>

    ) 
}

export default homepage