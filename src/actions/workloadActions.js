import * as actionTypes from "./actionTypes";

export const addNewVAWorkload = (newWorkload) => {
  return {
    type: actionTypes.ADD_NEW_VA_WORLOAD,
    newVAWorkload: newWorkload,
  };
};

export const addNewWorkload = (newVAWorkload) => {
  return (dispatch) => {
    // axios call
    dispatch(addNewVAWorkload(newVAWorkload));
  };
};

export const deleteWorkload = (workloadName) => {
  return {
    type: actionTypes.DELETE_WORKLOAD_ITEM,
    workloadName,
  };
};
