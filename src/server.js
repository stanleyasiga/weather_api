import axios from "axios";
import { createClient } from "redis";

const getWeatherDataApi = async () => {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kampala?key=BY6KU2J88B3YDGFWWRULG678Z`
    );

    // default connection port (6379)
    const client = await createClient({
      url: "redis-16267.c80.us-east-1-2.ec2.redns.redis-cloud.com:16267",
    })
      .on("error", (err) => console.log("Redis client error", err))
      .connect();

    // use client.isReady or client.isOpen
    if (client?.isReady()) {
      console.log("connected");
      await client.set("key", "value");
    }
    client.destroy();
    // console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
};

getWeatherDataApi();
