import React from 'react';
import './App.css';
import HotelForm from './components/Hotel';
import CardList from './components/CardList';


const App =()=>{
  return (
    <div className="container">
      <div><HotelForm /></div>
      <div>
        <CardList/>
      </div>
    </div>
  );
	}

export default App;
