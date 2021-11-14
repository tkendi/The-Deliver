import React, { useEffect } from "react";
import { PublicKey } from "./constants";

const PushExampleContainer = () => {
  const postSubscription = (Subscription: PushSubscription) => {
    const subscription = JSON.stringify({
      subscription: Subscription.toJSON(),
    });

    fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: subscription,
    }).then(function (data) {
      console.log(data);
    });
  };

  useEffect(() => {
    Notification.requestPermission().then((status) => {
      console.log("Notification 상태", status);

      if (status === "denied") {
        alert("Notification 거부됨");
      } else if (navigator.serviceWorker) {
        window.addEventListener("load", function () {
          navigator.serviceWorker
            .register("./serviceWorker.js")
            .then((registration) => {
              const subscriptionOption = {
                userVisibleOnly: true,
                applicationServerKey: PublicKey,
              };

              return registration.pushManager.subscribe(subscriptionOption);
            })
            .then((pushSubscription) => {
              //   console.log(pushSubscription);
              postSubscription(pushSubscription);
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
