const db = require('./db');
const helper = require('../helper');

const config = require('../config');

/* Renvoie la liste des tous les posts */
async function getChatPosts(){
  const rows = await db.query(
    `SELECT * FROM chatPosts`
    );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Renvoie un post en fonction des utilisateurs */
async function getChatPost(post){
  const rows = await db.query(
    `SELECT * FROM chatPosts WHERE user_id="${(post.user_id)}"`
  );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Créer un post */
async function createChatPost(post){
  const currentDate = new Date()
  const result = await db.query(
    `INSERT INTO chatPosts (title, content, created_at, user_id)
    VALUES ('${post.title}', '${post.content}', '${currentDate}' , '${post.user_id}');`
  )

  let message = 'Error in creating Post';
  
  if (result.affectedRows) {
    message = 'Post created successfully';
  }

  return {message};
}

/* Edite un post */
async function editChatPost(post){
  const result = await db.query(
    `UPDATE chatPosts SET title="${post.title}", content="${post.content}" WHERE id=${post.id}`
  );

  let message = 'Error in updating post';

  if (result.affectedRows) {
    message = 'Post updated successfully';
  }

  return {message};
}

/* Supprime un post */
async function deleteChatPost(post){
  const result = db.query(
    `DELETE FROM chatPosts WHERE id = ${post.id}`
  )

  let message = 'Error in deleting post';

  if (result.affectedRows) {
    message = 'Post deleted successfully';
  }

  return {message};
}


module.exports = {
    getChatPosts: getChatPosts,
    getChatPost: getChatPost,
    createChatPost: createChatPost,
    editChatPost: editChatPost,
    deleteChatPost: deleteChatPost
}