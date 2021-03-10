import React, {useState} from 'react';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import CurrencyFormat from 'react-currency-format';
import {Button, Modal} from 'react-bootstrap';
import {AiOutlinePlus} from "react-icons/ai";

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
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Button variant="success" onClick={handleShow}>
        <AiOutlinePlus/>ADD NEW HOTEL
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW HOTEL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
		<form onSubmit={handelSubmit} >
					<label  htmlFor="number">Rating</label>
						<input type="number" value={rating} onChange={e=> setrating(e.target.value)} required/>
				<label  htmlFor="text">Name</label>
				<input type="text" value={name} onChange={e=> setname(e.target.value)} required/>
					<label  htmlFor="text">Email</label>
				<input type="email" value={email} onChange={e=> setemail(e.target.value)}/>	
					<label  htmlFor="text">Phone</label>
			<CurrencyFormat format="+90 (###) ###-## ##" mask="_" value={phone} onChange={e=> setphone(e.target.value)}/>
					<label  htmlFor="text">City</label>
				<input type="text" value={city} onChange={e=> setcity(e.target.value)} required/>
					<label  htmlFor="text">Single Room Price</label>
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={singleroomprice} onChange={e=> setsingleroomprice(e.target.value)}/>
					<label  htmlFor="text">Dobule Room Price</label>
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={doubleroomprice} onChange={e=> setdoubleroomprice(e.target.value)} />
					<label  htmlFor="text">Triple Room Price</label>
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={tripleroomprice} onChange={e=> settripleroomprice(e.target.value)} />
					<label  htmlFor="url">website</label>
				<input type="url" value={website} onChange={e=> setwebsite(e.target.value)} />
					<label  htmlFor="date">From</label>
				<input type="date" value={startdate} onChange={e=> setstartdate(e.target.value)} />
					<label  htmlFor="text">To</label>
				<input type="date" value={expiredate} onChange={e=> setexpiredate(e.target.value)} />
					<label  htmlFor="text">Board</label>
				<input type="text"  onChange={e=> setboard(e.target.value)} defaultValue={board}/>
					<label  htmlFor="subject">Notes</label>
				<input type="text" id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} value={notes} onChange={e=> setnotes(e.target.value)}/>
			<hr/>
			<div>
			<input className="form-control btn btn-success" type="submit" value="Add Hotel"/>
			</div>
 		</form>
 		</div>
        </Modal.Body>
      </Modal>
    </>

		);
	}

export default HotelForm;
