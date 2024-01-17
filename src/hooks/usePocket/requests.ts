import axios, { AxiosInstance } from "axios";
import qs from "qs";

const baseURL = "https://getpocket.com/v3";
const headers = {
  Host: "getpocket.com",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "X-Accept": "application/json",
};

async function fetchHelper(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  const data = await res.json();
  return data;
}

const getPocketRequestHelper = (url: string, body: any) => {
  const data = fetchHelper(url, {
    method: "POST",
    headers,
    body: qs.stringify({
      ...body,
      access_token: "9c887edc-4a0c-0423-1ed8-7ec183",
      consumer_key: "109877-3efffd7a2f7b8407069bf46",
    }),
    next: {
      revalidate: 2000,
    },
  });
  return data;
};

export const getTagLists = async () => {
  const data = await getPocketRequestHelper(`${baseURL}/get/tag`, {
    enable_cors: 1,
    forcetaglist: 1,
    since: 1703228401345,
    taglist: 1,
  });

  return data.tags;
};

export const getPosts = async () => {
  const data = await getPocketRequestHelper(`${baseURL}/get`, {
    detailType: "complete",
    // count: 15,
    sort: "newest",
  });

  return data.list;
};
