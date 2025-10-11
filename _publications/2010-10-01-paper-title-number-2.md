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

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>VIBE — Vision Model Benchmarking Platform (IHM’25 Demo)</title>
  <meta name="description" content="VIBE is an interactive benchmarking platform for vision models, with live video capture, model comparison, real-time metrics, and export capabilities. Demonstration for IHM’25, Toulouse, France." />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;800&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg: #0b0d12;
      --panel: #12161f;
      --ink: #eef2f7;
      --ink-dim: #b7c0cc;
      --accent: #7dd3fc;
      --accent-2: #a78bfa;
      --muted: #1a2030;
      --border: #1e2636;
      --code: #0e1320;
    }
    html, body { background: var(--bg); color: var(--ink); margin: 0; font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif; }
    a { color: var(--accent); text-decoration: none; }
    a:hover { text-decoration: underline; }
    .wrap { max-width: 1100px; margin: 0 auto; padding: 24px; }
    header.hero { padding: 42px 0 8px; }
    .tagline { color: var(--ink-dim); font-weight: 500; margin-top: 6px; }
    h1 { font-size: clamp(28px, 4vw, 44px); margin: 0 0 8px; letter-spacing: -0.02em; }
    .badgebar { display: flex; gap: 10px; flex-wrap: wrap; margin: 14px 0 0; }
    .badge { display: inline-flex; align-items: center; gap: 8px; padding: 6px 10px; border: 1px solid var(--border); border-radius: 999px; background: linear-gradient(180deg, #121826, #0e1422); color: var(--ink-dim); font-size: 12.5px; }
    .pill { background: linear-gradient(90deg, var(--accent), var(--accent-2)); color: #06101a; font-weight: 700; padding: 6px 10px; border-radius: 999px; font-size: 12.5px; }
    .authors { margin-top: 24px; color: var(--ink-dim); }
    .authors strong { color: var(--ink); }
    .affils { opacity: 0.9; }
    nav.nav { position: sticky; top: 0; z-index: 20; background: rgba(11,13,18,0.8); backdrop-filter: blur(6px); border-bottom: 1px solid var(--border); }
    nav.nav .wrap { display: flex; gap: 16px; align-items: center; }
    nav a { padding: 12px 10px; display: inline-block; color: var(--ink-dim); font-weight: 500; }
    nav a:hover { color: var(--ink); }
    section { margin: 38px 0; }
    h2 { margin: 0 0 14px; font-size: clamp(20px, 2.6vw, 28px); letter-spacing: -0.01em; }
    p { color: var(--ink); line-height: 1.6; }
    .grid { display: grid; gap: 16px; }
    .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .panel { background: var(--panel); border: 1px solid var(--border); border-radius: 14px; padding: 16px; }
    .cta { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 14px; }
    .btn { display: inline-flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 10px; border: 1px solid var(--border); background: var(--muted); color: var(--ink); font-weight: 600; }
    .btn.primary { background: linear-gradient(90deg, var(--accent), var(--accent-2)); color: #0c1020; }
    .kbd { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; background: var(--code); border: 1px solid var(--border); border-radius: 6px; padding: 2px 6px; }
    pre { background: var(--code); color: #e5e7eb; padding: 16px; border-radius: 12px; overflow: auto; border: 1px solid var(--border); }
    code { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    figure { margin: 0; }
    figcaption { color: var(--ink-dim); font-size: 13px; margin-top: 6px; }
    .kpi { display: grid; gap: 10px; grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .kpi .panel { padding: 14px; }
    .kpi h3 { margin: 0 0 4px; font-size: 14px; color: var(--ink-dim); font-weight: 600; }
    .kpi .v { font-size: 20px; font-weight: 800; }
    .footnotes { color: var(--ink-dim); font-size: 13px; }
    .small { font-size: 14px; color: var(--ink-dim); }
    .hr { height: 1px; background: var(--border); border: 0; margin: 26px 0; }
    .list { margin: 0; padding-left: 18px; }
    .chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .chip { border: 1px solid var(--border); padding: 4px 10px; border-radius: 999px; background: #0f1421; color: var(--ink-dim); font-size: 12px; }
    @media (max-width: 880px) {
      .grid-2, .grid-3, .kpi { grid-template-columns: 1fr; }
      .authors br { display: none; }
    }
  </style>
</head>
<body>

  <div class="wrap">
    <header class="hero">
      <h1>VIBE — Vision Model Benchmarking Platform</h1>
      <div class="tagline">Technical Annex &amp; Demo — <strong>IHM’25</strong>, Toulouse, November 4–7, 2025</div>

      <div class="badgebar">
        <span class="pill">IHM’25 Demo</span>
        <span class="badge">⏱️ Live / Streaming Ready</span>
        <span class="badge">🎥 Video ≤ 30s</span>
        <span class="badge">🧪 Reproducible</span>
      </div>

      <div class="authors">
        <p>
          <strong>Rayan El Idrissi Dafali</strong>, <strong>Alina Glushkova</strong><br/>
          <span class="affils">Mines Paris – PSL, Centre de Robotique, Paris, France</span>
        </p>
        <p class="small">
          Contact:&nbsp; <a href="mailto:rayan.el_idrissi_dafali@minesparis.psl.eu">rayan.el_idrissi_dafali@minesparis.psl.eu</a> •
          <a href="mailto:alina.glushkova@minesparis.psl.eu">alina.glushkova@minesparis.psl.eu</a>
        </p>
      </div>

      <div class="cta">
        <a class="btn primary" href="https://github.com/rayan-elidrissi/VIBE" target="_blank" rel="noopener">🔗 GitHub</a>
        <a class="btn" href="#demo">🎛️ Open Local Demo</a>
        <a class="btn" href="#install">⚙️ Installation</a>
        <a class="btn" href="#bibtex">📚 BibTeX</a>
      </div>
    </header>
  </div>

  <nav class="nav">
    <div class="wrap">
      <a href="#abstract">Abstract</a>
      <a href="#hardware">Hardware</a>
      <a href="#scenario">Demo Scenario</a>
      <a href="#features">Features</a>
      <a href="#install">Setup</a>
      <a href="#screens">Screenshots</a>
      <a href="#method">Method &amp; Architecture</a>
      <a href="#contingency">Contingency</a>
      <a href="#bibtex">BibTeX</a>
    </div>
  </nav>

  <main class="wrap">

    <section id="abstract" class="panel">
      <h2>Abstract</h2>
      <p>
        <strong>VIBE</strong> is an interactive platform to <em>compare</em> vision models on real-world videos,
        supporting live webcam capture or uploads, qualitative visualization, and <em>quantitative benchmarking</em> in real time.
        The IHM’25 demo focuses on <span class="kbd">latency</span>, <span class="kbd">stability</span>, and
        <span class="kbd">reproducibility</span> of results, with data export for further analysis.
      </p>
      <div class="grid grid-3" style="margin-top:12px;">
        <div class="panel"><div class="small">Modalities</div><div class="chips">
          <span class="chip">Video</span><span class="chip">Text (metrics)</span><span class="chip">Webcam</span>
        </div></div>
        <div class="panel"><div class="small">Supported Tasks</div><div class="chips">
          <span class="chip">Detection / Segmentation*</span><span class="chip">Tracking*</span><span class="chip">Captioning*</span>
        </div><div class="footnotes">* depending on installed models</div></div>
        <div class="panel"><div class="small">Constraints</div><div class="chips">
          <span class="chip">≤ 30 s</span><span class="chip">Streaming</span><span class="chip">CSV / JSON Export</span>
        </div></div>
      </div>
    </section>

    <section id="hardware" class="panel">
      <h2>Hardware Requirements</h2>
      <div class="grid grid-2">
        <div>
          <ul class="list">
            <li><strong>Space</strong>: table of at least 120×60 cm</li>
            <li><strong>Equipment</strong>: computer (recommended GPU <span class="kbd">RTX 3060 8GB</span>), adjustable webcam, display monitor</li>
            <li><strong>On-site needs</strong>: 2 power outlets, stable wired/Wi-Fi connection</li>
            <li><strong>Tip</strong>: keep the table clear for optimal tracking</li>
          </ul>
        </div>
        <div class="kpi">
          <div class="panel"><h3>Target Latency p95</h3><div class="v">≤ 150 ms</div></div>
          <div class="panel"><h3>Video Length</h3><div class="v">≤ 30 s</div></div>
          <div class="panel"><h3>Resolution</h3><div class="v">720p–1080p</div></div>
          <div class="panel"><h3>GPU</h3><div class="v">≥ RTX 3060</div></div>
        </div>
      </div>
    </section>

    <section id="scenario" class="panel">
      <h2>Demo Scenario (10–15 minutes per participant)</h2>
      <ol class="list">
        <li><strong>Introduction (2–3 min)</strong>: project goals and interface overview.</li>
        <li><strong>Interactive Demonstration (5–7 min)</strong>:
          <ul class="list">
            <li>Live capture or upload of a short video (≤ 30 s)</li>
            <li>Model and metric selection</li>
            <li>Visualization and performance comparison</li>
          </ul>
        </li>
        <li><strong>Discussion &amp; Feedback (3–5 min)</strong>: use cases, advanced features, improvement suggestions.</li>
      </ol>
    </section>

    <section id="features" class="panel">
      <h2>Key Features</h2>
      <ul class="list">
        <li>🎥 <strong>Live or Uploaded Video</strong> (≤ 30 s)</li>
        <li>⚙️ <strong>Multi-model configuration</strong> with adjustable parameters</li>
        <li>📊 <strong>Real-time metrics</strong> (accuracy, latency, spatio-temporal coherence)</li>
        <li>📦 <strong>Result export</strong> (CSV/JSON) for offline analysis</li>
        <li>🧩 <strong>Plugin system</strong> for custom models</li>
      </ul>
    </section>

    <section id="install" class="panel">
      <h2>Installation &amp; Launch</h2>
      <p><strong>Clone and create environment</strong></p>
      <pre><code>git clone https://github.com/rayan-elidrissi/VIBE.git
cd VIBE
conda create -n vibe python=3.10 -y
conda activate vibe
pip install -r requirements.txt
</code></pre>
      <p><strong>Run the local interface</strong></p>
      <pre><code>streamlit run app.py
# then open http://localhost:8501</code></pre>

      <div class="hr"></div>
      <div id="demo">
        <h3>Quick Demo</h3>
        <ol class="list">
          <li>Drag &amp; drop a short video (or activate webcam).</li>
          <li>Select models and metrics to evaluate.</li>
          <li>Compare outputs and export results.</li>
        </ol>
      </div>
    </section>

    <section id="screens">
      <h2>Screenshots</h2>
      <div class="grid grid-2">
        <figure class="panel">
          <img src="assets/upload.png" alt="Upload interface" style="width:100%; border-radius:10px;" />
          <figcaption>Upload interface (drag-and-drop zone, ≤ 30 s videos)</figcaption>
        </figure>
        <figure class="panel">
          <img src="assets/models.png" alt="Model selection" style="width:100%; border-radius:10px;" />
          <figcaption>Model selection and configuration panel</figcaption>
        </figure>
        <figure class="panel">
          <img src="assets/metrics.png" alt="Metrics dashboard" style="width:100%; border-radius:10px;" />
          <figcaption>Real-time performance metrics dashboard</figcaption>
        </figure>
        <figure class="panel">
          <img src="assets/dashboard.png" alt="Dashboard overview" style="width:100%; border-radius:10px;" />
          <figcaption>Unified dashboard showing results, comparisons, and analysis</figcaption>
        </figure>
      </div>
    </section>

    <section id="method" class="panel">
      <h2>Method &amp; Architecture</h2>
      <div class="grid grid-2">
        <div>
          <h3>Pipeline</h3>
          <ul class="list">
            <li>Video acquisition (webcam/upload)</li>
            <li>Preprocessing and normalization</li>
            <li>Multi-model inference (PyTorch/ONNX)</li>
            <li>Metric computation and aggregation</li>
            <li>Visualization and export (CSV/JSON)</li>
          </ul>
          <div class="chips" style="margin-top:8px;">
            <span class="chip">Backend: PyTorch + FastAPI*</span>
            <span class="chip">Frontend: Streamlit</span>
            <span class="chip">Model Plugins</span>
          </div>
          <div class="footnotes" style="margin-top:6px;">* depending on repo configuration</div>
        </div>
        <div>
          <h3>Objectives &amp; Evaluation</h3>
          <ul class="list">
            <li><strong>Latency</strong>: target p95 ≤ 150 ms on RTX 3060</li>
            <li><strong>Quality</strong>: standard metrics + temporal consistency</li>
            <li><strong>Cost</strong>: measure cost per video minute (goal &lt; €0.05)</li>
            <li><strong>Reproducibility</strong>: fixed seeds &amp; evaluation scripts</li>
          </ul>
        </div>
      </div>

      <div class="hr"></div>

      <h3>Qualitative Comparisons</h3>
      <p class="small">Reserved slots for “Model A vs. Model B” comparisons. Replace with your GIFs/videos.</p>
      <div class="grid grid-3">
        <div class="panel"><div class="small">Model A</div><img src="assets/placeholder_a.jpg" alt="A" style="width:100%; border-radius:8px;" /></div>
        <div class="panel"><div class="small">Model B</div><img src="assets/placeholder_b.jpg" alt="B" style="width:100%; border-radius:8px;" /></div>
        <div class="panel"><div class="small">Ground Truth</div><img src="assets/placeholder_gt.jpg" alt="GT" style="width:100%; border-radius:8px;" /></div>
      </div>
    </section>

    <section id="contingency" class="panel">
      <h2>Contingency Measures</h2>
      <ul class="list">
        <li>🎞️ Pre-recorded videos in case the webcam fails</li>
        <li>🖥️ Local offline mode if the network is unstable</li>
        <li>📝 Printed documentation covering core features</li>
      </ul>
    </section>

    <section id="checklist" class="panel">
      <h2>Pre-demo Checklist (blunt &amp; practical)</h2>
      <ul class="list">
        <li>Network tested (or offline fallback ready)</li>
        <li>Two test videos: <em>simple</em> &amp; <em>OOD</em></li>
        <li>Server running (<span class="kbd">streamlit run app.py</span>)</li>
        <li>Printed quick-start sheet available on the table</li>
      </ul>
    </section>

    <section id="bibtex" class="panel">
      <h2>Reference &amp; BibTeX</h2>
      <p><strong>Short reference</strong><br/>
        R. El Idrissi Dafali, A. Glushkova, <em>“VIBE: Vision Model Benchmarking Platform”</em>, Extended Proceedings of the 36th Francophone Conference on Human-Computer Interaction (IHM’25), Toulouse, France, 2025.
      </p>
      <pre><code>@inproceedings{vibe_ihm25_demo,
  title     = {VIBE: Vision Model Benchmarking Platform},
  author    = {El Idrissi Dafali, Rayan and Glushkova, Alina},
  booktitle = {Extended Proceedings of the 36th Francophone Conference on Human-Computer Interaction (IHM'25)},
  address   = {Toulouse, France},
  year      = {2025},
  note      = {Demonstration}
}</code></pre>
    </section>

    <section id="links" class="panel">
      <h2>Links</h2>
      <ul class="list">
        <li>GitHub repository: <a href="https://github.com/rayan-elidrissi/VIBE" target="_blank" rel="noopener">rayan-elidrissi/VIBE</a></li>
      </ul>
    </section>

    <section id="license" class="panel">
      <h2>License</h2>
      <p>MIT (default for the repository). Adjust if needed.</p>
    </section>

    <p class="small">© 2025 — Mines Paris – PSL, Centre de Robotique</p>
  </main>

</body>
</html>
