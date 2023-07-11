const db = require('./db');
const helper = require('../helper');

const config = require('../config');

/* Renvoie la liste des tous les utilisateurs */
async function getUsers(){
  const rows = await db.query(
    `SELECT * FROM users`
    );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Renvoie un utilisateur */
async function getUser(user){
  const rows = await db.query(
    `SELECT * from users WHERE Email="${(await user.email.encrypt())}" and Password="${user.password}"`
  );
  const data = helper.emptyOrRows(rows);
  
  return {
      data
    }
}

/* Créer un utilisateur */
async function createUser(user){
  const result = await db.query(
    `INSERT INTO users (id, name, email, password)
    VALUES (8, '${user.name}', '${await user.email.encrypt()}', '${user.password}');`
  )

  let message = 'Error in creating user';
  
  if (result.affectedRows) {
    message = 'User created successfully';
  }

  return {message};
}

/* Edite un utilisateur */
async function editUser(user){
  const result = await db.query(
    `UPDATE users SET name="${user.name}", email="${user.email}", password="${user.password}" WHERE id=${user.id}`
  );

  let message = 'Error in updating user';

  if (result.affectedRows) {
    message = 'User updated successfully';
  }

  return {message};
}

/* Supprime un utilisateur */
async function deleteUser(user){
  const result = db.query(
    `DELETE FROM users WHERE id = ${user.id}`
  )

  let message = 'Error in deleting user';

  if (result.affectedRows) {
    message = 'User deleted successfully';
  }

  return {message};
}


module.exports = {
    getUsers,
    getUser,
    createUser,
    editUser,
    deleteUser
}