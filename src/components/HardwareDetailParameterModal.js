import React, { Component } from "react";
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  IconButton,
  Grid,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Form } from "react-bootstrap";

export default class HardwareDetailParameterModal extends Component {
  render() {
    let { SoC } = this.props.parameters;
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
                  Processor Specification
                </DialogTitle>
              </Grid>
              <Grid item xs={2}>
                <IconButton onClick={this.props.onClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <DialogContent>
                <Grid container>
                  <Grid item xs={3} id="processor_details">
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Product Series</Form.Label>
                        <Form.Control
                          type="text"
                          name="series"
                          value={SoC.series}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Product Generation</Form.Label>
                        <Form.Control
                          type="number"
                          name="generation"
                          value={SoC.CPU.generation}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Product Brand</Form.Label>
                        <Form.Control
                          type="text"
                          name="brand"
                          value={SoC.brand}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Processor Number</Form.Label>
                        <Form.Control
                          type="text"
                          name="processor_number"
                          value={SoC.processor_number}
                        />
                      </Form.Row>
                    </Form.Group>
                  </Grid>
                  <Grid item xs={3} id="cpu_specification">
                    <Typography variant="subtitle2" className="subtitleStyles">
                      CPU Specification
                    </Typography>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Core Count</Form.Label>
                        <Form.Control
                          type="number"
                          name="core_count"
                          value={SoC.CPU.core_count}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Thread Count</Form.Label>
                        <Form.Control
                          type="number"
                          name="thread_count"
                          value={SoC.CPU.thread_count}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Base Frequency</Form.Label>
                        <Form.Control
                          type="text"
                          name="base_frequency"
                          value={SoC.CPU.base_frequency + " MHz"}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Turbo Frequency</Form.Label>
                        <Form.Control
                          type="text"
                          name="turbo_frequency"
                          value={SoC.CPU.turbo_frequency + " MHz"}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>AVX2</Form.Label>
                        <Form.Check
                          type="radio"
                          label="false"
                          name="avx2"
                          checked={SoC.CPU.AVX2 === "FALSE"}
                        />
                        <Form.Check
                          type="radio"
                          label="true"
                          name="avx2"
                          checked={SoC.CPU.AVX2 === "TRUE"}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>AVX-512</Form.Label>
                        <Form.Check
                          type="radio"
                          label="false"
                          name="avx512"
                          checked={SoC.CPU.AVX_512 === "FALSE"}
                        />
                        <Form.Check
                          type="radio"
                          label="true"
                          name="avx512"
                          checked={SoC.CPU.AVX_512 === "TRUE"}
                        />
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>VNNI</Form.Label>
                        <Form.Check
                          type="radio"
                          label="false"
                          name="VNNI"
                          checked={SoC.CPU.VNNI === "FALSE"}
                        />
                        <Form.Check
                          type="radio"
                          label="true"
                          name="VNNI"
                          checked={SoC.CPU.VNNI === "TRUE"}
                        />
                      </Form.Row>
                    </Form.Group>
                  </Grid>
                  <Grid item xs={3} id="gpu_specification">
                    <Typography variant="subtitle2" className="subtitleStyles">
                      GPU Specification
                    </Typography>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Generation</Form.Label>
                        <Form.Control
                          type="text"
                          name="generation"
                          value={SoC.GPU.generation}
                        >
                          {/* <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option> */}
                        </Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Base Frequency</Form.Label>
                        <Form.Control
                          type="text"
                          name="base_frequency"
                          value={SoC.GPU.base_frequency + " MHz"}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Turbo Frequency</Form.Label>
                        <Form.Control
                          type="text"
                          name="turbo_frequency"
                          value={SoC.GPU.turbo_frequency + " MHz"}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>EU Count</Form.Label>
                        <Form.Control
                          type="text"
                          name="EU_count"
                          value={SoC.GPU.EU_count}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>VDBox Count</Form.Label>
                        <Form.Control
                          type="text"
                          name="VDBox_count"
                          value={SoC.GPU.VDBox_count}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>VEBox Count</Form.Label>
                        <Form.Control
                          type="text"
                          name="VEBox_count"
                          value={SoC.GPU.VEBox_count}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                    <Form.Group>
                      <Form.Row>
                        <Form.Label>Display Count</Form.Label>
                        <Form.Control
                          type="number"
                          name="display_count"
                          value={SoC.GPU.display_count}
                        ></Form.Control>
                      </Form.Row>
                    </Form.Group>
                  </Grid>
                  <Grid item xs={3} id="memory_specification">
                    <div id="memory">
                      <Typography
                        variant="subtitle2"
                        className="subtitleStyles"
                      >
                        Memory
                      </Typography>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Channel Number</Form.Label>
                          <Form.Control
                            type="number"
                            name="channel_number"
                            value={SoC.Memory.channel_number}
                          ></Form.Control>
                        </Form.Row>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Maximum Memory Frequency</Form.Label>
                          <Form.Control
                            type="text"
                            name="max_memory_frequency"
                            value={SoC.Memory.max_memory_frequency + " Mbps"}
                          ></Form.Control>
                        </Form.Row>
                      </Form.Group>
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>Maximum Memory Bandwidth</Form.Label>
                          <Form.Control
                            type="text"
                            name="max_memory_bandwidth"
                            value={SoC.Memory.max_memory_bandwidth + " MB/s"}
                          ></Form.Control>
                        </Form.Row>
                      </Form.Group>
                    </div>
                    <div id="tdp">
                      <Form.Group>
                        <Form.Row>
                          <Form.Label>TDP</Form.Label>
                          <Form.Control
                            type="text"
                            name="TDP"
                            value={SoC.CPU.TDP + " w"}
                          ></Form.Control>
                        </Form.Row>
                      </Form.Group>
                    </div>
                  </Grid>
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
