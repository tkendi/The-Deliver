import React, { useEffect } from "react";

const PushExampleContainer = () => {
  useEffect(() => {
    Notification.requestPermission().then((status) => {
      console.log("Notification 상태", status);

      if (status === "denied") {
        alert("Notification 거부됨");
      } else if (navigator.serviceWorker) {
        window.addEventListener("load", function () {
          navigator.serviceWorker.register("/serviceWorker.js");

          navigator.serviceWorker.register("/serviceWorker.js"); // serviceworker 등록
          //   .then(function (registration) {
          //     const subscribeOptions = {
          //       userVisibleOnly: true,
          //       // push subscription이 유저에게 항상 보이는지 여부. 알림을 숨기는 등 작업이 들어가지는에 대한 여부인데, 크롬에서는 true 밖에 지원안한다.
          //       // https://developers.google.com/web/fundamentals/push-notifications/subscribing-a-user
          //       applicationServerKey: process.env.PublicKey, // 발급받은 vapid public key
          //     };

          //     return registration.pushManager.subscribe(subscribeOptions);
          //   })
          //   .then(function (pushSubscription) {
          //     // subscription 정보를 저장할 서버로 보낸다.
          //     postSubscription(pushSubscription);
          //   });
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
