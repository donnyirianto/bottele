import { query } from "../../helpers/db.js";

const dataBa = async (kdcab) => {
  try {
    const data = await query(`
    select * 
    from m_ticket_query a
    left join m_branch b on a.kdcab = b.id
    where 
    a.reminder ='1'
    and a.tanggal_start >= curdate() 
    and curdate() <= tanggal_end
    and a.tiket_status = '3'
    and b.branch_code = '${kdcab}';
    `);

    return data;
  } catch (e) {
    return "Error";
  }
};

export { dataBa };
