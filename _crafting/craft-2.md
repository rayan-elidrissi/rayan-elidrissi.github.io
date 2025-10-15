---
title: "Cache Placement on GPU Optimization"
excerpt: "Optimization for GPU memory/cache placement to accelerate ML workloads.<br/><img src='/images/crafts/edge.png'>"
collection: crafting
teaser: crafts/fc26.png
contribution: "Formulated cache/memory placement as constrained optimization; heuristics with provable bounds; empirical speedups."
subtitle: "GPU · optimization"
tags: [systems, optimization, gpu, scheduling]
---

### Why this project
Large models bottleneck on memory residency and bandwidth. Strategic placement of tensors in GPU caches/memory can unlock latency savings without hardware changes.

### Objective
Minimize training/inference step time subject to GPU memory and interconnect constraints.

### Method
- Cost model over kernel traces capturing reuse distance, transfer latency, and eviction penalties.
- Optimization view: mixed‑integer program; practical solvers use greedy and Lagrangian relaxations with approximation bounds.
- Policy integrates with a PyTorch pass to observe live profiling signals and adjust placement online.

```text
Params/Acts ─► Cost Model ─► Solver (Greedy | Lagrange) ─► Placement Plan
                                               │
                                     Runtime Feedback (profiling)
                                               ▼
                                       Online Adjustments
```

### Data & setup
- Benchmarks on CNN/Transformer workloads; traces collected with Nsight/torch.profiler.
- Constraints reflect HBM capacity, L2 cache size, and NVLink/PCIe bandwidth caps.

### Evaluation & ablations
- KPIs: step time, stall breakdown, bytes moved, cache hit rate, convergence parity.
- Compare against baseline eviction policies and prefetchers.

### Outcomes
- 1.2×–1.6× speedups with consistent convergence; reduced cross‑GPU traffic and higher cache hit rates.
- Sensitivity analysis quantifies gains vs. model size and batch size.

### Artifacts
- Simulator, placement library, and profiling notebooks; reproducible scripts for all ablations.
