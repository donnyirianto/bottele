/* eslint-disable import/prefer-default-export */
import * as Models from "./model.js";

const dataBa = async (kdcab) => {
  try {
    const data = await Models.dataBa(kdcab);
    return data;
  } catch (e) {
    return "Error";
  }
};

export { dataBa };
