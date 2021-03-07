import React, {useState} from 'react';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons';
import CurrencyFormat from 'react-currency-format';



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
	  
		<div className="container">
			<div className="row">
				<div className="col-25"><h2>ADD NEW HOTEL</h2></div>
			</div>
		<form onSubmit={handelSubmit} >
			<div className="row">
				<div className="col-25">
					<label  htmlFor="number">Rating</label>
					</div>
					<div className="col-75">
						<input type="number" value={rating} onChange={e=> setrating(e.target.value)} required/>
					</div>
			</div>
			<div  className="row">
				<div className="col-25"><label  htmlFor="text">Name</label></div>
			<div className="col-75">
				<input type="text" value={name} onChange={e=> setname(e.target.value)} required/></div>			
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Email</label></div>
			<div className="col-75">
				<input type="email" value={email} onChange={e=> setemail(e.target.value)}/></div>	
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Phone</label></div>
			<div className="col-75">
			<CurrencyFormat format="+90 (###) ###-## ##" mask="_" value={phone} onChange={e=> setphone(e.target.value)}/>
				</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">City</label></div>
			<div className="col-75">
				<input type="text" value={city} onChange={e=> setcity(e.target.value)} required/></div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Single Room Price</label></div>
			<div className="col-75">
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={singleroomprice} onChange={e=> setsingleroomprice(e.target.value)}/>
			</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Dobule Room Price</label></div>
			<div className="col-75">
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={doubleroomprice} onChange={e=> setdoubleroomprice(e.target.value)} />
			</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Triple Room Price</label></div>
			<div className="col-75">
			<CurrencyFormat thousandSeparator={true} prefix={'€'} value={tripleroomprice} onChange={e=> settripleroomprice(e.target.value)} />
			</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="url">website</label></div>
			<div className="col-75">
				<input type="url" value={website} onChange={e=> setwebsite(e.target.value)} /></div>
			</div >
			<div className="row">
				<div className="col-25">
					<label  htmlFor="date">From</label></div>
			<div className="col-75">
				<input type="date" value={startdate} onChange={e=> setstartdate(e.target.value)} />
				</div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">To</label></div>
			<div className="col-75">
				<input type="date" value={expiredate} onChange={e=> setexpiredate(e.target.value)} /></div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="text">Board</label></div>
			<div className="col-75">
				<input type="text"  onChange={e=> setboard(e.target.value)} defaultValue={board}/></div>
			</div>
			<div className="row">
				<div className="col-25">
					<label  htmlFor="subject">Notes</label></div>
			<div className="col-75">
				<input type="text" id="subject" name="subject" placeholder="Write something.." style={{height:"200px"}} value={notes} onChange={e=> setnotes(e.target.value)}/>
			</div>
			</div>
			<hr/>
			<div>
			<input className="form-control btn btn-success" type="submit" value="Add Hotel"/>
			</div>
 		</form>
 		</div>

		);
	}

export default HotelForm;
