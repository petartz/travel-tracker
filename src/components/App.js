import React, { useState } from 'react';
import TravelList from './TravelList';

const App = (props) => {

  return (
    <div className="text-center" id="wishlist-div">
          <h1>Wanderlust Wishlist</h1>
          <TravelList data = {props.data} />
    </div>
  )
}

export default App;
