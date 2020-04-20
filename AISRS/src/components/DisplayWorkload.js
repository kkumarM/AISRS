import React from "react";
import { Form } from "react-bootstrap";
import { Grid, Typography } from "@material-ui/core";
const DisplayWorkload = props => {
  return (
    <Grid item xs={4} id={props.displayId} key={props.index}>
      <Typography>{`Display ${props.index}`}</Typography>
      <Form.Group>
        <Form.Row>
          <Form.Label>Screen</Form.Label>
          <Form.Control as="select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Form.Control>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label>Type of Stream</Form.Label>
          <Form.Control as="select">
            <option value="Primary Stream">Primary Stream</option>
            <option value="Secondary Stream">Secondary Stream</option>
            <option value="Tertiary Stream">Tertiary Stream</option>
          </Form.Control>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label>Number of Streams</Form.Label>
          <Form.Control as="select">
            <option value="16">16</option>
          </Form.Control>
        </Form.Row>
      </Form.Group>
      <Form.Group>
        <Form.Row>
          <Form.Label>Local Stream</Form.Label>
          <Form.Check type="radio" label="false " name="display_localStream" />
          <Form.Check type="radio" label="true" name="display_localStream" />
        </Form.Row>
      </Form.Group>
    </Grid>
  );
};

export default DisplayWorkload;
