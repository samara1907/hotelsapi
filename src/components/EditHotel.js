import React,{useState} from "react";
import {Modal, Button} from "react-bootstrap";
import moment from 'moment';

const EditHotel = ({hotel})=>{
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [singleroomprice,setsingleroomprice] = useState(hotel.singleroomprice);
  const [doubleroomprice,setdoubleroomprice] = useState(hotel.doubleroomprice);
  const [tripleroomprice,settripleroomprice] = useState(hotel.tripleroomprice);
  const [startdate,setstartdate] = useState(hotel.startdate);
  const [expiredate,setexpiredate] = useState(hotel.expiredate);
  const [board, setboard] = useState(hotel.board)
  const [notes, setnotes] = useState(hotel.notes);
  
  const updateHotel = async (e) =>{
      e.preventDefault();
       try {
        const body = {singleroomprice,doubleroomprice,tripleroomprice,startdate,expiredate,board,notes};
        const res = await fetch(`https://pacific-sea-54425.herokuapp.com/update/${hotel.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(body)
        })
        console.log(res)
        alert("HOTEL UPDATED SUCCSS");
       } catch (err) {
           console.error(err.message)
       }
       window.location.reload(true);
  }
    
  return (
    <>
      <Button variant="primary" onClick={handleShow} data-target={`#id${hotel.id}`}>
        Update
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body id={`id${hotel.id}`}>
					<label  htmlFor="singleroomprice">Single Room Price</label>
				    <input type="text" min="1" step="any" value={singleroomprice} onChange={e=> setsingleroomprice(e.target.value)}/>
					<label  htmlFor="doubleroomprice">Dobule Room Price</label>
				    <input type="text" min="1" step="any" value={doubleroomprice} onChange={e=> setdoubleroomprice(e.target.value)} />
					<label  htmlFor="tripleroomprice">Triple Room Price</label>
				    <input type="text" min="1" step="any" value={tripleroomprice} onChange={e=> settripleroomprice(e.target.value)} />
					<label  htmlFor="startdate">From</label>
				    <input type="date" value={moment(startdate).format("YYYY-MM-DD")} onChange={e=> setstartdate(e.target.value)} />
					<label  htmlFor="expiredate">To</label>
				    <input type="date" value={moment(expiredate).format("YYYY-MM-DD")} onChange={e=> setexpiredate(e.target.value)} />
          <label  htmlFor="text">Board</label>
            <input type="text"  onChange={e=> setboard(e.target.value)} defaultValue={board}/>
					<label  htmlFor="notes">Notes</label>
				    <input type="text" placeholder="Write something.." style={{height:"200px"}} value={notes} onChange={e=> setnotes(e.target.value)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={e => updateHotel(e).then(handleClose())}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditHotel;