# Graph Report - .  (2026-05-25)

## Corpus Check
- 73 files · ~60,052 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 135 nodes · 127 edges · 45 communities (13 shown, 32 thin omitted)
- Extraction: 72% EXTRACTED · 28% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Compiler Config|TypeScript Compiler Config]]
- [[_COMMUNITY_Graphify Agent Rules|Graphify Agent Rules]]
- [[_COMMUNITY_App Icon Design|App Icon Design]]
- [[_COMMUNITY_Sanity CMS Integration|Sanity CMS Integration]]
- [[_COMMUNITY_Finance Dashboard Branding|Finance Dashboard Branding]]
- [[_COMMUNITY_Browser Favicon|Browser Favicon]]
- [[_COMMUNITY_Portfolio Card Design|Portfolio Card Design]]
- [[_COMMUNITY_Project Filter UI|Project Filter UI]]
- [[_COMMUNITY_Sanity TypeGen Config|Sanity TypeGen Config]]
- [[_COMMUNITY_Claude Code Settings|Claude Code Settings]]
- [[_COMMUNITY_Featured Projects Query|Featured Projects Query]]
- [[_COMMUNITY_Sanity Studio Route|Sanity Studio Route]]
- [[_COMMUNITY_Pageview Analytics|Pageview Analytics]]
- [[_COMMUNITY_Email Tracking|Email Tracking]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Proxy Pathname Header|Proxy Pathname Header]]
- [[_COMMUNITY_Sanity Query Types|Sanity Query Types]]
- [[_COMMUNITY_Sanity Preview Client|Sanity Preview Client]]
- [[_COMMUNITY_Sanity Live API|Sanity Live API]]
- [[_COMMUNITY_Project Visibility Guard|Project Visibility Guard]]
- [[_COMMUNITY_Portable Text Annotations|Portable Text Annotations]]
- [[_COMMUNITY_Robots Meta Override|Robots Meta Override]]
- [[_COMMUNITY_Shields.io Badge Preview|Shields.io Badge Preview]]
- [[_COMMUNITY_Studio Singleton Desk|Studio Singleton Desk]]
- [[_COMMUNITY_Studio Singleton Guards|Studio Singleton Guards]]
- [[_COMMUNITY_Mouse Position Hook|Mouse Position Hook]]
- [[_COMMUNITY_Schema.org JSON-LD|Schema.org JSON-LD]]
- [[_COMMUNITY_Frontend Route Group|Frontend Route Group]]
- [[_COMMUNITY_Portable Text Blocks|Portable Text Blocks]]
- [[_COMMUNITY_Badge Rendering|Badge Rendering]]
- [[_COMMUNITY_Sticky Bar Observer|Sticky Bar Observer]]
- [[_COMMUNITY_Tag Filter Dropdown|Tag Filter Dropdown]]
- [[_COMMUNITY_Blogs Page Stub|Blogs Page Stub]]
- [[_COMMUNITY_Canvas Mouse Particles|Canvas Mouse Particles]]
- [[_COMMUNITY_Framer Motion Card Glow|Framer Motion Card Glow]]
- [[_COMMUNITY_SEO Metadata Mapping|SEO Metadata Mapping]]
- [[_COMMUNITY_Multi-Analytics Providers|Multi-Analytics Providers]]
- [[_COMMUNITY_IP Hash Dedup|IP Hash Dedup]]
- [[_COMMUNITY_Silent Tracking Failures|Silent Tracking Failures]]
- [[_COMMUNITY_Next.js Cache Strategy|Next.js Cache Strategy]]
- [[_COMMUNITY_Email Redis Key Schema|Email Redis Key Schema]]
- [[_COMMUNITY_MIT License|MIT License]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `CLAUDE.md Graphify Rules` - 12 edges
3. `Graphify Always-On Agent Rule` - 10 edges
4. `icon1.png Portfolio Icon Asset` - 8 edges
5. `Copilot Graphify Instructions` - 8 edges
6. `Personal Brand Icon (J Monogram)` - 7 edges
7. `Sanity Schema Extraction Manifest` - 6 edges
8. `Portfolio Hero Card Graphic` - 6 edges
9. `Ascending Bar Chart Icon` - 6 edges
10. `Graphify Knowledge Graph` - 6 edges

## Surprising Connections (you probably didn't know these)
- `jagritnokwal.com v2 Portfolio Site` --conceptually_related_to--> `Next.js + Sanity CMS + Upstash Redis Stack`  [INFERRED]
  README.md → package.json
- `jagritnokwal.com v2 Portfolio Site` --conceptually_related_to--> `icon1.png Portfolio Icon Asset`  [INFERRED]
  README.md → app/icon1.png
- `GROQ Projects Page Data Bundle` --semantically_similar_to--> `CMS-Driven Featured Project Ordering`  [INFERRED] [semantically similar]
  sanity/lib/queries.ts → app/(frontend)/projects/page.tsx
- `Personal Brand Icon (J Monogram)` --conceptually_related_to--> `jagritnokwal.com v2 Portfolio Site`  [INFERRED]
  app/icon2.png → README.md
- `Letter J Monogram` --conceptually_related_to--> `jagritnokwal.com v2 Portfolio Site`  [INFERRED]
  app/apple-icon.png → README.md

## Hyperedges (group relationships)
- **GROQ Queries and TypeGen Result Types** — lib_queries_settingsquery, lib_queries_projectspagedataquery, lib_queries_projectdataquery, lib_queries_getallprojectslugsquery, sanity_types_settingsqueryresult, sanity_types_projectspagedataqueryresult, sanity_types_projectdataqueryresult, sanity_types_getallprojectslugsqueryresult [INFERRED 0.85]
- **Sanity Schema Type Registry** — schematypes_index_schema, objects_chip_inlinechip, objects_badge_inlinebadge, schematypes_project_project, schematypes_tag_tag, objects_horizontalimagegroup_horizontalimagegroup, settings_index_settingstype, settings_projects_settingsprojectstype [EXTRACTED 1.00]
- **Studio Desk and Singleton Guards** — plugins_structure_appplugin, plugins_structure_settingsstructure, concept_studio_settings_singleton_desk, concept_studio_singleton_document_guards [INFERRED 0.85]
- **Pages emitting Schema.org JSON-LD** — app_layout_rootlayout, frontend_page_home, contact_page_page, projects_page_page [INFERRED 0.85]
- **Portable Text Badge Editor and Frontend Parity** — slug_page_myportabletextcomponents, sanity_components_portablebadge, sanity_components_portablechip, concept_portable_text_custom_blocks [INFERRED 0.85]
- **Project Pageview Increment Flow** — components_view_reportview, incr_route_post, slug_page_redis, slug_page_postpage, components_header_header [INFERRED 0.95]
- **Email Open Tracking Flow** — token_route_get, track_route_get, count_route_get, lib_redis_keys, concept_email_open_tracking_pixel [INFERRED 0.95]
- **Sanity-backed cached server data fetchers** — action_project_getprojectpagedata, action_project_getprojectdata, action_project_getallprojectslugs, action_setting_getsettings [INFERRED 0.85]
- **Redis pageview read paths for projects** — action_project_getkey, action_project_getprojectpageviews, action_project_getmultipleprojectpageviews, projects_page_page [INFERRED 0.85]
- **J Monogram Brand Mark Composition** — app_icon2_personal_brand_icon, app_icon2_j_letterform, app_icon2_rounded_square_frame, app_icon2_high_contrast_palette [EXTRACTED 1.00]
- **Icon1 Visual Composition** — app_icon1_png_asset, app_icon1_letter_j, app_icon1_black_background, app_icon1_centered_sans_layout, app_icon1_inset_border_effect [EXTRACTED 1.00]
- **Portfolio Hero Branding Composition** — images_card_portfolio_hero_graphic, images_card_jagrit_nokwal, images_card_full_stack_developer_portfolio, images_card_centered_typography_layout, images_card_textured_dark_background [EXTRACTED 1.00]
- **Finance Dashboard logo mark system** — images_finance_dashboard_logo_finance_dashboard, images_finance_dashboard_logo_bar_chart_icon, images_finance_dashboard_logo_growth_arrow, images_finance_dashboard_logo_wordmark, images_finance_dashboard_logo_forest_green_palette [EXTRACTED 1.00]
- **Multi-agent Graphify Instruction Convergence** — claude_graphify_rules, rules_graphify_rule, copilot_instructions_graphify, workflows_graphify_workflow [INFERRED 0.95]
- **Graphify CLI Commands Querying Graph JSON Pattern** — graphify_query_cli, graphify_path_cli, graphify_explain_cli, graphify_out_graph_json [EXTRACTED 1.00]

## Communities (45 total, 32 thin omitted)

### Community 0 - "TypeScript Compiler Config"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 1 - "Graphify Agent Rules"
Cohesion: 0.31
Nodes (15): CLAUDE.md Graphify Rules, Copilot Graphify Instructions, Community Structure (graph clusters), graphify explain CLI Command, God Nodes (highly connected graph nodes), Graphify Knowledge Graph, graphify-out/graph.json, graphify-out/GRAPH_REPORT.md (+7 more)

### Community 2 - "App Icon Design"
Cohesion: 0.18
Nodes (13): Apple Touch Icon (apple-icon.png), Letter J Monogram, Rounded Square App Icon Canvas, 96×96 PNG Site Icon Tier, Black-on-White High-Contrast Palette, Letter J Wordmark, Minimalist Logo Design, Personal Brand Icon (J Monogram) (+5 more)

### Community 3 - "Sanity CMS Integration"
Cohesion: 0.22
Nodes (9): Horizontal Multi-Image Content Block, Next.js + Sanity CMS + Upstash Redis Stack, Sanity CDN Remote Image Hosts, Sanity Image URL Builder, Sanity Schema Extraction Manifest, project Document Schema, settings Singleton Document Schema, settingsProjects Singleton Document Schema (+1 more)

### Community 4 - "Finance Dashboard Branding"
Cohesion: 0.43
Nodes (8): Ascending Bar Chart Icon, Data Visualization Product Branding, Finance Dashboard, Financial Growth Metaphor, Forest Green Brand Palette, Upward Growth Trend Arrow, Horizontal Icon-Left Wordmark-Right Layout, Stacked Finance Dashboard Wordmark

### Community 5 - "Browser Favicon"
Cohesion: 0.43
Nodes (7): Black Square Background, Centered Sans-Serif Monogram Layout, Subtle Inset Square Border Effect, Centered White Letter J Monogram, icon1.png Portfolio Icon Asset, 48x48 Browser Icon Tier, Personal Brand Monogram (J Initial)

### Community 6 - "Portfolio Card Design"
Cohesion: 0.52
Nodes (7): Centered Typography with Negative Space, Full Stack Developer Portfolio, Jagrit Nokwal, Minimalist Dark Professional Aesthetic, Portfolio Hero Card Graphic, Textured Dark Background with Subtle Gradient, White-on-Black Color Palette

### Community 8 - "Sanity TypeGen Config"
Cohesion: 0.50
Nodes (3): generates, path, schema

### Community 10 - "Featured Projects Query"
Cohesion: 0.67
Nodes (3): CMS-Driven Featured Project Ordering, Exactly Three Featured Visible Projects, GROQ Projects Page Data Bundle

### Community 11 - "Sanity Studio Route"
Cohesion: 0.67
Nodes (3): Embedded Sanity Studio via next-sanity, Sanity Studio at /studio, Sanity Studio Pageviews Admin Tool

### Community 12 - "Pageview Analytics"
Cohesion: 0.67
Nodes (3): Admin-Authenticated Pageview Batch Sync API, Per-Project Pageview Counter in Redis, Upstash Redis Project Pageview Counters

## Knowledge Gaps
- **65 isolated node(s):** `eslintConfig`, `config`, `target`, `lib`, `allowJs` (+60 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **32 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `jagritnokwal.com v2 Portfolio Site` connect `App Icon Design` to `Sanity CMS Integration`, `Browser Favicon`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Why does `Next.js + Sanity CMS + Upstash Redis Stack` connect `Sanity CMS Integration` to `App Icon Design`?**
  _High betweenness centrality (0.019) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `CLAUDE.md Graphify Rules` (e.g. with `Graphify Always-On Agent Rule` and `Copilot Graphify Instructions`) actually correct?**
  _`CLAUDE.md Graphify Rules` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Graphify Always-On Agent Rule` (e.g. with `CLAUDE.md Graphify Rules` and `Copilot Graphify Instructions`) actually correct?**
  _`Graphify Always-On Agent Rule` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `icon1.png Portfolio Icon Asset` (e.g. with `Nested Root Layouts (app shell + frontend segment)` and `Personal Brand Monogram (J Initial)`) actually correct?**
  _`icon1.png Portfolio Icon Asset` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Copilot Graphify Instructions` (e.g. with `CLAUDE.md Graphify Rules` and `Graphify Always-On Agent Rule`) actually correct?**
  _`Copilot Graphify Instructions` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `eslintConfig`, `config`, `target` to the rest of the system?**
  _76 weakly-connected nodes found - possible documentation gaps or missing edges._