import { query } from "../../helpers/db.js";

const dataBa = async () => {
  try {
    const data = await query(`SELECT 
      *
      FROM m_ticket_query WHERE end_repeat >=CURDATE() 
      AND \`repeat\`='1';`);

    return data;
  } catch (e) {
    return "Error";
  }
};

export { dataBa };
