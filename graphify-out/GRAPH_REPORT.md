# Graph Report - .  (2026-05-21)

## Corpus Check
- 68 files · ~59,558 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 340 nodes · 519 edges · 20 communities (17 shown, 3 thin omitted)
- Extraction: 86% EXTRACTED · 14% INFERRED · 0% AMBIGUOUS · INFERRED: 72 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Sanity Project Schema|Sanity Project Schema]]
- [[_COMMUNITY_SEO & App Config|SEO & App Config]]
- [[_COMMUNITY_Sanity TypeGen Types|Sanity TypeGen Types]]
- [[_COMMUNITY_Sanity Studio Setup|Sanity Studio Setup]]
- [[_COMMUNITY_Frontend UI Components|Frontend UI Components]]
- [[_COMMUNITY_Projects & Pageviews|Projects & Pageviews]]
- [[_COMMUNITY_Package Scripts & Tooling|Package Scripts & Tooling]]
- [[_COMMUNITY_Homepage & Analytics|Homepage & Analytics]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_NPM Dependencies|NPM Dependencies]]
- [[_COMMUNITY_Email Tracking API|Email Tracking API]]
- [[_COMMUNITY_Finance Dashboard Branding|Finance Dashboard Branding]]
- [[_COMMUNITY_Portfolio Hero Card|Portfolio Hero Card]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_MIT License|MIT License]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `getClient()` - 10 edges
3. `generateMetadata()` - 10 edges
4. `PostPage()` - 10 edges
5. `icon1.png Portfolio Icon Asset` - 10 edges
6. `Page()` - 9 edges
7. `Personal Brand Icon (J Monogram)` - 9 edges
8. `keys` - 8 edges
9. `project Document Schema` - 8 edges
10. `scripts` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Finance Dashboard` --conceptually_related_to--> `Page()`  [AMBIGUOUS]
  public/images/finance-dashboard-logo.png → app/(frontend)/projects/page.tsx
- `config` --references--> `icon1.png Portfolio Icon Asset`  [EXTRACTED]
  proxy.ts → app/icon1.png
- `myPortableTextComponents` --semantically_similar_to--> `portableChip()`  [INFERRED] [semantically similar]
  app/(frontend)/projects/[slug]/page.tsx → sanity/components.tsx
- `myPortableTextComponents` --semantically_similar_to--> `portableBadge()`  [INFERRED] [semantically similar]
  app/(frontend)/projects/[slug]/page.tsx → sanity/components.tsx
- `Page()` --semantically_similar_to--> `getMultipleProjectPageviews()`  [INFERRED] [semantically similar]
  app/(frontend)/projects/page.tsx → action/project.ts

## Hyperedges (group relationships)
- **Pages emitting Schema.org JSON-LD** — app_layout_rootlayout, frontend_page_home, contact_page_page, projects_page_page [INFERRED 0.85]
- **Sanity-backed cached server data fetchers** — action_project_getprojectpagedata, action_project_getprojectdata, action_project_getallprojectslugs, action_setting_getsettings [INFERRED 0.85]
- **Redis pageview read paths for projects** — action_project_getkey, action_project_getprojectpageviews, action_project_getmultipleprojectpageviews, projects_page_page [INFERRED 0.85]
- **Email Open Tracking Flow** — token_route_get, track_route_get, count_route_get, lib_redis_keys, concept_email_open_tracking_pixel [INFERRED 0.95]
- **Project Pageview Increment Flow** — components_view_reportview, incr_route_post, slug_page_redis, slug_page_postpage, components_header_header [INFERRED 0.95]
- **Portable Text Badge Editor and Frontend Parity** — slug_page_myportabletextcomponents, sanity_components_portablebadge, sanity_components_portablechip, concept_portable_text_custom_blocks [INFERRED 0.85]
- **Sanity Schema Type Registry** — schematypes_index_schema, objects_chip_inlinechip, objects_badge_inlinebadge, schematypes_project_project, schematypes_tag_tag, objects_horizontalimagegroup_horizontalimagegroup, settings_index_settingstype, settings_projects_settingsprojectstype [EXTRACTED 1.00]
- **GROQ Queries and TypeGen Result Types** — lib_queries_settingsquery, lib_queries_projectspagedataquery, lib_queries_projectdataquery, lib_queries_getallprojectslugsquery, sanity_types_settingsqueryresult, sanity_types_projectspagedataqueryresult, sanity_types_projectdataqueryresult, sanity_types_getallprojectslugsqueryresult [INFERRED 0.85]
- **Studio Desk and Singleton Guards** — plugins_structure_appplugin, plugins_structure_settingsstructure, concept_studio_settings_singleton_desk, concept_studio_singleton_document_guards [INFERRED 0.85]
- **Icon1 Visual Composition** — app_icon1_png_asset, app_icon1_letter_j, app_icon1_black_background, app_icon1_centered_sans_layout, app_icon1_inset_border_effect [EXTRACTED 1.00]
- **J Monogram Brand Mark Composition** — app_icon2_personal_brand_icon, app_icon2_j_letterform, app_icon2_rounded_square_frame, app_icon2_high_contrast_palette [EXTRACTED 1.00]
- **Portfolio Hero Branding Composition** — images_card_portfolio_hero_graphic, images_card_jagrit_nokwal, images_card_full_stack_developer_portfolio, images_card_centered_typography_layout, images_card_textured_dark_background [EXTRACTED 1.00]
- **Finance Dashboard logo mark system** — images_finance_dashboard_logo_finance_dashboard, images_finance_dashboard_logo_bar_chart_icon, images_finance_dashboard_logo_growth_arrow, images_finance_dashboard_logo_wordmark, images_finance_dashboard_logo_forest_green_palette [EXTRACTED 1.00]

## Communities (20 total, 3 thin omitted)

### Community 0 - "Sanity Project Schema"
Cohesion: 0.08
Nodes (32): CMS-Driven Featured Project Ordering, Exactly Three Featured Visible Projects, Site-Wide Forced Robots Meta Override, GROQ Projects Page Data Bundle, Horizontal Multi-Image Content Block, Portable Text Inline Badge and Chip Annotations, Featured Project Visibility Guard, Sanity Schema Extraction Manifest (+24 more)

### Community 1 - "SEO & App Config"
Cohesion: 0.08
Nodes (36): getSettings(), Apple Touch Icon (apple-icon.png), Letter J Monogram, Rounded Square App Icon Canvas, Black Square Background, Centered Sans-Serif Monogram Layout, Subtle Inset Square Border Effect, Centered White Letter J Monogram (+28 more)

### Community 2 - "Sanity TypeGen Types"
Cohesion: 0.06
Nodes (33): Sanity TypeGen GROQ Result Types, getAllProjectSlugsQuery, projectDataQuery, settingsQuery, AllSanitySchemaTypes, Color, Geopoint, GetAllProjectSlugsQueryResult (+25 more)

### Community 3 - "Sanity Studio Setup"
Cohesion: 0.09
Nodes (20): next-sanity Live Content API, Sanity Preview and Draft Perspective Client, Embedded Sanity Studio via next-sanity, Sanity Studio at /studio, Sanity Studio Pageviews Admin Tool, Studio Settings Singleton Desk Structure, Studio Singleton Document Action Guards, client (+12 more)

### Community 4 - "Frontend UI Components"
Cohesion: 0.10
Nodes (18): Article(), Props, Card(), Filters(), FiltersProps, FilterForm(), FilterItem, Props (+10 more)

### Community 5 - "Projects & Pageviews"
Cohesion: 0.13
Nodes (24): getAllProjectSlugs(), getKey(), getMultipleProjectPageviews(), getProjectData(), getProjectpageData(), getProjectPageviews(), updateProjectPageviews(), sitemap() (+16 more)

### Community 6 - "Package Scripts & Tooling"
Cohesion: 0.08
Nodes (25): devDependencies, daisyui, eslint, eslint-config-next, tailwindcss, tailwindcss-debug-screens, @tailwindcss/postcss, @tailwindcss/typography (+17 more)

### Community 7 - "Homepage & Analytics"
Cohesion: 0.09
Nodes (17): calSans, inter, RootLayout(), NotFound(), Blogs Page Stub (empty), Analytics(), Particles(), ParticlesProps (+9 more)

### Community 8 - "TypeScript Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 9 - "NPM Dependencies"
Cohesion: 0.11
Nodes (18): dependencies, lucide-react, @microsoft/clarity, next, next-sanity, react, react-dom, react-icons (+10 more)

### Community 10 - "Email Tracking API"
Cohesion: 0.20
Nodes (11): Email Open Tracking via 1x1 GIF Pixel, Email Tracker Token Lifecycle (create, track, list events), emailTracker Redis Key Namespace, Silent Failure for Email Tracking Errors, GET(), redis, keys, redis (+3 more)

### Community 11 - "Finance Dashboard Branding"
Cohesion: 0.43
Nodes (8): Ascending Bar Chart Icon, Data Visualization Product Branding, Finance Dashboard, Financial Growth Metaphor, Forest Green Brand Palette, Upward Growth Trend Arrow, Horizontal Icon-Left Wordmark-Right Layout, Stacked Finance Dashboard Wordmark

### Community 12 - "Portfolio Hero Card"
Cohesion: 0.52
Nodes (7): Centered Typography with Negative Space, Full Stack Developer Portfolio, Jagrit Nokwal, Minimalist Dark Professional Aesthetic, Portfolio Hero Card Graphic, Textured Dark Background with Subtle Gradient, White-on-Black Color Palette

## Ambiguous Edges - Review These
- `navigation` → `Blogs Page Stub (empty)`  [AMBIGUOUS]
  app/(frontend)/blogs/page.tsx · relation: conceptually_related_to
- `Page()` → `Finance Dashboard`  [AMBIGUOUS]
  public/images/finance-dashboard-logo.png · relation: conceptually_related_to

## Knowledge Gaps
- **116 isolated node(s):** `eslintConfig`, `config`, `target`, `lib`, `allowJs` (+111 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `navigation` and `Blogs Page Stub (empty)`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **What is the exact relationship between `Page()` and `Finance Dashboard`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Page()` connect `Projects & Pageviews` to `Sanity Project Schema`, `Finance Dashboard Branding`, `Frontend UI Components`, `Homepage & Analytics`?**
  _High betweenness centrality (0.091) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `config`, `target` to the rest of the system?**
  _123 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Sanity Project Schema` be split into smaller, more focused modules?**
  _Cohesion score 0.08013937282229965 - nodes in this community are weakly interconnected._
- **Should `SEO & App Config` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `Sanity TypeGen Types` be split into smaller, more focused modules?**
  _Cohesion score 0.06349206349206349 - nodes in this community are weakly interconnected._