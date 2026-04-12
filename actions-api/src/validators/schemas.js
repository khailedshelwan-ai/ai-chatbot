const { z } = require('zod');

const searchSchema = z.object({
  query: z.string().trim().min(2),
  sources: z.array(z.string().trim().min(2)).max(10).optional().default([]),
});

const entitiesSchema = z.object({
  entities: z.array(z.string().trim().min(1)).min(1).max(20),
});

const timelineSchema = z.object({
  topic: z.string().trim().min(2),
  events: z
    .array(
      z.object({
        date: z.string().trim().min(4),
        title: z.string().trim().min(2),
        description: z.string().trim().min(2),
      }),
    )
    .optional()
    .default([]),
});

const riskSchema = z.object({
  subject: z.string().trim().min(2),
  likelihood: z.number().min(0).max(100).optional().default(50),
  impact: z.number().min(0).max(100).optional().default(50),
  exposure: z.number().min(0).max(100).optional().default(50),
});

module.exports = {
  searchSchema,
  entitiesSchema,
  timelineSchema,
  riskSchema,
};
