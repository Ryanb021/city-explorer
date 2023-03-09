
import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

class Movie extends React.Component {
  render() {
    let tomCruiseList = this.props.cityMovies.map(
      (i, index) => {
        return <>
        <Card key={index}>
          <Card.Img variant="top" src={i.image_url}/>
          <Card.Body>
            <Card.Title>{i.title}</Card.Title>
            <Card.Text>
              Overview: {i.overview}
              </Card.Text>
              </Card.Body>
              <ListGroup.Item>Average Votes: {i.average_votes}</ListGroup.Item>
              <ListGroup.Item>Total Votes: {i.total_votes}</ListGroup.Item>
              <ListGroup.Item>Popularity: {i.popularity}</ListGroup.Item>
              <ListGroup.Item>Released On: {i.released_on}</ListGroup.Item>
              </Card>
              </>
      }
    );
    return (
      <>
      
      {tomCruiseList}
      </>
    )
  }
}
export default Movie;
