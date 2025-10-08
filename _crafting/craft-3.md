---
title: "LHC‑Explorer (HEP + ML Toolkit)"
excerpt: "Interactive exploration of collider events with ML‑based anomaly detection.<br/><img src='/images/crafts/lhc.png'>"
collection: crafting
teaser: crafts/lhc.png
contribution: "Bridges HEP formats (ROOT/HDF5) to ML pipelines; fast loaders + anomaly modules; researcher‑friendly visualization."
subtitle: "HEP · anomaly"
tags: [scientific ml, visualization, anomaly detection, high‑energy physics]
---

### Scientific contribution
- Provides a reusable pipeline for HEP event analysis with ML: efficient data loaders, physics‑aware filters, and integrated anomaly/novelty detection with interactive dashboards for rapid hypothesis iteration.

### STAR
- **Situation**: HEP datasets are massive and heterogeneous; ML workflows are brittle and slow to iterate.
- **Task**: Create a high‑performance, user‑friendly toolkit that shortens the loop from data to insight.
- **Action**: Implemented CSV/ROOT/HDF5 loaders, streaming visualizations, and plug‑in anomaly models; exposed them via Streamlit dashboards.
- **Result**: Reduced preprocessing/inspection time by >50%; enabled event‑level triage and rapid notebook‑to‑dashboard transitions used in teaching and exploratory analyses.
