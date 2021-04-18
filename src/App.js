import React from 'react';
import 'tachyons';
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
    <div className='tc' >
      <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/addhotel" component={HotelForm}/>
        <Route path="/hotels" component={CardList}/>
      </Switch>
      </Router>
   </div>
  );
	}

export default App;
