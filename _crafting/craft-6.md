---
title: "Mosquito Dynamics & Epidemic Risk Modeling"
excerpt: "Vector population models and risk maps for epidemiology.<br/><img src='/images/crafts/epidemies.png'>"
collection: crafting
teaser: crafts/epidemies.png
contribution: "Combines differential/agent‑based models with parameter inference to map R₀ and risk over time."
subtitle: "epidemiology · modeling"
tags: [epidemiology, modeling, inference, public health]
---

### Context
Vector‑borne disease risk varies with climate and habitat; field counts and cases are sparse and uncertain.

### Goal
Forecast vector abundance and epidemic potential with transparent, data‑informed models.

### Modeling stack
- SEI‑style compartments for vectors and hosts; optional agent‑based extensions for hotspots.
- Bayesian parameter inference with priors on temperature/rainfall response; posterior predictive checks.

```text
Env covariates ─► rate functions ─► SEI compartments ─► R₀, risk maps
                                 └► agent hotspots (optional)
```

### Data & validation
- Merge entomological surveys, weather reanalysis, and reported cases.
- Calibrate on historical windows; test on hold‑outs and new seasons; quantify uncertainty.

### Results
- Weekly risk maps with credible intervals; sensitivity shows temperature/rainfall as leading drivers.

### Deliverables
- Reproducible notebooks, map visualizations, and comparison against baseline statistical models.
