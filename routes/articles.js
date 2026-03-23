const express = require('express');
const router = express.Router();
const articleCtrl = require('../controllers/articleController');

router.post('/', articleCtrl.createArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/search', articleCtrl.searchArticles);
router.get('/:id', articleCtrl.getArticleById);
router.put('/:id', articleCtrl.updateArticle);
router.delete('/:id', articleCtrl.deleteArticle);

module.exports = router;
