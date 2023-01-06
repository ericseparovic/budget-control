import React from "react";

function Error({ message }) {
  return (
    <div>
      <p className="text-pink-700">{message}</p>
    </div>
  );
}

export default Error;
