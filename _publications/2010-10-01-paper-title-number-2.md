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

[🔗 GitHub](https://github.com/rayan-elidrissi/VIBE) • [⚙️ Installation](#installation) • [📊 Results](#results) • [📚 Citation](#citation)

![Illustration of VIBE interface showing video processing and model outputs](images/vibe.png)

---

## Overview

VIBE is an interactive benchmarking platform that enables real-time evaluation of computer vision models through a unified interface. Supporting multiple input modalities (video upload, webcam streaming) and vision tasks (detection, segmentation, tracking, captioning), the system facilitates human-in-the-loop assessment under realistic conditions. While traditional benchmarks rely on offline evaluation, VIBE uniquely enables immediate comparative analysis of model performance, latency, and stability - addressing a critical gap in understanding how vision systems behave with actual users and real-world data streams. The platform enforces practical constraints (30-second video limit, streaming inference) while ensuring reproducibility through standardized CSV/JSON exports.

---

## How It Works
```mermaid
graph TD
    A[Video Input] --> |Webcam/Upload| B[Preprocessing]
    B --> C[Model Execution]
    C --> D[Metrics & Visualization]
    D --> E[Result Export]
    
    subgraph Input
    A --> |Live Capture| A1[Webcam Stream]
    A --> |File Upload| A2[Video File ≤30s]
    end
    
    subgraph Processing
    B --> B1[Frame Extraction]
    B --> B2[Resizing]
    B --> B3[Normalization]
    end
    
    subgraph Inference
    C --> C1[Parallel Model Loading]
    C --> C2[Sequential Processing]
    C --> C3[Performance Tracking]
    end
    
    subgraph Output
    D --> D1[Real-time Plots]
    D --> D2[Visual Overlays]
    E --> E1[CSV Export]
    E --> E2[JSON Export]
    end
```

---

## Results
### Interactive Results Dashboard

<div style="display: flex; gap: 20px;">
<div style="flex: 1;">

**Pre-uploaded Test Videos (5s)**  
- [🎥 Urban Street Scene](#) - People walking, cars moving
- [🎥 Sports Action](#) - Basketball game highlights  
- [🎥 Indoor Activity](#) - Kitchen cooking sequence
- [🎥 Nature Scene](#) - Wildlife in natural habitat
- [🎥 Crowd Scene](#) - Public gathering footage

*Click any video to run benchmarks*

</div>
<div style="flex: 1;">

**Model Performance Analysis**

| Model | Latency (ms) | mAP | Consistency | Memory |
|-------|--------------|-----|-------------|---------|
| Model A | 140 | 72.4% | 0.88 | 4.3 GB |
| Model B | 160 | 74.1% | 0.86 | 5.1 GB |
| Model C | 128 | 70.7% | 0.90 | 3.8 GB |

**Key Metrics**
- Average Processing Speed: 145ms/frame
- GPU Memory Peak: 5.1 GB
- Inference Stability: 0.88
- Detection Accuracy: 72.4% mAP

</div>
</div>

```bibtex
@inproceedings{elidrissi2025vibe,
    title={VIBE: Video Interaction Benchmark Environment},
    author={El Idrissi Dafali, Rayan and Glushkova, Alina},
    booktitle={Extended Proceedings of the 36th Francophone Conference on Human-Computer Interaction},
    year={2025},
    publisher={ACM},
    series={IHM '25}
}
```