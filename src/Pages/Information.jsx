import React, {useState, useEffect } from "react";
import {Link, useParams} from "react-router-dom"

import Loader from "../Components/General/Loader"
import Header from "../Components/General/Header";
import PrincipalCard from "../Components/Information/PrincipalCard";
import WeatherImage from "../Components/Home/WeatherImage";
import WeatherDetails from "../Components/Information/WeatherDetails";
import Time from "../Components/Time";

import cold from "../assets/img/cold.gif"
import tempered from "../assets/img/tempered.jpeg"
import heat from "../assets/img/Heat.gif"

const Information = () => {
    const params = useParams();
    const cityName = params.name

    // state
    const [information, setInformation] = useState([])
    const [loader, setLoader] = useState(false);
    const [temperature, setTemperature] = useState(0)

    useEffect( ()=>{
      const weatherInformation = async ()=>{
        setLoader(true);
        try{
          const answerApi = await fetch
          (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=f414ea4cda4b3c1ee3c2896e8ca2e32c`)
                const response = await answerApi.json()
                setLoader(false);
                setInformation(response)
                const {icon} = response.weather[0]
                const {description} = response.weather[0]
                const {feels_like} = response.main
                const {timezone} = response
                const {all} = response.clouds
                const {visibility} = response
                const feels = Math.round(feels_like)
                const {temp_max} = response.main
                const {temp_min} = response.main
                const {lat} = response.coord
                const {lon} = response.coord
                const {humidity} = response.main
                const HTemp = Math.round(temp_max)
                const LTemp = Math.round(temp_min)
                const {temp} = response.main
                const temper = Math.round(temp);
                const {speed} = response.wind
                const windSpeed = Math.round(speed)
                const {pressure} = response.main
                const {sea_level} = response.main
                const {country} = response.sys
                setInformation({feels, country,description,visibility,windSpeed,timezone,humidity,icon,sea_level,pressure,feels,speed,lat, HTemp, LTemp, lon, description,all, temper,})
                setTemperature(temper)
            }catch(error){
              setLoader(false);
                console.log(error)
              }}
          weatherInformation();
        }, [cityName])

        // console.log(getHours())
    return(
      <>
      <Header/>
      {/* <Time/> */}
      { loader ? <Loader/> : 
      information ? (
      <section className="bg-blue-300 flex items-center justify-center flex-col">
        <div className="w-10/12 sm:w-9/12 md:w-8/12 flex flex-wrap justify-center lg:w-7/12">
          <div className="flex items-center">
          <div className="md:w-1/2">
          <PrincipalCard
          cityName={cityName}
          temper={information.temper}
          max_temp={information.HTemp}
          min_temp={information.LTemp}
          icon={information.icon}
          temperature={temperature}
           />
          </div>
           <div className="hidden md:inline md:w-1/2  my-4 flex justify-center items-center">
           {temperature < 15 ? (
            <img className="border rounded-3xl"src={cold} alt="" />
            ): temperature < 35 || temperature > 15 ?
            (
            <img className="border rounded-3xl"src={tempered} alt=""/>
            ) : temperature > 35 ?
            (
            <img className="border rounded-3xl"src={heat} alt="" />
            ) : null}
           </div>
           </div>

          <WeatherDetails
          feels_like={information.feels}
          cityName={cityName}
          icon={information.icon}
          description={information.description}
          max_temp={information.HTemp}
          min_temp={information.LTemp}
          humidity={information.humidity}
          pressure={information.pressure}
          visibility={information.visibility}
          windSpeed={information.windSpeed}
          clouds={information.all}
          country={information.country}
          timezone={information.timezone}
          />
        {/* button home */}
        <div className="flex text-center my-6 items-center justify-center">
          <button className="p-2 text-white bg-blue-700 rounded-2xl">
            <Link className="flex justify-center" to={`/`} className="btn">
            Home
            </Link>
          </button>
        </div>
        </div>
      </section> ): null}
        </>
    )
}

export default Information