import { makeAutoObservable } from "mobx";
import { deliverDataParsing } from "../api/deliver";
k
class DeliverTracking {
  parsingDeliverDescription: any;
  parsingDeliverLocation: any;
  state: string | undefined;
  parsingDeliverTime: any;
  parsingDeliverData: any;

  constructor() {
    makeAutoObservable(this);
  }

  init = (code: string, trackingNum: string) => {
    deliverDataParsing(code, trackingNum).then((res) => {
      console.log(res);
      this.parsingDeliverDescription = res?.description;
      this.parsingDeliverLocation = res?.location;
      this.parsingDeliverTime = res?.time;
      this.state = res?.state;
      this.parsingDeliverData = res;
    });
  };
}

const DeliverTrackingStore = new DeliverTracking();

export default DeliverTrackingStore;
