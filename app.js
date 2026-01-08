const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Snap Deck Router API',
    version: 'v1',
    status: 'running'
  });
});
app.get('/api/v1/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const deckRoutes = require('./routes/decks.routes');

app.use('/api/v1/decks', deckRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./docs/swagger');

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const errorHandler = require('./middlewares/error.middleware');

app.use(errorHandler);
