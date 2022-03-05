
function Marathon() {
    return (
        <div className="box-content mb-8 w-full">
       <h1 className="text-2xl p-2">Marathon</h1>
       
       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-16 text-blue-500 text-lg mb-16">
           <div>
                <img src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/Marathon-VJTIans.png?raw=true" alt="marathon-poster" className="flex w-full h-full object-center object-cover justify-center" />
                <p>For VJTIans</p>
           </div>
           <div>
                <img src="https://github.com/DevayaniShivankar/enthu_core/blob/main/posters/Marathon-NON%20VJTIANS.png?raw=true" alt="marathon-poster" className="flex w-full h-full object-center object-cover justify-center" />
                <p>For NON-VJTIans</p>
           </div>
      </div>

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Participation requirement:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Individual/Solo participation</p></div>   

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Entry fees:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400">VJTI students - <span className="text-blue-500">180/-</span> <span className="text-pink-700">(this amount will be refunded within 5 working days, post participation)</span></div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4">Non-VJTIans: <span className="text-blue-500">5km - 270/- , 10km - 360/-</span> <span className="text-pink-700">(exclusive of taxes)</span></div>

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Prize pool:</h2>
       </div>
       <div className="font-sans text-lg text-bold text-slate-400 mb-4"><p>Rs. 24,000/-</p></div>  

       <div className="flex text-xl text-slate-200 justify-center">
           <h2>Register here:</h2>
       </div>
        
        <div className="flex justify-center cols-2 gap-4">   
            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a target='_blank' href="https://forms.gle/2Cbrq66GWwM4J3jv6">For VJTI students</a>
            </button>

            <button class="bg-transparent hover:bg-blue-700 font-sans text-pink-700 font-semibold hover:text-white py-2 mb-4 px-4 border border-pink-700 hover:border-transparent rounded">
            <a target='_blank' href="https://www.townscript.com/e/enthusia-marathon-2k22-140343">For non-VJTIans</a>
            </button>
        </div> 

        <button class="bg-transparent hover:bg-blue-700 font-sans text-blue-500 font-semibold hover:text-white py-2 mb-4 px-4 border border-blue-500 hover:border-transparent rounded">
            <a target='_blank' href="">Event brochure</a>
            </button>

    </div>
    )
}

export default Marathon;