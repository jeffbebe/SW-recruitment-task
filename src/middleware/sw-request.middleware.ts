const axios = require("axios").default;

export const requestResourceSWAPI = async (resource: string, id?: string) => {
  try {
    const requestURL = process.env.SWAPI_URL + resource + (id ? "/" + id : "");
    const response = await axios.get(requestURL);
    return response.data;
  } catch (err) {
    return new Error("Could not get a response");
  }
};

export const requestUrlSwapi = async (requestURL: string) => {
  try {
    const response = await axios.get(requestURL);
    return response.data;
  } catch (err) {
    return new Error("Could not get a response");
  }
};
