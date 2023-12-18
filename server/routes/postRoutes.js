const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/cyberBlogPosts', postController.showPosts);
router.post('/addPost', postController.addPost);
router.delete('/deletePost/:id', postController.deletePost);
router.put('/editPost/:id', postController.editPost);

module.exports = router;
