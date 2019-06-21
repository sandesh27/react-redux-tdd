import React from "react";
import { getSeason } from "../../utils";

const DisplayGeoInfo = ({ latitude, longitude }) => {
  return (
    <div className="comment">
      <p>
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
        <br />
        Season: {getSeason(latitude, new Date().getMonth())}
      </p>
    </div>
  );
};

export default DisplayGeoInfo;
