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
      latitude: '',
      longitude: '',
      error: false,
      errorMessage: '',
      cityErrorInput: true
    }
  }


  handleCitySubmit = async (event) => {
    event.preventDefault();
    //console.log('handleCitySubmit works');
    let apiCity = await axios.get(`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_CITY_KEY}&q=${this.state.city}&format=json`);

    this.setState({
      cityData: apiCity.data[0],
      latitude: apiCity.data[0].lat,
      longitude: apiCity.data[0].lon
    });

  }
  catch(error) {
    console.log('error: ', error);
    console.log('error.message: ', error.message);
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
        <main>
          <Forms
            handleCityName={this.handleCityName}
            handleCitySubmit={this.handleCitySubmit}
            cityData={this.state.cityData}
          />
          {this.state.error || this.state.cityErrorInput ?
            <Alert key='invalid' variant='invalid'>{this.setState.errorMessage}</Alert>

          :

          <List
            data={this.state.cityData}
          />
}
        </main>

      </>
    );
  }
}

export default App;
