---
title: "LHC‑Explorer (HEP + ML Toolkit)"
excerpt: "Interactive exploration of collider events with ML‑based anomaly detection.<br/><img src='/images/crafts/lhc.png'>"
collection: crafting
teaser: crafts/lhc.png
contribution: "Bridges HEP formats (ROOT/HDF5) to ML pipelines; fast loaders + anomaly modules; researcher‑friendly visualization."
subtitle: "HEP · anomaly"
tags: [scientific ml, visualization, anomaly detection, high‑energy physics]
---

### Motivation
Collider data are large, high‑dimensional, and specialized. Researchers need fast iteration from data ingestion to ML‑assisted inspection.

### Goal
Make HEP event exploration interactive and ML‑ready, with anomaly modules and physics‑aware filtering.

### Architecture
```text
ROOT/CSV/HDF5 ─► Fast Loaders ─► Filters (kinematics, isolation) ─► ML Blocks (AE, IF, classifiers)
                                               │                                    │
                                               └───────► Live Visualizations ◄──────┘
```

### Features
- Zero‑copy readers where possible; batch and event‑wise views.
- Anomaly detection plug‑ins (autoencoders, isolation forest); ROC and score heatmaps.
- Dashboards for 2D/3D event rendering and energy flow plots.

### Evaluation
- Case studies on simulated datasets; time‑to‑first‑insight reduced by >50% vs. ad‑hoc notebooks.
- Sanity checks with physics cuts and classifier calibrations.

### Deliverables
- Streamlit dashboard, loaders, and example notebooks for quick adoption.
