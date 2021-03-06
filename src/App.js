import React from 'react';
import './App.css';
import HotelForm from './components/Hotel';
import CardList from './components/CardList';


const App =()=>{
  return (
    <div className="App">
      <div>
        <HotelForm/>
      </div>
      <hr/>
      <hr/>
      <div className="container">
        <CardList className="item"/>
      </div>
    </div>
  );
	}

export default App;
