import React from 'react';
import './App.css';
import HotelForm from './components/Hotel';
import CardList from './components/CardList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap';
import NavBar from './components/NavBar';
import Home from "./components/Home";
const App =()=>{
  return (
    <div className="App">
    <Container fluid>
      <Row>
        <Col><NavBar/></Col>
      </Row>
    </Container>
    <hr/>
    <Router>
    <Switch>
    
      <Route path="/addhotel">
        <Container>
          <Row>
            <Col>
            <div className="add"><HotelForm /></div>
            </Col>
          </Row>
        </Container>
      </Route>
      <Route path="/hotels">
        <Container>
          <Row>
            <Col>
            <CardList />
            </Col>
          </Row>
        </Container>
      </Route>
      <Router path="/">
        <Home/>
      </Router>
      </Switch>
    </Router>
    </div>
  );
	}

export default App;
