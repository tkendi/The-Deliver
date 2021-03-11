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

  parsingDeliverDescription: any;
  parsingDeliverLocation: any;
  state: string | undefined;
  parsingDeliverTime: any;
  parsingDeliverData: any

  constructor() {
    makeAutoObservable(this);
  }

  init = async () => {
    console.log(toJS(this.deliver));
    deliverDataParsing(
      toJS(this.deliver).deliverName,
      this.deliver.code,
      this.deliver.trackingName
    ).then((res) => {
      console.log(res);
      this.parsingDeliverDescription = res?.description;
      this.parsingDeliverLocation = res?.location;
      this.parsingDeliverTime = res?.time;
      this.state = res?.state;
      this.parsingDeliverData = res
    });
  };
}

const DeliverTrackingStore = new DeliverTracking();

export default DeliverTrackingStore;
