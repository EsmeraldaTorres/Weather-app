import React from "react";

const PrincipalCard = ({cityName,icon,temper,max_temp,min_temp})=>{
    return(
      <>
      <div className="border bg-white justify-around w-full my-4 font-bold text-xl md:text-2xl lg:text-3xl rounded-3xl p-4">
        <div className="flex flex-wrap justify-between">
          <h2 className="w-full">Weather in {cityName}</h2>
          <div className="w-1/2 flex flex-col justify-between">
            <p className="font-normal text-xs">A partir de las 13:53hrs</p>
          <p className="text-6xl sm:text-7xl md:text-8xl lg:text-8xl">{temper} °C</p>
        </div>
        <div className="md:w-1/2 flex items-end justify-end flex-col">
        <div className="flex justify-end">
          <img className="-m-3.5" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
          </div> 
          <p>{max_temp}°C / {min_temp}°C</p>
        </div>
        </div>
    </div>
    </>
    )
}
export default PrincipalCard