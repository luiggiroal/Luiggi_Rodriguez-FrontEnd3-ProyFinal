import React from "react";
import {Link} from "react-router-dom";
import {useContextGlobal} from './utils/global.context.jsx'

const Card = ({dentist}) => {
  const { name, username, id } = dentist
  console.log(name)
  console.log(username)
  console.log(id)

  const {dispatch} = useContextGlobal()

  const addFav = ()=>{
    dispatch({type: "ADD_FAV", payload: dentist})
  }

  return (
    <div className="card">

      <Link to={`/detail/${id}`} >
        <img src="/images/doctor.jpg" alt="" />
        <h1>{name}</h1>
        <h3>{username}</h3>
      </Link>
        <button onClick={addFav} className="favButton">⭐</button>
    </div>
  );
};

export default Card;
