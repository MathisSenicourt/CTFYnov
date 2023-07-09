const db = require('./db');
const helper = require('../helper');

const config = require('../config');

/* Renvoie un utilisateur */
async function getFlag(box){
  const rows = await db.query(
    `SELECT * from boxs WHERE title="${(box.title)}" and correctFlag="${box.flag}"`
  );
  const data = helper.emptyOrRows(rows);
  
  return {
      data
    }
}


module.exports = {
  getFlag,
}