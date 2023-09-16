import React, { useState } from "react";

const DarkMode = () =>{
    let bgColor = '#1e293b';
    let textColor = '#f3f4f6';
    let theme = 'Dark Mode';

    const [oldBackColor, changeBackColor] = useState(bgColor);
    const [oldTextColor, changeTextColor] = useState(textColor);
    const [oldTheme, newTheme] = useState(theme);

    const changeToLight = () =>{
        // change text to black
        textColor = '#1e293b';
        changeTextColor(textColor);
        //change background to light
        bgColor = '#e2e8f0';
        changeBackColor(bgColor);
        //change text
        theme = 'Light Mode';
        newTheme(theme);
    }

    const chnageToDark = () =>{
        // change text to black
        textColor = '#f3f4f6';
        changeTextColor(textColor);
        //change background to light
        bgColor = '#1e293b';
        changeBackColor(bgColor);
        //change text
        theme = 'Dark Mode';
        newTheme(theme);
    }

    const changeTheme = () =>{
        //check if the dark mode , if yes on click change light mode
        if (oldBackColor === '#1e293b') {
            changeToLight();
        } else { // if not dark mode then currenlty in light mode , then on click change to the dark mode
            chnageToDark();
        }
    }

    return(
        <>
            <div style={{backgroundColor:oldBackColor, transition:'all ease 0.5s'}} className=" h-screen flex flex-col justify-center items-center">
                <button onClick={changeTheme} style={{color:oldTextColor}} className=" border-blue-700 border-4 font-bold text-lg px-14 py-5 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-500/50">{oldTheme}</button>
            </div>
        </>
    )
}

export default DarkMode;
