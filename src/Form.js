import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class Forms extends React.Component {

  render() {
    return (
      <>
        <Form onSubmit={this.props.handleCitySubmit}>
          <Form.Group>
            <Form.Label>Search for City Data</Form.Label>
            <Form.Control type="text" placeholder="city search" name="cityInput" onChange={this.props.handleCityName} required />
            <Button type="submit">Explore!</Button>
          </Form.Group>
        </Form>

      </>
    );
  }
}

export default Forms;
