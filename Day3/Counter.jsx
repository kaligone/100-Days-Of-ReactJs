import React, { useState } from "react";
import './index.css'

const Counter = () =>{

    // let count  = 1;

    const state = useState;
    console.log(state);
    const [count , setCount] = useState(0);
    
    const IncCount = () => {
        setCount(count+1);
    }

    return(
        <>
            <div className="flex flex-col h-screen justify-center items-center self-center">
                <h1 className="text-black text-xl m-4">{count}</h1>
                <button onClick={IncCount} className="w-32 bg-blue-500 font-bold px-8 py-3 text-white rounded hover:bg-blue-700">ADD</button>
            </div>

        </>
    );
}

export default Counter;