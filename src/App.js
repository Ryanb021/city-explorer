import React from 'react';
import Forms from './Form';
import List from './List';
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';


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
      cityErrorInput: true
    }
  }


  handleCitySubmit = async (event) => {
    event.preventDefault();
    //console.log('handleCitySubmit works');
    let apiCity = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city}&format=json`);

    this.setState({
      cityData: apiCity.data[0],
      lat: apiCity.data[0].lat,
      lon: apiCity.data[0].lon,
      cityErrorInput: false,
      error: false
    });

  }
  catch(error) {
    //console.log('error: ', error);
    //console.log('error.message: ', error.message);
    this.setState({
      error: true,
      errorMessage: `An Error Occured: ${error.message}`
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
        <header>
          <h1>City Explorer</h1>
        </header>
        <main>
          <Forms
            handleCityName={this.handleCityName}
            handleCitySubmit={this.handleCitySubmit}
            cityData={this.state.cityData}
          />
          {this.state.error || this.state.cityErrorInput ?
            <Alert key='invalid' variant='invalid'>
              {this.state.errorMessage}
            </Alert>

          :

          <List
            data={this.state.cityData}
          />
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
