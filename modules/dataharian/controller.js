/* eslint-disable import/prefer-default-export */
import * as Models from "./model.js";

const dataHarian = async () => {
  try {
    const data = await Models.dataHarian();
    return data;
  } catch (e) {
    return "Error";
  }
};

export { dataHarian };
