const db = require('./db');
const helper = require('../helper');

const config = require('../config');

/* Renvoie la liste des tous les comments */
async function getComments(){
  const rows = await db.query(
    `SELECT * FROM comments`
    );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Renvoie un post en fonction des posts */
async function getComment(comment){
  const rows = await db.query(
    `SELECT * from comments WHERE user_id="${(comment.post_id)}"`
  );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Créer un comment */
async function createComment(comment){
  const currentDate = new Date()
  const result = await db.query(
    `INSERT INTO comments (id, content, created_at, user_id, post_id)
    VALUES (3, '${comment.content}', '${Date}', '${comment.user_id}' , '${comment.post_id}');`
  )

  let message = 'Error in creating comment';
  
  if (result.affectedRows) {
    message = 'Comment created successfully';
  }

  return {message};
}

/* Edite un post */
async function editComment(comment){
  const result = await db.query(
    `UPDATE comments SET comment="${comment.comment}" WHERE id=${comment.id}`
  );

  let message = 'Error in updating comment';

  if (result.affectedRows) {
    message = 'Post updated successfully';
  }

  return {message};
}

/* Supprime un post */
async function deleteComment(comment){
  const result = db.query(
    `DELETE FROM comments WHERE id = ${comment.id}`
  )

  let message = 'Error in deleting post';

  if (result.affectedRows) {
    message = 'Post deleted successfully';
  }

  return {message};
}


module.exports = {
    getComments,
    getComment,
    createComment,
    editComment,
    deleteComment
}