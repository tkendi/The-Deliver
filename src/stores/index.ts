import { makeAutoObservable } from "mobx";
import { deliverDataParsing } from "../lib/api";
import { toJS } from "mobx";

// interface deliverProp {
//     deliverName: string;
//     code: string;
//     trackingNumber: string;
// }

class DeliverTracking {
  deliver = {
    deliverName: "",
    code: "",
    trackingName: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  init = async () => {
    console.log(toJS(this.deliver));
    await deliverDataParsing(
      toJS(this.deliver).deliverName,
      this.deliver.code,
      this.deliver.trackingName
    ).then((res) => {
      console.log("Data Parsing Log", res);
    });
  };
}

const DeliverTrackingStore = new DeliverTracking();

export default DeliverTrackingStore;

//638029521533
