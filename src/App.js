import React from 'react';
import Forms from './Form';
import List from './List';
import Alert from 'react-bootstrap/Alert';
import Weather from './Weather';
import Movie from './Movie';
import axios from 'axios';
//import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      lat: '',
      lon: '',
      error: false,
      errorMessage: '',
      cityErrorInput: true,
      cityWeather: {},
      cityErrorWeather: true,
      cityMovies: {}
    }
  }


  handleCitySubmit = async (event) => {
    event.preventDefault();
    //console.log('handleCitySubmit works');
    try {
      let apiCity = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);


      //connect to movie server
      let tomCruiseServer = await axios.get(`${process.env.REACT_APP_SERVER}/movies?tomcruise=${this.state.city}`);


      //connect lat lon to server
      let connectServer = await axios.get(`${process.env.REACT_APP_SERVER}/weather?search=${this.state.city}&lat=${apiCity.data[0].lat}&lon=${apiCity.data[0].lon}`);

      this.setState({
        cityData: apiCity.data[0],
        lat: apiCity.data[0].lat,
        lon: apiCity.data[0].lon,
        cityErrorInput: false,
        error: false,
        cityWeather: connectServer.data,
        cityErrorWeather: false,
        cityMovies: tomCruiseServer.data

      });

    }
    catch (error) {
      //console.log('error: ', error);
      //console.log('error.message: ', error.message);
      this.setState({
        error: true,
        errorMessage: `THIS IS AN ERROR MY FRIEND: ${error.message}`
      })
    }
  }
  //OnChange
  handleCityName = (event) => {

    this.setState({
      city: event.target.value
    })


  }

  // render
  render() {
    return (
      <>
        <header>
          <h1>City Explorer</h1>
        </header>
        <main>
          <Forms
            handleCityName={this.handleCityName}
            handleCitySubmit={this.handleCitySubmit}
            cityData={this.state.cityData}
          />
          {this.state.error || this.state.cityErrorInput || this.state.cityErrorWeather ?
            <Alert key='invalid' variant='invalid'>
              {this.state.errorMessage}
            </Alert>

            :
            <>
              <List
                data={this.state.cityData}
              />
              <Weather
                cityWeather={this.state.cityWeather}
              />
              <Movie
              cityMovies={this.state.cityMovies}
              />
            </>
          }
            {
            this.state.error && <Alert key='fatal' variant='fatal'>
              {this.state.errorMessage}</Alert>
          }
        </main>
        <footer>&copy; Ryan Bagan 2023</footer>

      </>
    );
  }
}

export default App;


//{this.state.error || this.state.cityErrorInput ?
//  <Alert key='invalid' variant='invalid'>{this.setState.errorMessage}</Alert>

//:
