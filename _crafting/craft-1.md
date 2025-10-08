---
title: "Point‑Based Crowd Counting (P2PNet)"
excerpt: "Label‑efficient crowd localization with point supervision.<br/><img src='/images/500x300.png'>"
collection: crafting
teaser: 500x300.png
contribution: "Point‑supervised localization; nAP metric + Hungarian matching; SOTA‑level replication."
tags: [computer vision, crowd counting, localization, deep learning]
---

### Scientific contribution
- A purely point‑based framework that dispenses with density maps and pseudo boxes; implements one‑to‑one Hungarian matching and density‑normalized AP (nAP) to evaluate localization quality alongside counting.

### STAR
- **Situation**: Crowd analysis often relies on density maps that blur localization and degrade metrics at high densities.
- **Task**: Reproduce and extend P2PNet to localize heads directly with minimal supervision; validate with rigorous metrics and ablations.
- **Action**: Implemented point‑proposal network, Hungarian matcher, and nAP evaluation; curated training/validation pipelines; performed cross‑dataset tests and label‑efficiency ablations.
- **Result**: Achieved competitive nMAE and nAP on benchmark datasets; demonstrated robustness under reduced annotations and provided clean, reproducible code suitable for research reuse.
