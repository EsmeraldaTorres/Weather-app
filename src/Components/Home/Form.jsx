import React from "react";

const Form = ( {handleSearchWeather, setCityName}) => {
  return (
    <div>
      <div className="container-search
      text-center 
      items-center
      p-10
      box-border
      md:text-xl
      lg:text-2xl">
        <label for="country-name" 
        className="flex-grow 
        p-3 m-4
        rounded-l-2xl
        border-indigo-300">
        Type a city name
        </label>
        <input type="text" 
          className="flex-grow p-1
          border-indigo-300
          rounded
          md:border-b
          md:border-t
          md:border-l
          md:rounded-l-2xl" 
          placeholder="City Name" 
        onChange={e => setCityName(e.target.value)}/>
        <button onClick={handleSearchWeather} 
          className="p-1 flex-grow
          bg-indigo-300
          border
          rounded
          md:rounded-r-2xl">search
        </button>
      </div>
    </div>
  );
};

export default Form;