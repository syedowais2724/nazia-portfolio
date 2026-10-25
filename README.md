# Nazia Praveen — Portfolio

A separate local portfolio built from Nazia's supplied résumé and portrait. Uses the same adapted Next.js / GSAP design as the existing portfolio, without its Git history, remotes, personal files, credentials, or build data.

## Local preview

Use Node.js 22. Run `npm ci`, then `npm run dev -- --port 3002`.

## Build

Run `npm run build`. For deployment, import `syedowais2724/nazia-portfolio` on Vercel, use the Next.js preset, and set `NEXT_PUBLIC_SITE_URL` to the final public URL. This repository does not publish a deployment by itself.

## Content

- Identity and profile links: `src/lib/site.ts`
- Projects: `src/lib/projects.ts`
- Education and achievement: `src/components/sections/AboutMe.tsx`
- Resume: `public/nazia-resume.pdf`
- Portrait: `public/nazia-praveen.png`

Project covers are illustrative diagrams, not product screenshots. Project-specific demo/repository links are intentionally omitted because the résumé did not supply them. The GitHub and LinkedIn profile links come from the résumé. The hackathon entry describes institutional-level selection participation, not a win.

The contact form opens an email draft in the visitor's email app; it does not send automatically or need SMTP credentials.

## Licence

Design foundation: [Aitezaz Sikandar's Portfolio](https://github.com/aitezazdev/Portfolio), MIT licence. The original `LICENSE` and copyright notices are retained.
