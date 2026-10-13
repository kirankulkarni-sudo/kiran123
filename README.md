# CivicTrack — Complete Working Demo

Open-source government project tracking and public accountability platform.

**Colour palette:** Red `#C8102E` · Black `#0A0A0A` · White

## What is included (working demo)

| Page | Features |
|------|----------|
| **Home** | Dynamic stats, featured projects, search, verification explainer |
| **Projects** | Live search + filters (location, department, status) |
| **Project Details** | Full record, progress bar, timeline, evidence, verification status |
| **Local Tracker** | Area summary + local projects & issues |
| **Report Issue** | Structured citizen submission form |
| **Track Issue** | Tracking ID lookup + status timeline |
| **Verification Centre** | Process explanation + status definitions |
| **Reports** | Aggregate stats + department breakdown |
| **About** | Mission, methodology, governance |
| **Login** | Official portal entry (demo) |

## Core principle implemented
Reported progress is **clearly separated** from verified progress. Status badges and notes make this distinction visible on every project.

## How to open

1. Open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).
2. Or serve the folder:
   ```bash
   cd civictrack   # or gov-tracker
   python3 -m http.server 8080
   ```
   Then visit http://localhost:8080

## Data
All data is **mock / demo only**. It is loaded from `js/data.js` and is not connected to any real government system.

## Next steps for production
See the full technical blueprint for:
- Next.js + TypeScript + Tailwind
- Neon PostgreSQL schema
- Object storage for evidence files
- Real authentication & role-based access
- Verification workflow with audit history
- GitHub → Vercel deployment

This static demo demonstrates the information architecture, status model, and user journeys.
