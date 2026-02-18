---
title: "Point‑Based Crowd Counting (P2PNet)"
excerpt: "Label‑efficient crowd localization with point supervision.<br/><img src='/images/crafts/crowd.png'>"
collection: crafting
teaser: crafts/crowd.png
contribution: "Point‑supervised localization; nAP metric + Hungarian matching; SOTA‑level replication."
subtitle: "vision · localization"
tags: [computer vision, crowd counting, localization, deep learning]
---

### Why this project
Counting methods based on density maps lose spatial precision in crowded scenes. This project implements a purely point‑based framework that directly predicts head locations under point supervision, emphasizing localization quality as much as counting accuracy.

### Objective
Localize individuals and estimate counts with minimal supervision while remaining robust to extreme densities and perspective changes.

### Method
- Direct point proposal network that outputs unordered sets of head centers.
- One‑to‑one bipartite (Hungarian) matching between predictions and ground truth to avoid duplicates and enforce precision.
- Loss combines classification and localization terms with a matching cost; training is stable without density maps or pseudo boxes.
- Density‑Normalized Average Precision (nAP) to evaluate localization under varying crowd densities.

```text
Image ──► Backbone (e.g., ResNet) ──► Point Proposal Head ──► {p_i}
                                            │
                                            ├─ Matching (Hungarian) with GT points
                                            └─ Loss: cls + loc + λ·match
```

### Data & training
- Supports standard crowd datasets; provides data loaders augmenting scale, perspective, and occlusion.
- Label‑efficiency sweeps (e.g., 100%, 50%, 10% points) to study supervision vs. performance.

### Evaluation & ablations
- Metrics: MAE/MSE for counts, nAP for localization, and precision/recall at small radii.
- Ablations: matcher cost terms, NMS vs. set‑prediction, backbone depth, input resolution.

### Outcomes
- Competitive MAE and strong nAP compared to density‑map baselines, particularly in high‑density regions.
- Evidence that point‑only supervision maintains localization fidelity and simplifies the pipeline.

### Artifacts
- Clean training/eval scripts, nAP implementation, and visualizers for predicted point sets.
