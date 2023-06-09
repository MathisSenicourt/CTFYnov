const express = require('express');
const router = express.Router();
const users = require('../services/user');
const posts = require('../services/chatPost');
const comments = require('../services/chatComment')
const boxs = require("../services/boxs");

/* Route le service 'Users' */
router.get('/getUsers',  async function(req, res, next) {
    try {
      res.json(await users.getUsers());
    } catch (err) {
      console.error(`Error while getting users `, err.message);
      next(err);
    }
  });

router.post('/getUser', async function(req, res, next) {
  try {
    res.json(await users.getUser(req.body));
  } catch (err) {
    console.error(`Error while getting users `, err.message);
    next(err);
  }
});

router.post('/createUser', async function(req, res, next) {
  try {
    res.json(await users.createUser(req.body))
  } catch (err) {
    console.error(`Error while creating users `, err.message);
    next(err);
  }
})

router.put('/updateUser', async function(req, res, next) {
    try {
        res.json(await users.editUser(req.body))
    } catch (err) {
        console.error(`Error while updating users `, err.message);
        next(err);
    }
});

router.delete('/deleteUser', async function(req, res, next) {
    try {
        res.json(await users.deleteUser(req.body))
    } catch (err) {
        console.error(`Error while deleting users `, err.message);
        next(err);
    }
});

/* Route pour le service 'Posts' */
router.get('/getPosts',  async function(req, res, next) {
    try {
      res.json(await posts.getChatPosts());
    } catch (err) {
      console.error(`Error while getting posts `, err.message);
      next(err);
    }
  });

router.get('/getPost', async function(req, res, next) {
  try {
    res.status(200).json(await posts.getChatPost(req.body));
  } catch (err) {
    console.error(`Error while getting posts `, err.message);
    next(err);
  }
});

router.post('/createChatPost', async function(req, res, next) {
  try {
    res.json(await posts.createChatPost(req.body))
  } catch (err) {
    console.error(`Error while creating post `, err.message);
    next(err);
  }
})

router.put('/updateUser', async function(req, res, next) {
    try {
        res.json(await posts.editChatPost(req.body))
    } catch (err) {
        console.error(`Error while updating posts `, err.message);
        next(err);
    }
});

router.delete('/deletePost', async function(req, res, next) {
    try {
        res.json(await posts.deleteChatPost(req.body))
    } catch (err) {
        console.error(`Error while deleting posts `, err.message);
        next(err);
    }
});

/* Route pour le service 'Comment' */
router.get('/getComments',  async function(req, res, next) {
    try {
      res.json(await comments.getComments());
    } catch (err) {
      console.error(`Error while getting comments `, err.message);
      next(err);
    }
  });

router.get('/getComment', async function(req, res, next) {
  try {
    res.status(200).json(await comments.getComment(req.body));
  } catch (err) {
    console.error(`Error while getting comments `, err.message);
    next(err);
  }
});

router.post('/createComment', async function(req, res, next) {
  try {
    res.json(await comments.createComment(req.body))
  } catch (err) {
    console.error(`Error while creating comment `, err.message);
    next(err);
  }
})

router.put('/updateComment', async function(req, res, next) {
    try {
        res.json(await comments.editComment(req.body))
    } catch (err) {
        console.error(`Error while updating comments `, err.message);
        next(err);
    }
});

router.delete('/deleteComment', async function(req, res, next) {
    try {
        res.json(await comments.deleteComment(req.body))
    } catch (err) {
        console.error(`Error while deleting comments `, err.message);
        next(err);
    }
});

router.post('/getFlag', async function(req, res, next) {
    try {
        res.json(await boxs.getFlag(req.body));
    } catch (err) {
        console.error(`Error while getting users `, err.message);
        next(err);
    }
});

module.exports = router;