---
title: "Quantum Periodicity & Quantum Machine Learning"
excerpt: "Qiskit implementations and report on periodicity detection and QML.<br/><img src='/images/crafts/particule.png'>"
collection: crafting
teaser: crafts/quantum-computer.png
contribution: "Bridges theory to practice: oracles, inverse QFT circuits, and a QML survey with hybrid proposals."
subtitle: "quantum · QML"
tags: [quantum computing, qiskit, theory, machine learning]
---

### Purpose
Make quantum periodicity and QML concrete via executable circuits and a concise research report.

### Targets
- Implement periodicity detection with explicit oracle design and inverse QFT.
- Summarize QML optimization methods and outline a hybrid classical‑quantum scheme.

### Design
```text
Oracle f(x) with period r ─► QFT-based circuit ─► measurement ─► post‑processing to infer r
```

### Notebook contents
- Oracle construction, circuit diagrams, and statevector visualizations.
- Experiments with noise models and small‑device constraints.

### Report highlights
- Survey of gradient‑based, annealing, and quantum gradient descent approaches; complexity and practicality.
- Proposal for a hybrid loop with classical preconditioning and quantum fine‑tuning.

### Takeaways
- Clear didactic artifacts and a roadmap for small‑scale QML experiments.
