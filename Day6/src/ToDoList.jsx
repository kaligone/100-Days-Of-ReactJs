import React from "react";

const ToDoList = (prop) =>{

    // function snip(){
    //     <div className=" overflow-y-auto h-3/4 overflow-x-clip">
    //         <p className="p-2"> <span className="text-sm text-center bg-[#f2a6a6] ml-3 rounded-full px-2 py-1 mr-2 hover:translate-y-1 hover:scale-110 hover:bg-[#dc2626] duration-300 hover:text-[#f5f3ff] cursor-pointer">x</span>{}</p>
    //     </div>
    // }
    return(
        <>
                <p className="p-2 w-72"> 
                    <span className="text-sm text-center bg-[#f2a6a6] ml-3 rounded-full px-2 py-1 mr-2 hover:translate-y-1 hover:scale-110 hover:bg-[#dc2626] duration-300 hover:text-[#f5f3ff] cursor-pointer" onClick={ () => {
                        prop.onSelect(prop.id)
                    }}>x</span>
                    {prop.text}
                </p>
        </>
    );
}

export default ToDoList;