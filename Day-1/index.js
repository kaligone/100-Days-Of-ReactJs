import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

    let style = '';
    const timeNow = new Date().getHours(); //from the current time it gives the hours only
    //now based on the time we have to show 
    let content = '';
    if(timeNow>=1 && timeNow<12){
        content = "Good Morning";
        style = 'text-[#fcd34d]';
    }else if(timeNow>=12 && timeNow<19){
        content = "Good Afternoon";
        style = 'text-[#d97706]';
    }else{
        content = "Good Night";
        style = 'text-[#6b21a8]'
    }

    ReactDOM.render(
        <>
            <div className='relative bottom-50 h-screen flex items-center justify-center bg-gray-200'>
                <button></button>
                <h1 className='text-5xl relative '> Hello sir , <span className={style}>{content}</span> </h1>
            </div>  
        </>,
        document.getElementById('root')
    )
