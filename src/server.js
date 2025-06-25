const http = require("http");

const PORT = process.env.port || 3000;

const axios = require("axios");

const sendJsonResponse = (res, statusCode, data) => {
  res.writeHead(statusCode, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

const sendErrorResponse = (res, statusCode, message) => {
  res.writeHead(statusCode, { "Content-Type": "text/plain" });
  res.end(message);
};

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/api/weather" && method === "GET") {
    sendJsonResponse(res, "200", {
      status: "success",
      results: products.length,
      data: {},
    });
  } else {
    sendErrorResponse(res, "404", "the api endpoint does not exist");
  }
});

server.listen(PORT, () => {
  console.log(``);
});

// axios.get(
//   `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/`,
//   {}
// );

const weatherResponse = () => {};
