const { app } = require('./src/app');
const { env } = require('./src/config/env');

app.listen(env.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Actions API running at http://localhost:${env.port}`);
});
