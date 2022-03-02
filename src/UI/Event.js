import React from "react";

function Event(props) {
    return(<div className="box-content mb-8 w-full">
       <h1 className="text-2xl p-2">{props.event_name}</h1>
       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Team Composition:</h2>
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

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Registration form:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 underline mb-4"><a href={props.form}>Click to register</a></div>
       
       <div className="flex text-xl text-slate-200 justify-center">
           <h2>HOW and WHERE to pay:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 underline mb-4"><a href={props.sb}>Payment method walkthrough</a></div>
       
       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Event brochure:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 underline mb-4"><a href={props.brochure}>All about the event</a></div>

    </div>
    )
}

export default Event;