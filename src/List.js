import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './List.css';

class List extends React.Component {

  render() {

    return (
      <>
        <ListGroup>
          <ListGroup.Item>{this.props.data.display_name}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.lat}</ListGroup.Item>
          <ListGroup.Item>{this.props.data.lon}</ListGroup.Item>

        
      </ListGroup>
      <div>
      <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.props.data.lat},${this.props.data.lon}&zoom=15&size=500x500&format=png&maptype=street&markers=icon:small-yellow-cutout`} alt="map">
        </img>

        </div>


      </>
    )
  }
}


export default List;
