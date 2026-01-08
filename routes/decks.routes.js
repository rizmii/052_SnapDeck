const express = require('express');
const router = express.Router();
const deckController = require('../controllers/decks.controller');

router.get('/', (req, res) => deckController.getAll(req, res));
router.get('/router', (req, res) => deckController.route(req, res));
router.get('/:id', (req, res) => deckController.getById(req, res));

/**
 * @swagger
 * /api/v1/decks:
 *   get:
 *     summary: Get all decks
 *     parameters:
 *       - in: query
 *         name: archetype
 *         schema:
 *           type: string
 *       - in: query
 *         name: source
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of decks
 */
router.get('/', (req, res) => deckController.getAll(req, res));

/**
 * @swagger
 * /api/v1/decks/{id}:
 *   get:
 *     summary: Get deck by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Deck detail
 *       404:
 *         description: Deck not found
 */
router.get('/:id', (req, res) => deckController.getById(req, res));

/**
 * @swagger
 * /api/v1/decks/router:
 *   get:
 *     summary: Route deck recommendation
 *     parameters:
 *       - in: query
 *         name: mode
 *         schema:
 *           type: string
 *           enum: [ladder, budget, random]
 *     responses:
 *       200:
 *         description: Recommended deck
 */
router.get('/router', (req, res) => deckController.route(req, res));


module.exports = router;
