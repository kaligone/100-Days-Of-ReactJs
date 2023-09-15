import React, { useState } from "react";
import '../index.css'

const CurrentTime = () => {

    // const state =  useState();

    // let iniTime = new Date().toLocaleTimeString();

    const [time ,  updateTime] = useState(new Date().toLocaleTimeString());

    const changeTime = () => {
        let time = new Date().toLocaleTimeString();
        updateTime(time)
    }

    //we use the setInterval function to call the change time function after every 1 sec
    setInterval(changeTime, 1000);

    return(
        <>
            <div className=" border-solid bg-cyan-950 flex flex-col h-screen justify-center items-center content-center flex-wrap">

                <h1 className="font-bold text-4xl mb-10 mt-0 text-cyan-200">Digital Clock</h1>

                <div className="bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-2xl flex flex-wrap justify-center items-center content-center">
                <h1 className="text-white text-6xl p-20 ">{time}</h1>
                </div>
            </div>

        </>
    )
}

export default CurrentTime;
