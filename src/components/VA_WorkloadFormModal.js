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

import { connect } from "react-redux";
import * as vaWorkloadActions from "../actions/workloadActions";

class VA_WorkloadFormModal extends Component {
  state = {
    workload_type: "Video Structuring",
    workload: {
      videoStructuring: {
        workload_type: "Video Structuring",
        workload_name: "Video Structuring",
        detect_fps: 10,
        detect_NN: "Tiny_Yolo_V2",
        object_number: 5,
        classification_number: 2,
        classification_NN1: "Resnet50",
        classification_NN2: "InceptionV2",
      },
      dieCastingDefect: {
        workload_type: "Die-casting Defect Detection",
        workload_name: "Die-casting Defect Detection",
        image_alignment: "align2222",
        feature_extraction: "feature1111",
        find_ROI: "roixxx",
        classifier_number: 1,
        classifier_algo1: "algo1",
        classifier_algo2: "algo2",
        classifier_algo3: "algo3",
        classifier_algo4: "algo4",
      },
    },
  };

  workloadTypeHandler = (e) => {
    this.setState({
      workload_type: e.target.value,
    });
  };

  handleChange = (e, identifier) => {
    e.preventDefault();
    let nameIdentifyer = identifier;
    let workloadType = this.state.workload_type;
    if (workloadType === "Video Structuring") {
      workloadType = "videoStructuring";
    }
    //  else if (workloadType === "Die-casting Defect Detection") {
    //   workloadType = "dieCastingDefect";
    // }

    const updatedWorkload = {
      ...this.state.workload,
    };

    const updatedWorkloadType = { ...updatedWorkload[workloadType] };
    updatedWorkloadType[nameIdentifyer] = e.target.value;
    updatedWorkload[workloadType] = updatedWorkloadType;
    this.setState({
      workload: updatedWorkload,
    });
  };

  handleWorkloadSubmit = (e) => {
    e.preventDefault();
    let workloadType = this.state.workload_type;
    if (workloadType === "Video Structuring") {
      workloadType = "videoStructuring";
    }
    //  else if (workloadType === "Die-casting Defect Detection") {
    //   workloadType = "dieCastingDefect";
    // }
    if (this.props.editWorkload) {
      
      this.props.onWorkloadEdit(
        this.state.workload[workloadType],
        this.props.workloadKeyName
      );
    } else {
      let length = Object.keys(
        this.props.addedWorkload.va_workloadParameters.VA_workload
      ).length;
      let count = (length = undefined ? 1 : (length = length + 1));

      const updatedWorkload = {
        ...this.state.workload,
      };

      const updatedWorkloadType = { ...updatedWorkload[workloadType] };
      this.props.submitHandler(updatedWorkloadType, count);
    }

    this.props.onClose();
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.editWorkloadObjDetails);
    if (
      nextProps.editWorkload &&
      nextProps.editWorkloadObjDetails !== undefined
    ) {
      let editworkloadType = nextProps.editWorkloadObjDetails.workload_type;
      
      console.log(editworkloadType, "die casting");
      Object.keys(this.state.workload).forEach((key, index) => {
        console.log(key, "key");
        if (
          key === "videoStructuring" &&
          editworkloadType === "Video Structuring"
        ) {
          this.setState({
            workload_type: editworkloadType,
            workload: { [key]: nextProps.editWorkloadObjDetails },
          });
        } 
        // else if (
        //   key === "dieCastingDefect" &&
        //   editworkloadType === "Die-casting Defect Detection"
        // ) {
        //   console.log("in die");
        //   this.setState({
        //     workload_type: editworkloadType,
        //     workload: { [key]: nextProps.editWorkloadObjDetails },
        //   });
        // }
      });
    }
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
        maxWidth="sm"
        // fullWidth={true}
      >
        <Form>
          <Grid container>
            <Grid item xs={10}>
              <DialogTitle id="form-dialog-title" className="h6Styles">
                {this.props.editWorkloadObjDetails
                  ? "Video Analysis Workload Definition"
                  : "Define New Video Analysis Workload"}
              </DialogTitle>
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={this.props.onClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <DialogContent>
              <Grid item xs={12}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Type of VA Workload</Form.Label>
                    <Form.Control
                      as="select"
                      name="workload_type"
                      onChange={(e) => this.workloadTypeHandler(e)}
                      value={this.state.workload_type}
                    >
                      <option value="Video Structuring">
                        Video Structuring
                      </option>
                      {/* <option value="Die-casting Defect Detection">
                        Die-casting Defect Detection
                      </option> */}
                    </Form.Control>
                  </Form.Row>
                </Form.Group>

                {this.state.workload_type === "Video Structuring" && (
                  <>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Name of VA Workload</Form.Label>
                        <Form.Control
                          type="text"
                          name="workload_name"
                          value={
                            this.state.workload.videoStructuring.workload_name
                          }
                          onChange={(e) =>
                            this.handleChange(e, "workload_name")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Detection FPS</Form.Label>
                        <Form.Control
                          type="text"
                          name="detect_fps"
                          value={
                            this.state.workload.videoStructuring.detect_fps
                          }
                          onChange={(e) => this.handleChange(e, "detect_fps")}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Detection Neural Network</Form.Label>
                        <Form.Control
                          as="select"
                          name="detect_NN"
                          value={this.state.workload.videoStructuring.detect_NN}
                          onChange={(e) => this.handleChange(e, "detect_NN")}
                        >
                          <option value="Tiny_Yolo_V2">Tiny_Yolo_V2</option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>
                          Number of Objects for Classification
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name="object_number"
                          value={
                            this.state.workload.videoStructuring.object_number
                          }
                          onChange={(e) =>
                            this.handleChange(e, "object_number")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classification Number</Form.Label>
                        <Form.Control
                          as="select"
                          name="classification_number"
                          value={
                            this.state.workload.videoStructuring
                              .classification_number
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classification_number")
                          }
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classification_NN1</Form.Label>
                        <Form.Control
                          as="select"
                          name="classification_NN1"
                          value={
                            this.state.workload.videoStructuring
                              .classification_NN1
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classification_NN1")
                          }
                        >
                          <option value="Resnet 50">Resnet 50</option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classification_NN2</Form.Label>
                        <Form.Control
                          as="select"
                          name="classification_NN2"
                          value={
                            this.state.workload.videoStructuring
                              .classification_NN2
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classification_NN2")
                          }
                        >
                          <option value="Inception V2">Inception V2</option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    {/* <Form.Group>
                      <Form.Row>
                        <Form.Label>Classification_NN3</Form.Label>
                        <Form.Control as="select" name="classification_NN3">
                          <option value=""></option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group> */}
                  </>
                )}
                {this.state.workload_type ===
                  "Die-casting Defect Detection" && (
                  <>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Name of VA Workload</Form.Label>
                        <Form.Control
                          type="text"
                          name="workload_name"
                          value={
                            this.state.workload.dieCastingDefect.workload_name
                          }
                          onChange={(e) =>
                            this.handleChange(e, "workload_name")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Image Alignment</Form.Label>
                        <Form.Control
                          type="text"
                          name="image_alignment"
                          value={
                            this.state.workload.dieCastingDefect.image_alignment
                          }
                          onChange={(e) =>
                            this.handleChange(e, "image_alignment")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Feature Extraction</Form.Label>
                        <Form.Control
                          type="text"
                          name="feature_extraction"
                          value={
                            this.state.workload.dieCastingDefect
                              .feature_extraction
                          }
                          onChange={(e) =>
                            this.handleChange(e, "feature_extraction")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Find ROI</Form.Label>
                        <Form.Control
                          type="text"
                          name="find_ROI"
                          value={this.state.workload.dieCastingDefect.find_ROI}
                          onChange={(e) => this.handleChange(e, "find_ROI")}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Number of Classifier</Form.Label>
                        <Form.Control
                          as="select"
                          name="classifier_number"
                          value={
                            this.state.workload.dieCastingDefect
                              .classifier_number
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classifier_number")
                          }
                        >
                          <option value="0">0</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classifier Algorithm1</Form.Label>
                        <Form.Control
                          type="text"
                          name="classifier_algo1"
                          value={
                            this.state.workload.dieCastingDefect
                              .classifier_algo1
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classifier_algo1")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classifier Algorithm2</Form.Label>
                        <Form.Control
                          type="text"
                          name="classifier_algo2"
                          value={
                            this.state.workload.dieCastingDefect
                              .classifier_algo2
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classifier_algo2")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classifier Algorithm3</Form.Label>
                        <Form.Control
                          type="text"
                          name="classifier_algo3"
                          onChange={(e) =>
                            this.handleChange(e, "classifier_algo3")
                          }
                          value={
                            this.state.workload.dieCastingDefect
                              .classifier_algo3
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Classifier Algorithm4</Form.Label>
                        <Form.Control
                          type="text"
                          name="classifier_algo4"
                          value={
                            this.state.workload.dieCastingDefect
                              .classifier_algo4
                          }
                          onChange={(e) =>
                            this.handleChange(e, "classifier_algo4")
                          }
                        />
                      </Form.Row>
                    </Form.Group>
                  </>
                )}
              </Grid>
            </DialogContent>
            <Grid item xs={12}>
              <DialogActions>
                <Button onClick={this.props.onClose} color="primary">
                  Cancel
                </Button>
                <Button
                  onClick={(e) => this.handleWorkloadSubmit(e)}
                  color="primary"
                >
                  Submit
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Form>
      </Dialog>
    );
  }
}

const mapStateToProps = (state) => ({
  addedWorkload: state,
});
const mapDispatchToProps = (dispatch) => ({
  submitHandler: (newVAWorkload, count) => {
    dispatch(vaWorkloadActions.addNewWorkload(newVAWorkload, count));
  },
  onWorkloadEdit: (updatedWorkload, key) => {
    dispatch(vaWorkloadActions.editWorkload(updatedWorkload, key));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VA_WorkloadFormModal);
