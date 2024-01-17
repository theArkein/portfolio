"use client";
import React, { useState } from "react";
import axios from "axios";
import { getTagLists } from "./requests";

export const baseURL = "https://getpocket.com/v3/get";

function usePocket() {
  const instance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF8",
      Accept: "application/json",
    },
  });

  const [tags, setTags] = useState<string[]>([]);

  // getTagLists(instance)
  //   .then((data) => {
  //     console.log(tags);
  //     setTags([...data]);
  //   })
  //   .catch((e) => console.log(e));

  return { tags };
}

export default usePocket;
