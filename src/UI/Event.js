import React from "react";

function Event(props) {
    return(<div className="box-content mb-8 w-full">
       <h1 className="text-2xl p-2">{props.event_name}</h1>
       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Participation requirement:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>{props.teamcomp}</p></div>   

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Entry fees:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400">{props.text1}</div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4">{props.text2} - {props.fee}/-</div>

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Prize pool:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Rs. {props.prizepool}/-</p></div>  

        <div className="flex justify-center cols-3 gap-4">   
            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a href={props.form}>Register</a>
            </button>

            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a href={props.sb}>Payment method walkthrough</a>
            </button>

            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a href={props.sb}>Event brochure</a>
            </button>

        </div> 

    </div>
    )
}

export default Event;