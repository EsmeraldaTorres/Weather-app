import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
  return(
    <div className="text-2xl 
    md:text-3xl
    font-bold tracking-wider 
    bg-local md:bg-fixed ... 
    bg-blue-900
    text-right
    py-4
    pr-5
    drop-shadow">
      <Link to="/">
        <h1 className="text-gray-300">APPI WEATHER</h1>
      </Link>
    </div>
  )
}

export default Header