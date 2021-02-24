import axios from "axios";

const url = "https://apis.tracker.delivery/carriers";

export const deliverDataParsing = async (name?: string, number?: string) => {
  try {
    const data = await axios.get(`${url}/${name}/tracks/${number}`);
    console.log(name, number);
    console.log(data);
    const parsing = {
      time: [],
      location: [],
      description: [],
      state: "",
    };

    const progress = data.data.progresses;
    for (const keys in progress) {
      // parsing.time[keys] = progress[keys].time;
      // parsing.location[keys] = progress[keys].location.name;
      // parsing.description[keys] = progress[keys].description;
      console.log(keys);
    }

    parsing.state = data.data.state.text;

    console.log(parsing);
    return parsing;
  } catch (e) {}
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
