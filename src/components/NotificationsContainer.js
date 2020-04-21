import React from "react";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Notifications = (props) => {
  let notifications;
console.log(props.type, props.msg, "hi")
  switch (props.type) {
    case "info":
      notifications = NotificationManager.info("Info message");
      break;
    case "success":
      notifications = NotificationManager.success("Success!!" + props.msg);
      break;
    case "error":
      notifications = NotificationManager.error(
        "Error message",
        "Click me!",
        5000,
        () => {
          alert("callback");
        }
      );
      break;
  }

  return (<>{notifications}<NotificationContainer/></>);
};

export default Notifications;
