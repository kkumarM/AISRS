import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Grid, Slider, Typography, Button, Input } from "@material-ui/core";
import TranscodeConfigFormModal from "./TranscodeConfigFormModal";
import VAWorkloadFormModal from "./VA_WorkloadFormModal";
import { connect } from "react-redux";
import * as actionTypes from "../actions/workloadActions";

class WorkLoadConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showStreamAdvConfig: false,
      transcodeModalOpen: false,
      va_workloadFormModalOpen: false,
      showWorkloadStorageAdvConfig: false,
      primaryStreamFPSValue: 30,
      secondaryStreamFPSValue: 30,
      tertiaryStreamFPSValue: 30,
      noOfDisplayCount: 3,
      pipelines: [
        {
          workload_id: "",
          stream_channel: "",
          share_stream: true,
          inference_HW: "",
        },
      ],
    };
  }

  addInference = (e) => {
    this.setState((prevState) => ({
      pipelines: [
        ...prevState.pipelines,
        {
          workload_id: "",
          stream_channel: "",
          share_stream: true,
          inference_HW: "",
        },
      ],
    }));
  };

  deleteInference = (index) => {
    this.state.pipelines.splice(index + 1, 1);
    this.setState({ pipelines: this.state.pipelines });
  };

  deleteWorkload = (workloadName) => {
    this.props.deleteWorkloadHandler(workloadName);
    this.addedWorkloadBody(this.props.va_workloadParameters);
  };

  addedWorkloadBody = (obj) => {
    let workloadEntries = [];

    if (Object.keys(obj).length === 0) {
      workloadEntries.push(
        <tr>
          <td colspan={2}>WorkLoad List is Empty</td>
        </tr>
      );
    } else {
      Object.keys(obj).forEach((key, index) => {
        workloadEntries.push(
          <tr key={index}>
            <td>{obj[key].workload_type}</td>
            <td>
              <div className="workloadEditBtn">
                <Button
                  color="primary"
                  onClick={this.handleVAWorkloadModalOpen}
                >
                  <u>{obj[key].workload_name}</u>
                </Button>
              </div>
            </td>
            <td>
              <div className="btnAdvConfig">
                <Button
                  color="primary"
                  onClick={(index) => this.deleteWorkload(key)}
                >
                  Delete Workload
                </Button>
              </div>
            </td>
          </tr>
        );
      });
    }
    return workloadEntries;
  };

  render() {
    let { Stream1, Stream2, Stream3 } = this.props.streamParameters.Camera;
    let { pipelines } = this.state;
    let { Feature_matching } = this.props.featureMatchingParameters;
    let { Storage } = this.props.storageParameters;
    let { Display } = this.props.displayWorkloadParameters;
    let { VA_workload } = this.props.va_workloadParameters;

    let typeOfWorkloadList = [];
    let nameOfWorkloadList = [];

    Object.keys(VA_workload).forEach((key) => {
      typeOfWorkloadList.push(VA_workload[key].workload_type);
    });
   
    Object.keys(VA_workload).forEach((key) => {
      nameOfWorkloadList.push(VA_workload[key].workload_name);
    });

    const renderWorkloadType = typeOfWorkloadList.map((ele, index) => {
      return (
        <option value={ele} key={index}>
          {ele}
        </option>
      );
    });

    const renderWorkloadName = nameOfWorkloadList.map((ele, index) => {
      return (
        <option value={ele} key={index}>
          {ele}
        </option>
      );
    });

    return (
      <>
        <Grid container id="workLoadConfiguration">
          <Grid container id="videoStreamConfiguration">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                Video Stream Configuration
              </Typography>
            </Grid>
            <Grid container id="stream">
              <Grid item xs={4} id="primaryStream">
                <Typography variant="subtitle2" className="subtitleStyles">
                  Primary Stream Configuration
                </Typography>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Encoding Format</Form.Label>
                    <Form.Control
                      as="select"
                      name="stream_codec"
                      value={Stream1.stream_codec}
                    >
                      <option value="H264">H264</option>
                      <option value="H265">H265</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Resolution</Form.Label>
                    <Form.Control
                      as="select"
                      name="stream_resolution"
                      value={Stream1.stream_resolution}
                    >
                      <option value="8K">8K</option>
                      <option value="4K">4K</option>
                      <option value="2K">2K</option>
                      <option value="1080P">1080P</option>
                      <option value="720P">720P</option>
                      <option value="D1">D1</option>
                      <option value="VGA">VGA</option>
                      <option value="CIF">CIF</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Bitrate</Form.Label>
                    <Form.Control
                      type="text"
                      name="stream_bitrate"
                      value={Stream1.stream_bitrate + " Kbps"}
                    />
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={4} id="secondaryStream">
                <Typography variant="subtitle2" className="subtitleStyles">
                  Secondary Stream Configuration
                </Typography>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Encoding Format</Form.Label>
                    <Form.Control
                      as="select"
                      value={Stream2.stream_codec}
                      name="stream_codec"
                    >
                      <option value="H264">H264</option>
                      <option value="H265">H265</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Resolution</Form.Label>
                    <Form.Control
                      as="select"
                      name="stream_resolution"
                      value={Stream2.stream_resolution}
                    >
                      <option value="8K">8K</option>
                      <option value="4K">4K</option>
                      <option value="2K">2K</option>
                      <option value="1080P">1080P</option>
                      <option value="720P">720P</option>
                      <option value="D1">D1</option>
                      <option value="VGA">VGA</option>
                      <option value="CIF">CIF</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Bitrate</Form.Label>
                    <Form.Control
                      type="text"
                      name="stream_bitrate"
                      value={Stream2.stream_bitrate + " Kbps"}
                    />
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={4} id="tertiaryStream">
                <Typography variant="subtitle2" className="subtitleStyles">
                  Tertiary Stream Configuration
                </Typography>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Encoding Format</Form.Label>
                    <Form.Control
                      as="select"
                      name="stream_codec"
                      value={Stream3.stream_codec}
                    >
                      <option value="H264">H264</option>
                      <option value="H265">H265</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Resolution</Form.Label>
                    <Form.Control
                      as="select"
                      name="stream_resolution"
                      value={Stream3.stream_resolution}
                    >
                      <option value="8K">8K</option>
                      <option value="4K">4K</option>
                      <option value="2K">2K</option>
                      <option value="1080P">1080P</option>
                      <option value="720P">720P</option>
                      <option value="D1">D1</option>
                      <option value="VGA">VGA</option>
                      <option value="CIF">CIF</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Bitrate</Form.Label>
                    <Form.Control
                      type="text"
                      name="stream_bitrate"
                      value={Stream3.stream_bitrate + " Kbps"}
                    />
                  </Form.Row>
                </Form.Group>
              </Grid>
            </Grid>
            {this.state.showStreamAdvConfig && (
              <Grid container id="streamAdvanceConfiguration">
                <Grid item xs={4}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>FPS</Form.Label>
                      <Input
                        value={Stream1.stream_fps}
                        margin="dense"
                        onChange={(event) =>
                          this.handlePrimaryStreamInputChange(event, "Stream1")
                        }
                        onBlur={(e) =>
                          this.handlePrimaryStreamBlur(e, "Stream1")
                        }
                        inputProps={{
                          step: 1,
                          min: 5,
                          max: 60,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                        className="input-slider"
                      />
                      <br />
                      <span>5</span>
                      <Slider
                        className="slider"
                        value={
                          typeof Stream1.stream_fps === "number"
                            ? Stream1.stream_fps
                            : 5
                        }
                        onChange={(event, val) =>
                          this.handlePrimaryStreamSliderChange(
                            event,
                            val,
                            "Stream1"
                          )
                        }
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={5}
                        max={60}
                      />
                      <span>60</span>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Encrypted</Form.Label>
                      <Form.Check
                        type="radio"
                        label="false"
                        name="stream1"
                        checked={Stream1.stream_encrypted === false}
                      />
                      <Form.Check
                        type="radio"
                        label="true"
                        name="stream1"
                        checked={Stream1.stream_encrypted === true}
                      />
                    </Form.Row>
                  </Form.Group>
                </Grid>
                <Grid item xs={4}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>FPS</Form.Label>
                      <Input
                        value={Stream2.stream_fps}
                        margin="dense"
                        onChange={(event) =>
                          this.handleSecondaryStreamInputChange(
                            event,
                            "Stream2"
                          )
                        }
                        onBlur={(e) =>
                          this.handleSecondaryStreamBlur(e, "Stream2")
                        }
                        inputProps={{
                          step: 1,
                          min: 5,
                          max: 60,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                        className="input-slider"
                      />
                      <br />
                      <span>5</span>
                      <Slider
                        className="slider"
                        value={
                          typeof Stream2.stream_fps === "number"
                            ? Stream2.stream_fps
                            : 5
                        }
                        onChange={(event, val) =>
                          this.handleSecondaryStreamSliderChange(
                            event,
                            val,
                            "Stream2"
                          )
                        }
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={5}
                        max={60}
                      />
                      <span>60</span>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Encrypted</Form.Label>
                      <Form.Check
                        type="radio"
                        label="false"
                        name="stream2"
                        checked={Stream2.stream_encrypted === false}
                      />
                      <Form.Check
                        type="radio"
                        label="true"
                        name="stream2"
                        checked={Stream2.stream_encrypted === true}
                      />
                    </Form.Row>
                  </Form.Group>
                </Grid>
                <Grid item xs={4}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>FPS</Form.Label>
                      <Input
                        value={Stream3.stream_fps}
                        margin="dense"
                        onChange={(event) =>
                          this.handleTertiaryStreamInputChange(event, "Stream3")
                        }
                        onBlur={(e) =>
                          this.handleTertiaryStreamBlur(e, "Stream3")
                        }
                        inputProps={{
                          step: 1,
                          min: 5,
                          max: 60,
                          type: "number",
                          "aria-labelledby": "input-slider",
                        }}
                        className="input-slider"
                      />
                      <br />
                      <span>5</span>
                      <Slider
                        className="slider"
                        value={
                          typeof Stream3.stream_fps === "number"
                            ? Stream3.stream_fps
                            : 5
                        }
                        onChange={(event, val) =>
                          this.handleTertiaryStreamSliderChange(
                            event,
                            val,
                            "Stream3"
                          )
                        }
                        aria-labelledby="input-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        min={5}
                        max={60}
                      />
                      <span>60</span>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Encrypted</Form.Label>
                      <Form.Check
                        type="radio"
                        label="false"
                        name="stream3"
                        checked={Stream3.stream_encrypted === false}
                      />
                      <Form.Check
                        type="radio"
                        label="true"
                        name="stream3"
                        checked={Stream3.stream_encrypted === true}
                      />
                    </Form.Row>
                  </Form.Group>
                </Grid>
              </Grid>
            )}
            <Grid item xs={12}>
              <div className="btnAdvConfig">
                <Button
                  onClick={this.handleStreamAdvanceConfig}
                  color="primary"
                >
                  {this.state.showStreamAdvConfig ? (
                    <u>Hide Advance Stream Configuration</u>
                  ) : (
                    <u>Advance Stream Configuration</u>
                  )}
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container id="display">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                Display Workload Configuration
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Number of Displays</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={(event) => this.handleChange(event)}
                    defaultValue={this.state.noOfDisplayCount}
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    {/* <option value={4}>4</option>
                    <option value={5}>5</option> */}
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid container>{this.renderDisplay(Display)}</Grid>
            <Grid item xs={12}>
              <div className="btnAdvConfig">
                <Button
                  onClick={this.handleTranscodeConfigModalOpen}
                  color="primary"
                >
                  <u>Transcode Configuration</u>
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container id="va_workload">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                VA Workload List
              </Typography>

              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.addedWorkloadBody(VA_workload)}</tbody>
              </table>
            </Grid>
            <Grid item xs={12}>
              <div className="btnAdvConfig">
                <Button
                  color="primary"
                  onClick={this.handleVAWorkloadModalOpen}
                >
                  + Add New VA Workload
                </Button>
              </div>
            </Grid>
          </Grid>

          <Grid container id="pipeline">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                Video Analysis Configuration
              </Typography>
            </Grid>
            {pipelines.map((val, index) => {
              let pipelineId = `pipeline${index + 1}`;
              return (
                <Grid item xs={4} id={pipelineId} key={index + 1}>
                  <Typography variant="subtitle2" className="subtitleStyles">
                    {`VA Pipeline ${index + 1}`}
                  </Typography>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Type of WorkLoad</Form.Label>
                      <Form.Control as="select">
                        {renderWorkloadType}
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Name of WorkLoad</Form.Label>
                      <Form.Control as="select">
                        {renderWorkloadName}
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Type of Stream</Form.Label>
                      <Form.Control as="select">
                        <option value={1}>Primary Stream</option>
                        <option value={2}>Secondary Stream</option>
                        <option value={3}>Tertiary Stream</option>
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Number of Streams</Form.Label>
                      <Form.Control type="number" value={2}></Form.Control>
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Local Stream</Form.Label>
                      <Form.Check type="radio" label="false" checked />
                      <Form.Check type="radio" label="true" />
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Execution Hardware</Form.Label>
                      <Form.Control as="select">
                        <option value="iGPU">iGPU</option>
                        <option value="VPU">VPU</option>
                        <option value="Auto">Auto</option>
                      </Form.Control>
                    </Form.Row>
                  </Form.Group>
                  <div className="btnAdvConfig">
                    <Button
                      color="primary"
                      onClick={(index) => this.deleteInference(index)}
                    >
                      Delete Inference
                    </Button>
                  </div>
                </Grid>
              );
            })}
            <Grid item xs={12}>
              <div className="btnAdvConfig">
                <Button onClick={this.addInference} color="primary">
                  <u>+ Add New VA Pipeline</u>
                </Button>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} id="workload_storage">
              <Typography variant="h6" className="h6Styles">
                Storage Workload Configuration
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Type of Streams</Form.Label>
                  <Form.Control
                    as="select"
                    name="stream_id"
                    value={Storage.stream_id}
                  >
                    <option value={1}>Primary Stream</option>
                    <option value={2}>Secondary Stream</option>
                    <option value={3}>Tertiary Stream</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Number of Streams</Form.Label>
                  <Form.Control
                    type="text"
                    name="stream_channel"
                    value={Storage.stream_channel}
                  ></Form.Control>
                </Form.Row>
              </Form.Group>
              {this.state.showWorkloadStorageAdvConfig && (
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Encrypted</Form.Label>
                    <Form.Check
                      type="radio"
                      label="false"
                      name="storage_encryption"
                      checked={Storage.storage_encryption === false}
                    />
                    <Form.Check
                      type="radio"
                      label="true"
                      name="storage_encryption"
                      checked={Storage.storage_encryption === true}
                    />
                  </Form.Row>
                </Form.Group>
              )}
              <div className="btnAdvConfig">
                <Button
                  onClick={this.handleWorkloadStorageAdvanceConfig}
                  color="primary"
                >
                  {this.state.showWorkloadStorageAdvConfig ? (
                    <u>Hide Advance Storage Configuration</u>
                  ) : (
                    <u>Advance Storage Configuration</u>
                  )}
                </Button>
              </div>
            </Grid>

            <Grid item xs={6} id="feature_matching">
              <Typography variant="h6" className="h6Styles">
                Feature Matching Configuration
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Size of Feature Database</Form.Label>
                  <Form.Control
                    type="text"
                    name="database"
                    value={Feature_matching.database + " KB"}
                  />
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Feature Dimension</Form.Label>
                  <Form.Control
                    as="select"
                    name="dimension"
                    value={Feature_matching.dimension}
                  >
                    <option value={256}>256</option>
                    <option value={512}>512</option>
                    <option value={1024}>1024</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Feature Data Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="data_type"
                    value={Feature_matching.data_type}
                  >
                    <option value="int8">int8</option>
                    <option value="int/float16">int/float16</option>
                    <option value="float32">float32</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Input Batch Size</Form.Label>
                  <Form.Control
                    as="select"
                    name="batch_size"
                    value={Feature_matching.batch_size}
                  >
                    <option value={8}>8</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                    <option value={64}>64</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Execution Hardware</Form.Label>
                  <Form.Control
                    as="select"
                    name="hardware"
                    value={Feature_matching.hardware}
                  >
                    <option value="iCPU">iCPU</option>
                    <option value="iGPU">iGPU</option>
                    <option value="Auto">Auto</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
          </Grid>
        </Grid>

        <TranscodeConfigFormModal
          open={this.state.transcodeModalOpen}
          onClose={this.handleTranscodeConfigModalClose}
          transcodeParameters={this.props.transcodeParameters}
          forwardingParameters={this.props.forwardingParameters}
        />
        <VAWorkloadFormModal
          open={this.state.va_workloadFormModalOpen}
          onClose={this.handleVAWorkloadModalClose}
          callBack={this.handleWorkloadObj}
        />
      </>
    );
  }

  handleWorkloadObj = (workloadDataObj, count) => {
    this.workloadDataObj = workloadDataObj;
  };
  renderDisplay = (Display) => {
    let displayArray = [];
    for (let i = 1; i <= this.state.noOfDisplayCount; i++) {
      let displayId = `display${i}`;
      displayArray.push(
        <Grid item xs={4} id={displayId} key={i}>
          <Typography variant="subtitle2" className="subtitleStyles">
            {`Display ${i}`}
          </Typography>
          <Form.Group>
            <Form.Row>
              <Form.Label>Screen</Form.Label>
              <Form.Control
                as="select"
                name="screen_id"
                value={Display["Display" + i].screen_id}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </Form.Control>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Type of Stream</Form.Label>
              <Form.Control
                as="select"
                name="stream_id"
                value={Display["Display" + i].stream_id}
              >
                <option value={1}>Primary Stream</option>
                <option value={2}>Secondary Stream</option>
                <option value={3}>Tertiary Stream</option>
              </Form.Control>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Number of Streams</Form.Label>
              <Form.Control
                type="text"
                name="stream_channel"
                value={Display["Display" + i].stream_channel}
              ></Form.Control>
            </Form.Row>
          </Form.Group>
          <Form.Group>
            <Form.Row>
              <Form.Label>Local Stream</Form.Label>
              <Form.Check
                type="radio"
                label="false "
                name={`display${i}_localStream`}
                checked={Display["Display" + i].local_stream === false}
              />
              <Form.Check
                type="radio"
                label="true"
                name={`display${i}_localStream`}
                checked={Display["Display" + i].local_stream === true}
              />
            </Form.Row>
          </Form.Group>
        </Grid>
      );
    }
    return displayArray;
  };

  handleChange = (event) => {
    event.persist();
    this.setState({ noOfDisplayCount: event.target.value });
  };
  handleWorkloadStorageAdvanceConfig = () => {
    this.setState({
      showWorkloadStorageAdvConfig: !this.state.showWorkloadStorageAdvConfig,
    });
  };

  handleTranscodeConfigModalOpen = () => {
    this.setState({ transcodeModalOpen: true });
  };

  handleTranscodeConfigModalClose = () => {
    this.setState({ transcodeModalOpen: false });
  };

  handleVAWorkloadModalOpen = () => {
    this.setState({ va_workloadFormModalOpen: true });
  };

  handleVAWorkloadModalClose = () => {
    this.setState({ va_workloadFormModalOpen: false });
  };

  handleStreamAdvanceConfig = () => {
    this.setState({ showStreamAdvConfig: !this.state.showStreamAdvConfig });
  };

  handlePrimaryStreamSliderChange = (event, val) => {
    this.setState({ primaryStreamFPSValue: val });
  };

  handlePrimaryStreamInputChange = (event, streamName) => {
    // let tempStreamObj = {
    //   ...this.props.streamParameters.Camera[streamName],
    //   [event.target.name]:
    //     event.target.value === "" ? "" : Number(event.target.value),
    // };
  };

  handlePrimaryStreamBlur = (e, streamName) => {
    // let tempStreamObj;
    // if (streamName.stream_fps < 5) {
    //   // let tempStreamObj = {...streamName, streamName.stream_fps:5};
    //   // this.setState({ primaryStreamFPSValue: 5 });
    // } else if (streamName.stream_fps > 60) {
    //   tempStreamObj = { ...streamName };
    //   this.setState({ primaryStreamFPSValue: 60 });
    // }
  };

  handleSecondaryStreamSliderChange = (event, val) => {
    this.setState({ secondaryStreamFPSValue: val });
  };

  handleSecondaryStreamInputChange = (event) => {
    this.setState({
      secondaryStreamFPSValue:
        event.target.value === "" ? "" : Number(event.target.value),
    });
  };

  handleSecondaryStreamBlur = () => {
    if (this.state.secondaryStreamFPSValue < 5) {
      this.setState({ secondaryStreamFPSValue: 5 });
    } else if (this.state.secondaryStreamFPSValue > 60) {
      this.setState({ secondaryStreamFPSValue: 60 });
    }
  };

  handleTertiaryStreamSliderChange = (event, val) => {
    this.setState({ tertiaryStreamFPSValue: val });
  };

  handleTertiaryStreamInputChange = (event) => {
    this.setState({
      tertiaryStreamFPSValue:
        event.target.value === "" ? "" : Number(event.target.value),
    });
  };

  handleTertiaryStreamBlur = () => {
    if (this.state.tertiaryStreamFPSValue < 5) {
      this.setState({ tertiaryStreamFPSValue: 5 });
    } else if (this.state.tertiaryStreamFPSValue > 60) {
      this.setState({ tertiaryStreamFPSValue: 60 });
    }
  };
}

const mapStateToProps = (state) => ({
  addedWorkload: state.addNewWorkload,
});
const mapDispatchToProps = (dispatch) => ({
  deleteWorkloadHandler: (workloadName) => {
    dispatch(actionTypes.deleteWorkload(workloadName));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkLoadConfiguration);
