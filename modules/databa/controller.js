/* eslint-disable import/prefer-default-export */
import * as Models from "./model.js";

const dataBa = async () => {
  try {
    const data = await Models.dataBa();
    return data;
  } catch (e) {
    return "Error";
  }
};

export { dataBa };
