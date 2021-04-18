import React, {useEffect, useState} from 'react';
import moment from 'moment';
import EditHotel from "./EditHotel";
import Details from "./Details";
import CurrencyFormat from 'react-currency-format';
import { AiOutlineDelete } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'tachyons';
import {Radio, FormControlLabel, RadioGroup, FormLabel, FormControl} from '@material-ui/core';

const CardList = ()=>{
	const [hotels, sethotels] = useState([]);

	const getHotels = async ()=>{
		try{
			const res = await fetch("https://pacific-sea-54425.herokuapp.com/add");
			const hotelsData = await res.json();
			
			sethotels(hotelsData);

		}catch(err){
			console.error(err.message);
		}
	}

	const deletehotel = async (id)=>{
		try{
			 await fetch(`https://pacific-sea-54425.herokuapp.com/delete/${id}`,{
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
	const [value, setValue] = React.useState('istanbul');
	const handleChange=(event)=>{
		setValue(event.target.value);
	}
	return(
		<div>
			<div className="tc br4 pa3 ma2  bw2 shadow-5">
			<FormControl component="fieldset">
			<FormLabel component="legend">Choose city</FormLabel>
			<RadioGroup  row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
				<FormControlLabel value="istanbul" control={<Radio />} label="Istanbul" />
				<FormControlLabel value="antalya" control={<Radio />} label="Antalya" />
				<FormControlLabel value="cappadocia" control={<Radio />} label="Cappadocia" />
				<FormControlLabel value="pamukkale" control={<Radio />} label="pamukkale" />
				<FormControlLabel value="kusadasi" control={<Radio />} label="Kusadasi" />
			</RadioGroup>
			</FormControl>
			</div>
				
	  {hotels.filter((hotel)=>{
	if (value === ""){
		return (hotel);
	}else if (hotel.city.toLowerCase().includes(value.toLocaleLowerCase())){
		return (hotel);
	}else if (hotel.city.toLowerCase().includes(value.toLocaleLowerCase())){
		return (hotel);
	}else if (hotel.city.toLowerCase().includes(value.toLocaleLowerCase())){
		return (hotel);
	}else if (hotel.city.toLowerCase().includes(value.toLocaleLowerCase())){
		return (hotel);
	}else if (hotel.city.toLowerCase().includes(value.toLocaleLowerCase())){
		return (hotel);
	}
	return("");
	}).map(hotel=>(
	<article key={hotel.id} className="tc bg-light-green dib br3 pa3 ma2  bw2 shadow-5">
  <div className="pa2 ph3-ns pb3-ns">
  <div className="tc">
        <h2 className="f5 mv0">{hotel.rating}<FontAwesomeIcon icon={faStar} /></h2>
      </div>
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h1 className="f5 f4-ns mv0">{hotel.name}</h1>
      </div>
      
    </div>
    <p className="f6 lh-copy measure mt2 mid-gray">
	{hotel.city}</p>
	<p className="f6 lh-copy measure mt2 mid-gray">
							Single: <CurrencyFormat value={hotel.singleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/>
							</p>
							<p className="f6 lh-copy measure mt2 mid-gray">
								Double: <CurrencyFormat value={hotel.doubleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/></p>
								<p className="f6 lh-copy measure mt2 mid-gray"> Triple: <CurrencyFormat value={hotel.tripleroomprice} displayType={'text'} thousandSeparator={true} prefix={'€'}/></p>
							
							<p className="f6 lh-copy measure mt2 mid-gray">{hotel.board}</p>
							<p className="f6 lh-copy measure mt2 mid-gray">

							Start Date: {moment(hotel.startdate).format("DD-MM-YYYY")}</p>
							<p className="f6 lh-copy measure mt2 mid-gray">
								End Date: {moment(hotel.expiredate).format("DD-MM-YYYY")}
							</p>
							<hr/>
							<div className="dt w-100 mt1">
							<div className="dtc">
							 <Details  hotel={hotel}/></div>
							 <div className="dtc"><EditHotel hotel={hotel}/></div>
							 <div className="dtc"><AiOutlineDelete  onClick={()=> { if (window.confirm('Are you sure you wish to delete this hotel from the list?')) deletehotel(hotel.id) }}/>
</div>
						
    </div>
  </div>
</article>
))}
		
	
		</div>
		);
		
		
}

export default CardList;

