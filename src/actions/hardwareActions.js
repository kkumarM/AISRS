import axios from "axios";
import * as actionTypes from "./actionTypes";

export function handleScreenChange(temp, screenName) {
  return {
    type: actionTypes.SET_SCREEN_VALUES,
    payload: {
      temp,
      screenName,
    },
  };
}

export const fetchProcessorRecord = (series, brand, processor_number) => {
  console.log(series, brand, processor_number);
  const url =
    actionTypes.BASE_URL +
    "processor_list?series=" +
    series +
    "&brand=" +
    brand +
    "&processor_number=" +
    processor_number;
  return (dispatch) => {
    axios
      .get(url)
      .then((response) => {
        console.log(response, "success response");
        //response dispatch to reducer

        if (response.data && response.status === 200) {
          return function (dispatch) {
            dispatch({
              type: actionTypes.SHOW_MORE_DETAILS_SPECIFICATION,
              payload: true,
            });
            dispatch({
              type: actionTypes.PROCESSOR_LIST_RECORD,
              payload: response.data,
            });
          }
        }
      })
      .catch((err) => {
        console.log(err, "Error response");
      });
  };
};

export const onSubmitHandler = (hardwareConfigObj, workloadConfigObj) => {
  let finalObj = {
    hardwareConfigObj,
    workloadConfigObj,
  };
  console.log(finalObj, "final obj");
   return (dispatch) => {
     axios({
       method: "POST",
       url: actionTypes.BASE_URL+"simulation_csv",
       data: { finalObj: finalObj },
       // responseType: "blob",
     })
       .then((response) => {
         // response dispatch to reducer
         console.log(response, "success response");
         if (response.status === 200) {
           const url = window.URL.createObjectURL(new Blob([response.data]));
           const link = document.createElement("a");
           link.href = url;
           link.setAttribute("download", "platform_example.csv");
           document.body.appendChild(link);
           link.click();
         }
       })
       .catch((error) => {
         console.log(error, "error response");
       });
   };

  //return (dispatch) => {
  //  fetch(actionTypes.BASE_URL + "simulation_csv", {
  //    method: "POST",
  //    body: { finalObj: finalObj },
  //    // responseType: "blob",
  //  }).then(
  //    (response) => {
  //      // response dispatch to reducer
  //      console.log(response, "success response");
  //      if (response.status === 200) {
  //        const url = window.URL.createObjectURL(new Blob([response.data]));
  //        const link = document.createElement("a");
  //        link.href = url;
  //        link.setAttribute("download", "platform_example.csv");
  //        document.body.appendChild(link);
  //        link.click();
  //      }
  //    },
  //    (error) => {
  //      console.log(error, "error response");
  //    }
  //  );
  //};
};
