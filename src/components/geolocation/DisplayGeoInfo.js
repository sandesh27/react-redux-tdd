import React from "react";

const DisplayGeoInfo = ({ latitude, longitude }) => {
  return (
    <div className="comment">
      <p>
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
      </p>
    </div>
  );
};

export default DisplayGeoInfo;
