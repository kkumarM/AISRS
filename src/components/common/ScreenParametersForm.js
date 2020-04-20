import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
export default class HardWareConfiguration extends Component {
  render() {
    return (
      <>
        <Grid container id="hardwareConfiguration">
          <Grid container id="soc">
            <Grid item xs={12}>
              <p>SoC</p>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Series</Form.Label>
                  <Form.Control as="select">
                    <option value="Xeon E">Xeon E</option>
                    <option value="Core S">Core S</option>
                    <option value="Core H">Core H</option>
                    <option value="Core U">Core U</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control as="select">
                    <option value="i9">i9</option>
                    <option value="i7">i7</option>
                    <option value="i5">Core i5</option>
                    <option value="i3">i3</option>
                    <option value="Pentium">Pentium</option>
                    <option value="Celeron">Celeron</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>Processor Number</Form.Label>
                  <Form.Control as="select">
                    <option value="i7-8700K">i7-8700K</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>TDP</Form.Label>
                  <Form.Control as="select">
                    <option value="95">95</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid container id="cpu">
              <Grid item xs={12}>
                <p>CPU</p>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Generation</Form.Label>
                    <Form.Control as="select">
                      <option value="8">8</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Core Count</Form.Label>
                    <Form.Control as="select">
                      <option value="6">6</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Thread Count</Form.Label>
                    <Form.Control as="select">
                      <option value="12">12</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Base Frequency</Form.Label>
                    <Form.Control as="select">
                      <option value="3700">3700</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Turbo Frequency</Form.Label>
                    <Form.Control as="select">
                      <option value="4700">4700</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>

              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>AVX2</Form.Label>
                    <Form.Check type="checkbox" label="false" />
                    <Form.Check type="checkbox" label="true" />
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>AVX2-512</Form.Label>
                    <Form.Check type="checkbox" label="false" />
                    <Form.Check type="checkbox" label="true" />
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>VNNI</Form.Label>
                    <Form.Check type="checkbox" label="false" />
                    <Form.Check type="checkbox" label="true" />
                  </Form.Row>
                </Form.Group>
              </Grid>
            </Grid>
            <Grid container id="memory">
              <Grid item xs={12}>
                <p>Memory</p>
              </Grid>
              <Grid item xs={3}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Channel Number</Form.Label>
                    <Form.Control as="select">
                      <option value="2">2</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={3}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Maximum Memory Frequency</Form.Label>
                    <Form.Control as="select">
                      <option value="2666">2666</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={3}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Maximum Memory Bandwidth</Form.Label>
                    <Form.Control as="select">
                      <option value="41600">41600</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
            </Grid>
            <Grid container id="gpu">
              <Grid item xs={12}>
                <p>GPU</p>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Generation</Form.Label>
                    <Form.Control as="select">
                      <option value="9">9</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Base Frequency</Form.Label>
                    <Form.Control as="select">
                      <option value="350">350</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Turbo Frequency</Form.Label>
                    <Form.Control as="select">
                      <option value="1200">1200</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>EU Count</Form.Label>
                    <Form.Control as="select">
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="24">24</option>
                      <option value="32">32</option>
                      <option value="64">64</option>
                      <option value="80">80</option>
                      <option value="96">96</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>VDBox Count</Form.Label>
                    <Form.Control as="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>VEBox Count</Form.Label>
                    <Form.Control as="select">
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
              <Grid item xs={2}>
                <Form.Group>
                  <Form.Row>
                    <Form.Label>Display Count</Form.Label>
                    <Form.Control as="select">
                      <option value="3">3</option>
                    </Form.Control>
                  </Form.Row>
                </Form.Group>
              </Grid>
            </Grid>
          </Grid>
          <Grid container id="accelerator">
            <Grid item xs={12}>
              <p>Accelerator</p>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>VPU</Form.Label>
                  <Form.Control as="select">
                    <option value="KBM 3400VE">KBM 3400VE</option>
                    <option value="KBM 3500VE">KBM 3500VE</option>
                    <option value="KBM 3700VE">KBM 3700VE</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
            <Grid item xs={3}>
              <Form.Group>
                <Form.Row>
                  <Form.Label>VPU Count</Form.Label>
                  <Form.Control as="select">
                    <option value="3">3</option>
                  </Form.Control>
                </Form.Row>
              </Form.Group>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}
