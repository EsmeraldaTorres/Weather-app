import React from "react";

const FetchError = ({ message }) => {
  return (
    <>
    <div className="flex items-center justify-center">
    <div className="w-2/3 text-center p-2 bg-red-300">
      <p>{message}</p>
    </div>
    </div>
    </>
  );
};

export default FetchError;