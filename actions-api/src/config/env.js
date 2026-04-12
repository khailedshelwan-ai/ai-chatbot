const path = require('node:path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

function getNumber(value, fallback) {
  const parsed = Number.parseInt(value, 10);
  return Number.isNaN(parsed) ? fallback : parsed;
}

const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: getNumber(process.env.ACTIONS_API_PORT, 8080),
  serpApiKey: process.env.SERPAPI_KEY || '',
};

module.exports = {
  env,
};
