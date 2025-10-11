---
title: "VIBE : Video Interaction Benchmark Environment"
collection: publications
category: manuscripts
permalink: /publication/2010-10-01-paper-title-number-2
excerpt: 'This paper is about the number 2. The number 3 is left for future work.'
date: 2025-01-01
venue: "IHM’25, Extended Proceedings of the 36th Francophone Conference on Human-Computer Interaction"
authors: "Rayan El Idrissi Dafali, Alina Glushkova"
slidesurl: '/files/slides2.pdf'
paperurl: '/files/paper2.pdf'
citation: 'Your Name, You. (2010). &quot;Paper Title Number 2.&quot; <i>Journal 1</i>. 1(2).'
---

# 🧠 VIBE — Vision Model Benchmarking Platform
*Technical Annex & Demo — **IHM’25**, Toulouse, November 4–7, 2025*

> **VIBE** is an interactive platform to **compare** vision models on real-world videos, supporting live webcam capture or uploads, qualitative visualization, and **quantitative benchmarking** in real time. The IHM’25 demo focuses on **latency**, **stability**, and **reproducibility**, with data export for further analysis.

[🔗 GitHub](https://github.com/rayan-elidrissi/VIBE) • [⚙️ Installation](#installation--launch) • [📚 BibTeX](#reference--bibtex)

---

## Authors
**Rayan El Idrissi Dafali**, **Alina Glushkova**  
*Mines Paris – PSL, Centre de Robotique, Paris, France*  
Contact: <rayan.el_idrissi_dafali@minesparis.psl.eu> • <alina.glushkova@minesparis.psl.eu>

---

## Abstract
- **Modalities:** Video, Text (metrics), Webcam  
- **Supported Tasks (depending on installed models):** Detection/Segmentation, Tracking, Captioning  
- **Constraints:** ≤ 30 s clips, Streaming, CSV/JSON export

---

## Hardware Requirements
- **Space:** table ≥ 120×60 cm  
- **Equipment:** computer (recommended GPU `RTX 3060 8GB`), adjustable webcam, monitor  
- **On-site needs:** 2 power outlets, stable wired/Wi-Fi connection  
- **Tip:** keep the table clear for optimal tracking

**Targets**
- Target Latency p95: **≤ 150 ms**  
- Video Length: **≤ 30 s**  
- Resolution: **720p–1080p**  
- GPU: **≥ RTX 3060**

---

## Demo Scenario (10–15 minutes per participant)
1. **Introduction (2–3 min):** project goals and interface overview  
2. **Interactive Demonstration (5–7 min):**
   - Live capture or upload (≤ 30 s)
   - Select models and metrics
   - Visualize and compare performance
3. **Discussion & Feedback (3–5 min):** use cases, advanced features, improvement suggestions

---

## Key Features
- 🎥 **Live or Uploaded Video** (≤ 30 s)  
- ⚙️ **Multi-model configuration** with adjustable parameters  
- 📊 **Real-time metrics** (accuracy, latency, spatio-temporal coherence)  
- 📦 **Result export** (CSV/JSON) for offline analysis  
- 🧩 **Plugin system** for custom models

---

## Installation & Launch
**Clone and create environment**
```bash
git clone https://github.com/rayan-elidrissi/VIBE.git
cd VIBE
conda create -n vibe python=3.10 -y
conda activate vibe
pip install -r requirements.txt
