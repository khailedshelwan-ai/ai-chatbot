# Custom GPT Actions API (Express)

Production-ready modular backend API for GPT Actions-style tools.

## Endpoints

### `POST /search`
Integrates with SerpAPI.

**Input**
```json
{
  "query": "latest AI safety regulation",
  "sources": ["reuters.com", "ft.com"]
}
```

**Output**
```json
{
  "success": true,
  "data": [
    {
      "title": "...",
      "link": "https://...",
      "date": "2 days ago",
      "summary": "..."
    }
  ]
}
```

### `POST /entities`
Simulated entity enrichment (mocked).

**Input**
```json
{
  "entities": ["OpenAI", "Sam Altman"]
}
```

### `POST /timeline`
Returns structured chronological events.

**Input**
```json
{
  "topic": "Open-source LLMs",
  "events": [
    {
      "date": "2024-01-01",
      "title": "Event A",
      "description": "Description A"
    }
  ]
}
```

### `POST /risk`
Returns risk score (0-100) with factors.

**Input**
```json
{
  "subject": "Vendor concentration",
  "likelihood": 65,
  "impact": 82,
  "exposure": 70
}
```

**Output**
```json
{
  "success": true,
  "data": {
    "subject": "Vendor concentration",
    "riskScore": 73,
    "level": "medium",
    "factors": [
      { "name": "likelihood", "weight": 0.35, "value": 65 },
      { "name": "impact", "weight": 0.4, "value": 82 },
      { "name": "exposure", "weight": 0.25, "value": 70 }
    ]
  }
}
```

## Local run

1. Install dependencies
   ```bash
   pnpm install
   ```
2. Copy env file and add your key
   ```bash
   cp .env.example .env
   ```
3. Start API
   ```bash
   pnpm actions:dev
   ```
4. Health check
   ```bash
   curl http://localhost:8080/health
   ```

## Deployment

### Replit
- Run command: `pnpm actions:dev`
- Expose port: `ACTIONS_API_PORT` (default `8080`)
- Add `SERPAPI_KEY` in Replit secrets.

### Vercel (deploy this folder as a separate service)
- `actions-api/vercel.json` is included.
- From repo root:
  ```bash
  vercel --cwd actions-api
  ```
- Add `SERPAPI_KEY` and `ACTIONS_API_PORT` in project env vars.
