import React, { useState } from 'react';
import './index.css';

function App(){
    let now = new Date();
    let time = now.toLocaleTimeString();

    const[ctime, updateTime] = useState(time);
    const getTime = ()=>{
        time = new Date().toLocaleTimeString();
        updateTime(time);
    }
    // IMPORTANT => Component re-renders when state or prop gets updated.
    setInterval(getTime, 1000);
    
    return(
        <>
            <div className = "container">
                <div className = "timebox">
                    <h1>{ctime}</h1>
                </div>
            </div>
            <div className = "footer">
                    <h5>Made with <span className = "react">ReactJS</span> by Om</h5>
            </div>
        </>
    );
}

export default App;