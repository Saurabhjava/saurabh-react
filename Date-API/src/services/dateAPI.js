import axios from "axios";
const DATE_JSON_URL = "https://jsonmock.hackerrank.com/datetime";

export default {
  getAPIResponse: async () => {
    const response = await fetch(DATE_JSON_URL);
    const responseData = await response.json();
    return responseData;
  },
};
