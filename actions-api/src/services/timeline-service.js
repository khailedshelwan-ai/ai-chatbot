function getFallbackTimeline(topic) {
  const year = new Date().getFullYear();

  return [
    {
      date: `${year - 2}-03-01`,
      title: `${topic} discovery`,
      description: `Initial signals for ${topic} were identified.`,
    },
    {
      date: `${year - 1}-08-15`,
      title: `${topic} expansion`,
      description: `${topic} entered wider adoption.`,
    },
    {
      date: `${year}-01-20`,
      title: `${topic} current state`,
      description: `Most recent status checkpoint for ${topic}.`,
    },
  ];
}

function buildTimeline(topic, events = []) {
  const items = events.length ? events : getFallbackTimeline(topic);

  return items.slice().sort((a, b) => new Date(a.date) - new Date(b.date));
}

module.exports = {
  buildTimeline,
};
