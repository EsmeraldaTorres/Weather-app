import React, {useState} from "react";

// Components
import Loader from "../Components/General/Loader";
import Form from "../Components/Home/Form"
import Header from "../Components/General/Header";
import City from "../Components/Home/City"
import FetchError from "./FetchError"
import WeatherImage from "../Components/Home/WeatherImage";

const Home = () =>{
  const apiKey = "f414ea4cda4b3c1ee3c2896e8ca2e32c"
  //STATE
  // Para guardar lo que el usuario introduzca y pasarselo a la api
  const [cityName, setCityName] = useState("");
  // Respuesta de la Api (info del país)
  const [apiWeather, setApiWeather] = useState(null);
  // Loading
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false)
// apiWeather cambia porque depende de Onchange en el input de Form
// podría ser que se meta a un use effect y que la dependencia sea 
// la funcion handleSearch(el boton buscar)?
  const [weatherImage, setWeatherImage] = useState(true)

  // FUNCTIONS
  const handleSearchWeather = async e => {
    e.preventDefault();
    // Para limpiar la respuesta anterior
    setApiWeather(null);
    // para que se muestre el loading
    setLoader(true);
    // setError()
    try{
        const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;
        const response = await fetch(API);
        const result = await response.json();
        setLoader(false);
        console.log(result)
        console.log(typeof(result.cod))
        if(result.cod === 200){
          setError(false)
          setApiWeather(result)
          setWeatherImage(false)
        }else {;
          setError(result.message);
        }
    }   catch(e){
        setLoader(false)
        console.log(e)
    }
  };
  console.log(apiWeather)

  return (
    <div>
      <Header/>
        <div className="g-indigo-100">
          <Form
          setCityName={setCityName}
          cityName={cityName}
          handleSearchWeather={handleSearchWeather}
          />
          { weatherImage ? <WeatherImage/> :
          error ? (
            <FetchError message={error}/>
          ) : 
          loader ? <Loader/> : 
            apiWeather && apiWeather.name ? <City 
            name={apiWeather.name}
            clouds={apiWeather.clouds.all}
            feels_like={apiWeather.main.feels_like}
            humidity={apiWeather.main.humidity}
            pressure={apiWeather.main.pressure}
            temp={apiWeather.main.temp}
            temp_max={apiWeather.main.temp_max}
            temp_min={apiWeather.main.temp_min}
            icon={apiWeather.weather[0].icon}  
            />: null
          }
        </div>
    </div>
  );

}
export default Home