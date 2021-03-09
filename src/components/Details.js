import React, {useEffect, useState} from 'react';
import 'tachyons';
import {Popover,OverlayTrigger} from "react-bootstrap";
import { AiOutlineMessage } from "react-icons/ai";



const Details = ({hotel})=>{
	const [hotels, sethotels] = useState([]);
  
	const popover = (
		<Popover id={`id${hotel.id}`}>
		  <Popover.Title  as="h3">Details</Popover.Title>
		  <Popover.Content>
						<p key={hotel.id}>
							<strong>Email: </strong><a href = "mailto: {hotel.email}">{hotel.email}</a>
							<br/>
							<strong>Phone: </strong><a href="tel:{hotel.phone}">{hotel.phone}</a>
							<br/>
							<strong>Website: </strong><a href={hotel.website}>{hotel.website}</a>
							<br/>
							<span className="notes"><strong>Notes: </strong>{hotel.notes}</span>
						</p>
		  </Popover.Content>
		</Popover>
	  );
	  
	const getHotels = async ()=>{
		try{
			const res = await fetch("https://pacific-sea-54425.herokuapp.com/add");
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
		<OverlayTrigger trigger="click" placement="top" overlay={popover}>
    <AiOutlineMessage variant="success" data-target={`#id${hotel.id}`}/>
  </OverlayTrigger>
	  );
		
		
}

export default Details;

