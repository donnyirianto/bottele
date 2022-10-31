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

const dataBaAktif = async (kdcab) => {
  try {
    const pesan = [];
    const data = await Models.dataBaAktif(kdcab);
    if (data.length > 0) {
      data.map(async (r) => {
        pesan.push(
          `*No Ticket : ${r.id}*
Tanggal Mulai: ${r.tanggal_start}
Tanggal Akhir: ${r.tanggal_end}
*Keterangan :* _${r.keterangan}_`
        );
      });
    } else {
      pesan.push(`✅ _Tidak ada BA yang Aktif hari ini_`);
    }

    return pesan;
  } catch (e) {
    return "Error";
  }
};

const dataBaNonAktif = async (kdcab) => {
  try {
    const pesan = [];
    const data = await Models.dataBaNonAktif(kdcab);
    if (data.length > 0) {
      data.map(async (r) => {
        pesan.push(
          `*No Ticket : ${r.id}*
Tanggal Mulai: ${r.tanggal_start}
Tanggal Akhir: ${r.tanggal_end}
*Keterangan :* _${r.keterangan}_`
        );
      });
    } else {
      pesan.push(`✅ _Tidak ada BA yang perlu dinonaktifkan hari ini_`);
    }

    return pesan;
  } catch (e) {
    return "Error";
  }
};

export { dataBa, dataBaAktif, dataBaNonAktif };
