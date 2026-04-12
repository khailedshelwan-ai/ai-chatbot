const { env } = require('../config/env');
const { AppError } = require('../utils/app-error');

function buildSearchQuery(query, sources = []) {
  if (!sources.length) return query;

  const sourceFilter = sources.map((source) => `site:${source}`).join(' OR ');
  return `${query} (${sourceFilter})`;
}

async function runSearch({ query, sources }) {
  if (!env.serpApiKey) {
    throw new AppError('SERPAPI_KEY is missing. Add it to your environment variables.', 500);
  }

  const params = new URLSearchParams({
    q: buildSearchQuery(query, sources),
    api_key: env.serpApiKey,
    engine: 'google',
    num: '8',
  });

  const response = await fetch(`https://serpapi.com/search.json?${params.toString()}`);

  if (!response.ok) {
    throw new AppError('Failed to fetch data from SerpAPI.', 502);
  }

  const payload = await response.json();
  const organic = payload.organic_results || [];

  return organic.map((result) => ({
    title: result.title || 'Untitled',
    link: result.link || '',
    date: result.date || result.snippet_highlighted_words?.[0] || null,
    summary: result.snippet || 'No summary available.',
  }));
}

module.exports = {
  runSearch,
};
