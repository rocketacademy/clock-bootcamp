import React from "react";

class City extends React.Component {
  cleanCityName(timeZone) {
    let city = timeZone[0].split("/")[1];
    if (city.includes("_")) {
      city = city.replace("_", " ");
    }
    return city;
  }

  render() {
    return <p>{this.cleanCityName(this.props.timeZone)}</p>;
  }
}

export default City;
