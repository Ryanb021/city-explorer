import React from 'react';
import Forms from './Form';
import List from './List';
import axios from 'axios';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      latitude: '',
      longitude: ''
    }
  }

  // handle functions
  handleCitySubmit = async (event) => {
    event.preventDefault();
    console.log ('handleSubmitCity works');
    let apiCity = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`);

    this.setState({
      cityData: apiCity.data[0],
      latitude: apiCity.data[0].lat,
      longitude: apiCity.data[0].lon
    })

  }

  handleCityName = (event) => {

    this.setState({
      city: event.target.value
    })


  }

  // render
  render() {
    return (
      <>
        <main>
          <Forms 
          handleCityName = {this.handleCityName}
          handleCitySubmit = {this.handleCitySubmit}
          cityData ={this.state.cityData}
          />
          <List
          data ={this.state.cityData}
          />
        </main>

      </>
    );
  }
}

export default App;
