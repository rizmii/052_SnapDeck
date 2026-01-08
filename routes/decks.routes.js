const express = require('express');
const router = express.Router();
const deckController = require('../controllers/decks.controller');

router.get('/', (req, res) => deckController.getAll(req, res));
router.get('/router', (req, res) => deckController.route(req, res));
router.get('/:id', (req, res) => deckController.getById(req, res));


module.exports = router;
