const express = require('express');
const cors = require('cors');
const { actionsRouter } = require('./routes/actions-routes');
const { errorHandler } = require('./middleware/error-handler');

const app = express();

app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/health', (_req, res) => {
  res.json({ success: true, status: 'ok' });
});

app.use('/', actionsRouter);
app.use(errorHandler);

module.exports = {
  app,
};
