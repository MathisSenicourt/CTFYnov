const db = require('./db');
const helper = require('../helper');

const config = require('../config');

/* Renvoie la liste des tous les posts */
async function getPosts(){
  const rows = await db.query(
    `SELECT * FROM posts`
    );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Renvoie un post en fonction des utilisateurs */
async function getPost(post){
  const rows = await db.query(
    `SELECT * from posts WHERE user_id="${(post.user_id)}"`
  );

  const data = helper.emptyOrRows(rows);

  return {
      data
    }
}

/* Créer un post */
async function createPost(post){
  const currentDate = new Date()
  const result = await db.query(
    `INSERT INTO posts (id, title, content, created_at, user_id)
    VALUES (4, '${post.title}', '${post.content}', '${currentDate}' , '${post.user_id}');`
  )

  let message = 'Error in creating Post';
  
  if (result.affectedRows) {
    message = 'Post created successfully';
  }

  return {message};
}

/* Edite un post */
async function editPost(post){
  const result = await db.query(
    `UPDATE posts SET title="${post.title}", content="${post.content}" WHERE id=${post.id}`
  );

  let message = 'Error in updating post';

  if (result.affectedRows) {
    message = 'Post updated successfully';
  }

  return {message};
}

/* Supprime un post */
async function deletePost(post){
  const result = db.query(
    `DELETE FROM posts WHERE id = ${post.id}`
  )

  let message = 'Error in deleting post';

  if (result.affectedRows) {
    message = 'Post deleted successfully';
  }

  return {message};
}


module.exports = {
    getPosts,
    getPost,
    createPost,
    editPost,
    deletePost
}