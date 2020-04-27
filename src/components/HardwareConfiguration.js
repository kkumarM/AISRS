import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { Grid, Typography, Button } from "@material-ui/core";
import HardwareDetailParameterModal from "./HardwareDetailParameterModal";

class HardWareConfiguration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showScreenAdvConfig: false,
      showHardwaredetails: false,
      showStorageDetails: false,
      specificProcessor: "Enable",
      accelerator: "Enable",
      allProcessorChecked: false,
      series: "",
      brand: "",
      processor_number: "",
    };
  }

  onScreenChange = (e, screenId) => {
    let temp = {
      ...this.props.screenParameters[screenId],
      [e.target.name]: e.target.value,
    };
    this.props.handleScreenChange(temp, screenId);
  };

  handleSpecificProcessor = (e) => {
    e.persist();
    this.setState({
      specificProcessor: e.target.value,
    });
  };

  handleAcceleratorRadioBtn = (e) => {
    this.setState({
      accelerator: e.target.value,
    });
  };

  handleSeriesBrandChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleProcessorNumber = (e) => {
    e.persist();
    this.setState({ processor_number: e.target.value });
    setTimeout(() => {
      this.props.fetchProcessorRecord(
        this.state.series,
        this.state.brand,
        this.state.processor_number
      );
    }, 100);
  };

  renderProcessorList = () => {
    let processor_list = [];
    if (this.state.series === "Core S") {
      if (this.state.brand === "i7") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i7-8700"
              value="i7-8700"
              checked={this.state.processor_number === "i7-8700"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i7-9700E"
              value="i7-9700E"
              checked={this.state.processor_number === "i7-9700E"}
              onChange={this.handleProcessorNumber}
            />

            <Form.Check
              type="radio"
              label="i7-9700TE"
              value="i7-9700TE"
              checked={this.state.processor_number === "i7-9700TE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i5") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i5-9500E"
              value="i5-9500E"
              checked={this.state.processor_number === "i5-9500E"}
              onChange={this.handleProcessorNumber}
            />

            <Form.Check
              type="radio"
              label="i5-9500TE"
              value="i5-9500TE"
              checked={this.state.processor_number === "i5-9500TE"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i5-8500"
              value="i5-8500"
              checked={this.state.processor_number === "i5-8500"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i5-8500T"
              value="i5-8500T"
              checked={this.state.processor_number === "i5-8500T"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i3") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i3-8100"
              value="i3-8100"
              checked={this.state.processor_number === "i3-8100"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i3-8100T"
              value="i3-8100T"
              checked={this.state.processor_number === "i3-8100T"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i3-9100E"
              value="i3-9100E"
              checked={this.state.processor_number === "i3-9100E"}
              onChange={this.handleProcessorNumber}
            />

            <Form.Check
              type="radio"
              label="i3-9100TE"
              value="i3-9100TE"
              checked={this.state.processor_number === "i3-9100TE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "Pentium") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="G5400"
              value="G5400"
              checked={this.state.processor_number === "G5400"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="G5400T"
              value="G5400T"
              checked={this.state.processor_number === "G5400T"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "Celeron") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="G4900"
              value="G4900"
              checked={this.state.processor_number === "G4900"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="G4900T"
              value="G4900T"
              checked={this.state.processor_number === "G4900T"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "Xeon-E") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="E-2124G"
              value="E-2124G"
              checked={this.state.processor_number === "E-2124G"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2176G"
              value="E-2176G"
              checked={this.state.processor_number === "E-2176G"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2278GE"
              value="E-2278GE"
              checked={this.state.processor_number === "E-2278GE"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2226GE"
              value="E-2226GE"
              checked={this.state.processor_number === "E-2226GE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }
    } else if (this.state.series === "Core H") {
      if (this.state.brand === "Xeon-E") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="E-2176M"
              value="E-2176M"
              checked={this.state.processor_number === "E-2176M"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2276ME"
              value="E-2276ME"
              checked={this.state.processor_number === "E-2276ME"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2254ML"
              value="E-2254ML"
              checked={this.state.processor_number === "E-2254ML"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2276ML"
              value="E-2276ML"
              checked={this.state.processor_number === "E-2276ML"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="E-2254ME"
              value="E-2254ME"
              checked={this.state.processor_number === "E-2254ME"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }
      if (this.state.brand === "i7") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i7-8700T"
              value="i7-8700T"
              checked={this.state.processor_number === "i7-8700T"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i7-8850H"
              value="i7-8850H"
              checked={this.state.processor_number === "i7-8850H"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i7-9850HE"
              value="i7-9850HE"
              checked={this.state.processor_number === "i7-9850HE"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="i7-9850HL"
              value="i7-9850HL"
              checked={this.state.processor_number === "i7-9850HL"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i5") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i5-8400H"
              value="i5-8400H"
              checked={this.state.processor_number === "i5-8400H"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i3") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i3-8100H"
              value="i3-8100H"
              checked={this.state.processor_number === "i3-8100H"}
              onChange={this.handleProcessorNumber}
            />

            <Form.Check
              type="radio"
              label="i3-9100HL"
              value="i3-9100HL"
              checked={this.state.processor_number === "i3-9100HL"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "Celeron") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="G4932E"
              value="G4932E"
              checked={this.state.processor_number === "G4932E"}
              onChange={this.handleProcessorNumber}
            />
            <Form.Check
              type="radio"
              label="G4930E"
              value="G4930E"
              checked={this.state.processor_number === "G4930E"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }
    } else if (this.state.series === "Core U") {
      if (this.state.brand === "i7") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i7-8665UE"
              value="i7-8665UE"
              checked={this.state.processor_number === "i7-8665UE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i5") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i5-8365UE"
              value="i5-8365UE"
              checked={this.state.processor_number === "i5-8365UE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "i3") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="i3-8145UE"
              value="i3-8145UE"
              checked={this.state.processor_number === "i3-8145UE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }

      if (this.state.brand === "Celeron") {
        processor_list.push(
          <>
            <Form.Check
              type="radio"
              label="4305UE"
              value="4305UE"
              checked={this.state.processor_number === "4305UE"}
              onChange={this.handleProcessorNumber}
            />
          </>
        );
      }
    }

    return processor_list;
  };

  handleSelectAll = (e) => {
    let ele = document.getElementById("selectAll");
    var checkBoxes = document.getElementsByName("vpu");
    if (ele.checked) {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
      }
    } else {
      for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
      }
    }
  };

  render() {
    let {
      Screen1,
      Screen2,
      Screen3,
      Screen4,
      // Screen5,
    } = this.props.screenParameters;

    let { SoC, Accelerator } = this.props.hardwareParameters;

    let { Storage } = this.props.storageParameters;

    let { showMoreDetailsSpecification } = this.props.moreDetailsSpecification;

    return (
      <>
        <Grid container>
          <Grid container id="screenConfiguration">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                Display Screens Configuration
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" className="subtitleStyles">
                Screen1
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Resolution &amp; Refresh Rate</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_resolution_refresh"
                    value={Screen1.screen_resolution_refresh}
                    onChange={(e) => this.onScreenChange(e, "Screen1")}
                  >
                    <option value="1080P@60Hz">1080P@60Hz</option>
                    <option value="4k@30Hz">4k@30Hz</option>
                    <option value="4k@60Hz">4k@60Hz</option>
                    <option value="8k@30Hz">8k@30Hz</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Sub Screens</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_layout"
                    value={Screen1.screen_layout}
                    onChange={(e) => this.onScreenChange(e, "Screen1")}
                  >
                    <option value={1}>1</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                    <option value={64}>64</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" className="subtitleStyles">
                Screen2
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Resolution &amp; Refresh Rate</Form.Label>
                  <Form.Control
                    as="select"
                    value={Screen2.screen_resolution_refresh}
                    name="screen_resolution_refresh"
                    onChange={(e) => this.onScreenChange(e, "Screen2")}
                  >
                    <option value="1080P@60Hz">1080P@60Hz</option>
                    <option value="4k@30Hz">4k@30Hz</option>
                    <option value="4k@60Hz">4k@60Hz</option>
                    <option value="8k@30Hz">8k@30Hz</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Sub Screens</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_layout"
                    value={Screen2.screen_layout}
                    onChange={(e) => this.onScreenChange(e, "Screen2")}
                  >
                    <option value={1}>1</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                    <option value={64}>64</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="subtitle2" className="subtitleStyles">
                Screen3
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Resolution &amp; Refresh Rate</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_resolution_refresh"
                    value={Screen3.screen_resolution_refresh}
                    onChange={(e) => this.onScreenChange(e, "Screen3")}
                  >
                    <option value="1080P@60Hz">1080P@60Hz</option>
                    <option value="4k@30Hz">4k@30Hz</option>
                    <option value="4k@60Hz">4k@60Hz</option>
                    <option value="8k@30Hz">8k@30Hz</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Sub Screens</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_layout"
                    value={Screen3.screen_layout}
                    onChange={(e) => this.onScreenChange(e, "Screen3")}
                  >
                    <option value={1}>1</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                    <option value={64}>64</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>

            <Grid item xs={3}>
              <Typography variant="subtitle2" className="subtitleStyles">
                Screen4
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Resolution &amp; Refresh Rate</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_resolution_refresh"
                    value={Screen4.screen_resolution_refresh}
                    onChange={(e) => this.onScreenChange(e, "Screen4")}
                  >
                    <option value="1080P@60Hz">1080P@60Hz</option>
                    <option value="4k@30Hz">4k@30Hz</option>
                    <option value="4k@60Hz">4k@60Hz</option>
                    <option value="8k@30Hz">8k@30Hz</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Sub Screens</Form.Label>
                  <Form.Control
                    as="select"
                    name="screen_layout"
                    value={Screen4.screen_layout}
                    onChange={(e) => this.onScreenChange(e, "Screen4")}
                  >
                    <option value={1}>1</option>
                    <option value={4}>4</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={16}>16</option>
                    <option value={32}>32</option>
                    <option value={64}>64</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
          </Grid>
          <Grid container id="hardwareConfiguration">
            <Grid item xs={12}>
              <Typography variant="h6" className="h6Styles">
                Hardware System Configuration
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" className="subtitleStyles">
                <b>Choose Processor</b>
              </Typography>
              <br />
              <Typography variant="subtitle2" className="subtitleStyles">
                Range of Processors
              </Typography>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Product Series</Form.Label>
                  <Form.Control
                    as="select"
                    name="series"
                    // value={SoC.series}
                    value={this.state.series}
                    onChange={this.handleSeriesBrandChange}
                  >
                    <option hidden>Select</option>
                    <option value="Core S">Core S</option>
                    <option value="Core H">Core H</option>
                    <option value="Core U">Core U</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>

              <Form.Group>
                <Form.Row>
                  <Form.Label>Product Brand</Form.Label>
                  <Form.Control
                    as="select"
                    name="brand"
                    // value={SoC.brand}
                    value={this.state.brand}
                    onChange={this.handleSeriesBrandChange}
                  >
                    <option hidden>Select</option>
                    {(this.state.series === "Core S" ||
                      this.state.series === "Core H") && (
                      <option value="Xeon-E">Xeon-E</option>
                    )}
                    <option value="i7">i7</option>
                    <option value="i5">Core i5</option>
                    <option value="i3">i3</option>
                    {this.state.series === "Core S" && (
                      <option value="Pentium">Pentium</option>
                    )}
                    <option value="Celeron">Celeron</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>

              {/* {showMoreDetailsSpecification && ( */}
              <>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Product Generation</Form.Label>
                    <Form.Control
                      type="text"
                      name="generation"
                      value={SoC.CPU.generation}
                    ></Form.Control>
                  </Form.Row>
                </Form.Group>
                {this.state.series && this.state.brand && (
                  <>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Specific Processor</Form.Label>
                        <Form.Check
                          type="radio"
                          label="Enable"
                          value="Enable"
                          checked={this.state.specificProcessor === "Enable"}
                          onChange={this.handleSpecificProcessor}
                          name="specific_processor"
                        />
                        <Form.Check
                          type="radio"
                          label="Disable"
                          value="Disable"
                          checked={this.state.specificProcessor === "Disable"}
                          onChange={this.handleSpecificProcessor}
                          name="specific_processor"
                        />
                      </Form.Row>
                    </Form.Group>

                    {this.state.specificProcessor === "Enable" && (
                      <>
                        <Form.Group>
                          <Form.Row>
                            <Form.Label className="processor_name">
                              Processor Number
                            </Form.Label>
                            <div className="processor_list">
                              {this.renderProcessorList()}
                            </div>
                          </Form.Row>
                        </Form.Group>
                      </>
                    )}
                  </>
                )}
                {/* {this.state.specificProcessor === "Enable" && (
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <Form.Group>
                            <Form.Row>
                              <Form.Check
                                type="checkbox"
                                label="Select All"
                                name="allProcessorChecked"
                                checked={this.state.allProcessorChecked}
                                onChange={this.handleAllProcessorCheckbox}
                              />
                            </Form.Row>
                          </Form.Group>
                        </td>
                        <td>
                          <label className="processor_number">
                            Processor Number
                          </label>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Form.Group>
                            <Form.Row>
                              <Form.Check
                                type="checkbox"
                                label="i7-8700K"
                                name="processor"
                                checked={SoC.processor_number === "i7-8700K"}
                              />
                            </Form.Row>
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Form.Group>
                            <Form.Row>
                              <Form.Check
                                type="checkbox"
                                label="i7-8700T"
                                checked={SoC.processor_number === "i7-8700T"}
                                name="processor"
                              />
                            </Form.Row>
                          </Form.Group>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Form.Group>
                            <Form.Row>
                              <Form.Check
                                type="checkbox"
                                label="i7-9700TE"
                                checked={SoC.processor_number === "i7-9700TE"}
                                name="processor"
                              />
                            </Form.Row>
                          </Form.Group>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )} */}
                <div className="btnAdvConfig">
                  <Button
                    onClick={this.handleHardwareDetailsModalOpen}
                    color="primary"
                  >
                    <u>More Details Specification</u>
                  </Button>
                </div>
              </>
              {/* )} */}
            </Grid>
            <Grid item xs={6}>
              <Grid container id="accelerator">
                <Grid item xs={12}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label className="subtitleStyles">
                        Accelerator
                      </Form.Label>
                      <Form.Check
                        type="radio"
                        label="Enable"
                        value="Enable"
                        checked={this.state.accelerator === "Enable"}
                        onChange={this.handleAcceleratorRadioBtn}
                        name="accelerator_radiobtn"
                      />
                      <Form.Check
                        type="radio"
                        label="Disable"
                        value="Disable"
                        checked={this.state.accelerator === "Disable"}
                        onChange={this.handleAcceleratorRadioBtn}
                        name="accelerator_radiobtn"
                      />
                    </Form.Row>
                  </Form.Group>
                  {this.state.accelerator === "Enable" && (
                    <table id="acceleratorTable">
                      <tbody>
                        <tr>
                          <td align="right">
                            <Form.Group>
                              <Form.Row>
                                <Form.Check
                                  type="checkbox"
                                  label="Select All"
                                  id="selectAll"
                                  onChange={(e) => this.handleSelectAll(e)}
                                />
                              </Form.Row>
                            </Form.Group>
                          </td>
                          <td align="center">
                            <Form.Label>VPU</Form.Label>
                          </td>
                          <td align="center">
                            <Form.Label>Count</Form.Label>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td colSpan={2}>
                            <Form.Group>
                              <Form.Row>
                                <Form.Check
                                  type="checkbox"
                                  label="KBM 3400VE"
                                  checked={Accelerator.vpu === "KBM 3400VE"}
                                  name="vpu"
                                />
                                <Form.Control
                                  type="number"
                                  // name="vpu_count"
                                  // value={Accelerator.vpu_count}
                                />
                              </Form.Row>
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td colSpan={2}>
                            <Form.Group>
                              <Form.Row>
                                <Form.Check
                                  type="checkbox"
                                  label="KBM 3500VE"
                                  checked={Accelerator.vpu === "KBM 3500VE"}
                                  name="vpu"
                                />
                                <Form.Control type="number" />
                              </Form.Row>
                            </Form.Group>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td colSpan={2}>
                            <Form.Group>
                              <Form.Row>
                                <Form.Check
                                  type="checkbox"
                                  label="KBM 3700VE"
                                  checked={Accelerator.vpu === "KBM 3700VE"}
                                  name="vpu"
                                />
                                <Form.Control
                                  type="number"
                                  name="vpu_count"
                                  value={Accelerator.vpu_count}
                                />
                              </Form.Row>
                            </Form.Group>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </Grid>
              </Grid>
              <Grid container id="storage">
                <Grid item xs={12}>
                  <Typography variant="subtitle2" className="subtitleStyles">
                    <b>Storage Configuration</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>RAID is used</Form.Label>
                      <Form.Check
                        type="radio"
                        label="false"
                        name="RAID"
                        checked={Storage.RAID === false}
                      />
                      <Form.Check
                        type="radio"
                        label="true"
                        name="RAID"
                        checked={Storage.RAID === true}
                      />
                    </Form.Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Row>
                      <Form.Label>Number of HDDs</Form.Label>
                      <Form.Control
                        type="text"
                        name="disk_no"
                        value={Storage.disk_no}
                      />
                    </Form.Row>
                  </Form.Group>
                </Grid>

                {this.state.showStorageDetails && (
                  <>
                    <Grid item xs={12} id="storageAdvanceConfig">
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>RAID Level</Form.Label>
                          <Form.Control
                            type="text"
                            name="RAID_level"
                            value={Storage.RAID_level}
                          />
                        </Form.Row>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Speed of HDD</Form.Label>
                          <Form.Control
                            as="select"
                            name="disk_speed"
                            value={Storage.disk_speed}
                          >
                            <option value="5400">5400 rpm</option>
                            <option value="7200">7200 rpm</option>
                          </Form.Control>
                        </Form.Row>
                      </Form.Group>
                    </Grid>
                    <Grid item xs={12} id="networkBandwidth">
                      <Typography
                        variant="subtitle2"
                        className="subtitleStyles"
                      >
                        <b>Network Bandwidth Configuration</b>
                      </Typography>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Connecting IP Cameras</Form.Label>
                          <Form.Control
                            type="text"
                            name="network_bandwith"
                            value={this.props.cameraNetworkBandwidth + " Mbps"}
                          />
                        </Form.Row>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Video Stream Forward</Form.Label>
                          <Form.Control
                            type="text"
                            name="network_bandwidth"
                            value={
                              this.props.forwardingNetworkBandwidth + " Mbps"
                            }
                          />
                        </Form.Row>
                      </Form.Group>
                    </Grid>
                  </>
                )}
              </Grid>
              <div className="btnAdvConfig">
                <Button
                  onClick={this.handleStorageAdvanceConfig}
                  color="primary"
                >
                  {this.state.showStorageDetails ? (
                    <u>Hide Advance Storage Configuration</u>
                  ) : (
                    <u>Advance Storage Configuration</u>
                  )}
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <HardwareDetailParameterModal
          open={this.state.showHardwaredetails}
          onClose={this.handleHardwareDetailsModalClose}
          parameters={this.props.hardwareParameters}
        />
      </>
    );
  }

  handleScreenAdvanceConfig = () => {
    this.setState({ showScreenAdvConfig: !this.state.showScreenAdvConfig });
  };

  handleHardwareDetailsModalOpen = () => {
    this.setState({ showHardwaredetails: !this.state.showHardwaredetails });
  };

  handleHardwareDetailsModalClose = () => {
    this.setState({ showHardwaredetails: !this.state.showHardwaredetails });
  };

  handleStorageAdvanceConfig = () => {
    this.setState({ showStorageDetails: !this.state.showStorageDetails });
  };
}
export default HardWareConfiguration;
