CIVIC LAW INITIATIVE — MOBILE UI FIX

What changed
- NO horizontal card tables/carousels on mobile for Problem, Objectives, Sustainability pathways, or Regional Engagements. They stack vertically at full width.
- Mission/Vision, Partners and Locations remain vertical on mobile with overflow-safe sizing.
- Locations mobile route line is now a stable vertical CSS line (no incorrect scaleX animation).
- Team remains horizontally browsable because there are many members, but uses NATIVE browser touch scrolling instead of manual pointer capture.
- Team snap changed from mandatory to proximity so tiny swipes do not spring back aggressively.
- Team images cannot hijack dragging.
- Team filters wrap on mobile instead of becoming another sideways strip.
- Global page-level horizontal overflow protection added.

Important Team change
Replace BOTH TeamSection.tsx and TeamSection.css. The old TSX contained custom pointer capture/scrollLeft logic.

Deployment
1. Replace the matching files in src/components/public and src/index.css.
2. Run: npm run build
3. Upload the NEW dist folder to the SAME Cloudflare Worker deployment.
4. Do not reconnect the domain or DNS.
