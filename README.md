# Stack Wars Podcast

הפודקאסט שבו אף אחד לא צודק. שני מפתחים מקצוות הסטאק, מתווכחים על טכנולוגיה.

This is the source for [stackwarspod.com](https://stackwarspod.com), the marketing + episode browser site for the Stack Wars podcast. Episodes are pulled live from the show's RSS feed at build time and revalidated hourly.

## Tech

- **Next.js 16** (App Router, Turbopack) on **React 19**
- **Tailwind CSS v4** with shadcn-style primitives
- **TypeScript** strict mode
- RSS ingestion via [`rss-parser`](https://www.npmjs.com/package/rss-parser)

## Local development

```bash
npm install
cp .env.example .env.local   # then fill in the values below
npm run dev
```

### Environment variables

| Name | Description |
| --- | --- |
| `RSS_FEED_URL` | The podcast's RSS feed URL. Required. |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for OG tags, sitemap and JSON-LD. Defaults to `https://stackwarspod.com`. |

## Useful scripts

```bash
npm run dev      # local dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # eslint
```

## Project layout

- `src/app/` — App Router pages, `robots.ts`, `sitemap.ts`
- `src/components/` — UI components (`AudioPlayer`, `EpisodeCard`, `JsonLd`, …)
- `src/lib/site.ts` — single source of truth for show metadata (hosts, platforms, copy)
- `src/lib/rss.ts` — feed fetching, slug generation, show-notes rendering
- `public/` — static assets (cover art, favicon, web manifest)
