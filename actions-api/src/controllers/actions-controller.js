const { runSearch } = require('../services/search-service');
const { enrichEntities } = require('../services/entities-service');
const { buildTimeline } = require('../services/timeline-service');
const { calculateRisk } = require('../services/risk-service');

async function search(req, res, next) {
  try {
    const data = await runSearch(req.validatedBody);
    return res.json({ success: true, data });
  } catch (error) {
    return next(error);
  }
}

function entities(req, res) {
  const data = enrichEntities(req.validatedBody.entities);
  return res.json({ success: true, data });
}

function timeline(req, res) {
  const { topic, events } = req.validatedBody;
  const data = buildTimeline(topic, events);
  return res.json({ success: true, data });
}

function risk(req, res) {
  const { subject, ...factors } = req.validatedBody;
  const data = calculateRisk(factors);

  return res.json({
    success: true,
    data: {
      subject,
      ...data,
    },
  });
}

module.exports = {
  search,
  entities,
  timeline,
  risk,
};
