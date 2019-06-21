import React from "react";
import { getSeason } from "../../utils";

const DisplayGeoInfo = ({ latitude, longitude }) => {
  const season = getSeason(latitude, new Date().getMonth());

  const iconStyle = {
    backgroundColor: season === "Summer" ? "orange" : "green"
  };
  const SeasonWithIcons = () => {
    return season === "Summer" ? (
      <i className="sun icon" style={iconStyle} />
    ) : (
      <i className="snowflake icon" style={iconStyle} />
    );
  };

  return (
    <div className="comment">
      <p>
        Latitude: {latitude}
        <br />
        Longitude: {longitude}
        <br />
        Season: <SeasonWithIcons />
      </p>
    </div>
  );
};

export default DisplayGeoInfo;
