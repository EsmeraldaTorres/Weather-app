import React from "react";

const WeatherDetails = ({cityName,feels_like,icon, description, max_temp, min_temp,
   humidity, pressure, visibility,windSpeed,
   clouds,country,timezone})=>{
    return(
      <>
      <div className="border-2 w-full text-xl md:text-2xl lg:text-3xl rounded-3xl p-4">
        <div>
          <p className="font-bold">The weather in {cityName} today</p>
        </div>
        <div className="flex  justify-between py-4">
          <div className="flex items-center flex-col justify-evenly">
            <p className="text-3xl text-center font-bold">{feels_like}°</p>
            <p>Feels Like</p>
          </div>
          <div className="text-xs md:text-sm lg:text-base flex items-center flex-col">
            <img className="-m-3.5" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon"/>
            <p>{description}</p>
          </div>
        </div>
        <div className="contenedor8 md:flex md:flex-wrap">
          <div className="flex md:w-1/2 mt-2 md:pr-2 p-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
              </svg>
              <p>Max./Min.</p>
            </div>
            <p>{max_temp}° / {min_temp}°</p>
          </div>
          <div className="flex md:w-1/2 mt-2 p-2 md:pr-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
              <p>Humity</p>
            </div>
            <p>{humidity}</p>
          </div>
          <div className="flex md:w-1/2 mt-2 md:pr-2 p-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M2 9.5A3.5 3.5 0 005.5 13H9v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 15.586V13h2.5a4.5 4.5 0 10-.616-8.958 4.002 4.002 0 10-7.753 1.977A3.5 3.5 0 002 9.5zm9 3.5H9V8a1 1 0 012 0v5z" clipRule="evenodd" />
              </svg>
              <p>Pressure</p>
            </div>
            <p>{pressure}</p>
          </div>
          <div className="flex md:w-1/2 mt-2 p-2 md:pr-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
              </svg>
              <p>Visibility</p>
            </div>
            <p>{visibility}</p>
          </div>
          <div className="flex md:w-1/2 mt-2 p-2 md:pl-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 font-black" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <p>Wind</p>
            </div>
            <p>{windSpeed} m/s</p>
          </div>
          <div className="flex md:w-1/2 mt-2 p-2 md:pl-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
              <p>Clouds</p>
            </div>
            <p>{clouds}</p>
          </div>
          <div className="flex md:w-1/2 mt-2 p-2 md:pl-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
              <p>Country</p>
            </div>
            <p>{country}</p>
          </div>

          <div className="flex md:w-1/2 mt-2 p-2 md:pl-2 justify-between border-t border-blue-700">
            <div className="flex justify-between">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <p>Timezone</p>
            </div>
            <p>{timezone}</p>
          </div>
        </div>
      </div>
      </>
    )
}
export default WeatherDetails