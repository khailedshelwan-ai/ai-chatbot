function enrichEntities(entities) {
  return entities.map((name, index) => ({
    id: `ent_${index + 1}`,
    name,
    type: name.includes('Inc') || name.includes('Corp') ? 'organization' : 'person',
    confidence: 0.82,
    metadata: {
      region: 'US',
      description: `Mock profile generated for ${name}.`,
    },
  }));
}

module.exports = {
  enrichEntities,
};
