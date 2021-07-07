import axios from "axios";

const url = "https://apis.tracker.delivery/carriers";

export const deliverDataParsing = async (id?: string, number?: string) => {
  try {
    const data = await axios.get(`${url}/${id}/tracks/${number}`);
    console.log(number);
    console.log(data);
    const parsing = {
      time: [{}],
      location: [{}],
      description: [{}],
      state: "",
    };

    const progress = data.data.progresses;
    for (const keys in progress) {
      const key: number = Number(keys) * 1;
      parsing.time[key] = progress[key].time;
      parsing.location[key] = progress[key].location.name;
      parsing.description[key] = progress[key].description;
      console.log(keys);
    }

    parsing.state = data.data.state.text;

    console.log(parsing);
    return parsing;
  } catch (e) {
    console.log(e);
  }
};

export const deliveryInfo = async () => {
  try {
    const data = await axios.get(`${url}`);
    const parsing = {
      name: [{}],
      code: [{}],
    };

    // console.log(data);

    for (const keys in data.data) {
      const key: number = Number(keys) * 1;
      parsing.name[key] = data.data[key].name;
      parsing.code[key] = data.data[key].id;
    }

    return parsing;
  } catch (e) {}
};
