import React from "react";

function Event(props) {
    return(<div className="box-content mb-8 w-full">
       <h1 className="text-2xl p-2">{props.event_name}</h1>
       
       <div className="w-96 grid grid-cols-1 gap-8 mx-auto text-blue-500 text-lg mb-4">
       <img src={props.poster} className="flex w-full h-full object-center object-cover justify-center" alt ={props.event_name} />
       </div>
       
       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Participation requirement:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>{props.teamcomp}</p></div>   

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Entry fees:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400">{props.text1} <span className="text-blue-500">{props.vjtifee}</span></div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4">{props.text2} - <span className="text-blue-500">{props.fee}/-</span></div>

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Prize pool:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Rs. {props.prizepool}/-</p></div>  

        <div className="flex justify-center cols-2 gap-4">   
            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a target='_blank' href={props.form}>Register</a>
            </button>

            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a target='_blank' href={props.brochure}>Event brochure</a>
            </button>

        </div> 

    </div>
    )
}

export default Event;