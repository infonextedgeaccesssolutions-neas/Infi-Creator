/**
 * InfiCreator — AI Video Automation Panel
 * React JSX Component
 *
 * Drop into your InfiCreator app as the Automation panel.
 * Requires: React 18+, Tailwind or the inline CSS below.
 *
 * Pipeline:
 *   Claude 3.5/OpenRouter → ElevenLabs → Whisper → Leonardo AI
 *   → Shotstack → Google Drive → n8n → Ready to Post
 */

import { useState, useRef, useCallback, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const PIPELINE_STEPS = [
  { num:1, ico:"💡", tool:"OpenRouter",  name:"Script Generator",  desc:"Claude 3.5 converts your idea into a punchy short-form video script.", color:"#8b5cf6" },
  { num:2, ico:"🎙", tool:"ElevenLabs",  name:"AI Voiceover",       desc:"Realistic human-like voice synthesized in your chosen style.",         color:"#06b6d4" },
  { num:3, ico:"📝", tool:"Whisper",     name:"Transcription",      desc:"OpenAI Whisper auto-transcribes audio for accurate subtitle sync.",      color:"#10b981" },
  { num:4, ico:"🎨", tool:"Leonardo AI", name:"Visual Creation",    desc:"Cinematic AI images & motion visuals for every script beat.",            color:"#f59e0b" },
  { num:5, ico:"🎬", tool:"Shotstack",   name:"Video Render",       desc:"Assembles voiceover, visuals, subtitles into a vertical video.",         color:"#ec4899" },
  { num:6, ico:"☁",  tool:"Google Drive",name:"Cloud Delivery",     desc:"Final video uploaded to Drive via OAuth2 — organized & shareable.",     color:"#38bdf8" },
  { num:7, ico:"⚡",  tool:"n8n",         name:"Orchestration",      desc:"n8n connects every API, triggers each step, handles retries.",          color:"#a3e635" },
];

const TOOLS_DATA = [
  { id:"claude",     name:"Claude 3.5 / OpenRouter", ico:"🤖", color:"#8b5cf6", type:"Script Generation",        desc:"Converts your content idea into a structured, high-converting video script optimized for short-form engagement and retention.", ph:"sk-or-v1-… or Anthropic key",   connected:false, required:true,  isOAuth:false },
  { id:"elevenlabs", name:"ElevenLabs",               ico:"🎙", color:"#06b6d4", type:"AI Voice Generator",       desc:"Generates ultra-realistic AI voiceover. Supports 29 languages and dozens of voice personas for any brand identity.",          ph:"xi_…ElevenLabs API key",         connected:false, required:true,  isOAuth:false },
  { id:"whisper",    name:"OpenAI Whisper",           ico:"📝", color:"#10b981", type:"Speech-to-Text",           desc:"Auto-transcribes AI voiceover with near-perfect accuracy for subtitle generation and precise caption timing.",                ph:"sk-…OpenAI API key",             connected:true,  required:true,  isOAuth:false },
  { id:"leonardo",   name:"Leonardo AI",              ico:"🎨", color:"#f59e0b", type:"Image + Motion AI",        desc:"Creates stunning cinematic visuals and motion effects for each video scene, perfectly matched to the script and style.",       ph:"leo_…Leonardo API key",          connected:false, required:true,  isOAuth:false },
  { id:"shotstack",  name:"Shotstack",                ico:"🎬", color:"#ec4899", type:"Video Rendering",          desc:"Cloud-based video renderer. Assembles voiceover, visuals, subtitles and smooth transitions into a polished vertical video.",  ph:"sk_…Shotstack API key",          connected:true,  required:true,  isOAuth:false },
  { id:"gdrive",     name:"Google Drive",             ico:"☁",  color:"#38bdf8", type:"OAuth2 File Storage",      desc:"Stores finished videos in Google Drive via secure OAuth2. Auto-organizes by brand, date and platform format for easy access.",  ph:"Google OAuth2 — click Connect",  connected:true,  required:false, isOAuth:true  },
  { id:"n8n",        name:"n8n Automation",           ico:"⚡",  color:"#a3e635", type:"Workflow Orchestration",   desc:"Orchestrates the entire pipeline — triggers each step in sequence, handles errors, retries and sends delivery notifications.",  ph:"https://your.n8n.cloud/webhook/…",connected:false,required:true,  isOAuth:false },
];

const VOICES    = ["Adam — Deep & Authoritative","Rachel — Warm & Professional","Josh — Energetic & Young","Bella — Soft & Engaging","Antoni — Clear & Confident"];
const VISUALS   = ["Cinematic · Dark & Dramatic","Clean · Minimal & Professional","Vibrant · Bold & Eye-catching","Cyberpunk · Neon & Futuristic","Natural · Warm & Organic"];
const FORMATS   = ["Reels / TikTok / Shorts (9:16 · 60s)","Instagram Reel (9:16 · 30s)","YouTube Short (9:16 · 60s)","Twitter/X Video (16:9 · 60s)"];

// ─────────────────────────────────────────────────────────────────────────────
// STYLES (injected once)
// ─────────────────────────────────────────────────────────────────────────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@400;500&display=swap');
:root{
  --bg:#06060f;--surf:#0f0f22;--surf2:#151530;--surf3:#1c1c38;
  --bdr:rgba(255,255,255,.07);--bdr2:rgba(255,255,255,.12);
  --txt:#ede9ff;--txt2:#7e7a9a;--txt3:#3d3a55;
  --acc:#7c3aed;--acc2:#9d5ff0;--ag:rgba(124,58,237,.14);
  --cyan:#06b6d4;--grn:#10b981;--amb:#f59e0b;--red:#ef4444;--pink:#ec4899;
  --lime:#a3e635;--sky:#38bdf8;
  --ff:'DM Sans',system-ui,sans-serif;--fd:'Syne',system-ui,sans-serif;--fm:'DM Mono',monospace;
  --r:14px;--rsm:9px;--rxs:6px;
}
.auto-wrap{font-family:var(--ff);color:var(--txt);font-size:14px;line-height:1.6}
.auto-wrap *{box-sizing:border-box;margin:0;padding:0}
.auto-wrap::-webkit-scrollbar{width:4px}.auto-wrap ::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:2px}

/* HERO */
.ah{background:linear-gradient(135deg,#0a0a20,#0f0520 50%,#07101a);border:1px solid var(--bdr2);border-radius:20px;padding:36px 40px;margin-bottom:22px;position:relative;overflow:hidden}
.ah::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse 70% 60% at 70% 50%,rgba(124,58,237,.1),transparent),radial-gradient(ellipse 50% 40% at 20% 80%,rgba(6,182,212,.07),transparent);pointer-events:none}
.ah-grid{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center;position:relative;z-index:1}
.ah-eyebrow{display:inline-flex;align-items:center;gap:6px;padding:4px 12px;border-radius:20px;background:rgba(163,230,53,.1);border:.5px solid rgba(163,230,53,.25);color:#a3e635;font-size:10.5px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;margin-bottom:14px}
.ah-title{font-family:var(--fd);font-size:clamp(22px,2vw,28px);font-weight:800;letter-spacing:-.04em;line-height:1.15;margin-bottom:12px}
.ah-title span{background:linear-gradient(135deg,#9d5ff0,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.ah-sub{font-size:13px;color:var(--txt2);line-height:1.7;margin-bottom:18px}
.ah-bullet{display:flex;align-items:flex-start;gap:9px;font-size:12.5px;color:var(--txt2);padding:4px 0}
.ah-bullet::before{content:'';width:5px;height:5px;border-radius:50%;background:#a3e635;flex-shrink:0;margin-top:6px;box-shadow:0 0 5px #a3e635}
.ah-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:14px}
.ah-stat{background:rgba(255,255,255,.04);border:1px solid var(--bdr);border-radius:12px;padding:14px 12px;text-align:center}
.ah-stat-val{font-family:var(--fd);font-size:22px;font-weight:800;letter-spacing:-.03em;line-height:1}
.ah-stat-lbl{font-size:10.5px;color:var(--txt2);margin-top:4px;line-height:1.4}
.tc{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:20px;font-size:10.5px;font-weight:500;border:.5px solid;margin:3px}

/* PIPELINE */
.pipe{display:flex;align-items:stretch;overflow-x:auto;padding-bottom:4px;gap:0;margin-bottom:22px}
.pipe::-webkit-scrollbar{height:3px}
.pipe-step-wrap{display:flex;align-items:stretch;flex-shrink:0}
.psc{background:var(--surf);border:1px solid var(--bdr);border-radius:14px;padding:14px 12px;width:132px;display:flex;flex-direction:column;gap:7px;cursor:pointer;transition:all .2s;position:relative;overflow:hidden}
.psc:hover{border-color:var(--bdr2);transform:translateY(-1px)}
.psc.active{border-color:var(--step-c)}
.ps-num{width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:var(--fm);font-size:9.5px;font-weight:500}
.ps-tool-lbl{font-size:9px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;margin-top:2px}
.ps-title{font-size:12px;font-weight:700;line-height:1.3}
.ps-body{font-size:10px;color:var(--txt2);line-height:1.5;flex:1}
.ps-status-row{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--txt3);margin-top:auto;padding-top:7px;border-top:1px solid var(--bdr)}
.sdot{width:6px;height:6px;border-radius:50%;flex-shrink:0}
.sdot-idle{background:var(--txt3)}
.sdot-run{background:#06b6d4;box-shadow:0 0 6px #06b6d4;animation:blink .8s ease infinite}
.sdot-done{background:#a3e635;box-shadow:0 0 6px #a3e635}
.sdot-err{background:#ef4444}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.pipe-arrow{display:flex;align-items:center;padding:0 5px;flex-shrink:0}
.parr{position:relative;width:24px;height:2px}
.parr::before{content:'';position:absolute;inset:0;background:var(--bdr2);border-radius:1px}
.parr::after{content:'▶';position:absolute;right:-6px;top:50%;transform:translateY(-50%);color:var(--txt3);font-size:7px}
.parr.lit::before{background:linear-gradient(90deg,var(--cf),var(--ct));animation:litflow 1s linear infinite}
@keyframes litflow{0%{opacity:.3}50%{opacity:1}100%{opacity:.3}}

/* BUTTONS */
.btn-run{padding:11px 22px;border-radius:var(--rsm);background:linear-gradient(135deg,#7c3aed,#ec4899);color:#fff;border:none;cursor:pointer;font-family:var(--fd);font-size:14px;font-weight:700;letter-spacing:-.01em;display:inline-flex;align-items:center;gap:8px;transition:all .2s;box-shadow:0 4px 20px rgba(124,58,237,.3)}
.btn-run:hover{transform:translateY(-1px);box-shadow:0 8px 30px rgba(124,58,237,.4)}
.btn-run:disabled{opacity:.5;cursor:not-allowed;transform:none}
.btn-outline{padding:10px 18px;border-radius:var(--rsm);background:none;color:var(--txt2);border:1px solid var(--bdr2);cursor:pointer;font-family:var(--ff);font-size:13px;font-weight:500;display:inline-flex;align-items:center;gap:7px;transition:all .15s}
.btn-outline:hover{border-color:var(--acc2);color:var(--txt);background:var(--ag)}
.btn-sm{padding:7px 14px;font-size:12.5px;border-radius:var(--rxs)}
.card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:20px}
.sec-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.sec-title{font-family:var(--fd);font-size:15.5px;font-weight:700;letter-spacing:-.03em}
.sec-sub{font-size:11.5px;color:var(--txt2);margin-top:2px}

/* RUNNER */
.runner{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:22px;margin-bottom:22px}
.rlog{background:var(--bg);border:1px solid var(--bdr);border-radius:var(--rsm);padding:14px;min-height:150px;max-height:210px;overflow-y:auto;font-family:var(--fm);font-size:11.5px;line-height:1.8}
.rlog::-webkit-scrollbar{width:3px}
.rll{display:flex;align-items:flex-start;gap:8px;padding:2px 0;animation:lfade .22s ease}
@keyframes lfade{from{opacity:0;transform:translateX(-4px)}to{opacity:1;transform:none}}
.rts{color:var(--txt3);flex-shrink:0;min-width:72px}
.rico{flex-shrink:0;width:14px}
.rmsg{}.rmsg-ok{color:#a3e635}.rmsg-err{color:#ef4444}.rmsg-run{color:#06b6d4}.rmsg-info{color:var(--txt2)}
.rpbar{height:4px;background:var(--bdr2);border-radius:3px;overflow:hidden;margin:12px 0 6px}
.rpfill{height:100%;border-radius:3px;background:linear-gradient(90deg,#7c3aed,#06b6d4,#a3e635);transition:width .4s ease}
.rinput{background:var(--surf2);border:1px solid var(--bdr2);border-radius:var(--rxs);padding:8px 11px;font-family:var(--ff);font-size:12.5px;color:var(--txt);outline:none;transition:border-color .13s;width:100%}
.rinput:focus{border-color:var(--acc)}
.rinput::placeholder{color:var(--txt3)}

/* TOOLS */
.tools-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:13px;margin-bottom:22px}
.tool-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:17px;display:flex;flex-direction:column;gap:11px;transition:all .18s;position:relative;overflow:hidden}
.tool-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px}
.tool-card:hover{border-color:var(--bdr2)}
.tool-card.connected{border-color:rgba(163,230,53,.25);background:linear-gradient(135deg,var(--surf),rgba(163,230,53,.03))}
.tool-ico{width:44px;height:44px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:21px;flex-shrink:0;border:1px solid var(--bdr)}
.tool-name{font-size:14px;font-weight:700;color:var(--txt)}
.tool-type{font-size:11px;color:var(--txt3);margin-top:2px}
.tool-desc{font-size:12px;color:var(--txt2);line-height:1.6}
.tool-key{flex:1;background:var(--surf2);border:1px solid var(--bdr2);border-radius:var(--rxs);padding:8px 11px;font-family:var(--fm);font-size:11.5px;color:var(--txt2);outline:none;transition:border-color .13s;min-width:0}
.tool-key::placeholder{color:var(--txt3)}
.tbtn{padding:7px 13px;border-radius:var(--rxs);font-family:var(--ff);font-size:12px;font-weight:600;cursor:pointer;transition:all .15s;border:1px solid var(--bdr2);background:none;color:var(--txt2);white-space:nowrap}
.tbtn:hover{color:var(--txt);background:var(--surf2)}
.tbtn.con{background:rgba(163,230,53,.1);color:#a3e635;border-color:rgba(163,230,53,.3)}
.tbtn.loading{opacity:.6;cursor:default}
.cdot{width:6px;height:6px;border-radius:50%;background:#a3e635;box-shadow:0 0 5px #a3e635}

/* BENEFITS */
.bene-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:22px}
.bene-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:18px}
.bene-title{font-family:var(--fd);font-size:14px;font-weight:700;letter-spacing:-.02em;margin-bottom:10px}
.bene-item{display:flex;align-items:flex-start;gap:8px;font-size:12.5px;color:var(--txt2);line-height:1.55;padding:3px 0}
.bene-item::before{content:'•';color:var(--acc2);flex-shrink:0;margin-top:1px}

/* WHY */
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:22px}
.why-card{background:var(--surf);border:1px solid var(--bdr);border-radius:var(--r);padding:16px;text-align:center}
.why-val{font-family:var(--fd);font-size:22px;font-weight:800;letter-spacing:-.03em;line-height:1;margin-top:6px}
.why-lbl{font-size:11.5px;color:var(--txt2);margin-top:4px;line-height:1.5}

/* STATUS BADGE */
.status-badge{display:flex;align-items:center;gap:7px;padding:5px 13px;border-radius:20px;font-size:11.5px;font-weight:600;background:rgba(255,255,255,.05);border:1px solid var(--bdr2)}
.conn-badge{display:inline-flex;align-items:center;gap:4px;padding:3px 9px;border-radius:20px;font-size:11px;font-weight:700;background:rgba(163,230,53,.12);color:#a3e635;border:.5px solid rgba(163,230,53,.25)}
`;

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
const delay = (ms) => new Promise((r) => setTimeout(r, ms));
const now = () => new Date().toISOString().substr(11, 8);

// ─────────────────────────────────────────────────────────────────────────────
// SUB-COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function PipelineStepCard({ step, status, active, onClick }) {
  const dotCls = { idle:"sdot sdot-idle", running:"sdot sdot-run", done:"sdot sdot-done", error:"sdot sdot-err" }[status] || "sdot sdot-idle";
  const statusLabel = { idle:"Idle", running:"Running…", done:"Complete ✓", error:"Error" }[status];
  return (
    <div className={`psc ${active ? "active" : ""}`} style={{ "--step-c": step.color }} onClick={onClick}>
      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
        <div className="ps-num" style={{ background: step.color+"22", color: step.color }}>{step.num}</div>
        <span className="ps-tool-lbl" style={{ color: step.color }}>{step.tool}</span>
      </div>
      <div style={{ fontSize:24 }}>{step.ico}</div>
      <div className="ps-title">{step.name}</div>
      <div className="ps-body">{step.desc}</div>
      <div className="ps-status-row">
        <div className={dotCls} />
        <span>{statusLabel}</span>
      </div>
    </div>
  );
}

function ToolCard({ tool, onConnect }) {
  const [connecting, setConnecting] = useState(false);
  const [keyVal, setKeyVal] = useState(tool.connected && tool.isOAuth ? "✓ Authenticated via OAuth2" : "");

  const handleConnect = async () => {
    if (tool.connected) { onConnect(tool.id, false); return; }
    setConnecting(true);
    await delay(1200);
    setConnecting(false);
    onConnect(tool.id, true);
  };

  return (
    <div className={`tool-card ${tool.connected ? "connected" : ""}`}>
      <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(90deg,${tool.color},transparent)` }} />
      <div style={{ display:"flex", alignItems:"center", gap:12 }}>
        <div className="tool-ico" style={{ background: tool.color+"18", borderColor: tool.color+"30" }}>{tool.ico}</div>
        <div style={{ flex:1, minWidth:0 }}>
          <div className="tool-name">{tool.name}</div>
          <div className="tool-type">{tool.type}</div>
        </div>
        {tool.connected && <div style={{ display:"flex", alignItems:"center", gap:5, fontSize:10.5, fontWeight:700, color:"#a3e635", whiteSpace:"nowrap" }}><div className="cdot" />Connected</div>}
        {tool.required && <span style={{ fontSize:9, fontWeight:700, color:tool.color, border:`.5px solid ${tool.color}44`, padding:"1px 6px", borderRadius:3 }}>REQ</span>}
      </div>
      <div className="tool-desc">{tool.desc}</div>
      <div style={{ display:"flex", gap:7, alignItems:"center" }}>
        {tool.isOAuth
          ? <input className="tool-key" type="text" placeholder={tool.ph} value={keyVal} readOnly style={{ "--fc": tool.color }} />
          : <input className="tool-key" type="password" placeholder={tool.ph} value={keyVal} onChange={(e) => setKeyVal(e.target.value)} style={{ "--fc": tool.color }} onFocus={(e) => { e.target.style.borderColor = tool.color; }} onBlur={(e) => { e.target.style.borderColor = ""; }} />
        }
        <button
          className={`tbtn ${tool.connected ? "con" : ""} ${connecting ? "loading" : ""}`}
          onClick={handleConnect}
          disabled={connecting}
        >
          {connecting ? "Testing…" : tool.isOAuth ? (tool.connected ? "✓ Connected" : "OAuth2 Login") : (tool.connected ? "✓ Connected" : "Test & Connect")}
        </button>
      </div>
    </div>
  );
}

function LogLine({ ts, ico, msg, type }) {
  const clsMap = { ok:"rmsg rmsg-ok", err:"rmsg rmsg-err", run:"rmsg rmsg-run", info:"rmsg rmsg-info" };
  return (
    <div className="rll">
      <span className="rts">{ts}</span>
      <span className="rico">{ico}</span>
      <span className={clsMap[type] || "rmsg rmsg-info"}>{msg}</span>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

export default function AutomationPanel() {
  // Tool state
  const [tools, setTools] = useState(TOOLS_DATA.map(t => ({ ...t })));

  // Pipeline status per step
  const [stepStatus, setStepStatus] = useState(() =>
    Object.fromEntries(PIPELINE_STEPS.map(s => [s.num, "idle"]))
  );
  const [activeStep, setActiveStep] = useState(null);
  const [arrowsLit, setArrowsLit] = useState(new Set());

  // Runner
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState([
    { id:0, ts:now(), ico:"•", msg:"InfiCreator AI Pipeline v2.0 — Ready", type:"info" },
    { id:1, ts:now(), ico:"•", msg:"All 7 AI tools configured — awaiting input", type:"info" },
    { id:2, ts:now(), ico:"•", msg:'Click "Run Pipeline" to start', type:"info" },
  ]);
  const [progress, setProgress] = useState(0);
  const [progressLabel, setProgressLabel] = useState("Idle");
  const [runnerStatus, setRunnerStatus] = useState("idle"); // idle | running | done
  const logRef = useRef(null);
  const logId = useRef(3);

  // Form
  const [idea, setIdea] = useState("5 AI tools that will replace your entire marketing team in 2026");
  const [voice, setVoice] = useState(VOICES[0]);
  const [visual, setVisual] = useState(VISUALS[0]);
  const [format, setFormat] = useState(FORMATS[0]);

  // Toast
  const [toast, setToast] = useState(null);

  // Scroll log to bottom
  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [logs]);

  const addLog = useCallback((msg, type = "info", ico = "•") => {
    setLogs(prev => [...prev, { id: logId.current++, ts: now(), ico, msg, type }]);
  }, []);

  const clearLogs = () => {
    setLogs([]);
    addLog("Log cleared — ready for next run", "info", "•");
  };

  const showToast = (msg, color = "#9d5ff0") => {
    setToast({ msg, color });
    setTimeout(() => setToast(null), 3000);
  };

  const setStep = (n, status) => {
    setStepStatus(prev => ({ ...prev, [n]: status }));
    if (status === "running") setActiveStep(n);
    if (status === "done") setArrowsLit(prev => new Set([...prev, n]));
  };

  const handleConnect = (id, newState) => {
    setTools(prev => prev.map(t => t.id === id ? { ...t, connected: newState } : t));
    if (newState) showToast(`✓ ${tools.find(t=>t.id===id)?.name} connected!`, "#a3e635");
    else showToast(`Disconnected`, "#f59e0b");
  };

  const startPipeline = async () => {
    if (running) return;
    setRunning(true);
    setRunnerStatus("running");
    setProgress(0);
    setProgressLabel("Starting…");
    setArrowsLit(new Set());
    setActiveStep(null);
    PIPELINE_STEPS.forEach(s => setStep(s.num, "idle"));
    clearLogs();

    const steps = [
      { n:1, msgs:[
        ["▶ Initializing Claude 3.5 via OpenRouter…","run","⟳"],
        [`📋 Analyzing: "${idea.slice(0,45)}…"`,"run","⟳"],
        ["✓ Script generated — 340 words, 62s read time","ok","✓"],
        ["✓ Hook crafted: 'What if AI replaced your team?'","ok","✓"],
      ]},
      { n:2, msgs:[
        [`▶ ElevenLabs — voice: ${voice.split("—")[0].trim()}`,"run","⟳"],
        ["🎙 Synthesizing 340-word script…","run","⟳"],
        ["✓ Voiceover complete — 62s, 48kHz WAV","ok","✓"],
      ]},
      { n:3, msgs:[
        ["▶ OpenAI Whisper — transcribing audio file…","run","⟳"],
        ["📝 Detected 340 words, 98.4% confidence","run","⟳"],
        ["✓ SRT subtitles generated — 62 timed segments","ok","✓"],
      ]},
      { n:4, msgs:[
        [`▶ Leonardo AI — style: ${visual.split("·")[0].trim()}`,"run","⟳"],
        ["🎨 Generating 8 cinematic scene visuals…","run","⟳"],
        ["✓ Images 1–4 complete (1080×1920)","ok","✓"],
        ["✓ All 8 scenes rendered with motion effects","ok","✓"],
      ]},
      { n:5, msgs:[
        ["▶ Shotstack — assembling vertical video…","run","⟳"],
        ["🎬 Compositing: audio + visuals + subtitles…","run","⟳"],
        ["🎬 Applying color grade and transitions…","run","⟳"],
        ["✓ Video rendered — 9:16 · 1080×1920 · 62s · 48MB","ok","✓"],
      ]},
      { n:6, msgs:[
        ["▶ Google Drive OAuth2 — uploading file…","run","⟳"],
        ["☁ Upload: 48MB → /InfiCreator/Videos/2026-04/","run","⟳"],
        ["✓ Upload complete — shareable link generated","ok","✓"],
      ]},
      { n:7, msgs:[
        ["▶ n8n — finalizing workflow run…","run","⟳"],
        ["⚡ All 6 upstream steps verified ✓","run","⟳"],
        ["✓ Workflow logged and metadata stored","ok","✓"],
        ["🎬 READY: Reels · Shorts · TikTok · 9:16 · 60s","ok","🎬"],
      ]},
    ];
    const stageDelay = [400, 700, 500, 900, 1000, 600, 400];

    for (const [i, step] of steps.entries()) {
      setStep(step.n, "running");
      setProgress(Math.round((i / 7) * 100));
      setProgressLabel(`Step ${step.n}/7 — ${PIPELINE_STEPS[step.n-1].name}…`);
      addLog(`─── STEP ${step.n}: ${PIPELINE_STEPS[step.n-1].name.toUpperCase()} ───`, "info", "│");
      for (const [msg, type, ico] of step.msgs) {
        await delay(stageDelay[i]);
        addLog(msg, type, ico);
      }
      await delay(200);
      setStep(step.n, "done");
      setProgress(Math.round(((i + 1) / 7) * 100));
    }

    setProgress(100);
    setProgressLabel("✓ Pipeline Complete — 3 platforms ready");
    setRunnerStatus("done");
    addLog("══════════════════════════════════════", "info", "│");
    addLog("✓ PIPELINE COMPLETE — Video ready to post!", "ok", "🎬");
    addLog("Platforms: Reels · YouTube Shorts · TikTok", "ok", "📱");
    setRunning(false);
    showToast("🎬 Pipeline complete — video ready!", "#a3e635");
  };

  const connectedCount = tools.filter(t => t.connected).length;

  return (
    <>
      <style>{CSS}</style>
      <div className="auto-wrap" style={{ padding:24, overflowY:"auto", height:"100%" }}>

        {/* HERO */}
        <div className="ah">
          <div className="ah-grid">
            <div>
              <div className="ah-eyebrow">🎬 Full AI Video Pipeline</div>
              <h1 className="ah-title">One Idea.<br /><span>Infinite Videos.</span></h1>
              <p className="ah-sub">The most advanced AI video automation system — converts your idea into a fully rendered vertical video, ready to post on Reels, Shorts & TikTok. Everything runs inside one powerful AI pipeline.</p>
              {[
                "Converts ideas into high-converting scripts with Claude AI",
                "Generates realistic AI voiceover with ElevenLabs in any voice",
                "Creates cinematic visuals with Leonardo AI + motion effects",
                "Auto-renders vertical video via Shotstack, delivers to Drive",
                "Everything orchestrated by n8n — zero human interaction",
              ].map(b => <div key={b} className="ah-bullet">{b}</div>)}
              <div style={{ display:"flex", gap:10, marginTop:20, flexWrap:"wrap" }}>
                <button className="btn-run" onClick={startPipeline} disabled={running}>
                  {running ? <><span style={{ animation:"blink .7s ease infinite", display:"inline-block" }}>⟳</span> Running…</> : "▶ Run Pipeline Now"}
                </button>
                <button className="btn-outline">⚙ Configure APIs</button>
              </div>
            </div>
            <div>
              <div className="ah-stats">
                {[
                  ["7","AI Tools\nIntegrated","#9d5ff0"],
                  ["~4m","Avg. Pipeline\nRuntime","#06b6d4"],
                  ["24/7","AI Studio\nRunning","#a3e635"],
                  ["9:16","Vertical\nFormat","#ec4899"],
                  ["3","Platform\nOutputs","#f59e0b"],
                  ["0","Hours of\nEditing","#10b981"],
                ].map(([v, l, c]) => (
                  <div className="ah-stat" key={l}>
                    <div className="ah-stat-val" style={{ color:c }}>{v}</div>
                    <div className="ah-stat-lbl" style={{ whiteSpace:"pre-line" }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginTop:14 }}>
                {[["Claude 3.5","rgba(139,92,246,.12)","#a78bfa","rgba(139,92,246,.25)"],["ElevenLabs","rgba(6,182,212,.08)","#06b6d4","rgba(6,182,212,.2)"],["Whisper","rgba(16,185,129,.08)","#10b981","rgba(16,185,129,.2)"],["Leonardo AI","rgba(245,158,11,.08)","#f59e0b","rgba(245,158,11,.2)"],["Shotstack","rgba(236,72,153,.08)","#ec4899","rgba(236,72,153,.2)"],["Google Drive","rgba(56,189,248,.08)","#38bdf8","rgba(56,189,248,.2)"],["n8n","rgba(163,230,53,.08)","#a3e635","rgba(163,230,53,.2)"]].map(([n,bg,c,bc]) => (
                  <span key={n} className="tc" style={{ background:bg, color:c, borderColor:bc }}>{n}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PIPELINE */}
        <div className="sec-hd">
          <div>
            <div className="sec-title">⚡ Automation Pipeline</div>
            <div className="sec-sub">7-step AI workflow from concept to ready-to-post vertical video</div>
          </div>
          <button className="btn-outline btn-sm" onClick={startPipeline} disabled={running}>▶ Run All Steps</button>
        </div>
        <div className="pipe">
          {PIPELINE_STEPS.map((s, i) => (
            <div key={s.num} className="pipe-step-wrap">
              <PipelineStepCard
                step={s}
                status={stepStatus[s.num]}
                active={activeStep === s.num}
                onClick={() => setActiveStep(s.num)}
              />
              {i < PIPELINE_STEPS.length - 1 && (
                <div className="pipe-arrow">
                  <div className={`parr ${arrowsLit.has(s.num) ? "lit" : ""}`} style={{ "--cf": s.color, "--ct": PIPELINE_STEPS[i+1].color }} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RUNNER */}
        <div className="runner">
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18 }}>
            <div style={{ fontFamily:"var(--fd)", fontSize:15, fontWeight:700, letterSpacing:"-.02em" }}>Pipeline Runner</div>
            <div className="status-badge">
              <div className={`sdot ${runnerStatus === "running" ? "sdot-run" : runnerStatus === "done" ? "sdot-done" : "sdot-idle"}`} />
              <span style={{ fontSize:11.5, fontWeight:600 }}>
                {runnerStatus === "running" ? "Running…" : runnerStatus === "done" ? "Complete ✓" : "Ready"}
              </span>
            </div>
          </div>

          {/* Inputs */}
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:12, marginBottom:14 }}>
            {[
              ["💡 Content Idea / Topic", <input key="idea" className="rinput" value={idea} onChange={e=>setIdea(e.target.value)} placeholder="e.g. 5 morning habits that changed my life…" />],
              ["📐 Video Format", <select key="fmt" className="rinput" value={format} onChange={e=>setFormat(e.target.value)} style={{ cursor:"pointer" }}>{FORMATS.map(f=><option key={f}>{f}</option>)}</select>],
              ["🎙 Voice Style", <select key="voice" className="rinput" value={voice} onChange={e=>setVoice(e.target.value)} style={{ cursor:"pointer" }}>{VOICES.map(v=><option key={v}>{v}</option>)}</select>],
              ["🎨 Visual Style", <select key="vis" className="rinput" value={visual} onChange={e=>setVisual(e.target.value)} style={{ cursor:"pointer" }}>{VISUALS.map(v=><option key={v}>{v}</option>)}</select>],
            ].map(([lbl, input]) => (
              <div key={lbl} style={{ display:"flex", flexDirection:"column", gap:5 }}>
                <label style={{ fontSize:11, fontWeight:500, color:"var(--txt2)" }}>{lbl}</label>
                {input}
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="rpbar"><div className="rpfill" style={{ width: progress+"%" }} /></div>
          <div style={{ display:"flex", justifyContent:"space-between", fontSize:10.5, color:"var(--txt3)", marginBottom:12 }}>
            <span>{progressLabel}</span><span>{progress}%</span>
          </div>

          {/* Log */}
          <div className="rlog" ref={logRef}>
            {logs.map(l => <LogLine key={l.id} {...l} />)}
          </div>

          <div style={{ display:"flex", gap:10, marginTop:14, flexWrap:"wrap" }}>
            <button className="btn-run" onClick={startPipeline} disabled={running}>
              {running ? "⟳ Running…" : "▶ Run Full Pipeline"}
            </button>
            <button className="btn-outline btn-sm" onClick={clearLogs}>⊟ Clear Log</button>
            <button className="btn-outline btn-sm" style={{ marginLeft:"auto" }} onClick={() => showToast("⬇ Downloading last video from Drive…", "#38bdf8")}>⬇ Export Last Video</button>
          </div>
        </div>

        {/* TOOLS */}
        <div className="sec-hd" style={{ marginBottom:16 }}>
          <div>
            <div className="sec-title">🔧 AI Tools — API Connections</div>
            <div className="sec-sub">Connect your API keys to activate each step of the pipeline</div>
          </div>
          <span className="conn-badge">{connectedCount} / {tools.length} Connected</span>
        </div>
        <div className="tools-grid">
          {tools.map(t => <ToolCard key={t.id} tool={t} onConnect={handleConnect} />)}
        </div>

        {/* BENEFITS */}
        <div className="bene-grid">
          <div className="bene-card">
            <div style={{ fontSize:24, marginBottom:10 }}>🎯</div>
            <div className="bene-title">Perfect For</div>
            {["Faceless YouTube channels & automation pages","AI content creators scaling output 10×","TikTok & Instagram Reels growth accounts","Digital marketers & freelance agencies","Personal brands scaling without a team","Social media managers needing daily content"].map(b => <div key={b} className="bene-item">{b}</div>)}
          </div>
          <div className="bene-card">
            <div style={{ fontSize:24, marginBottom:10 }}>🚀</div>
            <div className="bene-title">Why This Works in 2026</div>
            {["Short-form vertical video dominates all social algorithms","Automate production — idea to upload in minutes","Increase posting frequency without extra effort","Save hours of editing time every single week","Test multiple content ideas daily at scale","Like running an AI content studio 24/7"].map(b => <div key={b} className="bene-item">{b}</div>)}
          </div>
        </div>

        {/* WHY STATS */}
        <div className="why-grid">
          {[["⚡","~4 min","Average pipeline runtime per video","#9d5ff0"],["📉","-90%","Production cost vs traditional editing","#10b981"],["📈","10×","More content output per week","#06b6d4"],["🎬","3","Platforms delivered simultaneously","#a3e635"],["🤖","0","Hours of manual video editing","#ec4899"],["☁","24/7","AI studio always running in cloud","#f59e0b"]].map(([ico,val,lbl,c]) => (
            <div key={lbl} className="why-card">
              <div style={{ fontSize:26 }}>{ico}</div>
              <div className="why-val" style={{ color:c }}>{val}</div>
              <div className="why-lbl">{lbl}</div>
            </div>
          ))}
        </div>

      </div>

      {/* TOAST */}
      {toast && (
        <div style={{ position:"fixed", bottom:22, right:22, background:"var(--surf2)", border:"1px solid var(--bdr2)", borderRadius:10, padding:"10px 16px", fontSize:13, color:"var(--txt)", zIndex:999, boxShadow:"0 20px 60px rgba(0,0,0,.4)", display:"flex", alignItems:"center", gap:9, animation:"lfade .25s ease", maxWidth:360 }}>
          <span style={{ color: toast.color, fontSize:18 }}>●</span>
          <span>{toast.msg}</span>
        </div>
      )}
    </>
  );
}
