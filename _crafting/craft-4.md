---
title: "UAV Swarms for Real‑Time Wildfire Monitoring"
excerpt: "Multi‑agent sensing and coordination for early fire detection.<br/><img src='/images/crafts/wildfire.png'>"
collection: crafting
teaser: crafts/wildfire.png
contribution: "Designs swarm policies and sensor fusion for fast coverage; simulation‑to‑field pathway with dashboard."
subtitle: "swarm · sensing"
tags: [robotics, multi‑agent, sensing, wildfire]
---

### Problem
Early wildfire detection requires high temporal and spatial resolution beyond satellites; coordination and sensing must scale over terrain and wind.

### Aim
Design a swarm strategy and perception stack that minimizes time‑to‑first‑detection and maintains coverage during spread.

### System
```text
Sensing: thermal + RGB  ─► onboard detector (tiny models)
Planning: frontier coverage + consensus re‑tasking
Comms: mesh links for alerts + map sync
UI: web dashboard for boundaries, tracks, and UAV status
```

### Experiments
- Simulated fires with varying wind/topography; compare patrol baselines vs. adaptive policies.
- KPIs: time‑to‑detection, coverage continuity, comms overhead, false‑alarm rate.

### Findings
- ~40% faster first‑detection and more stable boundary updates under gusts.
- Detectors tuned for thermal imagery hold recall at low compute budgets.

### Outputs
- Simulator scenarios, policy code, and dashboard; procedure for moving to field tests.
