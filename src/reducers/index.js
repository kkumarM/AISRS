import { combineReducers } from "redux";
import { screenParameters, hardwareParameters, moreDetailsSpecification } from "./hardwareReducer";
import {
  streamParameters,
  storageParameters,
  forwardingParameters,
  featureMatchingParameters,
  displayWorkloadParameters,
  transcodeParameters,
  pipelineParameters,
  va_workloadParameters
} from "./workloadReducer";

const rootReducer = combineReducers({
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
});
export default rootReducer;
