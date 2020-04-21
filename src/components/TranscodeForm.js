import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Form } from "react-bootstrap";

const TranscodeForm = (props) => {
  const [displayId, setDisplayId] = React.useState();

  const handleDisplayId = (e) => {
    setDisplayId(e.target.value);
  };
  return (
    <>
      <Grid item xs={4} id={props.transcodeId} key={props.index}>
        {props.index === 0 && <div id="disabletranscode"></div>}
        <Typography variant="subtitle2" className="subtitleStyles">
          {props.index === 0
            ? `Transcode ${props.index + 1}`
            : `Transcode ${props.index}`}
        </Typography>
        <Form.Group>
          <Form.Row>
            <Form.Label>Input</Form.Label>
            <Form.Control
              as="select"
              value={displayId}
              name="display_id"
              onChange={handleDisplayId}
            >
              <option value="Display1">Display1</option>
              <option value="Virtual Display">Virtual Display</option>
            </Form.Control>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Encoding Format</Form.Label>
            <Form.Control
              as="select"
              name="codec"
              value={props.transcode["Transcode" + props.index].Encoding.codec}
            >
              <option value="H264">H264</option>
              <option value="H265">H265</option>
            </Form.Control>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Output Resolution</Form.Label>
            <Form.Control
              as="select"
              name="resolution"
              value={
                props.transcode["Transcode" + props.index].Encoding.resolution
              }
            >
              <option value="1080P">1080P</option>
              <option value="720P">720P</option>
              <option value="4K">4K</option>
              <option value="8K">8K</option>
            </Form.Control>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Output FPS</Form.Label>
            <Form.Control
              type="text"
              name="fps"
              value={props.transcode["Transcode" + props.index].Encoding.fps}
            />
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Encode Quality</Form.Label>
            <Form.Control
              as="select"
              name="quality"
              value={
                props.transcode["Transcode" + props.index].Encoding.quality
              }
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Form.Control>
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Output Bitrate</Form.Label>
            <Form.Control
              type="text"
              name="bitrate"
              value={
                props.transcode["Transcode" + props.index].Encoding.bitrate
              }
            />
          </Form.Row>
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Form.Label>Encrypted</Form.Label>
            <Form.Check
              type="radio"
              label="false"
              name={`channel${props.index}_stream_encrypted`}
              checked={
                props.forwarding["Channel" + props.index].stream_encrypted ===
                false
              }
            />
            <Form.Check
              type="radio"
              label="true"
              name={`channel${props.index}_stream_encrypted`}
              checked={
                props.forwarding["Channel" + props.index].stream_encrypted ===
                true
              }
            />
          </Form.Row>
        </Form.Group>

        {displayId === "Virtual Display" && (
          <>
            <Typography variant="subtitle2" className="subtitleStyles">
              Virtual Display
            </Typography>
            <br />
            <Form.Group>
              <Form.Row>
                <Form.Label>Resolution &amp; Refresh Rate</Form.Label>
                <Form.Control as="select">
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
                <Form.Control as="select">
                  <option value="16">16</option>
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
                <Form.Label>Local Stream</Form.Label>
                <Form.Check type="radio" label="false" name="local_Stream" />
                <Form.Check type="radio" label="true" name="local_Stream" />
              </Form.Row>
            </Form.Group>
          </>
        )}
      </Grid>
    </>
  );
};

export default TranscodeForm;
