import * as actionTypes from "./actionTypes";

export const addNewVAWorkload = (newWorkload) => {
  return {
    type: actionTypes.ADD_NEW_VA_WORLOAD,
    newVAWorkload: newWorkload,
  };
};

export const addNewWorkload = (newVAWorkload, count) => {
  let key = `Workload${count}`;
  let newVAWorkloadObj = {
    [key]: newVAWorkload,
  };

  return (dispatch) => {
    // axios call
    dispatch(addNewVAWorkload(newVAWorkloadObj));
  };
};

export const editWorkload = (workloadObj, workloadName) => {
  // let workloadObj = {
  //   [key]:updatedWorkload
  // }
  return {
    type: actionTypes.EDIT_WORKLOAD_ITEM,
    payload: { workloadObj, workloadName },
  };
};
export const deleteWorkload = (workloadName) => {
  return {
    type: actionTypes.DELETE_WORKLOAD_ITEM,
    workloadName,
  };
};
