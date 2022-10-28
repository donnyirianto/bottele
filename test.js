// import * as controller from "./modules/dataharian/controller.js";
import * as Controllers from "./modules/index.js";

(async () => {
  const pesan = await Controllers.dataBaAktif("REG4");
  console.log(
    `Berikut Reminder BA Aktif Hingga Hari ini: \n ${pesan.join("\n")}`
  );
})();
