import React from 'react';
import 'tachyons';
import {Button,Modal} from "react-bootstrap";



const Details = ({hotel})=>{
  
	function MyVerticallyCenteredModal(props) {
		return (
		  <Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			id={`id${hotel.id}`}
		  >
			<Modal.Header closeButton>
			  <Modal.Title id="contained-modal-title-vcenter">
			  Details
			  </Modal.Title>
			</Modal.Header>
			<Modal.Body>
			<p key={hotel.id}>
								<strong>Email: </strong><a href ={`mailto:${hotel.email}`}>{hotel.email}</a>
								<br/>
								<strong>Phone: </strong><a href={`tel:${hotel.phone}`}>{hotel.phone}</a>
								<br/>
								<strong>Website: </strong><a href={hotel.website}>{hotel.website}</a>
								<br/>
								<span className="notes"><strong>Notes: </strong>{hotel.notes}</span>
							</p>
			</Modal.Body>
			<Modal.Footer>
			  <Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		  </Modal>
		);
	  }
	  
	  
		const [modalShow, setModalShow] = React.useState(false);
	  
		return (
		  <>
			<p className="f6 ph2 pv1 mb1 dib light-purple pointer" variant="primary" onClick={() => setModalShow(true)}>Details</p>
			
	  
			<MyVerticallyCenteredModal
			  show={modalShow}
			  onHide={() => setModalShow(false)}
			/>
		  </>
		);
		
		
}

export default Details;

