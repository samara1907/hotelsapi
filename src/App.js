import React from 'react';
import './App.css';
import HotelForm from './components/Hotel';
import CardList from './components/CardList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavBar from './components/NavBar';

const App =()=>{
  return (
    <>
    <NavBar/>
    <Router>
    <Switch>
      <Route path="/AddHotel">
      <div className="add"><HotelForm /></div>
      </Route>
      <Route path="/hotelList">
      <div>
        <CardList className="item"/>
      </div>
      </Route>
      </Switch>
    </Router>
    </>
  );
	}

export default App;
