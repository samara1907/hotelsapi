import React from 'react';
import './App.css';
import HotelForm from './components/Hotel';
import CardList from './components/CardList';


const App =()=>{
  return (
    <div className="App">
      <div className="add"><HotelForm /></div>
      <div className="container">
        <CardList className="item"/>
      </div>
    </div>
  );
	}

export default App;
