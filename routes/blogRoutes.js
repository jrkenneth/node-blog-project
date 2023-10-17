const express = require('express');
const blogController = require('../controllers/blogController');
const { requireAuth } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/create', requireAuth, blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);
router.get('/update/:id', requireAuth, blogController.blog_update_get);
router.patch('/update/:id', blogController.blog_update_post);

module.exports = router;