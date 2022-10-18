// import * as controller from "./modules/dataharian/controller.js";
import * as Controllers from "./modules/index.js";

(async () => {
  const data = await Controllers.dataBa("REG4");
  console.log(data);
})();
