import React, {useState} from 'react';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrencyFormat from 'react-currency-format';
import {Form, Col, Button,Container,Row} from 'react-bootstrap';


const HotelForm = ()=>{
  const [rating,setrating] = useState("");
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [phone,setphone] = useState("");
  const [city,setcity] = useState("");
  const [singleroomprice,setsingleroomprice] = useState("");
  const [doubleroomprice,setdoubleroomprice] = useState("");
  const [tripleroomprice,settripleroomprice] = useState("");
  const [website,setwebsite] = useState("");
  const [startdate,setstartdate] = useState("");
  const [expiredate,setexpiredate] = useState("");
  const [board,setboard] = useState("");
  const [notes, setnotes] = useState("");

  const handelSubmit = async e =>{
    e.preventDefault();
    try{
      const body = {rating,name,email,phone,city,singleroomprice,doubleroomprice,tripleroomprice,website,startdate,expiredate,board,notes};
      await fetch("https://pacific-sea-54425.herokuapp.com/add", 
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      });
      alert("HOTEL ADDED TO LIST");

    }catch (err){
      console.error(err.message);
    }
	window.location.reload(true);
  }
  return(
	<>

	<Container>
		<Row>
			<Col> 
				<h1>ADD NEW HOTEL</h1>
			</Col>
		</Row>
           <Row>
			   <Col>
			   <Form  onSubmit={handelSubmit}>
			<Form.Row>
				<Form.Group as={Col} >
				<Form.Label>Hotel Rating</Form.Label>
				<Form.Control size="lg" type="number" value={rating} onChange={e=> setrating(e.target.value)} placeholder="Rate" />
				</Form.Group>
				<Form.Group as={Col} >
				<Form.Label>Name</Form.Label>
				<Form.Control size="lg" type="text" value={name} onChange={e=> setname(e.target.value)} placeholder="Enter Hotel Name" />
				</Form.Group>
				</Form.Row>
				<Form.Row>
				<Form.Group  as={Col} >
					<Form.Label>Email</Form.Label>
					<Form.Control size="lg" type="email" value={email} onChange={e=> setemail(e.target.value)}></Form.Control>
				</Form.Group>
				<Form.Group  as={Col}>
					<Form.Label>Phone</Form.Label>
					<CurrencyFormat format="+90 (###) ###-## ##" mask="_" value={phone} onChange={e=> setphone(e.target.value)}/>
				</Form.Group>
				</Form.Row>
				<Form.Row>
				<Form.Group  as={Col} >
					<Form.Label>Address/City</Form.Label>
					<Form.Control size="lg" type="text" value={city} onChange={e=> setcity(e.target.value)} required></Form.Control>
				</Form.Group>
				</Form.Row>
				<Form.Row>
					<Form.Group as={Col} >	
					<Form.Label>Singe Room Price</Form.Label>
					<CurrencyFormat thousandSeparator={true} prefix={'€'} value={singleroomprice} onChange={e=> setsingleroomprice(e.target.value)}/>
					</Form.Group>
					<Form.Group as={Col} >	
					<Form.Label>Double Room Price</Form.Label>
					<CurrencyFormat thousandSeparator={true} prefix={'€'} value={doubleroomprice} onChange={e=> setdoubleroomprice(e.target.value)} />
					</Form.Group>
					<Form.Group as={Col} >	
					<Form.Label>Triple Room Price</Form.Label>
					<CurrencyFormat thousandSeparator={true} prefix={'€'} value={tripleroomprice} onChange={e=> settripleroomprice(e.target.value)} />
					</Form.Group>
				</Form.Row>
				<h4>season</h4>
				<Form.Row>		
					<Form.Group as={Col} controlId="formGridStartdate">
						<Form.Label>Start</Form.Label>
						<Form.Control type="date" value={startdate} onChange={e=> setstartdate(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group as={Col} controlId="formGridExpirdate">
						<Form.Label>End</Form.Label>
					<Form.Control type="date" value={expiredate} onChange={e=> setexpiredate(e.target.value)}></Form.Control>
				</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col}>
							<Form.Label>WebSite</Form.Label>
							<Form.Control type="url" value={website} onChange={e=> setwebsite(e.target.value)} placeholder="https://"></Form.Control>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} >
							<Form.Label>Board</Form.Label>
							<Form.Control type="text"  onChange={e=> setboard(e.target.value)} defaultValue={board}></Form.Control>
						</Form.Group>
					</Form.Row>
					<Form.Row>
						<Form.Group as={Col} >
							<Form.Label>Notes</Form.Label>
							<Form.Control type="text" id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} value={notes} onChange={e=> setnotes(e.target.value)}></Form.Control>
						</Form.Group>
					</Form.Row>
					<Button variant="primary" type="submit">
    Add Hotel
  </Button>
	</Form>
			   </Col>
		   </Row>
		
	</Container>
    </>

		);
	}

export default HotelForm;
