import React from "react";

const Card = (props) => {
    return(
            <div className="h-auto bg-gray-200 flex ">
                <div className='p-16'>
                    <div className='h-96 w-72 bg-white rounded-3xl '>
                        <img alt="Dark" src={props.imgsrc} className='h-64 w-72 rounded-t-3xl'/>
                        <div className='mt-5 ml-7'>
                            <span className='font-sans uppercase text-gray-500 text-sm'>{props.title}</span>
                            <h3 className='font-sans font-bold text-xl'>{props.name}</h3>
                            <a href={props.link} target='_blank' rel="noreferrer" className="border-solid border-2 border-black rounded p-1">
                                <button className=" mt-4 w-32">Watch Now</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
    
    );
}

export default Card;