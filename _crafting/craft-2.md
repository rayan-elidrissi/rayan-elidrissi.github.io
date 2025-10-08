---
title: "Cache Placement on GPU Optimization"
excerpt: "Optimization for GPU memory/cache placement to accelerate ML workloads.<br/><img src='/images/crafts/edge.png'>"
collection: crafting
teaser: crafts/edge.png
contribution: "Formulated cache/memory placement as constrained optimization; heuristics with provable bounds; empirical speedups."
subtitle: "GPU · optimization"
tags: [systems, optimization, gpu, scheduling]
---

### Scientific contribution
- Formalizes GPU cache/memory placement as a mixed‑integer optimization with bandwidth/latency budgets; proposes greedy and Lagrangian heuristics with approximation guarantees and validates on deep learning kernels.

### STAR
- **Situation**: Multi‑GPU training suffers from suboptimal parameter/activation residency leading to stalls.
- **Task**: Optimize placement and movement policies to minimize end‑to‑end step time under memory constraints.
- **Action**: Built simulator over kernel traces; derived cost model; implemented heuristics and a reinforcement baseline; integrated into a PyTorch pass for live profiling.
- **Result**: 1.2×–1.6× speedups on representative models (transformers/CNNs) with stable convergence; analysis highlights trade‑offs between reuse distance and eviction cost.
