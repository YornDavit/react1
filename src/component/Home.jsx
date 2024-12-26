import React from 'react';
import Slider from './Slider';
import PopularItems from './PopularItems';
import NewArrival from './NewArrival';


function Home() {
  return (
    <div>
        <main>
            <Slider/>
            <PopularItems/>
            <NewArrival/>
        </main>
    </div>

  );
}

export default Home;