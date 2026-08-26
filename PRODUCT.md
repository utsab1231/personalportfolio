# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are people evaluating Utsab Adhikari professionally or personally: recruiters and hiring managers screening candidates, engineers/peers assessing technical credibility, product managers gauging collaboration fit, and general visitors (networking contacts, curious peers, personal connections) who land on the site without a specific hiring intent. The site already models this explicitly with an audience switcher (`anyone` / `recruiters` / `engineers` / `productManagers` in `content/site.ts`) that swaps the framing statement and highlighted skills per audience.

## Product Purpose

A personal portfolio for Utsab Adhikari — Software Engineer specializing in .NET, React, and interactive web applications — that showcases his work experience, projects, technical stack, and personal background. Success is a visitor (whichever audience) quickly forming an accurate, credible impression of his skills and getting the information or contact path they need, whether that's evaluating him as a job candidate or just getting a sense of who he is professionally and personally.

## Positioning

Serves two goals evenly, not sequentially: it must work as a job-search-ready candidate pitch (concrete experience, real project links, verifiable stack) and as a durable general professional/personal presence that doesn't read as job-hunt-only (an "about" section covering interests outside software, a bilingual English/Devanagari treatment reflecting his Nepali identity, and a "tryouts" gallery of personal exploration work). The audience switcher is the mechanism that lets one page serve both without picking a single pitch.

## Operating Context

- Static site generated with Next.js (App Router) + TypeScript, deployed to Firebase Hosting via GitHub Actions on push to `master`.
- Single-page layout with in-page sections (nav ids): intro, experience, projects, stack, about, tryouts, contact.
- Bilingual content: every major label/section carries an English and Devanagari (`*Deva`) variant.
- Content is centralized in `content/site.ts` — no resume/copy facts should be hard-coded elsewhere.
- `scripts/optimize-media.mjs` generates responsive image/video variants (avif/webp/jpg at multiple widths) for the `tryouts` gallery from source "base names."

## Capabilities and Constraints

- Real, current facts: work experience (Xylontech — Software Engineer I, current; Lastdoor Solutions — Full Stack Developer part-time; Xylontech — Associate Software Engineer, prior), two shipped projects with live links (Job Candidate Hub API on GitHub, Token Extractor Chrome Extension on the Chrome Web Store), a technical stack list, and two certifications.
- Contact links: email, LinkedIn, GitHub — no other contact channel exists.
- No resume PDF asset exists in the repo; contact/evidence is limited to the links above.
- Undecided/open: no formal accessibility standard has been set (general good practice applies, not a specific WCAG level).

## Brand Commitments

- Name: Utsab Adhikari (Devanagari: उत्सव अधिकारी).
- Location: Kathmandu, Nepal (Gokarna) — kept bilingual (Devanagari location string used in the UI).
- Voice, as expressed in `about`: values clean/maintainable code, understanding problems over just shipping code, continuous learning; personal interests (travel, hiking, motorcycles, movies, football/futsal, occasional gaming) are an intentional, confirmed part of the "about" narrative — not filler to be trimmed.
- Bilingual English/Devanagari presentation is a confirmed identity commitment, not a stylistic option to drop.

## Evidence on Hand

- Resume facts (employers, roles, dates, bullets, stack, certifications) live in `content/site.ts` and are the single source of truth — do not fabricate additional metrics, employers, or achievements beyond them.
- Project links: `https://github.com/utsab1231/JobCandidateAPI`, `https://chromewebstore.google.com/detail/token-extractor/abmialakabbbpmjlkjpajaheinfecjak`.
- `public/tryouts/` holds real personal exploration images/videos (source basenames listed in `content/site.ts` → `tryouts.images`).
- Confirmed absence: no testimonials, case studies, third-party quotes, usage metrics, or resume PDF exist. Future work must not invent any of these.

## Product Principles

1. One page must genuinely serve four audiences (general visitors, recruiters, engineers, PMs) without becoming generic — the audience switcher, not a single blended pitch, is how it does that.
2. Every claim traces to `content/site.ts`; no fabricated metrics, testimonials, or achievements.
3. Bilingual English/Devanagari presentation and the personal "about"/"tryouts" material are identity commitments, not optional polish — the site is a professional pitch and a personal presence at once, evenly.
4. Content changes go through `content/site.ts`, not hard-coded into components.

## Accessibility & Inclusion

No formal standard specified; general good practice (semantic HTML, keyboard/contrast basics) applies. No specific user need has been identified.
