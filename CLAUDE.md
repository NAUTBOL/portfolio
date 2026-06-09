# Frontend Rules — React + Vite + TS

`strict: true` always. No `any` (use `unknown` + narrow). Mobile-first (design at 375px, enhance up). Dark mode only.

## Stack
React+Vite+TS · TailwindCSS (no custom CSS) · React Router v6 (`src/pages/`) · TanStack Query (ALL server state) · Axios (no raw fetch) · Zustand (global client state only) · React Hook Form + Zod · shadcn/ui (in `src/components/ui/`) · lucide-react (ONLY icon pack) · `cn()` (clsx+tailwind-merge) · Framer Motion (complex anim only).

## Structure
```
src/
  components/{ui,common}/   features/[domain]/{components,hooks,types.ts}
  pages/  services/{api.ts,[domain].service.ts}  store/  layouts/
  lib/{cn.ts,validations/}  hooks/  utils/  types/  assets/
```

## Components
- One per file, filename = name. Functional only. Props interface `[Component]Props` above, destructured in signature (never `props.x`).
- Default export for pages/layouts, named for the rest. Split at ~100 lines or >1 responsibility.
- JSX: only ternaries (extract complex conditions). No inline styles (Tailwind only, except dynamic values). Never mutate state directly. List keys = stable unique id, never index. No data fetching in `useEffect` (use React Query). Never call hooks conditionally.

### UI primitives — `src/components/ui/`
Every reusable primitive lives here, imported everywhere. Never inline design-system styles in features. Each: accept+merge `className` via `cn()`, `forwardRef` on DOM wrappers, spread `...props`, variants/sizes as typed `const` maps. Check here before building any styled element.

## Hooks
`use` prefix, named for what it manages. `useEffect` deps complete + explicit, no eslint-disable.

## TypeScript
All props/hook returns/service responses typed. API types in `src/types/` (never inferred from fetch). `type` for unions, `interface` for extensible shapes.

## Data fetching
- React Query for all reads, mutations for writes (invalidate affected queries on success). Handle `isLoading`/`isError`/empty explicitly — never assume data exists.
- One query-key factory per feature (`{ all, detail(id) }`) — never inline string arrays.
- API calls only in `src/services/`. Single Axios instance in `api.ts`: request interceptor attaches `Authorization` from auth store; response interceptor handles `401` globally. All fns typed both ways: `get(id): Promise<User> => api.get(...).then(r => r.data.data)`.
- QueryClient defaults: `staleTime 5min, retry 1, refetchOnWindowFocus false`. Never duplicate server state in Zustand.

## State
`useState` for UI-only · React Query for server state · Zustand only for truly-global client state (auth, theme, cart). No prop drilling >2 levels.

## Forms
RHF for all forms (no `useState` controlled inputs). Zod schema separate, reused for API types when possible. Submit calls a mutation (never direct API). Field errors inline, form errors in top alert.

## Tailwind
Class order: layout→sizing→spacing→typography→colors→effects. Repeated combos → component (not `@apply`). `cn()` for conditionals. Tokens in `tailwind.config.ts` (never hardcoded hex). Mobile-first responsive.

## Design system (dark only)
Philosophy: UX over UI; minimal/sober; when in doubt remove; works before it looks good.

**Type:** Montserrat only (400/500/600). No emojis ever. Icons only when they aid comprehension. Scale: xs12 sm13 base14 md16/500 lg20/600 xl24/600 2xl32/600. Line-height 1.5 body / 1.2 headings. On mobile headings scale down (2xl→24, xl→20, lg→18).

**Colors:** bg `#000`/surface `#0a0a0a`/elevated `#111`/overlay `#1a1a1a`. border default `#1f1f1f`/subtle `#2a2a2a`/strong `#333`. text primary `#ededed`/secondary `#a1a1a1`/disabled `#555`. accent `#fff`/muted `#666`. success `#22c55e` warning `#f59e0b` error `#ef4444` info `#3b82f6` (+ `*-bg` `#052e16`/`#1c1400`/`#2a0a0a`/`#0c1a2e`).

**Spacing:** multiples of 4 only (4 8 12 16 20 24 32 40 48 64). Mobile cards `p-4` → desktop `p-6`; page padding `px-4` → `px-6 md:px-8`; min `p-3` on any card.

**Cards:** border `1px #1f1f1f`, bg `#0a0a0a`, radius 8, pad 24. Nested: bg `#111`, border `#2a2a2a`, radius 6, pad 16. No shadows (borders define depth). Hover = border `#333` only.

**Borders:** everywhere, always `1px solid`. Radius sm4 (inputs/badges) md6 (buttons/tags) lg8 (cards/modals) xl12 (containers). None on full-width elements.

**Buttons** (h36 default / 32 compact / 40 prominent, pad `0 16`, Montserrat 13/500, transition 150ms color+border only, no gradient/shadow): Primary bg `#fff` text `#000` (once per view max) · Secondary bg `#111` text `#ededed` border `#1f1f1f` · Ghost transparent text `#a1a1a1` border `#1f1f1f` · Danger bg `#2a0a0a` text `#ef4444` border `#3d1010` · Disabled bg `#0a0a0a` text `#555` not-allowed.

**Inputs:** bg `#0a0a0a` border `#1f1f1f` radius 6 h36 pad `0 12` Montserrat 14 text `#ededed` placeholder `#555`. Focus border `#333` no outline. Error border `#ef4444`. Label always above (never placeholder-as-label). Error msg below, `#ef4444` 12px. Section separators = `border-top`, not nested cards.

**Tables:** no zebra (borders only). Row hover bg `#111`. Header `#a1a1a1` 12/500 uppercase ls .05em. Row `border-bottom #1f1f1f`. Cells pad `12 16`. Actions last, right-aligned. On mobile → card list per row (`block md:hidden` cards + `hidden md:table`).

**Nav:** sidebar bg `#000` border-right `#1f1f1f` w240; items pad `8 12` radius 6 full-width; active bg `#111` text `#ededed`; inactive `#a1a1a1`→hover `#ededed`; label always visible (never icon-only). Topbar h56 border-bottom `#1f1f1f`. Mobile: bottom tab bar (≤5 items) or drawer; dropdowns → bottom sheets. Never rely on hover for critical actions.

**States:** skeleton screens for content (spinner only for button/action loading). Empty state = centered, optional icon, title, desc, one CTA. Error state = what failed + recovery. Toasts bottom-right, bg `#111` border `#1f1f1f`, max 3.

**Hard rules:** no light mode, no gradients, no shadows, no emojis, no decorative art, color only communicates state/hierarchy, one primary action per view, generous whitespace.

## Mobile-first hard rules
Base = mobile, `sm/md/lg/xl` only enhance (never to fix breakage). Never `lg:hidden` to mask broken mobile. No fixed px container widths (`w-full`/`max-w`/%). No horizontal scroll ever. Touch targets ≥44×44, gaps ≥8. Font ≥14 (12 only labels). Single column → multi-col at `md:`. Modals full-screen on mobile, dialog on desktop. Test at 375/390/768/1280 + real device. Images: `w-full h-auto` base, lock `aspect-*`.

## Routing
Every page `React.lazy` + `Suspense`. Protected routes via `ProtectedRoute` wrapper (not inline checks). Redirect to `returnTo` after login.

## Performance
`React.memo`/`useMemo`/`useCallback` only when profiling proves need or for stable deps. Lazy-load routes. Images: explicit w/h, WebP, `loading="lazy"` below fold. Virtualize lists >100 (`@tanstack/react-virtual`).

## Vite
Env via `import.meta.env`, `VITE_` prefix = public (never secrets). Path alias `@/` (no `../../`).

## Auth
JWT in `httpOnly` cookies (never localStorage). Access token 15min, refresh 7-30d (DB-stored, revocable, rotated on use). Payload only `sub/role/iat/exp`. Cookie `httpOnly+secure+sameSite:strict`. Auth state in Zustand via `useAuth`. Refresh rotation in Axios interceptor. Invalid token → redirect login. Authorization is enforced by the API — React gating is UX only.

## Security
HTTPS only + HSTS. CORS whitelisted from env (never `*`). Zero secrets in code; `.env` not committed, `.env.example` is. Validate+sanitize every input; never render raw user input (escape on output, CSP). File uploads: validate magic bytes, size limit. Paginate all lists.

## Stripe
Never touch raw card data (Stripe.js/Elements only) or send it to backend. Publishable key only on frontend, from env. Test keys in dev. Flow: backend returns `clientSecret` → `stripe.confirmPayment/confirmCardSetup` → redirect on result. PaymentIntent = one-time, SetupIntent = save card/subscriptions. Map Stripe errors to friendly messages (never raw codes), offer retry.

## Code style
ESLint strict (warnings = errors) + Prettier. Imports: external→internal→relative. Handlers `handle[Event]`. Boolean props implicit (`<Modal isOpen />`). Booleans read as questions (`isActive`, `hasPermission`). No magic numbers. Names reveal intent. Functions: 1 responsibility, ≤20 lines, ≤3 params (else object), early return, immutable by default, no side effects in `get/find/is`. Delete dead code (don't comment out). Abstract at 3+ cases. Max 2-3 indent levels.

## Testing
Vitest + React Testing Library + MSW (handlers in `src/test/mocks/handlers.ts`, setup `src/test/setup.ts`, `onUnhandledRequest:'error'`). Required — no feature done without ≥ smoke test. Test from user POV, query by role/label/text (never class/testid). Deterministic (mock time/random). Per feature: services (in→out + 4xx/5xx), components (render + interactions + loading/error/empty), forms (validation shown + submit calls right mutation), protected routes (unauth → `/login`). Cmds: `npm test`, `npm run test:coverage`.

## Safe typing (defensive access)
Assume any value can be null/undefined/empty. Optional chaining for nested access; `??` for fallbacks (not `||`, except when 0/'' should also fall back). UI fallbacks: strings `?? '-'`, numbers `?? 0`, arrays `?? []`, booleans `?? false`, dates `value ? fmt : '-'`. Never render null/undefined without a visible fallback. Arrays: guard before index/`.map/.filter/.find`; `if (!items?.length) return <EmptyState/>`; `Array.isArray(data) ? data : []`. Never destructure from possibly-undefined (`const {id} = res?.data ?? {}`). Type guards over `as`. `!` only when guaranteed by contract + documented. Optional params handled; functions returning nothing return `null` explicitly; early-return on missing required. Guard components on data (`{user ? <Card/> : <Skeleton/>}`). Async: handle empty returns, never `.then()` on possibly-null, guard `Promise.all` items individually. No `@ts-ignore`/`as`/`any` without documented reason. ESLint: `no-non-null-assertion`, `no-explicit-any`.

## API-first
Before touching the backend: fetch `http://localhost:3000/api/docs-json`, inspect endpoint (body/response/errors), derive TS types from schema (never guess). Ask if behavior unclear.

## i18n
`react-i18next` (`useTranslation`). en (default) + es, both updated together. Files `public/locales/{lng}/{ns}.json`, namespace per domain. Keys `feature.element.description`. Interpolation `{{name}}` (no concatenation). Never hardcode user-facing text.

## SEO
`react-helmet-async`: per-page `<title>` (`Page — FitCoach`), `meta description` (120-160), canonical, OG tags on public pages, `<html lang>` = active i18n. One `<h1>` per page, no skipped levels. Descriptive `alt`, meaningful link text, semantic HTML. `<Link>` for internal nav (no `<a>`/`window.location`). Clean URLs (no hash routing). WebP + explicit w/h + lazy below-fold. `robots.txt`/`sitemap.xml` before prod.

## Post-feature security pass
Quick self-review after each feature (page/flow/mutation), not a full audit. Check per actor: **IDOR/ownership** (act only on own resources — trainers on own clients/templates/workouts, clients on own data; never trust an id from URL/params/body; don't render/enable actions on resources the actor shouldn't touch). **Role boundaries** (trainer-only vs client-only gated; no leakage either way). **Subscription gates** (mirror the backend guard in UI, never replace it; lapsed sub loses access). **Membership isolation** (trainer↔client actions require an active membership between *those two*; conversations/comments/assignments stay in the pair). **No client-side trust** (React gating is UX; confirm the API rejects unauthorized 401/403/404 without leaking existence). **Input/exposure** (new inputs Zod-validated + bounded; responses don't over-expose; ids in URLs not sensitive). Report briefly: what you checked, anything suspicious, frontend-fixable vs needs-backend. If all holds, say so in one line. Don't skip silently.

## Commit messages
After each edit/group, suggest a ready-to-paste message: `type: imperative lowercase summary ≤72` (`feat|fix|chore|refactor|style|docs|test`) + optional body. Describe intent, never file names.
