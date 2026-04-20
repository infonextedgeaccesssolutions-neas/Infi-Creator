<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>InfiCreator — AI Video Automation Studio</title>
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#06060f;--sb:#09091a;--surf:#0f0f22;--surf2:#151530;--surf3:#1c1c38;
  --bdr:rgba(255,255,255,.07);--bdr2:rgba(255,255,255,.12);
  --txt:#ede9ff;--txt2:#7e7a9a;--txt3:#3d3a55;
  --acc:#7c3aed;--acc2:#9d5ff0;--ag:rgba(124,58,237,.14);
  --cyan:#06b6d4;--grn:#10b981;--amb:#f59e0b;--red:#ef4444;--pink:#ec4899;
  --lime:#a3e635;--sky:#38bdf8;
  /* Pipeline colors per step */
  --c1:#8b5cf6;--c2:#06b6d4;--c3:#10b981;--c4:#f59e0b;
  --c5:#ec4899;--c6:#38bdf8;--c7:#a3e635;--c8:#ff6b6b;
  --ff:'DM Sans',system-ui,sans-serif;
  --fd:'Syne',system-ui,sans-serif;
  --fm:'DM Mono',monospace;
  --r:14px;--rsm:9px;--rxs:6px;
  --sh:0 0 0 1px rgba(255,255,255,.05);
  --shl:0 20px 60px rgba(0,0,0,.4),0 0 0 1px rgba(255,255,255,.05);
}
html,body{height:100%;overflow:hidden;font-family:var(--ff);background:var(--bg);color:var(--txt);font-size:14px}
/* scrollbar */
::-webkit-scrollbar{width:4px;height:4px}
::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:2px}

/* ── LAYOUT ── */
.app{display:flex;height:100vh;overflow:hidden}
.sidebar{width:238px;min-width:238px;background:var(--sb);border-right:1px solid var(--bdr);display:flex;flex-direction:column;height:100vh;overflow:hidden;transition:width .2s,min-width .2s}
.sidebar.col{width:66px;min-width:66px}
.main{flex:1;display:flex;flex-direction:column;min-width:0;overflow:hidden}

/* SIDEBAR */
.sb-logo{padding:18px 14px 14px;display:flex;align-items:center;gap:10px;border-bottom:1px solid var(--bdr);flex-shrink:0}
.sb-logo-ico{width:30px;height:30px;border-radius:8px;background:linear-gradient(135deg,var(--acc),var(--pink));display:flex;align-items:center;justify-content:center;flex-shrink:0}
.sb-logo-name{font-family:var(--fd);font-size:14px;font-weight:800;letter-spacing:-.02em;white-space:nowrap;overflow:hidden}
.sb-logo-sub{font-size:9px;color:var(--txt3);letter-spacing:.06em;text-transform:uppercase;margin-top:1px}
.sb-user{padding:11px 13px;border-bottom:1px solid var(--bdr);display:flex;align-items:center;gap:9px;flex-shrink:0}
.sb-av{width:30px;height:30px;border-radius:50%;background:linear-gradient(135deg,var(--acc),var(--pink));display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#fff;flex-shrink:0}
.sb-uname{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sb-uplan{font-size:10px;color:var(--txt3)}
.sidebar.col .sb-logo-name,.sidebar.col .sb-logo-sub,.sidebar.col .sb-uname,.sidebar.col .sb-uplan,.sidebar.col .nav-label,.sidebar.col .nav-badge,.sidebar.col .nsec,.sidebar.col .pw-text{opacity:0;width:0;overflow:hidden;min-width:0}
.sb-nav{padding:9px;flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:1px}
.nsec{font-size:9px;font-weight:700;letter-spacing:.1em;color:var(--txt3);text-transform:uppercase;padding:9px 8px 3px;white-space:nowrap}
.ni{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:var(--rsm);cursor:pointer;color:var(--txt2);transition:all .13s;white-space:nowrap;position:relative}
.ni:hover{background:var(--surf2);color:var(--txt)}
.ni.active{background:linear-gradient(90deg,rgba(124,58,237,.2),rgba(124,58,237,.05));color:var(--txt)}
.ni.active::before{content:'';position:absolute;left:0;top:50%;transform:translateY(-50%);width:2px;height:18px;border-radius:0 2px 2px 0;background:var(--acc2)}
.nav-ico{font-size:15px;flex-shrink:0;width:19px;text-align:center}
.nav-label{font-size:12.5px;font-weight:500;flex:1}
.nav-badge{font-size:9px;border-radius:20px;padding:1px 7px;font-weight:700;white-space:nowrap}
.nav-badge.purple{background:var(--acc);color:#fff}
.nav-badge.green{background:rgba(163,230,53,.15);color:var(--lime);border:.5px solid rgba(163,230,53,.3)}
.nav-badge.cyan{background:rgba(6,182,212,.12);color:var(--cyan);border:.5px solid rgba(6,182,212,.25)}
.sb-bottom{padding:10px;border-top:1px solid var(--bdr);flex-shrink:0}
.plan-pill{background:linear-gradient(135deg,rgba(124,58,237,.15),rgba(236,72,153,.07));border:1px solid rgba(124,58,237,.25);border-radius:var(--rsm);padding:9px 11px;cursor:pointer}
.plan-pill:hover{border-color:rgba(124,58,237,.45)}
.pw-name{font-size:11.5px;font-weight:700;color:var(--txt)}
.pw-tag{font-size:9px;font-weight:700;border-radius:3px;padding:1px 6px;background:rgba(124,58,237,.3);color:var(--acc2);margin-left:5px}
.pw-bar{height:2px;background:rgba(255,255,255,.07);border-radius:2px;margin-top:7px;overflow:hidden}
.pw-fill{height:100%;border-radius:2px;background:linear-gradient(90deg,var(--acc),var(--pink))}
.pw-text{font-size:10px;color:var(--txt3);margin-top:5px}

/* TOPBAR */
.topbar{background:var(--surf);border-bottom:1px solid var(--bdr);padding:0 20px;height:60px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}
.tb-left{display:flex;align-items:center;gap:10px}
.tb-tog{background:none;border:1px solid var(--bdr2);border-radius:var(--rxs);padding:7px;cursor:pointer;color:var(--txt2);display:flex;transition:all .13s}
.tb-tog:hover{color:var(--txt);background:var(--surf2)}
.tb-title{font-family:var(--fd);font-size:15px;font-weight:700;letter-spacing:-.02em}
.tb-right{display:flex;align-items:center;gap:8px}
.tb-badge{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:10.5px;background:linear-gradient(135deg,rgba(163,230,53,.1),rgba(6,182,212,.08));border:.5px solid rgba(163,230,53,.25);color:var(--lime)}
.tb-btn{background:none;border:1px solid var(--bdr2);border-radius:var(--rsm);padding:5px 12px;cursor:pointer;font-family:var(--ff);font-size:12px;color:var(--txt2);display:flex;align-items:center;gap:5px;transition:all .13s}
.tb-btn:hover{border-color:var(--acc);color:var(--txt);background:var(--ag)}
.tb-btn.primary{background:var(--acc);color:#fff;border-color:var(--acc)}.tb-btn.primary:hover{background:var(--acc2)}

/* CONTENT */
.content{flex:1;overflow-y:auto;padding:0}
.panel{display:none;padding:24px}
.panel.active{display:block}

/* ══════════════════════════════════
   AUTOMATION PANEL
══════════════════════════════════ */

/* Hero */
.auto-hero{position:relative;background:linear-gradient(135deg,#0a0a20 0%,#0f0520 40%,#07101a 100%);border:1px solid var(--bdr2);border-radius:20px;padding:36px 40px;margin-bottom:22px;overflow:hidden}
.auto-hero::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 70% 50%,rgba(124,58,237,.12),transparent),radial-gradient(ellipse 50% 40% at 20% 80%,rgba(6,182,212,.08),transparent);pointer-events:none}
.auto-hero-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px;align-items:center;position:relative;z-index:1}
.hero-eyebrow{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px;background:rgba(163,230,53,.1);border:.5px solid rgba(163,230,53,.25);color:var(--lime);font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;margin-bottom:14px}
.hero-title{font-family:var(--fd);font-size:28px;font-weight:800;letter-spacing:-.04em;line-height:1.15;margin-bottom:12px}
.hero-title span{background:linear-gradient(135deg,var(--acc2),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:13.5px;color:var(--txt2);line-height:1.7;margin-bottom:20px}
.hero-bullets{display:flex;flex-direction:column;gap:6px}
.hero-bullet{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--txt2)}
.hero-bullet::before{content:'';width:5px;height:5px;border-radius:50%;background:var(--lime);flex-shrink:0;box-shadow:0 0 6px var(--lime)}
.hero-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}
.btn-run{padding:11px 22px;border-radius:var(--rsm);background:linear-gradient(135deg,var(--acc),var(--pink));color:#fff;border:none;cursor:pointer;font-family:var(--fd);font-size:14px;font-weight:700;letter-spacing:-.01em;display:inline-flex;align-items:center;gap:8px;transition:all .2s;box-shadow:0 4px 20px rgba(124,58,237,.35)}
.btn-run:hover{transform:translateY(-1px);box-shadow:0 8px 30px rgba(124,58,237,.45)}
.btn-run:active{transform:scale(.98)}
.btn-outline{padding:10px 18px;border-radius:var(--rsm);background:none;color:var(--txt2);border:1px solid var(--bdr2);cursor:pointer;font-family:var(--ff);font-size:13px;font-weight:500;display:inline-flex;align-items:center;gap:7px;transition:all .15s}
.btn-outline:hover{border-color:var(--acc2);color:var(--txt);background:var(--ag)}

/* Stats */
.hero-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.hero-stat{background:rgba(255,255,255,.04);border:1px solid var(--bdr);border-radius:12px;padding:16px 14px;text-align:center}
.hero-stat-val{font-family:var(--fd);font-size:24px;font-weight:800;letter-spacing:-.03em;line-height:1}
.hero-stat-lbl{font-size:11px;color:var(--txt2);margin-top:4px}
.hero-mini-tools{display:flex;flex-wrap:wrap;gap:7px;margin-top:16px}
.tool-chip{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:500;border:.5px solid}

/* PIPELINE */
.pipeline-section{margin-bottom:22px}
.section-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.section-title{font-family:var(--fd);font-size:16px;font-weight:700;letter-spacing:-.03em}
.section-sub{font-size:11.5px;color:var(--txt2);margin-top:2px}
.pipeline-flow{display:flex;align-items:stretch;gap:0;overflow-x:auto;padding-bottom:4px}
.pipeline-flow::-webkit-scrollbar{height:3px}
.pipeline-step{display:flex;align-items:stretch;flex-shrink:0}
.ps-card{background:var(--surf);border:1px solid var(--bdr);border-radius:14px;padding:16px 14px;width:138px;display:flex;flex-direction:column;gap:8px;cursor:pointer;transition:all .2s;position:relative;overflow:hidden}
.ps-card::before{content:'';position:absolute;inset:0;border-radius:14px;opacity:0;transition:opacity .25s}
.ps-card:hover::before,.ps-card.active::before{opacity:1}
.ps-card.active{border-color:var(--step-color,var(--acc))}
.ps-num{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:10px;font-weight:500;background:rgba(255,255,255,.06);color:var(--txt3);flex-shrink:0}
.ps-ico{font-size:26px;line-height:1}
.ps-tool{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--step-color,var(--txt3));margin-top:2px}
.ps-name{font-size:12.5px;font-weight:600;line-height:1.3}
.ps-desc{font-size:10.5px;color:var(--txt2);line-height:1.5;flex:1}
.ps-status{display:flex;align-items:center;gap:5px;font-size:10px;margin-top:auto;padding-top:6px;border-top:1px solid var(--bdr)}
.ps-dot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
.ps-dot.idle{background:var(--txt3)}
.ps-dot.running{background:var(--cyan);box-shadow:0 0 6px var(--cyan);animation:pulse .8s ease infinite}
.ps-dot.done{background:var(--lime);box-shadow:0 0 6px var(--lime)}
.ps-dot.err{background:var(--red)}
.ps-status-txt{color:var(--txt3)}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.ps-arrow{display:flex;align-items:center;padding:0 6px;flex-shrink:0}
.ps-arrow-line{width:28px;height:2px;position:relative;overflow:visible}
.ps-arrow-line::before{content:'';position:absolute;top:0;left:0;right:0;height:100%;background:var(--bdr2);border-radius:1px}
.ps-arrow-line::after{content:'▶';position:absolute;right:-7px;top:50%;transform:translateY(-50%);color:var(--txt3);font-size:8px;line-height:1}
.ps-arrow-line.active::before{background:linear-gradient(90deg,var(--c-from,var(--acc)),var(--c-to,var(--cyan)));animation:flow 1s linear infinite}
@keyframes flow{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}

/* TOOLS GRID */
.tools-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:13px;margin-bottom:22px}
.tool-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:17px;display:flex;flex-direction:column;gap:12px;transition:all .18s;position:relative;overflow:hidden}
.tool-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--tool-color,var(--acc)),transparent)}
.tool-card:hover{border-color:var(--bdr2);box-shadow:0 4px 20px rgba(0,0,0,.3)}
.tool-card.connected{border-color:rgba(163,230,53,.25);background:linear-gradient(135deg,var(--surf),rgba(163,230,53,.03))}
.tool-top{display:flex;align-items:center;gap:12px}
.tool-ico{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0;border:1px solid var(--bdr)}
.tool-name{font-size:14px;font-weight:700;color:var(--txt);letter-spacing:-.01em}
.tool-type{font-size:11px;color:var(--txt3);margin-top:2px}
.tool-connected-tag{margin-left:auto;display:flex;align-items:center;gap:4px;font-size:10.5px;font-weight:600;color:var(--lime)}
.tool-dot{width:6px;height:6px;border-radius:50%;background:var(--lime);box-shadow:0 0 6px var(--lime)}
.tool-desc{font-size:12px;color:var(--txt2);line-height:1.6}
.tool-key-wrap{display:flex;gap:7px;align-items:center}
.tool-key{flex:1;background:var(--surf2);border:1px solid var(--bdr2);border-radius:var(--rxs);padding:8px 11px;font-family:var(--fm);font-size:11.5px;color:var(--txt2);outline:none;transition:border-color .13s}
.tool-key:focus{border-color:var(--tool-color,var(--acc))}
.tool-key::placeholder{color:var(--txt3)}
.tool-connect-btn{padding:7px 13px;border-radius:var(--rxs);font-family:var(--ff);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;border:1px solid var(--bdr2);background:none;color:var(--txt2);white-space:nowrap}
.tool-connect-btn:hover{color:var(--txt);background:var(--surf2)}
.tool-connect-btn.connected{background:rgba(163,230,53,.1);color:var(--lime);border-color:rgba(163,230,53,.3)}
.tool-connect-btn.connecting{opacity:.6;cursor:default}

/* RUNNER */
.runner-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:22px;margin-bottom:22px}
.runner-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:18px}
.runner-title{font-family:var(--fd);font-size:15px;font-weight:700;letter-spacing:-.02em}
.runner-status{display:flex;align-items:center;gap:8px;padding:5px 12px;border-radius:20px;font-size:11.5px;font-weight:600;background:rgba(255,255,255,.05);border:1px solid var(--bdr2)}
.runner-log{background:var(--bg);border:1px solid var(--bdr);border-radius:var(--rsm);padding:14px;min-height:140px;max-height:200px;overflow-y:auto;font-family:var(--fm);font-size:11.5px;line-height:1.8}
.log-line{display:flex;align-items:flex-start;gap:8px;padding:2px 0;animation:logfade .25s ease}
@keyframes logfade{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
.log-ts{color:var(--txt3);flex-shrink:0;min-width:72px}
.log-ico{flex-shrink:0;width:14px}
.log-msg{color:var(--txt2)}
.log-msg.ok{color:var(--lime)}
.log-msg.err{color:var(--red)}
.log-msg.run{color:var(--cyan)}
.log-msg.info{color:var(--txt2)}
.runner-progress{margin-top:14px}
.rp-bar{height:4px;background:var(--bdr2);border-radius:3px;overflow:hidden;margin-bottom:7px}
.rp-fill{height:100%;border-radius:3px;background:linear-gradient(90deg,var(--acc),var(--cyan),var(--lime));transition:width .4s ease;width:0}
.rp-steps{display:flex;justify-content:space-between;font-size:10px;color:var(--txt3)}
.runner-input-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px}
.ri-group{display:flex;flex-direction:column;gap:5px}
.ri-label{font-size:11px;font-weight:500;color:var(--txt2)}
.ri-input{background:var(--surf2);border:1px solid var(--bdr2);border-radius:var(--rxs);padding:8px 11px;font-family:var(--ff);font-size:12.5px;color:var(--txt);outline:none;transition:border-color .13s;width:100%}
.ri-input:focus{border-color:var(--acc)}
.ri-input::placeholder{color:var(--txt3)}
.ri-textarea{min-height:70px;resize:vertical;line-height:1.6}
.ri-select option{background:var(--surf)}

/* BENEFITS */
.benefits-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
.benefit-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:18px}
.benefit-ico{font-size:24px;margin-bottom:10px}
.benefit-title{font-family:var(--fd);font-size:14px;font-weight:700;letter-spacing:-.02em;margin-bottom:8px}
.benefit-list{display:flex;flex-direction:column;gap:6px}
.benefit-item{display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:var(--txt2);line-height:1.5}
.benefit-item::before{content:'•';color:var(--acc2);flex-shrink:0;margin-top:1px}

/* WHY */
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:22px}
.why-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:16px;text-align:center}
.why-ico{font-size:28px;margin-bottom:8px}
.why-val{font-family:var(--fd);font-size:22px;font-weight:800;letter-spacing:-.03em;line-height:1}
.why-lbl{font-size:11.5px;color:var(--txt2);margin-top:3px;line-height:1.5}

/* OTHER PANELS */
.card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:18px}
.card-title{font-family:var(--fd);font-size:14px;font-weight:700;letter-spacing:-.02em;margin-bottom:3px}
.card-sub{font-size:11.5px;color:var(--txt2);margin-bottom:14px;line-height:1.5}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.stat-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:14px}
.stat-ico{width:32px;height:32px;border-radius:var(--rsm);display:flex;align-items:center;justify-content:center;margin-bottom:9px;font-size:15px}
.stat-val{font-family:var(--fd);font-size:22px;font-weight:800;letter-spacing:-.03em;line-height:1}
.stat-lbl{font-size:11px;color:var(--txt2);margin-top:2px}
.stat-up{font-size:10.5px;color:var(--lime);margin-top:3px}

/* BADGE */
.badge{display:inline-flex;align-items:center;gap:4px;padding:2px 8px;border-radius:4px;font-size:10.5px;font-weight:600}
.badge-new{background:rgba(124,58,237,.2);color:var(--acc2);border:.5px solid rgba(124,58,237,.3)}
.badge-live{background:rgba(163,230,53,.12);color:var(--lime);border:.5px solid rgba(163,230,53,.25)}

/* TOAST */
.toast{position:fixed;bottom:22px;right:22px;background:var(--surf2);border:1px solid var(--bdr2);border-radius:10px;padding:10px 16px;font-size:13px;color:var(--txt);z-index:999;box-shadow:var(--shl);display:flex;align-items:center;gap:9px;animation:toastIn .25s ease;max-width:360px}
@keyframes toastIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
.spinner{width:14px;height:14px;border:2px solid var(--bdr2);border-top-color:var(--acc);border-radius:50%;animation:spin .7s linear infinite;display:inline-block;flex-shrink:0}
@keyframes spin{to{transform:rotate(360deg)}}
</style>
</head>
<body>
<div class="app">

<!-- SIDEBAR -->
<div class="sidebar" id="sidebar">
  <div class="sb-logo">
    <div class="sb-logo-ico"><svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg></div>
    <div><div class="sb-logo-name">InfiCreator</div><div class="sb-logo-sub">AI Video Studio</div></div>
  </div>
  <div class="sb-user">
    <div class="sb-av">J</div>
    <div><div class="sb-uname">John Doe</div><div class="sb-uplan">Pro Plan</div></div>
  </div>
  <div class="sb-nav">
    <div class="nsec">Studio</div>
    <div class="ni" onclick="goPanel('dashboard',this)"><span class="nav-ico">⊞</span><span class="nav-label">Dashboard</span></div>
    <div class="ni" onclick="goPanel('generator',this)"><span class="nav-ico">✦</span><span class="nav-label">Image Creator</span><span class="nav-badge cyan">Free</span></div>
    <div class="ni" onclick="goPanel('copy',this)"><span class="nav-ico">✍</span><span class="nav-label">Marketing Copy</span></div>

    <div class="nsec">AI Video</div>
    <div class="ni active" onclick="goPanel('automation',this)"><span class="nav-ico">🎬</span><span class="nav-label">AI Video Automation</span><span class="nav-badge purple">New</span></div>
    <div class="ni" onclick="goPanel('pipeline',this)"><span class="nav-ico">⚡</span><span class="nav-label">Pipeline Builder</span></div>
    <div class="ni" onclick="goPanel('videos',this)"><span class="nav-ico">▶</span><span class="nav-label">My Videos</span><span class="nav-badge green">3</span></div>

    <div class="nsec">Publish</div>
    <div class="ni" onclick="goPanel('publisher',this)"><span class="nav-ico">📡</span><span class="nav-label">Meta Publisher</span></div>
    <div class="ni" onclick="goPanel('analytics',this)"><span class="nav-ico">◈</span><span class="nav-label">Analytics</span></div>

    <div class="nsec">Account</div>
    <div class="ni" onclick="goPanel('settings',this)"><span class="nav-ico">⚙</span><span class="nav-label">Settings & APIs</span></div>
  </div>
  <div class="sb-bottom">
    <div class="plan-pill">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <span class="pw-name">Pro Plan</span>
        <span class="pw-tag">PRO</span>
      </div>
      <div class="pw-bar"><div class="pw-fill" style="width:35%"></div></div>
      <div class="pw-text">35 / 100 videos generated this month</div>
    </div>
  </div>
</div>

<!-- MAIN -->
<div class="main">
  <div class="topbar">
    <div class="tb-left">
      <button class="tb-tog" onclick="document.getElementById('sidebar').classList.toggle('col')">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
      <span class="tb-title" id="tb-title">AI Video Automation</span>
    </div>
    <div class="tb-right">
      <span class="tb-badge"><span style="animation:pulse .8s ease infinite;display:inline-block">●</span> Pipeline Ready</span>
      <button class="tb-btn primary" onclick="startPipeline()">▶ Run Pipeline</button>
    </div>
  </div>

  <div class="content">

    <!-- ═══════════════ AUTOMATION PANEL ═══════════════ -->
    <div class="panel active" id="p-automation">

      <!-- HERO -->
      <div class="auto-hero">
        <div class="auto-hero-grid">
          <div>
            <div class="hero-eyebrow">🎬 Full AI Video Pipeline</div>
            <div class="hero-title">One Idea.<br><span>Infinite Videos.</span></div>
            <div class="hero-sub">The most advanced AI video automation system — converts your idea into a fully rendered vertical video, ready to post on Reels, Shorts & TikTok. Everything runs inside one powerful AI pipeline with zero manual editing.</div>
            <div class="hero-bullets">
              <div class="hero-bullet">Converts ideas into high-converting short-form scripts with Claude AI</div>
              <div class="hero-bullet">Generates realistic AI voiceover with ElevenLabs in any voice</div>
              <div class="hero-bullet">Creates cinematic visuals with Leonardo AI + motion effects</div>
              <div class="hero-bullet">Auto-renders vertical video via Shotstack, delivers to Google Drive</div>
              <div class="hero-bullet">Everything orchestrated by n8n — zero human interaction needed</div>
            </div>
            <div class="hero-actions">
              <button class="btn-run" onclick="startPipeline()">▶ Run Pipeline Now</button>
              <button class="btn-outline" onclick="goPanel('settings',null)">⚙ Configure APIs</button>
            </div>
          </div>
          <div>
            <div class="hero-stats">
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--acc2)">7</div><div class="hero-stat-lbl">AI Tools<br>Integrated</div></div>
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--cyan)">~4m</div><div class="hero-stat-lbl">Avg. Pipeline<br>Runtime</div></div>
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--lime)">24/7</div><div class="hero-stat-lbl">AI Studio<br>Runtime</div></div>
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--pink)">9:16</div><div class="hero-stat-lbl">Vertical<br>Format</div></div>
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--amb)">3</div><div class="hero-stat-lbl">Platform<br>Outputs</div></div>
              <div class="hero-stat"><div class="hero-stat-val" style="color:var(--grn)">0</div><div class="hero-stat-lbl">Hours of<br>Editing</div></div>
            </div>
            <div class="hero-mini-tools" style="margin-top:16px">
              <span class="tool-chip" style="background:rgba(139,92,246,.1);color:#a78bfa;border-color:rgba(139,92,246,.25)">Claude 3.5</span>
              <span class="tool-chip" style="background:rgba(6,182,212,.08);color:var(--cyan);border-color:rgba(6,182,212,.2)">ElevenLabs</span>
              <span class="tool-chip" style="background:rgba(16,185,129,.08);color:var(--grn);border-color:rgba(16,185,129,.2)">Whisper</span>
              <span class="tool-chip" style="background:rgba(245,158,11,.08);color:var(--amb);border-color:rgba(245,158,11,.2)">Leonardo AI</span>
              <span class="tool-chip" style="background:rgba(236,72,153,.08);color:var(--pink);border-color:rgba(236,72,153,.2)">Shotstack</span>
              <span class="tool-chip" style="background:rgba(56,189,248,.08);color:var(--sky);border-color:rgba(56,189,248,.2)">Google Drive</span>
              <span class="tool-chip" style="background:rgba(163,230,53,.08);color:var(--lime);border-color:rgba(163,230,53,.2)">n8n</span>
            </div>
          </div>
        </div>
      </div>

      <!-- PIPELINE FLOW -->
      <div class="pipeline-section">
        <div class="section-hd">
          <div><div class="section-title">⚡ Automation Pipeline</div><div class="section-sub">7-step AI workflow from concept to ready-to-post vertical video</div></div>
          <button class="tb-btn" onclick="startPipeline()">▶ Run All Steps</button>
        </div>
        <div class="pipeline-flow" id="pipeline-flow">
          <!-- Rendered by JS -->
        </div>
      </div>

      <!-- PIPELINE RUNNER -->
      <div class="runner-card">
        <div class="runner-hd">
          <div><div class="runner-title">Pipeline Runner</div></div>
          <div class="runner-status" id="runner-status">
            <div class="ps-dot idle" id="runner-dot"></div>
            <span id="runner-status-txt">Ready to run</span>
          </div>
        </div>
        <div class="runner-input-grid">
          <div class="ri-group">
            <label class="ri-label">💡 Content Idea / Topic</label>
            <input class="ri-input" id="ri-idea" placeholder="e.g. 5 morning habits that changed my life…" value="5 AI tools that will replace your entire marketing team">
          </div>
          <div class="ri-group">
            <label class="ri-label">📐 Video Format</label>
            <select class="ri-input ri-select" id="ri-format">
              <option>Reels / TikTok / Shorts (9:16 · 60s)</option>
              <option>Instagram Reel (9:16 · 30s)</option>
              <option>YouTube Short (9:16 · 60s)</option>
              <option>Twitter/X Video (16:9 · 60s)</option>
            </select>
          </div>
          <div class="ri-group">
            <label class="ri-label">🎙 Voice Style</label>
            <select class="ri-input ri-select" id="ri-voice">
              <option>Adam — Deep & Authoritative</option>
              <option>Rachel — Warm & Professional</option>
              <option>Josh — Energetic & Young</option>
              <option>Bella — Soft & Engaging</option>
              <option>Antoni — Clear & Confident</option>
            </select>
          </div>
          <div class="ri-group">
            <label class="ri-label">🎨 Visual Style</label>
            <select class="ri-input ri-select" id="ri-visual">
              <option>Cinematic · Dark & Dramatic</option>
              <option>Clean · Minimal & Professional</option>
              <option>Vibrant · Bold & Eye-catching</option>
              <option>Cyberpunk · Neon & Futuristic</option>
              <option>Natural · Warm & Organic</option>
            </select>
          </div>
        </div>
        <div class="runner-progress">
          <div class="rp-bar"><div class="rp-fill" id="rp-fill"></div></div>
          <div class="rp-steps" id="rp-steps-display">
            <span>Idle</span>
          </div>
        </div>
        <div class="runner-log" id="runner-log">
          <div class="log-line"><span class="log-ts">00:00:00</span><span class="log-ico">•</span><span class="log-msg info">InfiCreator AI Pipeline v2.0 — Ready</span></div>
          <div class="log-line"><span class="log-ts">00:00:00</span><span class="log-ico">•</span><span class="log-msg info">All 7 AI tools configured — awaiting input</span></div>
          <div class="log-line"><span class="log-ts">00:00:00</span><span class="log-ico">•</span><span class="log-msg info">Click "Run Pipeline" or press ▶ to start</span></div>
        </div>
        <div style="display:flex;gap:10px;margin-top:14px">
          <button class="btn-run" onclick="startPipeline()" id="run-btn">▶ Run Full Pipeline</button>
          <button class="btn-outline" onclick="clearLog()">⊟ Clear Log</button>
          <button class="btn-outline" style="margin-left:auto" onclick="exportVideo()">⬇ Export Last Video</button>
        </div>
      </div>

      <!-- TOOLS / API CONNECTIONS -->
      <div class="section-hd">
        <div><div class="section-title">🔧 AI Tools — API Connections</div><div class="section-sub">Connect your API keys to activate each step of the pipeline</div></div>
        <span class="badge badge-live" id="connected-count">3 / 7 Connected</span>
      </div>
      <div class="tools-grid" id="tools-grid">
        <!-- Rendered by JS -->
      </div>

      <!-- PERFECT FOR + WHY WORKS -->
      <div class="benefits-grid">
        <div class="benefit-card">
          <div class="benefit-ico">🎯</div>
          <div class="benefit-title">Perfect For</div>
          <div class="benefit-list">
            <div class="benefit-item">Faceless YouTube channels & automation pages</div>
            <div class="benefit-item">AI content creators scaling output</div>
            <div class="benefit-item">TikTok & Instagram Reels growth accounts</div>
            <div class="benefit-item">Digital marketers & freelance agencies</div>
            <div class="benefit-item">Personal brands & social media managers</div>
            <div class="benefit-item">Anyone who wants consistent content without editing</div>
          </div>
        </div>
        <div class="benefit-card">
          <div class="benefit-ico">🚀</div>
          <div class="benefit-title">Why This Works in 2026</div>
          <div class="benefit-list">
            <div class="benefit-item">Short-form vertical videos dominate all social algorithms</div>
            <div class="benefit-item">Automate content production — idea to upload in minutes</div>
            <div class="benefit-item">Increase posting frequency without more effort</div>
            <div class="benefit-item">Save hours of editing time every single week</div>
            <div class="benefit-item">Test multiple content ideas daily at scale</div>
            <div class="benefit-item">It's like running an AI content studio 24/7</div>
          </div>
        </div>
      </div>

      <!-- STATS ROW -->
      <div class="why-grid">
        <div class="why-card"><div class="why-ico">⚡</div><div class="why-val" style="color:var(--acc2)">~4 min</div><div class="why-lbl">Average pipeline<br>runtime per video</div></div>
        <div class="why-card"><div class="why-ico">📉</div><div class="why-val" style="color:var(--grn)">-90%</div><div class="why-lbl">Production cost<br>vs traditional editing</div></div>
        <div class="why-card"><div class="why-ico">📈</div><div class="why-val" style="color:var(--cyan)">10×</div><div class="why-lbl">More content output<br>per week</div></div>
        <div class="why-card"><div class="why-ico">🎬</div><div class="why-val" style="color:var(--lime)">3</div><div class="why-lbl">Platforms delivered<br>simultaneously</div></div>
        <div class="why-card"><div class="why-ico">🤖</div><div class="why-val" style="color:var(--pink)">0</div><div class="why-lbl">Hours of manual<br>video editing</div></div>
        <div class="why-card"><div class="why-ico">☁</div><div class="why-val" style="color:var(--amb)">24/7</div><div class="why-lbl">AI studio always<br>running in cloud</div></div>
      </div>

    </div><!-- /automation panel -->

    <!-- DASHBOARD PANEL -->
    <div class="panel" id="p-dashboard">
      <div style="font-family:var(--fd);font-size:20px;font-weight:800;margin-bottom:4px;letter-spacing:-.03em">Dashboard ⊞</div>
      <div style="font-size:12.5px;color:var(--txt2);margin-bottom:18px">Your AI content studio overview</div>
      <div class="g4" style="margin-bottom:16px">
        <div class="stat-card"><div class="stat-ico" style="background:rgba(124,58,237,.12);color:var(--acc2)">🎬</div><div class="stat-val">35</div><div class="stat-lbl">Videos Generated</div><div class="stat-up">↑ 12 this week</div></div>
        <div class="stat-card"><div class="stat-ico" style="background:rgba(6,182,212,.1);color:var(--cyan)">⚡</div><div class="stat-val">128</div><div class="stat-lbl">Pipeline Runs</div><div class="stat-up">↑ 24 this month</div></div>
        <div class="stat-card"><div class="stat-ico" style="background:rgba(163,230,53,.1);color:var(--lime)">✦</div><div class="stat-val">240</div><div class="stat-lbl">AI Images</div><div class="stat-up">Free · Pollinations</div></div>
        <div class="stat-card"><div class="stat-ico" style="background:rgba(236,72,153,.1);color:var(--pink)">📡</div><div class="stat-val">84K</div><div class="stat-lbl">Total Reach</div><div class="stat-up">↑ 18% this month</div></div>
      </div>
    </div>

    <!-- OTHER STUB PANELS -->
    <div class="panel" id="p-generator"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">✦</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">AI Image Creator</div><div style="margin-top:8px">Free · Pollinations.ai · No API key</div></div></div>
    <div class="panel" id="p-copy"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">✍</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">Marketing Copy</div><div style="margin-top:8px">Claude AI · Connect Facebook/Google to unlock</div></div></div>
    <div class="panel" id="p-pipeline"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">⚡</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">Visual Pipeline Builder</div><div style="margin-top:8px">Drag-and-drop n8n workflow designer — coming soon</div></div></div>
    <div class="panel" id="p-videos"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">▶</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">My Videos</div><div style="margin-top:8px">3 videos in Google Drive — run pipeline to create more</div></div></div>
    <div class="panel" id="p-publisher"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">📡</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">Meta Publisher</div><div style="margin-top:8px">Facebook & Instagram auto-publisher</div></div></div>
    <div class="panel" id="p-analytics"><div style="text-align:center;padding:60px;color:var(--txt3)"><div style="font-size:40px;margin-bottom:12px">◈</div><div style="font-size:15px;font-weight:600;color:var(--txt2)">Analytics</div><div style="margin-top:8px">AI-powered cross-platform insights</div></div></div>
    <div class="panel" id="p-settings">
      <div style="font-family:var(--fd);font-size:20px;font-weight:800;margin-bottom:4px;letter-spacing:-.03em">Settings & API Keys ⚙</div>
      <div style="font-size:12.5px;color:var(--txt2);margin-bottom:18px">Configure your AI tool API keys to power the automation pipeline</div>
      <div class="tools-grid" id="settings-tools-grid"></div>
    </div>

  </div><!-- /content -->
</div><!-- /main -->
</div><!-- /app -->

<script>
// ═══════════════════════════════ DATA ═══════════════════════════════
const PIPELINE_STEPS = [
  {num:1,ico:'💡',tool:'Input',name:'Script Generator',desc:'Claude 3.5 converts your raw idea into a punchy, high-converting short-form video script.',color:'var(--c1)',status:'idle'},
  {num:2,ico:'🎙',tool:'ElevenLabs',name:'AI Voiceover',desc:'Realistic human-like voiceover generated in your chosen voice style.',color:'var(--c2)',status:'idle'},
  {num:3,ico:'📝',tool:'Whisper',name:'Transcription',desc:'OpenAI Whisper auto-transcribes audio for accurate subtitle generation.',color:'var(--c3)',status:'idle'},
  {num:4,ico:'🎨',tool:'Leonardo AI',name:'Visual Creation',desc:'Cinematic AI images & motion visuals generated to match every script beat.',color:'var(--c4)',status:'idle'},
  {num:5,ico:'🎬',tool:'Shotstack',name:'Video Render',desc:'Auto-renders vertical video with voiceover, visuals, subtitles & transitions.',color:'var(--c5)',status:'idle'},
  {num:6,ico:'☁',tool:'Google Drive',name:'Cloud Delivery',desc:'Final video uploaded to Google Drive with OAuth2. Organized & shareable.',color:'var(--c6)',status:'idle'},
  {num:7,ico:'⚡',tool:'n8n',name:'Orchestration',desc:'n8n connects every API, triggers each step in sequence, handles retries.',color:'var(--c7)',status:'idle'},
];

const TOOLS = [
  {id:'claude',    name:'Claude 3.5 / OpenRouter', ico:'🤖', color:'#8b5cf6', type:'Script Generation',       desc:'Converts your content idea into a structured, high-converting video script optimized for short-form engagement.', key:'',  ph:'sk-or-v1-…or API key',    connected:false, required:true },
  {id:'elevenlabs',name:'ElevenLabs',               ico:'🎙', color:'var(--cyan)', type:'AI Voice Generator',  desc:'Generates ultra-realistic AI voiceover in any voice style. Supports 29 languages and dozens of voice personas.', key:'',  ph:'xi_…ElevenLabs API key',  connected:false, required:true },
  {id:'whisper',   name:'OpenAI Whisper',           ico:'📝', color:'var(--grn)',  type:'Speech-to-Text',       desc:'Auto-transcribes your AI voiceover with near-perfect accuracy for subtitle generation and caption sync.',       key:'',  ph:'sk-…OpenAI API key',      connected:true,  required:true },
  {id:'leonardo',  name:'Leonardo AI',              ico:'🎨', color:'var(--amb)',  type:'Image + Motion AI',    desc:'Creates stunning cinematic visuals and motion effects for each video scene, matching the script and visual style.', key:'', ph:'leo_…Leonardo API key',  connected:false, required:true },
  {id:'shotstack', name:'Shotstack',                ico:'🎬', color:'var(--pink)', type:'Video Rendering',      desc:'Cloud-based video renderer. Assembles voiceover, visuals, subtitles and transitions into a polished vertical video.',key:'', ph:'sk_…Shotstack API key',   connected:true,  required:true },
  {id:'gdrive',    name:'Google Drive',             ico:'☁',  color:'var(--sky)',  type:'OAuth2 File Storage',  desc:'Stores your finished videos in Google Drive via secure OAuth2. Auto-organizes by brand, date and platform format.',  key:'',  ph:'Google OAuth2 — click Connect', connected:true,  required:false, isOAuth:true },
  {id:'n8n',       name:'n8n Automation',           ico:'⚡', color:'var(--lime)', type:'Workflow Orchestration',desc:'Orchestrates the entire pipeline — triggers each step in sequence, handles errors, retries and sends delivery notifications.',key:'',ph:'n8n webhook URL or API key', connected:false, required:true },
];

// ═══════════════════════════════ RENDER PIPELINE ═══════════════════════════════
function renderPipeline(){
  const flow = document.getElementById('pipeline-flow');
  flow.innerHTML = PIPELINE_STEPS.map((s,i) => `
    <div class="pipeline-step">
      <div class="ps-card" id="ps-${s.num}" style="--step-color:${s.color}" onclick="highlightStep(${s.num})">
        <div style="display:flex;align-items:center;gap:8px">
          <div class="ps-num" style="background:${s.color}22;color:${s.color}">${s.num}</div>
          <span class="ps-tool" style="color:${s.color}">${s.tool}</span>
        </div>
        <div class="ps-ico">${s.ico}</div>
        <div class="ps-name">${s.name}</div>
        <div class="ps-desc">${s.desc}</div>
        <div class="ps-status" id="pss-${s.num}">
          <div class="ps-dot idle" id="psd-${s.num}"></div>
          <span class="ps-status-txt" id="pst-${s.num}">Idle</span>
        </div>
      </div>
      ${i < PIPELINE_STEPS.length-1 ? `
        <div class="ps-arrow">
          <div class="ps-arrow-line" id="arr-${s.num}" style="--c-from:${s.color};--c-to:${PIPELINE_STEPS[i+1].color}"></div>
        </div>` : ''}
    </div>`).join('');
}

function highlightStep(n){
  document.querySelectorAll('.ps-card').forEach(c=>c.classList.remove('active'));
  document.getElementById('ps-'+n)?.classList.add('active');
}

// ═══════════════════════════════ RENDER TOOLS ═══════════════════════════════
function renderTools(targetId='tools-grid'){
  const grid = document.getElementById(targetId);
  if(!grid) return;
  grid.innerHTML = TOOLS.map(t => `
    <div class="tool-card ${t.connected?'connected':''}" id="tc-${t.id}" style="--tool-color:${t.color}">
      <div class="tool-top">
        <div class="tool-ico" style="background:${t.color}18;border-color:${t.color}30">${t.ico}</div>
        <div style="flex:1;min-width:0">
          <div class="tool-name">${t.name}</div>
          <div class="tool-type">${t.type}</div>
        </div>
        ${t.connected?`<div class="tool-connected-tag"><div class="tool-dot"></div>Connected</div>`:''}
        ${t.required?'<span style="font-size:9px;font-weight:700;color:'+t.color+';border:.5px solid '+t.color+'44;padding:1px 6px;border-radius:3px;margin-left:4px">REQ</span>':''}
      </div>
      <div class="tool-desc">${t.desc}</div>
      <div class="tool-key-wrap">
        ${t.isOAuth
          ? `<input class="tool-key" style="--tool-color:${t.color}" type="text" placeholder="${t.ph}" value="${t.connected?'✓ Authenticated via OAuth2':''}" readonly>`
          : `<input class="tool-key" style="--tool-color:${t.color}" type="password" id="key-${t.id}" placeholder="${t.ph}" value="${t.key}" oninput="updateKey('${t.id}',this.value)">`
        }
        <button class="tool-connect-btn ${t.connected?'connected':''}" id="tcb-${t.id}" onclick="toggleConnect('${t.id}')">
          ${t.isOAuth?(t.connected?'✓ Connected':'OAuth2 Login'):(t.connected?'✓ Connected':'Test & Connect')}
        </button>
      </div>
    </div>`).join('');
  updateConnectedCount();
}

function updateKey(id, val){
  const t = TOOLS.find(t=>t.id===id);
  if(t) t.key = val;
}

function toggleConnect(id){
  const t = TOOLS.find(t=>t.id===id);
  if(!t) return;
  const btn = document.getElementById('tcb-'+id);
  btn.textContent = 'Testing…'; btn.classList.add('connecting');
  setTimeout(()=>{
    t.connected = !t.connected;
    renderTools('tools-grid');
    renderTools('settings-tools-grid');
    if(t.connected) toast('✓ '+t.name+' connected successfully!','lime');
    else toast('⚠ '+t.name+' disconnected','amb');
  }, t.connected ? 300 : 1200);
}

function updateConnectedCount(){
  const n = TOOLS.filter(t=>t.connected).length;
  const el = document.getElementById('connected-count');
  if(el) el.textContent = n+' / '+TOOLS.length+' Connected';
}

// ═══════════════════════════════ PIPELINE RUNNER ═══════════════════════════════
let running = false, startTime = null;

function logLine(msg, type='info', ico='•'){
  const log = document.getElementById('runner-log');
  const elapsed = startTime ? ((Date.now()-startTime)/1000).toFixed(0).padStart(5,'0') : '00000';
  const ts = new Date().toISOString().substr(11,8);
  const div = document.createElement('div');
  div.className = 'log-line';
  div.innerHTML = `<span class="log-ts">${ts}</span><span class="log-ico">${ico}</span><span class="log-msg ${type}">${msg}</span>`;
  log.appendChild(div);
  log.scrollTop = log.scrollHeight;
}

function clearLog(){
  document.getElementById('runner-log').innerHTML = '';
  logLine('Log cleared — ready for next run','info','•');
}

function setStepStatus(n, status){
  const dot = document.getElementById('psd-'+n);
  const txt = document.getElementById('pst-'+n);
  const card = document.getElementById('ps-'+n);
  const arr = document.getElementById('arr-'+(n-1));
  if(!dot||!txt) return;
  ['idle','running','done','err'].forEach(s=>dot.classList.remove(s));
  dot.classList.add(status);
  const labels = {idle:'Idle',running:'Running…',done:'Complete',err:'Error'};
  txt.textContent = labels[status]||status;
  if(status==='done') card?.classList.add('active');
  if(status==='running') card?.classList.add('active');
  if(arr && (status==='done'||status==='running')) arr.classList.add('active');
}

function setProgress(pct, label=''){
  document.getElementById('rp-fill').style.width = pct+'%';
  document.getElementById('rp-steps-display').innerHTML = `<span>${label}</span><span>${pct}%</span>`;
}

async function startPipeline(){
  if(running) return;
  running = true; startTime = Date.now();
  const idea = document.getElementById('ri-idea').value.trim() || 'AI automation tips for 2026';
  const voice = document.getElementById('ri-voice').value;
  const visual = document.getElementById('ri-visual').value;

  // Reset
  PIPELINE_STEPS.forEach(s=>setStepStatus(s.num,'idle'));
  document.querySelectorAll('.ps-arrow-line').forEach(a=>a.classList.remove('active'));
  document.querySelectorAll('.ps-card').forEach(c=>c.classList.remove('active'));
  clearLog();

  // Update runner status
  const dot = document.getElementById('runner-dot');
  const st = document.getElementById('runner-status-txt');
  ['idle'].forEach(c=>dot.classList.remove(c));
  dot.classList.add('running');
  st.textContent = 'Pipeline Running…';

  const steps = [
    {n:1, msgs:[
      ['▶ Initializing Claude 3.5 via OpenRouter…','run','⟳'],
      ['📋 Analyzing topic: "'+idea.slice(0,40)+'…"','run','⟳'],
      ['✓ Script generated — 340 words, 62s read time','ok','✓'],
      ['✓ Hook: "What if AI could replace your entire team?"','ok','✓'],
    ]},
    {n:2, msgs:[
      ['▶ ElevenLabs API — voice: '+voice.split('—')[0].trim(),'run','⟳'],
      ['🎙 Synthesizing speech (340 words)…','run','⟳'],
      ['✓ Voiceover generated — 62s, 48kHz WAV','ok','✓'],
    ]},
    {n:3, msgs:[
      ['▶ OpenAI Whisper — transcribing audio…','run','⟳'],
      ['📝 Detected 340 words, 98.4% confidence','run','⟳'],
      ['✓ SRT subtitles generated — 62 segments','ok','✓'],
    ]},
    {n:4, msgs:[
      ['▶ Leonardo AI — style: '+visual.split('·')[0].trim(),'run','⟳'],
      ['🎨 Generating 8 scene visuals…','run','⟳'],
      ['✓ Image 1/8 complete','ok','✓'],
      ['✓ All 8 scenes generated — 1080×1920 each','ok','✓'],
    ]},
    {n:5, msgs:[
      ['▶ Shotstack — assembling vertical video…','run','⟳'],
      ['🎬 Compositing: audio + visuals + subtitles…','run','⟳'],
      ['🎬 Applying transitions and color grade…','run','⟳'],
      ['✓ Video rendered — 9:16 · 1080×1920 · 62s · 48MB','ok','✓'],
    ]},
    {n:6, msgs:[
      ['▶ Google Drive — uploading via OAuth2…','run','⟳'],
      ['☁ Upload progress: 48MB…','run','⟳'],
      ['✓ Video saved to /InfiCreator/Videos/2026-04/','ok','✓'],
      ['✓ Shareable link generated','ok','✓'],
    ]},
    {n:7, msgs:[
      ['▶ n8n — finalizing workflow…','run','⟳'],
      ['⚡ All 6 upstream steps verified ✓','run','⟳'],
      ['✓ Workflow complete — metadata logged','ok','✓'],
      ['✓ Ready to post on Reels · Shorts · TikTok','ok','✓'],
    ]},
  ];

  const delays = [400,800,500,700,1000,600,400];

  for(const [idx, step] of steps.entries()){
    setStepStatus(step.n,'running');
    setProgress(Math.round(((idx)/7)*100), 'Step '+step.n+'/7 — Running…');
    logLine('─── STEP '+step.n+': '+PIPELINE_STEPS[step.n-1].name.toUpperCase()+' ───','info','│');
    for(const [msg, type, ico] of step.msgs){
      await delay(delays[idx]);
      logLine(msg, type, ico);
    }
    await delay(200);
    setStepStatus(step.n,'done');
    setProgress(Math.round(((idx+1)/7)*100), 'Step '+(step.n)+'/7 Complete');
  }

  setProgress(100,'✓ Pipeline Complete — 3 platforms ready');
  dot.classList.remove('running');
  dot.classList.add('done');
  st.textContent = '✓ Complete';
  logLine('═══════════════════════════════','info','│');
  logLine('✓ PIPELINE COMPLETE — Video ready for Reels, Shorts & TikTok','ok','🎬');
  logLine('Total runtime: '+((Date.now()-startTime)/1000).toFixed(1)+'s','info','⏱');
  running = false;
  toast('🎬 Video pipeline complete — ready to post!','lime');
}

function delay(ms){ return new Promise(r=>setTimeout(r,ms)); }

function exportVideo(){
  toast('⬇ Downloading last rendered video from Drive…','sky');
}

// ═══════════════════════════════ NAVIGATION ═══════════════════════════════
function goPanel(id, navEl){
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  const p = document.getElementById('p-'+id);
  if(p) p.classList.add('active');
  if(navEl){
    document.querySelectorAll('.ni').forEach(n=>n.classList.remove('active'));
    navEl.classList.add('active');
  }
  document.getElementById('tb-title').textContent = {
    automation:'AI Video Automation', dashboard:'Dashboard',
    generator:'AI Image Creator', copy:'Marketing Copy',
    pipeline:'Pipeline Builder', videos:'My Videos',
    publisher:'Meta Publisher', analytics:'Analytics', settings:'Settings & API Keys'
  }[id] || id;
  // Render settings tools if navigating to settings
  if(id==='settings') renderTools('settings-tools-grid');
}

// ═══════════════════════════════ TOAST ═══════════════════════════════
const TOAST_COLORS = {lime:'#a3e635',sky:'#38bdf8',acc:'#9d5ff0',amb:'#f59e0b',red:'#ef4444'};
function toast(msg, type='acc'){
  const prev = document.querySelector('.toast');
  if(prev) prev.remove();
  const t = document.createElement('div');
  t.className = 'toast';
  const c = TOAST_COLORS[type]||TOAST_COLORS.acc;
  t.innerHTML = `<span style="color:${c};font-size:18px">●</span><span>${msg}</span>`;
  document.body.appendChild(t);
  setTimeout(()=>{t.style.opacity='0';t.style.transition='opacity .3s';setTimeout(()=>t.remove(),300)},3000);
}

// INIT
renderPipeline();
renderTools('tools-grid');
</script>
</body>
</html>
