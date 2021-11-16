import React from "react";
import {Link} from "react-router-dom"

const City = ({name,temp,icon}) => {

  const tempRounded = Math.round(temp)
  
  return(
    <div className="flex items-center 
    justify-center flex-col">
      <div className="pb-6 flex 
      bg-indigo-300
      p-2
      my-4
      rounded-2xl
      text-4xl
      sm:text-5xl
      flex-col
      md:flex-row 
      lg:text-6xl">
        <p className="flex md:mr-6 justify-center items-center">{name}</p>
        <div className="flex">
          <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
          <p className="flex items-center">{tempRounded} °C</p>
        </div>
      </div>
      <button className="p-2 bg-blue-700
      text-white
      rounded-2xl">
        <Link to={`/WeatherIn/${name}`} className="btn">
          Ver más
        </Link>
      </button>
    </div>
    )
}

export default City