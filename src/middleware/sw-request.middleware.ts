const axios = require("axios").default;
import { getCache, putCache } from "./cache.middleware";
import * as util from "util";

export const requestResourceSWAPI = async (resource: string, id?: number) => {
  try {
    const requestURL =
      process.env.SWAPI_URL + resource + (id ? "/" + id.toString() : "");
    let cache = await getCache(requestURL);
    if (cache === null) {
      const response = await axios.get(requestURL);
      await putCache(requestURL, JSON.stringify(response.data));
      return response.data;
    }
    return JSON.parse(cache);
  } catch (err) {
    return new Error(err);
  }
};

export const requestUrlSwapi = async (requestURL: string) => {
  try {
    const cache = await getCache(requestURL);

    if (cache === null) {
      const response = await axios.get(requestURL);
      await putCache(requestURL, JSON.stringify(response.data));
      return response.data;
    }
    return JSON.parse(cache);
  } catch (err) {
    return new Error(err);
  }
};
