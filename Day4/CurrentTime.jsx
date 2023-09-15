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
                
                {/* <button onClick={changeTime} className="w-42 bg-blue-500 font-bold px-8 py-3 text-white rounded hover:bg-blue-700">Click to current time</button> */}
            </div>
            {/* <div className="flex flex-col h-screen w-full ">
                <img className="object-fill" src="https://e1.pxfuel.com/desktop-wallpaper/889/148/desktop-wallpaper-sad-backgrounds-music-dramatic-cinematic-music-instrumental-background-sad.jpg"></img>
            </div> */}
        </>
    )
}

export default CurrentTime;