import React, { useEffect } from "react";

const PushExampleContainer = () => {
  useEffect(() => {
    Notification.requestPermission().then((status) => {
      console.log("Notification 상태", status);

      if (status === "denied") {
        alert("Notification 거부됨");
      } else if (navigator.serviceWorker) {
        console.log(process.env.PublicKey);
        window.addEventListener("load", function () {
          navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((registration) => {
              const subscriptionOption = {
                userVisibleOnly: true,
                applicationServerKey: process.env.PublicKey,
              };

              return registration.pushManager.subscribe(subscriptionOption);
            })
            .then((pushSubscription) => {
              console.log(pushSubscription);
              //   postSubscription(pushSubscription);
            });
        });
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
