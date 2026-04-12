function clamp(value) {
  return Math.max(0, Math.min(100, Math.round(value)));
}

function calculateRisk({ likelihood, impact, exposure }) {
  const weightedScore = likelihood * 0.35 + impact * 0.4 + exposure * 0.25;
  const riskScore = clamp(weightedScore);

  const factors = [
    { name: 'likelihood', weight: 0.35, value: likelihood },
    { name: 'impact', weight: 0.4, value: impact },
    { name: 'exposure', weight: 0.25, value: exposure },
  ];

  return {
    riskScore,
    level: riskScore >= 75 ? 'high' : riskScore >= 45 ? 'medium' : 'low',
    factors,
  };
}

module.exports = {
  calculateRisk,
};
