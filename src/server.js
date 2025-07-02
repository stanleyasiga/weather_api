import axios from "axios";
import { createClient } from "redis";
import "dotenv/config";

const getWeatherDataApi = async () => {
  const cityCode = process.env.CITY_CODE;
  const apiKey = process.env.API_KEY;
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityCode}?key=${apiKey}`
    );
    // default connection port (6379)
    const client = await createClient({
      username: "default",
      password: "PriMb8lOycPonEGROMvdGFT2cjHm48Ll",
      socket: {
        host: process.env.REDIS_CONNECTION,
        port: 16267,
      },
    })
      .on("error", (err) => console.log("Redis client error", err))
      .connect();
    if (client.isReady) {
      await client.set(cityCode, response?.data?.resolvedAddress);
    }
  } catch (error) {
    console.log(`oops!!! server error : ${error}`);
  }
};

getWeatherDataApi();

//implement rate limiting with express js
