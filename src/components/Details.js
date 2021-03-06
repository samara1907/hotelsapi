import React, {useEffect, useState} from 'react';
import 'tachyons';
import {Modal, Button} from "react-bootstrap";

const Details = React.forwardRef(({hotel},ref)=>{
	const [hotels, sethotels] = useState([]);
  const [lgShow, setLgShow] = useState(false);
  

	const getHotels = async ()=>{
		try{
			const res = await fetch("http://localhost:5000/add");
			const hotelsData = await res.json();
			
			sethotels(hotelsData);

		}catch(err){
			console.error(err.message);
		}
	}

	useEffect(()=>{
		getHotels();
	}, []);

  
	return(
		<div ref={ref} style={{display: "contents"}}>
      <Button onClick={() => setLgShow(true)}>Details</Button>
<Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            More Deteils
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id={`id${hotel.id}`}>
				<table>
					<thead>
						<tr>
					<th>Email</th>
					<th>Phone</th>
					<th>Website</th>
					<th>Notes</th>
					</tr>
					</thead>
					{hotels.map(hotel=>(
					<tbody key={hotel.id}>
						<tr>
						<td><a href = "mailto: {hotel.email}">{hotel.email}</a></td>
						<td><a href="tel:{hotel.phone}">{hotel.phone}</a></td>
						<td><a href={hotel.website}>{hotel.website}</a></td>
						<td className="notes">{hotel.notes}</td>
					</tr>
					</tbody>
						))}
				</table></Modal.Body>
      </Modal>
      </div>
		);
		
		
})

export default Details;

