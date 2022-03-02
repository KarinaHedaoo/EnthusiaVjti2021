import React from 'react';

function Events() {
  return (
    <div className="box-content w-full py-10">
      <div class="">
      
        <div class="gap-8 max-w-2xl mx-auto py-4 px-4 sm:py-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 class="text-3xl font-extrabold uppercase tracking-tight text-gray-200">MAIN FEST EVENTS 2k21-22</h2>
        </div>

        <div class=" grid grid-cols-2">
          
            <div class="">
              <h1 class="text-2xl">OFFLINE</h1>

              <div class="text-slate-400 text-xl uppercase font-sans"> 
                <ul class="list-none">
                  <li class="p-2"><a href="/marathon">Marathon (open to all)</a></li>
                  <li class="p-2"><a href="#">Athletics (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Football (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Cricket (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Basketball (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Volleyball (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Throwball (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Kho-Kho (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Chess (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Carrom (VJTI only)</a></li>
                  <li class="p-2"><a href="#">Table Tennis (VJTI only)</a></li>
                  
                </ul>
                </div> 
            
            </div>

            <div class="">
              <h1 class="text-2xl">ONLINE</h1>

              <div class="text-slate-400 text-xl uppercase font-sans"> 
                <ul class="list-none">
                  <li class="p-2 pt-2"><a href="/valorant">Valorant (open to all)</a></li>
                  <li class="p-2"><a href="/bgmi">BGMI (open to all)</a></li>
                  <li class="p-2"><a href="/online-chess">Chess (open to all)</a></li>
                </ul>
                </div> 

            </div>
        
        </div>

      </div>
    </div>
  );
}

export default Events;
