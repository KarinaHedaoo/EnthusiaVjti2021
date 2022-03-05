import React from 'react';

function Events() {
  return (
    <div className="box-content w-full py-10">
      <div class="">
      
        <div class="gap-8 max-w-2xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-extrabold uppercase tracking-tight text-gray-200">MAIN FEST EVENTS 2k21-22</h2>
        </div>

        <div class=" grid grid-cols-2 gap-8">
          
            <div class="mx-4">
              <h1 class="text-lg lg:text-xl">OFFLINE</h1>
              <span class="text-lg lg:text-xl text-pink-700">(VJTI students only)</span>

              <div class="text-slate-400 text-xl uppercase font-sans"> 
                <ul class="list-none">
                  <li class="p-2"><a href="#">Athletics </a></li>
                  <li class="p-2"><a href="#">Football </a></li>
                  <li class="p-2"><a href="#">Cricket </a></li>
                  <li class="p-2"><a href="#">Basketball </a></li>
                  <li class="p-2"><a href="#">Volleyball </a></li>
                  <li class="p-2"><a href="#">Throwball </a></li>
                  <li class="p-2"><a href="#">Kho-Kho </a></li>
                  <li class="p-2"><a href="#">Chess </a></li>
                  <li class="p-2"><a href="#">Carrom </a></li>
                  <li class="p-2"><a href="#">Table Tennis </a></li>
                  
                </ul>
                </div> 
            
            </div>

            <div class="">
              <h1 class="text-lg lg:text-xl">OPEN TO ALL</h1>

              <div class="text-slate-400 text-xl uppercase font-sans"> 
                <ul class="list-none">
                <li class="p-2"><a href="/marathon">Marathon <span className="text-pink-700">(OFFLINE)</span></a></li>
                  <li class="p-2 pt-2"><a href="/valorant">Valorant <span className="text-pink-700">(ONLINE)</span></a></li>
                  <li class="p-2"><a href="/bgmi">BGMI <span className="text-pink-700">(ONLINE)</span></a></li>
                  <li class="p-2"><a href="/online-chess">Chess <span className="text-pink-700">(ONLINE)</span></a></li>
                </ul>
                </div> 

            </div>
        
        </div>

      </div>
    </div>
  );
}

export default Events;
