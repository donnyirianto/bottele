import * as controller from "./modules/dataharian/controller.js";

(async () => {
  const data = await controller.dataHarian();
  console.log(data);
})();
