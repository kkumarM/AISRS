import * as actionTypes from "../actions/actionTypes";
// import { addNewVAWorkload } from "../actions/workloadActions";

const initialStreamState = {
  Camera: {
    network_bandwidth: 1000,
    Stream1: {
      stream_codec: "H265",
      stream_bitrate: 2048,
      stream_resolution: "1080P",
      stream_fps: 30,
      stream_encrypted: false,
    },
    Stream2: {
      stream_codec: "H265",
      stream_bitrate: 410,
      stream_resolution: "D1",
      stream_fps: 30,
      stream_encrypted: false,
    },
    Stream3: {
      stream_codec: "H264",
      stream_bitrate: 620,
      stream_resolution: "VGA",
      stream_fps: 30,
      stream_encrypted: false,
    },
  },
};

const initialStorageState = {
  Storage: {
    stream_id: 1,
    stream_channel: 64,
    RAID: true,
    RAID_level: 5,
    disk_no: 8,
    disk_speed: 7200,
    storage_encryption: false,
  },
};

const initialDisplayState = {
  Display: {
    display_number: 3,
    Display1: {
      screen_id: 1,
      stream_id: 2,
      stream_channel: 16,
      local_stream: false,
      share_stream: true,
      encode_screen: false,
    },
    Display2: {
      screen_id: 2,
      stream_id: 2,
      stream_channel: 16,
      local_stream: false,
      share_stream: true,
      encode_screen: false,
    },
    Display3: {
      screen_id: 5,
      stream_id: 2,
      stream_channel: 16,
      local_stream: false,
      share_stream: true,
      encode_screen: false,
    },
  },
};

const initialForwardingState = {
  Forwarding: {
    network_bandwidth: 1000,
    stream_channel: 2,
    Channel1: {
      bitrate: 4096,
      fps: 30,
      stream_encrypted: false,
    },
    Channel2: {
      bitrate: 4096,
      fps: 30,
      stream_encrypted: false,
    },
  },
};

const initialTranscodeState = {
  Transcode: {
    transcode_number: 2,
    Transcode1: {
      display_id: 1,
      Encoding: {
        codec: "H264",
        resolution: "1080p",
        quality: "Medium",
        bitrate: 4096,
        fps: 30,
      },
    },
    Transcode2: {
      display_id: 1,
      Encoding: {
        codec: "H264",
        resolution: "1080p",
        quality: "Medium",
        bitrate: 4096,
        fps: 30,
      },
    },
  },
};

const initialVAWorkloadState = {
  VA_workload: {
    Workload1: {
      workload_type: "Video Structuring",
      workload_name: "Video structuring_1",
      detect_fps: 10,
      detect_NN: "Tiny_Yolo_V2",
      object_number: 5,
      classification_number: 2,
      classification_NN1: "Resnet50",
      classification_NN2: "InceptionV2",
    },
    Workload2: {
      workload_type: "Video Structuring",
      workload_name: "Video structuring_2",
      detect_fps: 15,
      detect_NN: "Tiny_Yolo_V2",
      object_number: 10,
      classification_number: 2,
      classification_NN1: "Resnet50",
      classification_NN2: "InceptionV2",
    },
    Workload3: {
      workload_type: "Video Structuring",
      workload_name: "VA2_2",
      detect_fps: 10,
      detect_NN: "D_NN_Name1",
      object_number: 5,
      classification_number: 2,
      classification_NN1: "C_NN_Name1",
      classification_NN2: "C_NN_Name2",
    },
  },
};

const initialPipelineState = {
  Inference: {
    Inference1: {
      workload_id: 2,
      stream_id: 2,
      stream_channel: 2,
      local_stream: false,
      share_stream: true,
      inference_HW: "VPU",
    },
    Inference2: {
      workload_id: 1,
      stream_id: 2,
      stream_channel: 2,
      local_stream: false,
      share_stream: true,
      inference_HW: "iGPU",
    },
  },
};

const initialFeatureMatchingState = {
  Feature_matching: {
    database: 200,
    dimension: 256,
    data_type: "int8",
    batch_size: 16,
    hardware: "iCPU",
  },
};
export function streamParameters(state = initialStreamState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function storageParameters(state = initialStorageState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function forwardingParameters(state = initialForwardingState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function displayWorkloadParameters(state = initialDisplayState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function transcodeParameters(state = initialTranscodeState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function va_workloadParameters(state = initialVAWorkloadState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_VA_WORLOAD: {
      return {
        ...state,
        VA_workload: Object.assign(state.VA_workload, action.newVAWorkload),
      };
    }
    case actionTypes.EDIT_WORKLOAD_ITEM:
      console.log(
        action.payload.workloadObj,
        action.payload.workloadName,
        " in rducer"
      );
      return {
        ...state,
        VA_workload: Object.keys(state.VA_workload).reduce((acc, key) => {
          if (key === action.payload.workloadName) {
            return { ...acc, [key]: action.payload.workloadObj };
          } else {
            return { ...acc, [key]: state.VA_workload[key] };
          }
        }, {}),
      };
    case actionTypes.DELETE_WORKLOAD_ITEM:
      return {
        ...state,
        VA_workload: Object.keys(state.VA_workload).reduce((acc, key) => {
          if (key !== action.workloadName) {
            return { ...acc, [key]: state.VA_workload[key] };
          }
          return acc;
        }, {}),
      };
    default:
      return state;
  }
}

export function pipelineParameters(state = initialPipelineState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function featureMatchingParameters(
  state = initialFeatureMatchingState,
  action
) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    // return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}
