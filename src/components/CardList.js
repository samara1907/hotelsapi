import React, {useEffect, useState} from 'react';
import 'tachyons';
import './Card.css';
import {Button} from "react-bootstrap";
import moment from 'moment';
import EditHotel from "./EditHotel";
import Details from "./Details";
import CurrencyFormat from 'react-currency-format';


const CardList = ()=>{
	const [hotels, sethotels] = useState([]);
	const [search, setsearch] = useState("");
	const getHotels = async ()=>{
		try{
			const res = await fetch("http://localhost:5000/add");
			const hotelsData = await res.json();
			
			sethotels(hotelsData);

		}catch(err){
			console.error(err.message);
		}
	}

	const deletehotel = async (id)=>{
		try{
			 await fetch(`http://localhost:5000/delete/${id}`,{
				method: "DELETE"
			});
			alert("hotel deleted from the list!!")
		}catch(err){
			console.error(err.massege);
		}
		window.location.reload(true);
	}


	useEffect(()=>{
		getHotels();
	}, []);

	return(
		<div className="container">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
				<input
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-green w-100"
                            type="text"
                            placeholder="Search by city..."
                            value={search}
                            onChange={e=> setsearch(e.target.value)}
                        />
                        <hr/>
						<div className="divt">
							<h2>Hotels List</h2>
				<table>
					<thead>
						<tr>
					<th>Rate</th>
					<th>Name</th>
					<th>City</th>
					<th>Single</th>
					<th>Double</th>
					<th>Triple</th>
					<th>Board</th>
					<th colSpan="2">Season</th>
					<th>Child(0:6)</th>
					<th>Child(6:12)</th>
					</tr>
					</thead>
					{hotels.filter((hotel)=>{
						if (search === ""){
							return (hotel);
						}else if (hotel.city.toLowerCase().includes(search.toLocaleLowerCase())){
							return (hotel);
						}
						return("");
						}).map(hotel=>(
					<tbody key={hotel.id}>
						<tr>
						<td>{hotel.rating}<span className="fa fa-star checked"></span></td>
						<td>{hotel.name}</td>
						<td>{hotel.city}</td>
						<td><CurrencyFormat value={hotel.singleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/></td>
						<td><CurrencyFormat value={hotel.doubleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/></td>
						<td><CurrencyFormat value={hotel.tripleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/></td>
						<td>{hotel.board}</td>
						<td>{moment(hotel.startdate).format("YYYY-MM-DD")}</td>
						<td>{moment(hotel.expiredate).format("YYYY-MM-DD")}</td>
						<td>Free</td>
						<td>50%</td>
						<td><Details hotel={hotel}/></td>
						<td><EditHotel hotel={hotel}/></td>
						<td><Button onClick={()=> { if (window.confirm('Are you sure you wish to delete this hotel from the list?')) deletehotel(hotel.id) }}>Delete</Button></td>
					</tr>
					</tbody>
						))}
				</table>
				</div>

		</div>
		);
		
		
}

export default CardList;

