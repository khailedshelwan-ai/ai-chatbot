const { Router } = require('express');
const {
  search,
  entities,
  timeline,
  risk,
} = require('../controllers/actions-controller');
const { validate } = require('../middleware/validate');
const {
  searchSchema,
  entitiesSchema,
  timelineSchema,
  riskSchema,
} = require('../validators/schemas');

const router = Router();

router.post('/search', validate(searchSchema), search);
router.post('/entities', validate(entitiesSchema), entities);
router.post('/timeline', validate(timelineSchema), timeline);
router.post('/risk', validate(riskSchema), risk);

module.exports = {
  actionsRouter: router,
};
