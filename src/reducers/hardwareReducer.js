import * as actionTypes from "../actions/actionTypes";

const initialScreenState = {
  Screen1: {
    screen_resolution_refresh: "4k@30Hz",
    screen_layout: 16,
    dummy_screen: false,
  },
  Screen2: {
    screen_resolution_refresh: "4k@30Hz",
    screen_layout: 16,
    dummy_screen: false,
  },
  Screen3: {
    screen_resolution_refresh: "4k@30Hz",
    screen_layout: 16,
    dummy_screen: false,
  },
  Screen4: {
    screen_resolution_refresh: "4k@30Hz",
    screen_layout: 16,
    dummy_screen: false,
  },
  Screen5: {
    screen_resolution_refresh: "4k@30Hz",
    screen_layout: 16,
    dummy_screen: true,
  },
};

const initialHardwareState = {
  SoC: {
    series: "Core S",
    brand: "i7",
    processor_number: "i7-8700K",
    CPU: {
      generation: 8,
      core_count: 6,
      thread_count: 12,
      base_frequency: 3700,
      turbo_frequency: 4700,
      AVX2: "TRUE",
      AVX_512: "FALSE",
      VNNI: "FALSE",
      TDP: 95,
    },
    Memory: {
      channel_number: 2,
      max_memory_frequency: 2666,
      max_memory_bandwidth: 41600,
    },
    GPU: {
      generation: 9,
      base_frequency: 350,
      turbo_frequency: 1200,
      EU_count: 24,
      VDBox_count: 1,
      VEBox_count: 1,
      display_count: 3,
    },
  },
  Accelerator: {
    vpu: "KBM 3700VE",
    vpu_count: 3,
  },
};

const initialLoadedState = {
  loaded: false,
};

const initialMoreHardwareParameters = {
  showMoreDetailsSpecification: false,
};

export function screenParameters(state = initialScreenState, action) {
  switch (action.type) {
    case "SET_SCREEN_VALUES":
      return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function hardwareParameters(state = initialHardwareState, action) {

  switch (action.type) {
    case actionTypes.PROCESSOR_LIST_RECORD:
      return { ...state, SoC: action.payload};
    default:
      return state;
  }
}

export function loadedState(state = initialLoadedState, action) {
  switch (action.type) {
    // case "SET_SCREEN_VALUES":
    //   return { ...state, [action.payload.screenName]: action.payload.temp };
    default:
      return state;
  }
}

export function moreDetailsSpecification(
  state = initialMoreHardwareParameters,
  action
) {
  switch (action.type) {
    case actionTypes.SHOW_MORE_DETAILS_SPECIFICATION:
      return { ...state, showMoreDetailsSpecification: action.payload };
    default:
      return state;
  }
}
