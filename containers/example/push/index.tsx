import React, { useEffect } from "react";

const PushExampleContainer = () => {
  useEffect(() => {
    Notification.requestPermission().then((status) => {
      console.log("Notification 상태", status);

      if (status === "denied") {
        alert("Notification 거부됨");
      }
    });
  }, []);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default PushExampleContainer;
