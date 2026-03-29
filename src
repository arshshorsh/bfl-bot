<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BFL ESPORTS</title>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;900&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #050508;
    --surface: #0c0c14;
    --panel: #10101c;
    --border: #1e1e30;
    --accent: #ff3c00;
    --accent2: #ffd700;
    --text: #e8e8f0;
    --muted: #5a5a7a;
    --online: #00ff88;
    --danger: #ff1744;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Barlow Condensed', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background: 
      repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,60,0,0.015) 40px, rgba(255,60,0,0.015) 41px),
      repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,60,0,0.015) 40px, rgba(255,60,0,0.015) 41px);
    pointer-events: none;
    z-index: 0;
  }

  /* NAVBAR */
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(5,5,8,0.95);
    border-bottom: 1px solid var(--border);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 60px;
  }

  .nav-logo {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.8rem;
    letter-spacing: 4px;
    color: var(--accent);
    text-shadow: 0 0 20px rgba(255,60,0,0.5);
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .nav-logo span { color: var(--text); }

  .nav-tabs {
    display: flex;
    gap: 0;
    height: 100%;
  }

  .nav-tab {
    padding: 0 1.5rem;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    cursor: pointer;
    color: var(--muted);
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
    position: relative;
  }

  .nav-tab:hover { color: var(--text); }
  .nav-tab.active { color: var(--accent); border-bottom-color: var(--accent); }

  .nav-status {
    display: flex;
    align-items: center;
    gap: 8px;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    color: var(--online);
  }

  .pulse {
    width: 8px; height: 8px;
    background: var(--online);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
    50% { box-shadow: 0 0 0 6px rgba(0,255,136,0); }
  }

  /* SECTIONS */
  .section { display: none; padding: 2rem; animation: fadeIn 0.3s ease; }
  .section.active { display: block; }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* HERO */
  .hero {
    position: relative;
    text-align: center;
    padding: 5rem 2rem;
    overflow: hidden;
    margin-bottom: 3rem;
  }

  .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,60,0,0.08) 0%, transparent 70%);
  }

  .hero-tag {
    display: inline-block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    letter-spacing: 4px;
    color: var(--accent);
    border: 1px solid var(--accent);
    padding: 4px 16px;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  .hero h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(4rem, 12vw, 9rem);
    line-height: 0.9;
    letter-spacing: 8px;
    color: var(--text);
    text-shadow: 0 0 60px rgba(255,60,0,0.3);
    position: relative;
  }

  .hero h1 .highlight { color: var(--accent); }

  .hero-sub {
    font-size: 1rem;
    letter-spacing: 6px;
    color: var(--muted);
    text-transform: uppercase;
    margin-top: 1rem;
    font-weight: 600;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
  }

  .hero-stat { text-align: center; }
  .hero-stat .num {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.8rem;
    color: var(--accent);
    display: block;
  }
  .hero-stat .label {
    font-size: 0.7rem;
    letter-spacing: 3px;
    color: var(--muted);
    text-transform: uppercase;
  }

  /* SECTION HEADERS */
  .sec-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .sec-header h2 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2.2rem;
    letter-spacing: 4px;
    color: var(--text);
  }

  .sec-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--accent), transparent);
  }

  .sec-badge {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    color: var(--accent);
    border: 1px solid rgba(255,60,0,0.3);
    padding: 3px 10px;
    letter-spacing: 2px;
  }

  /* ROSTER */
  .roster-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  .member-card {
    background: var(--panel);
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
    cursor: default;
  }

  .member-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 3px; height: 100%;
    background: var(--accent);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .member-card:hover { background: #13131f; }
  .member-card:hover::before { opacity: 1; }

  .member-top {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .member-avatar {
    width: 52px; height: 52px;
    background: var(--border);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.4rem;
    color: var(--accent);
    position: relative;
    flex-shrink: 0;
  }

  .member-avatar .status-dot {
    position: absolute;
    bottom: -2px; right: -2px;
    width: 10px; height: 10px;
    border-radius: 50%;
    border: 2px solid var(--panel);
  }

  .online-dot { background: var(--online); }
  .offline-dot { background: var(--muted); }

  .member-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

  .member-role {
    font-size: 0.7rem;
    letter-spacing: 2px;
    color: var(--accent);
    text-transform: uppercase;
    font-weight: 700;
  }

  .member-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }

  .mstat { text-align: center; }
  .mstat .v {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.3rem;
    color: var(--text);
    display: block;
  }
  .mstat .k {
    font-size: 0.6rem;
    letter-spacing: 1px;
    color: var(--muted);
    text-transform: uppercase;
  }

  .rank-badge {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    padding: 2px 8px;
    letter-spacing: 1px;
    display: inline-block;
    margin-top: 0.5rem;
  }

  .diamond { background: rgba(185,242,255,0.1); color: #b9f2ff; border: 1px solid #b9f2ff; }
  .platinum { background: rgba(150,210,220,0.1); color: #96d2dc; border: 1px solid #96d2dc; }
  .gold { background: rgba(255,215,0,0.1); color: var(--accent2); border: 1px solid var(--accent2); }

  /* MATCHES */
  .match-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); }

  .match-row {
    background: var(--panel);
    display: grid;
    grid-template-columns: 80px 1fr auto auto;
    align-items: center;
    gap: 1.5rem;
    padding: 1.2rem 1.5rem;
    transition: background 0.2s;
  }

  .match-row:hover { background: #13131f; }

  .match-result {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.6rem;
    letter-spacing: 2px;
    text-align: center;
  }

  .win { color: var(--online); }
  .loss { color: var(--danger); }
  .draw { color: var(--muted); }

  .match-info .map-name {
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .match-info .match-meta {
    font-size: 0.75rem;
    color: var(--muted);
    font-family: 'Share Tech Mono', monospace;
    margin-top: 2px;
  }

  .match-score {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 4px;
    text-align: center;
    min-width: 80px;
  }

  .match-type {
    font-size: 0.65rem;
    letter-spacing: 2px;
    color: var(--muted);
    text-transform: uppercase;
    font-family: 'Share Tech Mono', monospace;
    text-align: right;
    min-width: 80px;
  }

  /* LEADERBOARD */
  .lb-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid var(--border);
  }

  .lb-table th {
    background: var(--surface);
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    padding: 1rem 1.5rem;
    text-align: left;
    font-weight: 700;
    border-bottom: 1px solid var(--border);
  }

  .lb-table td {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid rgba(30,30,48,0.5);
    font-size: 0.95rem;
    font-weight: 600;
    vertical-align: middle;
  }

  .lb-table tr { background: var(--panel); transition: background 0.2s; }
  .lb-table tr:hover { background: #13131f; }

  .lb-table tr:nth-child(1) td:first-child { color: var(--accent2); }
  .lb-table tr:nth-child(2) td:first-child { color: #aaa; }
  .lb-table tr:nth-child(3) td:first-child { color: #cd7f32; }

  .pos {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    width: 40px;
    text-align: center;
  }

  .lb-name {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
  }

  .bar-wrap {
    width: 120px;
    height: 4px;
    background: var(--border);
    border-radius: 0;
    overflow: hidden;
  }

  .bar {
    height: 100%;
    background: linear-gradient(to right, var(--accent), #ff6a00);
    border-radius: 0;
    transition: width 1s ease;
  }

  /* RECRUITMENT */
  .recruit-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .recruit-panel {
    background: var(--panel);
    border: 1px solid var(--border);
    padding: 2rem;
    position: relative;
  }

  .recruit-panel h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.6rem;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
    color: var(--accent);
  }

  .req-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; }
  .req-list li {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    font-size: 0.9rem;
    color: var(--text);
    font-weight: 600;
  }

  .req-list li::before {
    content: '//';
    color: var(--accent);
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.75rem;
    flex-shrink: 0;
  }

  .apply-form { display: flex; flex-direction: column; gap: 1rem; }

  .form-group label {
    display: block;
    font-size: 0.7rem;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 6px;
    font-weight: 700;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    background: var(--bg);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 0.7rem 1rem;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    outline: none;
    transition: border-color 0.2s;
    appearance: none;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: var(--accent);
  }

  .form-group textarea { resize: vertical; min-height: 80px; }

  .btn-submit {
    background: var(--accent);
    color: #fff;
    border: none;
    padding: 1rem 2rem;
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 4px;
    cursor: pointer;
    text-transform: uppercase;
    transition: all 0.2s;
    width: 100%;
    margin-top: 0.5rem;
  }

  .btn-submit:hover {
    background: #ff5500;
    box-shadow: 0 0 20px rgba(255,60,0,0.4);
  }

  .open-tag {
    display: inline-block;
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    letter-spacing: 2px;
    padding: 3px 10px;
    background: rgba(0,255,136,0.08);
    color: var(--online);
    border: 1px solid rgba(0,255,136,0.3);
    margin-bottom: 1rem;
  }

  .role-cards { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 1.5rem; }

  .role-card {
    background: var(--bg);
    border: 1px solid var(--border);
    padding: 0.8rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .role-name {
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 0.9rem;
  }

  .role-slots {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.7rem;
    color: var(--accent);
  }

  /* HOME */
  .home-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .news-list { display: flex; flex-direction: column; gap: 1px; background: var(--border); }

  .news-item {
    background: var(--panel);
    padding: 1.5rem;
    display: flex;
    gap: 1.5rem;
    transition: background 0.2s;
    cursor: default;
  }

  .news-item:hover { background: #13131f; }

  .news-date {
    font-family: 'Share Tech Mono', monospace;
    font-size: 0.65rem;
    color: var(--accent);
    letter-spacing: 2px;
    white-space: nowrap;
    margin-top: 4px;
  }

  .news-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.2rem;
    letter-spacing: 2px;
    margin-bottom: 4px;
  }

  .news-body {
    font-size: 0.85rem;
    color: var(--muted);
    line-height: 1.5;
    font-weight: 400;
  }

  .sidebar-panel {
    background: var(--panel);
    border: 1px solid var(--border);
    padding: 1.5rem;
    margin-bottom: 1rem;
  }

  .sidebar-panel h4 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1rem;
    letter-spacing: 3px;
    color: var(--muted);
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  .mini-match {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border);
    font-size: 0.8rem;
    font-weight: 700;
  }

  .mini-match:last-child { border-bottom: none; }

  .activity-item {
    display: flex;
    gap: 0.8rem;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(30,30,48,0.5);
    font-size: 0.8rem;
    color: var(--muted);
  }

  .activity-item:last-child { border-bottom: none; }

  .activity-icon { color: var(--accent); font-family: 'Share Tech Mono', monospace; font-size: 0.7rem; }

  @media (max-width: 768px) {
    .recruit-grid, .home-grid { grid-template-columns: 1fr; }
    .match-row { grid-template-columns: 60px 1fr; }
    .match-score, .match-type { display: none; }
    nav { padding: 0 1rem; }
    .nav-status { display: none; }
    .hero h1 { font-size: 3.5rem; }
    .hero-stats { gap: 1.5rem; }
  }
</style>
</head>
<body>

<nav>
  <div class="nav-logo">◈ <span>BFL</span> ESPORTS</div>
  <div class="nav-tabs">
    <div class="nav-tab active" onclick="switchTab('home')">Home</div>
    <div class="nav-tab" onclick="switchTab('roster')">Roster</div>
    <div class="nav-tab" onclick="switchTab('matches')">Matches</div>
    <div class="nav-tab" onclick="switchTab('leaderboard')">Leaderboard</div>
    <div class="nav-tab" onclick="switchTab('recruit')">Recruit</div>
  </div>
  <div style="display:flex;align-items:center;gap:1.5rem;">
    <a href="https://discord.gg/fa7wBzNW" target="_blank" style="display:flex;align-items:center;gap:8px;font-family:'Share Tech Mono',monospace;font-size:0.75rem;color:#5865F2;text-decoration:none;border:1px solid rgba(88,101,242,0.4);padding:5px 14px;transition:all 0.2s;" onmouseover="this.style.background='rgba(88,101,242,0.1)'" onmouseout="this.style.background='transparent'">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
      DISCORD
    </a>
    <div class="nav-status"><div class="pulse"></div>SERVER ONLINE</div>
  </div>
</nav>

<!-- HOME -->
<div id="home" class="section active">
  <div class="hero">
    <div class="hero-tag">Rainbow Six Siege · Competitive Clan</div>
    <h1><span class="highlight">BFL</span> ESPORTS</h1>
    <div class="hero-sub">No Mercy · No Retreat · All Angles</div>
    <div class="hero-stats">
      <div class="hero-stat"><span class="num">12</span><span class="label">Members</span></div>
      <div class="hero-stat"><span class="num">84%</span><span class="label">Win Rate</span></div>
      <div class="hero-stat"><span class="num">1.87</span><span class="label">Avg KD</span></div>
      <div class="hero-stat"><span class="num">#3</span><span class="label">Region Rank</span></div>
    </div>
  </div>

  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="home-grid">
      <div>
        <div class="sec-header">
          <h2>ANNOUNCEMENTS</h2>
          <div class="sec-line"></div>
          <div class="sec-badge">LATEST</div>
        </div>
        <div class="news-list">
          <div class="news-item">
            <div class="news-date">MAR 29<br>2026</div>
            <div>
              <div class="news-title">Season 9 Roster Locked In</div>
              <div class="news-body">After tryouts, the final 6 are confirmed. Scrim schedule drops tomorrow. No changes until playoffs.</div>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">MAR 25<br>2026</div>
            <div>
              <div class="news-title">ESL League Registration Complete</div>
              <div class="news-body">We're in Group B this split. First match is April 5 vs VORTEX. All players review the VOD pack in Discord.</div>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">MAR 20<br>2026</div>
            <div>
              <div class="news-title">New Recruit Trials — 3 Slots Open</div>
              <div class="news-body">Looking for IGL-capable Plat 2+ players. Apply via the Recruit tab. Trials run April 1–3.</div>
            </div>
          </div>
          <div class="news-item">
            <div class="news-date">MAR 15<br>2026</div>
            <div>
              <div class="news-title">GG — Tournament Runner-Up Finish</div>
              <div class="news-body">We took 2nd in the Siege Open Cup. Lost on Villa in OT. We're coming back next split. Rematch incoming.</div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="sidebar-panel">
          <h4>Recent Results</h4>
          <div class="mini-match"><span>vs VORTEX</span><span class="win">W 4–2</span></div>
          <div class="mini-match"><span>vs HEXCLAN</span><span class="win">W 4–1</span></div>
          <div class="mini-match"><span>vs NIGHTFX</span><span class="loss">L 2–4</span></div>
          <div class="mini-match"><span>vs 0GRAVITY</span><span class="win">W 4–3</span></div>
          <div class="mini-match"><span>vs RDRUSH</span><span class="draw">D 3–3</span></div>
        </div>
        <div class="sidebar-panel">
          <h4>Activity Feed</h4>
          <div class="activity-item"><span class="activity-icon">//</span><span><b>Ghost</b> went 24/3 on Clubhouse</span></div>
          <div class="activity-item"><span class="activity-icon">//</span><span><b>Wraith</b> ranked up to Diamond 2</span></div>
          <div class="activity-item"><span class="activity-icon">//</span><span>Scrim vs APEX_EU scheduled</span></div>
          <div class="activity-item"><span class="activity-icon">//</span><span><b>Cipher</b> joined the roster</span></div>
          <div class="activity-item"><span class="activity-icon">//</span><span>New strat doc uploaded to Discord</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ROSTER -->
<div id="roster" class="section">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="sec-header">
      <h2>ROSTER</h2>
      <div class="sec-line"></div>
      <div class="sec-badge" id="roster-badge">LOADING...</div>
    </div>
    <div id="roster-grid" class="roster-grid">
      <div style="grid-column:1/-1;padding:3rem;text-align:center;color:var(--muted);font-family:'Share Tech Mono',monospace;font-size:0.85rem;letter-spacing:2px;">
        // FETCHING MEMBERS FROM DISCORD...
      </div>
    </div>
  </div>
</div>

<!-- MATCHES -->
<div id="matches" class="section">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="sec-header">
      <h2>MATCH HISTORY</h2>
      <div class="sec-line"></div>
      <div class="sec-badge">LAST 10</div>
    </div>
    <div class="match-list">
      <div class="match-row" style="background:var(--surface); pointer-events:none;">
        <div style="font-size:0.7rem;letter-spacing:3px;color:var(--muted);font-weight:700;text-transform:uppercase;">Result</div>
        <div style="font-size:0.7rem;letter-spacing:3px;color:var(--muted);font-weight:700;text-transform:uppercase;">Map / Opponent</div>
        <div style="font-size:0.7rem;letter-spacing:3px;color:var(--muted);font-weight:700;text-transform:uppercase;text-align:center;">Score</div>
        <div style="font-size:0.7rem;letter-spacing:3px;color:var(--muted);font-weight:700;text-transform:uppercase;text-align:right;">Mode</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Clubhouse · vs VORTEX</div><div class="match-meta">MAR 28 · ESL League</div></div>
        <div class="match-score">4–2</div>
        <div class="match-type">Competitive</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Villa · vs HEXCLAN</div><div class="match-meta">MAR 26 · Scrim</div></div>
        <div class="match-score">4–1</div>
        <div class="match-type">Scrim</div>
      </div>
      <div class="match-row">
        <div class="match-result loss">LOSS</div>
        <div class="match-info"><div class="map-name">Border · vs NIGHTFX</div><div class="match-meta">MAR 24 · ESL League</div></div>
        <div class="match-score">2–4</div>
        <div class="match-type">Competitive</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Kafe · vs 0GRAVITY</div><div class="match-meta">MAR 21 · Scrim</div></div>
        <div class="match-score">4–3</div>
        <div class="match-type">Scrim</div>
      </div>
      <div class="match-row">
        <div class="match-result draw">DRAW</div>
        <div class="match-info"><div class="map-name">Coastline · vs RDRUSH</div><div class="match-meta">MAR 19 · Ranked</div></div>
        <div class="match-score">3–3</div>
        <div class="match-type">Ranked</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Oregon · vs APEXEU</div><div class="match-meta">MAR 17 · Scrim</div></div>
        <div class="match-score">4–0</div>
        <div class="match-type">Scrim</div>
      </div>
      <div class="match-row">
        <div class="match-result loss">LOSS</div>
        <div class="match-info"><div class="map-name">Consulate · vs COLDBLOOD</div><div class="match-meta">MAR 15 · Tournament</div></div>
        <div class="match-score">3–4</div>
        <div class="match-type">Tournament</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Chalet · vs IRONWOLF</div><div class="match-meta">MAR 12 · ESL League</div></div>
        <div class="match-score">4–1</div>
        <div class="match-type">Competitive</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Theme Park · vs DELTA</div><div class="match-meta">MAR 10 · Scrim</div></div>
        <div class="match-score">4–2</div>
        <div class="match-type">Scrim</div>
      </div>
      <div class="match-row">
        <div class="match-result win">WIN</div>
        <div class="match-info"><div class="map-name">Bank · vs SHARD</div><div class="match-meta">MAR 08 · Ranked</div></div>
        <div class="match-score">4–1</div>
        <div class="match-type">Ranked</div>
      </div>
    </div>
  </div>
</div>

<!-- LEADERBOARD -->
<div id="leaderboard" class="section">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="sec-header">
      <h2>LEADERBOARD</h2>
      <div class="sec-line"></div>
      <div class="sec-badge">SEASON 9</div>
    </div>
    <table class="lb-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Player</th>
          <th>K/D</th>
          <th>HS%</th>
          <th>Win%</th>
          <th>Matches</th>
          <th>Rating</th>
          <th>Performance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="pos">1</td>
          <td class="lb-name">Ghost</td>
          <td>2.41</td>
          <td>68%</td>
          <td>79%</td>
          <td>87</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">96.4</td>
          <td><div class="bar-wrap"><div class="bar" style="width:96%"></div></div></td>
        </tr>
        <tr>
          <td class="pos">2</td>
          <td class="lb-name">Wraith</td>
          <td>1.98</td>
          <td>61%</td>
          <td>72%</td>
          <td>74</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">88.1</td>
          <td><div class="bar-wrap"><div class="bar" style="width:88%"></div></div></td>
        </tr>
        <tr>
          <td class="pos">3</td>
          <td class="lb-name">Nuke</td>
          <td>1.89</td>
          <td>63%</td>
          <td>70%</td>
          <td>66</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">82.5</td>
          <td><div class="bar-wrap"><div class="bar" style="width:82%"></div></div></td>
        </tr>
        <tr>
          <td class="pos">4</td>
          <td class="lb-name">Cipher</td>
          <td>1.65</td>
          <td>58%</td>
          <td>68%</td>
          <td>43</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">76.2</td>
          <td><div class="bar-wrap"><div class="bar" style="width:76%"></div></div></td>
        </tr>
        <tr>
          <td class="pos">5</td>
          <td class="lb-name">Vex</td>
          <td>1.72</td>
          <td>54%</td>
          <td>65%</td>
          <td>91</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">74.8</td>
          <td><div class="bar-wrap"><div class="bar" style="width:74%"></div></div></td>
        </tr>
        <tr>
          <td class="pos">6</td>
          <td class="lb-name">Zenith</td>
          <td>1.44</td>
          <td>49%</td>
          <td>58%</td>
          <td>38</td>
          <td style="color:var(--accent);font-weight:700;font-family:'Share Tech Mono',monospace">61.3</td>
          <td><div class="bar-wrap"><div class="bar" style="width:61%"></div></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<!-- RECRUITMENT -->
<div id="recruit" class="section">
  <div style="max-width: 1200px; margin: 0 auto;">
    <div class="sec-header">
      <h2>RECRUITMENT</h2>
      <div class="sec-line"></div>
      <div class="sec-badge">OPEN</div>
    </div>
    <div class="recruit-grid">
      <div class="recruit-panel">
        <div class="open-tag">// RECRUITING NOW</div>
        <h3>OPEN ROLES</h3>
        <div class="role-cards">
          <div class="role-card">
            <div class="role-name">Entry Fragger</div>
            <div class="role-slots">2 SLOTS OPEN</div>
          </div>
          <div class="role-card">
            <div class="role-name">Flex / Support</div>
            <div class="role-slots">1 SLOT OPEN</div>
          </div>
          <div class="role-card">
            <div class="role-name">IGL (Backup)</div>
            <div class="role-slots">1 SLOT OPEN</div>
          </div>
        </div>
        <h3>REQUIREMENTS</h3>
        <ul class="req-list">
          <li>Platinum 2 or higher (current season)</li>
          <li>K/D 1.5+ in competitive</li>
          <li>Active voice comms (Discord required)</li>
          <li>Available for scrims 3× per week</li>
          <li>Age 16+ and no toxic history</li>
          <li>Able to play multiple operators</li>
          <li>Consistent attendance to scheduled events</li>
        </ul>
      </div>

      <div class="recruit-panel">
        <h3>APPLY NOW</h3>
        <div class="apply-form">
          <div class="form-group">
            <label>Ubisoft Username</label>
            <input type="text" placeholder="YourName.R6">
          </div>
          <div class="form-group">
            <label>Discord Tag</label>
            <input type="text" placeholder="username#0000">
          </div>
          <div class="form-group">
            <label>Current Rank</label>
            <select>
              <option value="">— Select Rank —</option>
              <option>Platinum 2</option>
              <option>Platinum 1</option>
              <option>Diamond 3</option>
              <option>Diamond 2</option>
              <option>Diamond 1</option>
              <option>Champion</option>
            </select>
          </div>
          <div class="form-group">
            <label>Main Role</label>
            <select>
              <option value="">— Select Role —</option>
              <option>Entry Fragger</option>
              <option>Flex</option>
              <option>Support / Anchor</option>
              <option>IGL</option>
              <option>Roamer</option>
            </select>
          </div>
          <div class="form-group">
            <label>Why do you want to join?</label>
            <textarea placeholder="Short answer. We don't need a novel."></textarea>
          </div>
          <button class="btn-submit" onclick="submitApp()">SUBMIT APPLICATION</button>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  // ============================================================
  // PASTE YOUR RAILWAY URL HERE after deploying the bot
  // Example: const API_URL = 'https://bfl-bot.up.railway.app';
  // ============================================================
  const API_URL = 'YOUR_RAILWAY_URL_HERE';

  function switchTab(name) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(name).classList.add('active');
    const tabs = ['home','roster','matches','leaderboard','recruit'];
    document.querySelectorAll('.nav-tab')[tabs.indexOf(name)].classList.add('active');
    if (name === 'roster') loadRoster();
  }

  function getInitials(name) {
    return name.slice(0, 2).toUpperCase();
  }

  function getStatusColor(status) {
    if (status === 'online') return 'background:#00ff88';
    if (status === 'dnd') return 'background:#ff1744';
    if (status === 'idle') return 'background:#ffd700';
    return 'background:#5a5a7a';
  }

  function getStatusLabel(status) {
    if (status === 'online') return 'ONLINE';
    if (status === 'dnd') return 'DND';
    if (status === 'idle') return 'IDLE';
    return 'OFFLINE';
  }

  async function loadRoster() {
    const grid = document.getElementById('roster-grid');
    const badge = document.getElementById('roster-badge');

    if (API_URL === 'YOUR_RAILWAY_URL_HERE') {
      grid.innerHTML = `<div style="grid-column:1/-1;padding:3rem;text-align:center;color:var(--accent);font-family:'Share Tech Mono',monospace;font-size:0.85rem;letter-spacing:2px;">
        // SET YOUR RAILWAY URL IN THE WEBSITE CODE TO CONNECT DISCORD
      </div>`;
      return;
    }

    grid.innerHTML = `<div style="grid-column:1/-1;padding:3rem;text-align:center;color:var(--muted);font-family:'Share Tech Mono',monospace;font-size:0.85rem;letter-spacing:2px;">
      // FETCHING MEMBERS FROM DISCORD...
    </div>`;

    try {
      const res = await fetch(`${API_URL}/members`);
      const data = await res.json();

      if (!data.members || data.members.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;padding:3rem;text-align:center;color:var(--muted);font-family:'Share Tech Mono',monospace;">// NO MEMBERS WITH BFL ROLE FOUND</div>`;
        return;
      }

      badge.textContent = `${data.count} MEMBERS`;

      // Sort: online first
      const sorted = data.members.sort((a, b) => {
        const order = { online: 0, dnd: 1, idle: 2, offline: 3 };
        return (order[a.status] ?? 3) - (order[b.status] ?? 3);
      });

      grid.innerHTML = sorted.map(m => {
        const initials = getInitials(m.displayName);
        const subRoles = m.roles.length > 0 ? m.roles.slice(0, 2).join(' · ') : 'Member';
        return `
        <div class="member-card">
          <div class="member-top">
            <div class="member-avatar" style="padding:0;overflow:hidden;position:relative;">
              <img src="${m.avatar}" alt="${m.displayName}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none';this.nextSibling.style.display='flex'">
              <span style="display:none;width:100%;height:100%;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:1.4rem;color:var(--accent);">${initials}</span>
              <div class="status-dot" style="position:absolute;bottom:-2px;right:-2px;width:10px;height:10px;border-radius:50%;border:2px solid var(--panel);${getStatusColor(m.status)}"></div>
            </div>
            <div>
              <div class="member-name">${m.displayName}</div>
              <div class="member-role">${subRoles}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-top:0.5rem;">
            <span style="font-family:'Share Tech Mono',monospace;font-size:0.65rem;letter-spacing:2px;color:${m.status === 'offline' ? 'var(--muted)' : 'var(--online)'};">${getStatusLabel(m.status)}</span>
            <span style="font-family:'Share Tech Mono',monospace;font-size:0.6rem;color:var(--muted);letter-spacing:1px;">@${m.username}</span>
          </div>
        </div>`;
      }).join('');

    } catch (err) {
      grid.innerHTML = `<div style="grid-column:1/-1;padding:3rem;text-align:center;color:var(--danger);font-family:'Share Tech Mono',monospace;font-size:0.8rem;letter-spacing:2px;">
        // FAILED TO CONNECT TO BOT API<br><span style="color:var(--muted);font-size:0.7rem;margin-top:0.5rem;display:block">${err.message}</span>
      </div>`;
    }
  }

  function submitApp() {
    const btn = document.querySelector('.btn-submit');
    btn.textContent = '// APPLICATION SENT';
    btn.style.background = 'var(--online)';
    btn.style.color = '#000';
    setTimeout(() => {
      btn.textContent = 'SUBMIT APPLICATION';
      btn.style.background = 'var(--accent)';
      btn.style.color = '#fff';
    }, 3000);
  }

  // Auto-load roster if it's the active tab on page load
  window.addEventListener('load', () => {
    if (document.getElementById('roster').classList.contains('active')) loadRoster();
  });
</script>
</body>
</html>
