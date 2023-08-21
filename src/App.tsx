import type { Component } from 'solid-js';
import Hero from './componets/hero'
const App: Component = () => {
  return (
   <>  
    <Hero/>
    <div class="zinc-400 font-light mx-auto px-4 sm:px-6 md:px-20 font-titillium text-sm">TEST</div>
    </>
  );
};

export default App;
