import React, { Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
  Grid,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Form } from "react-bootstrap";
import TranscodeForm from "./TranscodeForm";

export default class TranscodeConfigFormModal extends Component {
  // handleb = e => {
  //   this.setState({ [e.target.name]: e.target.checked });
  // };

  handleChangeTranscodes = (e) => {
    // this.setState({ [e.target.name]: e.target.value });
  };

  renderTranscode = (Transcode, Forwarding) => {
    let transcodeArray = [];
    let transcodeId;

    for (let i = 0; i <= Transcode.transcode_number; i++) {
      if (i === 0 && Transcode.transcode_number === 0) {
        transcodeId = `transcode${Transcode.transcode_number + 1}`;
        transcodeArray.push(
          <TranscodeForm
            id={transcodeId}
            index={Transcode.transcode_number}
            key={i}
            transcode={Transcode}
            forwarding={Forwarding}
          />
        );
      } else {
        transcodeId = `transcode${i}`;
        if (i === 1) {
          transcodeArray = [];
          transcodeArray.push(
            <TranscodeForm
              id={transcodeId}
              index={i}
              key={i}
              transcode={Transcode}
              forwarding={Forwarding}
            />
          );
        } else {
          transcodeArray.push(
            <TranscodeForm
              id={transcodeId}
              index={i}
              key={i}
              transcode={Transcode}
              forwarding={Forwarding}
            />
          );
        }
      }
    }
    return transcodeArray;
  };

  render() {
    let { Transcode } = this.props.transcodeParameters;
    let { Forwarding } = this.props.forwardingParameters;

    return (
      <>
        <Dialog
          open={this.props.open}
          onClose={this.props.onClose}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
          fullWidth={true}
        >
          <Form>
            <Grid container>
              <Grid item xs={10}>
                <DialogTitle id="form-dialog-title" className="h6Styles">
                  Transcode Workload Configuration
                </DialogTitle>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={this.props.onClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <DialogContent>
                <Grid item xs={6}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Number of Transcodes</Form.Label>
                      <Form.Control
                        type="number"
                        min="0"
                        max="3"
                        name="transcode_number"
                        value={Transcode.transcode_number}
                        onChange={this.handleChangeTranscodes}
                      />
                    </Form.Row>
                  </Form.Group>
                </Grid>
                <Grid container>
                  {this.renderTranscode(Transcode, Forwarding)}
                </Grid>
              </DialogContent>
              <Grid item xs={12}>
                <DialogActions>
                  <Button onClick={this.props.onClose} color="primary">
                    Cancel
                  </Button>
                  <Button onClick={this.props.onClose} color="primary">
                    Save
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </Form>
        </Dialog>
      </>
    );
  }
}
