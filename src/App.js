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
import Home from "./components/Home";
const App =()=>{
  return (
    <>
    <NavBar/>
    <Router>
    <Switch>
      
      <Route path="/addhotel">
      <div className="add"><HotelForm /></div>
      </Route>
      <Route path="/hotels">
      <div>
        <CardList className="item"/>
      </div>
      </Route>
      <Router path="/">
        <Home/>
      </Router>
      </Switch>
    </Router>
    </>
  );
	}

export default App;
