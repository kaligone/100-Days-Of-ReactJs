import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () =>{
    const [item , setItem] = useState();
    const [items , AddToList] = useState([]);

    const inputEvent = (e) => {
        setItem(e.target.value);
    }

    const AppendList = () => {
        AddToList((prev) => {
            return ([...prev , item ])
        })

        setItem('');
    }
    
    const DeleteFromList = (e) =>{
        AddToList( (oldList) => {
            return oldList.filter( (arrelement , index) => {
                return index !== e;
            })
        } )
    }


    return(
        <>
            <div className="flex items-center content-center flex-wrap justify-center h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="h-2/3 w-fit max-w-sm">
                    <br/>
                    <h1 className="flex justify-center mb-4 text-[#a83cbb] text-xl bg-[#f5f3ff] rounded-md p-3">My To Do List</h1>
                    <div className="bg-[#f5f3ff] p-6 max-w-sm rounded-md h-2/3">
                        <input className="p-2 focus:outline-none rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px]" type="text" name="item" maxLength={20} placeholder="Add item to list" value={item} onChange={inputEvent}/>

                        <button className="text-2xl text-center bg-[#f5f3ff] ml-3 rounded-full px-2.5 py-0.5 hover:translate-y-1 hover:scale-110 hover:bg-lime-500 duration-300 hover:text-[#f5f3ff]" onClick={AppendList}>+</button>
                        <br/> <br/>

                        <div className="flex overflow-y-auto h-3/4 overflow-x-clip">
                            {
                                items.map( (data , id) => {
                                    return <ToDoList text = {data} id ={id} onSelect={DeleteFromList} />
                                })
                            }
                        </div>

                    </div> 
                </div>

            </div>
        </>
    );
}


export default App;






























// import React, { useState } from "react";


// const App = () => {

//     const [fullname , setFullName] = useState({
//         fname:'',
//         lname:''
//     });

//     const onSub= (e) => {
//         // e.preventDefault();
//         alert("Form submitted");
//     }

//     const inputEvent = (e) =>{
//         const name = e.target.name;
//         const value = e.target.value;

//         setFullName( (preValue) => {
//             if(name === 'fname'){
//                 return{
//                     fname: value,
//                     lname:preValue.lname
//                 }
//             }else{
//                 return{
//                     fname:preValue.fname,
//                     lname:value
//                 }
//             }
//         })
//     }

//     return (
//         <>
//         <div>
//             <form onSubmit={onSub} method="post">
//                 <h1>Hello {fullname.fname} {fullname.lname}</h1>
//                 <input name="fname" type="text" placeholder="Enter first name" onChange={inputEvent} value={fullname.fname}/>
//                 <br/>
//                 <br/>
//                 <input name="lname" type="text" placeholder="Enter last name" onChange={inputEvent} value={fullname.lname}/>
//                 <br/>
//                 <button>Submit</button>
//             </form>
//         </div>
//         </>
//     );
// }

// export default App;