import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import DayWeather from '../src/DayWeather';

class Weather extends React.Component {
  render() {

    let weatherList = this.props.cityWeather.map((i, index) => {
      return <DayWeather
        date={i.time}
        description={i.forecast}
        />
    })

        return (
        <>
          <ListGroup>
            {weatherList}
          </ListGroup>

        </>
        );
  }
}

        export default Weather;

//</DayWeather>
//<ListGroup.Item variant="allowed" key='index'>Date: {i.date}</ListGroup.Item>
//<ListGroup.Item>Description: {i.description}</ListGroup.Item>
