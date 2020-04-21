import React, { Component } from "react";
import WorkLoadConfiguration from "./WorkLoadConfiguration";
import HardWareConfiguration from "./HardwareConfiguration";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  Button,
  ExpansionPanelDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Form from "react-bootstrap/Form";
import { connect } from "react-redux";
import * as hardwareActions from "../actions/hardwareActions";
import * as workloadActions from "../actions/workloadActions";
import { bindActionCreators } from "redux";
// import Notifications from "./NotificationsContainer";

class Configuration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,

    };
  }

  handleChange = (panel) => (event, isExpanded) => {
    this.setState({ expanded: isExpanded ? panel : false });
  };

  handleSubmit = () => {
    this.hardwareFinalObject = { ...this.props.hardwareParameters };
    this.workloadFinalObject = {
      ...this.props.streamParameters,
      Screen: { ...this.props.screenParameters },
      ...this.props.storageParameters,
      ...this.props.displayWorkloadParameters,
      ...this.props.transcodeParameters,
      ...this.props.forwardingParameters,
      ...this.props.va_workloadParameters,
      ...this.props.pipelineParameters,      
      ...this.props.featureMatchingParameters,
    };
    this.props.hardwareActions.onSubmitHandler(
      this.hardwareFinalObject,
      this.workloadFinalObject
    );
    
  };
  render() {
    let {
      screenParameters,
      hardwareParameters,
      moreDetailsSpecification,
      streamParameters,
      storageParameters,
      forwardingParameters,
      featureMatchingParameters,
      displayWorkloadParameters,
      transcodeParameters,
      pipelineParameters,
      va_workloadParameters
    } = this.props;


    // console.log(this.props, "props 123");
    return (
      <>
        <Form id="configurationForm">
          <ExpansionPanel
            expanded={this.state.expanded === "panel1"}
            onChange={this.handleChange("panel1")}
            style={{ marginBottom: "20px" }}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography variant="h5" className="accordion-name">
                Hardware Configuration
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{ height: "75vh", overflowY: "scroll" }}
            >
              <HardWareConfiguration
                screenParameters={screenParameters}
                hardwareParameters={hardwareParameters}
                storageParameters={storageParameters}
                cameraNetworkBandwidth={
                  streamParameters.Camera.network_bandwidth
                }
                forwardingNetworkBandwidth={
                  forwardingParameters.Forwarding.network_bandwidth
                }
                handleScreenChange={
                  this.props.hardwareActions.handleScreenChange
                }
                fetchProcessorRecord={this.props.hardwareActions.fetchProcessorRecord}
                moreDetailsSpecification={moreDetailsSpecification}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={this.state.expanded === "panel2"}
            onChange={this.handleChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography variant="h5" className="accordion-name">
                Workload Configuration
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{ height: "75vh", overflowY: "scroll" }}
            >
              <WorkLoadConfiguration
                streamParameters={streamParameters}
                storageParameters={storageParameters}
                forwardingParameters={forwardingParameters}
                featureMatchingParameters={featureMatchingParameters}
                displayWorkloadParameters={displayWorkloadParameters}
                transcodeParameters={transcodeParameters}
                pipelineParameters={pipelineParameters}
                va_workloadParameters={va_workloadParameters}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <div className="btnCenter">
            <Button
              variant="contained"
              // type="submit"
              color="primary"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Form>
        {/* <Notifications type="success" msg="hi"/> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    screenParameters: state.screenParameters,
    hardwareParameters: state.hardwareParameters,
    moreDetailsSpecification:state.moreDetailsSpecification,
    streamParameters: state.streamParameters,
    storageParameters: state.storageParameters,
    forwardingParameters: state.forwardingParameters,
    featureMatchingParameters: state.featureMatchingParameters,
    displayWorkloadParameters: state.displayWorkloadParameters,
    transcodeParameters: state.transcodeParameters,
    pipelineParameters: state.pipelineParameters,
    va_workloadParameters:state.va_workloadParameters
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hardwareActions: bindActionCreators(hardwareActions, dispatch),
    workloadActions: bindActionCreators(workloadActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Configuration);
