import React from "react";

// styles
import weathercloud from "../../assets/img/weathercloud.gif"
import "./WeatherImage.styles.css"

const WeatherImage = () => {
  return(
    <>
    <div className="flex justify-center">
      <img className="weather-img" src={weathercloud} alt="weatherImage" />
    </div>
    </>
  )
}

export default WeatherImage