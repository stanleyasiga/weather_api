const axios = require("axios");

const getWeatherDataApi = async () => {
  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kampala?key=BY6KU2J88B3YDGFWWRULG678Z`
    );
    console.log(response?.data);
  } catch (error) {
    console.log(error);
  }
};

getWeatherDataApi();
