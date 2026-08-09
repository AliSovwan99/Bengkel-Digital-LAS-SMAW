/* =========================================================
   APLIKASI — BENGKEL LAS DIGITAL
   ========================================================= */

/* ---------- Utilities ---------- */
function $(sel, ctx=document){ return ctx.querySelector(sel); }
function $all(sel, ctx=document){ return Array.from(ctx.querySelectorAll(sel)); }
function el(tag, attrs={}, children=[]){
  const e = document.createElement(tag);
  for(const k in attrs){
    if(k === 'html'){ e.innerHTML = attrs[k]; }
    else if(k.startsWith('on')){ e.addEventListener(k.slice(2), attrs[k]); }
    else e.setAttribute(k, attrs[k]);
  }
  (Array.isArray(children)?children:[children]).forEach(c=>{
    if(c==null) return;
    e.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return e;
}

/* ---------- Clock ---------- */
function tickClock(){
  const d = new Date();
  const s = d.toLocaleDateString('id-ID',{weekday:'short', day:'2-digit', month:'short'}) + ' · ' +
            d.toLocaleTimeString('id-ID',{hour:'2-digit', minute:'2-digit'});
  const c = $('#clock'); if(c) c.textContent = s;
}
setInterval(tickClock, 1000*20); tickClock();

/* =========================================================
   NAVIGATION
   ========================================================= */
const VIEW_LABELS = {
  beranda:'Beranda', petunjuk:'Petunjuk Penggunaan', informasi:'Informasi Pembelajaran',
  materi:'Materi', latihan:'Latihan Soal'
};

function showView(name){
  $all('.view').forEach(v=>v.classList.remove('active'));
  const target = $('#view-'+name);
  if(target) target.classList.add('active');
  $all('.sidebar > .nav-group > .nav-btn[data-view]').forEach(b=>b.classList.toggle('active', b.dataset.view===name));
  $('#crumbView').textContent = VIEW_LABELS[name] || name;
  window.scrollTo({top:0, behavior:'smooth'});
  if(window.innerWidth <= 900){ $('#sidebar').classList.remove('open'); }
}

document.addEventListener('click', (ev)=>{
  const navBtn = ev.target.closest('[data-view]');
  if(navBtn){
    showView(navBtn.dataset.view);
    if(navBtn.dataset.materi){ /* handled below too */ }
  }
  const materiTile = ev.target.closest('[data-materi]');
  if(materiTile){
    showView('materi');
    renderMateri(materiTile.dataset.materi);
  }
  const toggle = ev.target.closest('[data-toggle]');
  if(toggle){
    const sub = document.getElementById(toggle.dataset.toggle);
    sub.classList.toggle('open');
  }
});

$('#menuToggle').addEventListener('click', ()=> $('#sidebar').classList.toggle('open'));

/* build materi submenu */
(function buildMateriSubmenu(){
  const wrap = $('#materi-sub');
  MATERI_ORDER.forEach(id=>{
    const b = el('button', {class:'nav-btn', 'data-materi':id, onclick:()=>{ showView('materi'); renderMateri(id); }},
      [MATERI[id].title]);
    wrap.appendChild(b);
  });
  wrap.classList.add('open');
})();

/* =========================================================
   INFORMASI PEMBELAJARAN — render static content
   ========================================================= */
function renderInformasi(){
  $('#cpText').textContent = CP_TEXT;

  const tpWrap = $('#tpList'); tpWrap.innerHTML = '';
  TP_LIST.forEach(t=>{
    tpWrap.appendChild(el('div', {class:'panel', style:'margin-bottom:12px;'}, [
      el('span',{class:'chip mono'},[t.kode]),
      el('p',{style:'margin-top:8px;'},[t.isi])
    ]));
  });

  const atpWrap = $('#atpList'); atpWrap.innerHTML = '';
  ATP_FLOW.forEach((a,i)=>{
    atpWrap.appendChild(el('li',{class:'step'},[
      el('span',{class:'step-num'}),
      el('div',{},[
        el('h4',{},[`${a.judul}`]),
        el('p',{},[a.isi])
      ])
    ]));
  });

  const petaWrap = $('#petaGrid'); petaWrap.innerHTML = '';
  KOMPETENSI_MAP.forEach(k=>{
    petaWrap.appendChild(el('div',{class:'panel', style:'margin-bottom:0;'},[
      el('h3',{},[k.area]),
      el('ul',{},k.butir.map(b=> el('li',{},[b])))
    ]));
  });

  const avatarBox = $('#profAvatar');
  if(PROFIL.foto){
    avatarBox.innerHTML = '';
    const img = el('img', {src:PROFIL.foto, alt:'Foto '+PROFIL.nama});
    img.onerror = ()=>{ avatarBox.innerHTML = '🧑‍🏫'; };
    avatarBox.appendChild(img);
  }
  $('#profNama').textContent = PROFIL.nama;
  $('#profNim').textContent = PROFIL.nim;
  $('#profProdi').textContent = PROFIL.prodi;
  $('#profInstitusi').textContent = PROFIL.institusi;
  $('#profBio').textContent = PROFIL.bio;
  $('#profKontak').textContent = PROFIL.kontak;

  const pustakaWrap = $('#pustakaList'); pustakaWrap.innerHTML = '';
  PUSTAKA.forEach(p=> pustakaWrap.appendChild(el('li',{html:p})));
}
renderInformasi();

/* tabs (generic, works for any .tabbar + .tabpane group sharing id prefix) */
function wireTabs(barSel, paneIdPrefix){
  $all(barSel+' .tabbtn').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      $all(barSel+' .tabbtn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      $all('.tabpane').forEach(p=>{ if(p.id.startsWith(paneIdPrefix)) p.classList.remove('active'); });
      const pane = document.getElementById(paneIdPrefix + btn.dataset.tab);
      if(pane) pane.classList.add('active');
    });
  });
}
wireTabs('#infoTabs', 'tab-');
wireTabs('#latihanTabs', 'tabl-');

/* =========================================================
   MATERI — rendering + TTS + navigation
   ========================================================= */
let currentMateri = MATERI_ORDER[0];
let speaking = false;

function renderMateri(id){
  currentMateri = id;
  const m = MATERI[id];
  $('#materiEyebrow').textContent = m.eyebrow;
  $('#materiTitle').textContent = m.title;

  // media (video or svg animation)
  const mediaWrap = $('#materiMedia'); mediaWrap.innerHTML = '';
  if(m.video){
    mediaWrap.appendChild(el('div',{class:'video-embed'},[
      el('iframe',{src:`https://www.youtube.com/embed/${m.video}`, title:m.title, allowfullscreen:'', loading:'lazy'})
    ]));
    mediaWrap.appendChild(el('div',{class:'video-cap'},[m.videoCap || '']));
  } else if(m.svgAnimation){
    const box = el('div',{class:'panel', style:'display:flex;justify-content:center;padding:26px;'});
    box.appendChild(buildSVG(m.svgAnimation));
    mediaWrap.appendChild(box);
  }

  $('#materiBody').innerHTML = m.html;

  // mount arc game if this materi requests it
  const gameMount = $('#arcGameMount');
  if(gameMount){ gameMount.innerHTML=''; mountArcGame(gameMount); }

  // update sidebar active state
  $all('#materi-sub .nav-btn').forEach(b=>b.classList.toggle('active', b.dataset.materi===id));

  // nav buttons
  const idx = MATERI_ORDER.indexOf(id);
  const prevBtn = $('#materiPrev'), nextBtn = $('#materiNext');
  prevBtn.disabled = idx<=0;
  nextBtn.textContent = idx>=MATERI_ORDER.length-1 ? 'Ke Latihan Soal →' : 'Materi Berikutnya →';
  prevBtn.onclick = ()=>{ if(idx>0) renderMateri(MATERI_ORDER[idx-1]); };
  nextBtn.onclick = ()=>{
    if(idx < MATERI_ORDER.length-1) renderMateri(MATERI_ORDER[idx+1]);
    else showView('latihan');
  };

  stopSpeech();
}
renderMateri(currentMateri);

/* TTS */
function stopSpeech(){
  window.speechSynthesis && window.speechSynthesis.cancel();
  speaking = false;
  $('#ttsBar').classList.remove('playing');
  $('#ttsBtn').textContent = '🔊 Dengarkan Materi';
}
$('#ttsBtn').addEventListener('click', ()=>{
  if(!('speechSynthesis' in window)){
    alert('Maaf, peramban ini tidak mendukung text-to-speech. Coba gunakan Chrome/Edge terbaru.');
    return;
  }
  if(speaking){ stopSpeech(); return; }
  const text = MATERI[currentMateri].narasi;
  const rate = parseFloat($('#ttsRate').value || '1');
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'id-ID'; u.rate = rate;
  u.onend = stopSpeech; u.onerror = stopSpeech;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
  speaking = true;
  $('#ttsBar').classList.add('playing');
  $('#ttsBtn').textContent = '⏸ Hentikan Narasi';
});

/* =========================================================
   SVG ANIMATIONS (signature visuals, use theme colors)
   ========================================================= */
function svgWrap(inner, viewBox){
  const div = document.createElement('div');
  div.innerHTML = `<svg viewBox="${viewBox}" width="100%" style="max-width:360px;display:block;margin:0 auto;">${inner}</svg>`;
  return div.firstChild;
}

function buildSVG(kind){
  if(kind==='apd'){
    return svgWrap(`
      <defs>
        <radialGradient id="glowAPD" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#5FE3F0" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#5FE3F0" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="150" cy="140" r="120" fill="url(#glowAPD)"/>
      <!-- helm/topeng -->
      <rect x="95" y="55" width="110" height="90" rx="14" fill="#2b353c" stroke="#5FE3F0" stroke-width="2"/>
      <rect x="112" y="80" width="76" height="34" rx="4" fill="#12161a" stroke="#FF7A3D" stroke-width="2">
        <animate attributeName="stroke-opacity" values="1;0.3;1" dur="1.8s" repeatCount="indefinite"/>
      </rect>
      <!-- body / apron -->
      <path d="M100 148 L100 230 Q150 250 200 230 L200 148 Z" fill="#20282e" stroke="#3c4850" stroke-width="2"/>
      <!-- gloves -->
      <circle cx="80" cy="200" r="16" fill="#C9622B"/>
      <circle cx="220" cy="200" r="16" fill="#C9622B"/>
      <!-- label chips -->
      <text x="150" y="270" text-anchor="middle" fill="#7C8A92" font-family="IBM Plex Mono" font-size="11">TOPENG · APRON · SARUNG TANGAN · SEPATU SAFETY</text>
    `, '0 0 300 290');
  }
  if(kind==='panel'){
    return svgWrap(`
      <rect x="20" y="20" width="260" height="180" rx="10" fill="#1e252b" stroke="#3c4850" stroke-width="2"/>
      <circle cx="70" cy="70" r="22" fill="none" stroke="#5FE3F0" stroke-width="3"/>
      <line x1="70" y1="70" x2="85" y2="55" stroke="#5FE3F0" stroke-width="3">
        <animateTransform attributeName="transform" type="rotate" from="0 70 70" to="360 70 70" dur="4s" repeatCount="indefinite"/>
      </line>
      <text x="70" y="105" text-anchor="middle" fill="#7C8A92" font-family="IBM Plex Mono" font-size="10">AMPERE</text>

      <rect x="130" y="50" width="60" height="34" rx="6" fill="#12161a" stroke="#FF7A3D" stroke-width="2"/>
      <text x="160" y="72" text-anchor="middle" fill="#FF7A3D" font-family="IBM Plex Mono" font-size="12">DCEP</text>
      <text x="160" y="98" text-anchor="middle" fill="#7C8A92" font-family="IBM Plex Mono" font-size="10">POLARITAS</text>

      <circle cx="230" cy="70" r="8" fill="#4CBB6B">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.4s" repeatCount="indefinite"/>
      </circle>
      <text x="230" y="105" text-anchor="middle" fill="#7C8A92" font-family="IBM Plex Mono" font-size="10">POWER</text>

      <line x1="35" y1="150" x2="265" y2="150" stroke="#3c4850" stroke-width="2"/>
      <text x="150" y="175" text-anchor="middle" fill="#B7C2C8" font-family="IBM Plex Sans" font-size="12">Panel Kontrol Mesin Las</text>
    `, '0 0 300 210');
  }
  if(kind==='gauge'){
    return svgWrap(`
      <circle cx="150" cy="150" r="110" fill="#1e252b" stroke="#3c4850" stroke-width="2"/>
      <path d="M 60 150 A 90 90 0 0 1 240 150" fill="none" stroke="#3c4850" stroke-width="14"/>
      <path d="M 60 150 A 90 90 0 0 1 134.4 61.4" fill="none" stroke="#4CBB6B" stroke-width="14" stroke-linecap="round"/>
      <path d="M 134.4 61.4 A 90 90 0 0 1 195 72.1" fill="none" stroke="#F4C430" stroke-width="14"/>
      <path d="M 195 72.1 A 90 90 0 0 1 240 150" fill="none" stroke="#E14B4B" stroke-width="14" stroke-linecap="round"/>
      <line x1="150" y1="150" x2="110" y2="85" stroke="#5FE3F0" stroke-width="4" stroke-linecap="round">
        <animateTransform attributeName="transform" type="rotate" values="0 150 150; 40 150 150; -10 150 150; 0 150 150" dur="3.4s" repeatCount="indefinite"/>
      </line>
      <circle cx="150" cy="150" r="8" fill="#5FE3F0"/>
      <text x="150" y="200" text-anchor="middle" fill="#B7C2C8" font-family="IBM Plex Mono" font-size="13">ARUS (A)</text>
    `, '0 0 300 220');
  }
  return document.createTextNode('');
}

/* Hero arc animation (signature element on Beranda) */
function buildHeroArc(){
  return svgWrap(`
    <defs>
      <radialGradient id="arcGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#5FE3F0" stop-opacity="0.9"/>
        <stop offset="60%" stop-color="#5FE3F0" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#5FE3F0" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <!-- electrode -->
    <line x1="90" y1="40" x2="150" y2="150" stroke="#C9622B" stroke-width="10" stroke-linecap="round"/>
    <!-- plate -->
    <rect x="140" y="160" width="150" height="20" rx="3" fill="#3c4850"/>
    <!-- arc glow -->
    <circle cx="155" cy="158" r="34" fill="url(#arcGlow)">
      <animate attributeName="r" values="26;38;26" dur="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="155" cy="158" r="6" fill="#EEF3F5">
      <animate attributeName="opacity" values="1;0.5;1" dur="0.25s" repeatCount="indefinite"/>
    </circle>
    <!-- sparks -->
    <g fill="#FF7A3D">
      <circle cx="170" cy="150" r="2.4"><animate attributeName="cy" values="150;110;150" dur="1.1s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.1s" repeatCount="indefinite"/></circle>
      <circle cx="185" cy="160" r="2"><animate attributeName="cy" values="160;125;160" dur="0.9s" begin="0.3s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="0.9s" begin="0.3s" repeatCount="indefinite"/></circle>
      <circle cx="140" cy="165" r="2.2"><animate attributeName="cy" values="165;130;165" dur="1.3s" begin="0.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0" dur="1.3s" begin="0.6s" repeatCount="indefinite"/></circle>
    </g>
  `, '0 0 300 220');
}
$('#heroArcMount').appendChild(buildHeroArc());

/* =========================================================
   ARC-STRIKE MINI GAME (signature interactive element)
   ========================================================= */
function mountArcGame(container){
  const wrap = el('div',{class:'game-box'});
  const svgHolder = el('div',{class:'game-svg-wrap'});
  wrap.appendChild(svgHolder);

  const track = el('div',{style:'position:relative;height:26px;background:#1e252b;border:1px solid #3c4850;border-radius:20px;overflow:hidden;margin-top:10px;'});
  const zoneGreen = el('div',{style:'position:absolute;left:42%;width:16%;top:0;bottom:0;background:rgba(76,187,107,0.35);'});
  const needle = el('div',{style:'position:absolute;left:0;top:0;bottom:0;width:3px;background:#EEF3F5;box-shadow:0 0 8px #5FE3F0;'});
  track.appendChild(zoneGreen); track.appendChild(needle);
  wrap.appendChild(track);

  const controls = el('div',{style:'margin-top:14px;display:flex;gap:10px;justify-content:center;'});
  const startBtn = el('button',{class:'btn btn-primary btn-sm'},['▶ Mulai']);
  const strikeBtn = el('button',{class:'btn btn-spark btn-sm', disabled:'true'},['⚡ Sentuh & Tarik']);
  controls.appendChild(startBtn); controls.appendChild(strikeBtn);
  wrap.appendChild(controls);

  const stat = el('div',{class:'game-stat'},['Skor terbaik: 0  ·  Percobaan: 0']);
  const msg = el('div',{class:'game-msg'},['Klik Mulai untuk melatih timing penyalaan busur.']);
  wrap.appendChild(stat); wrap.appendChild(msg);
  container.appendChild(wrap);

  let pos = 0, dir = 1, raf = null, running = false;
  let best = parseInt(localStorage.getItem('arcgame_best')||'0',10);
  let attempts = parseInt(localStorage.getItem('arcgame_attempts')||'0',10);
  updateStat();

  function updateStat(){
    stat.textContent = `Skor terbaik: ${best}  ·  Percobaan: ${attempts}`;
  }

  function loop(){
    pos += dir * 1.6;
    if(pos>=100){pos=100; dir=-1;}
    if(pos<=0){pos=0; dir=1;}
    needle.style.left = pos+'%';
    raf = requestAnimationFrame(loop);
  }

  startBtn.addEventListener('click', ()=>{
    running = true; pos=0; dir=1;
    startBtn.disabled = true; strikeBtn.disabled = false;
    msg.textContent = 'Busur belum menyala... tunggu jarum masuk zona hijau!';
    cancelAnimationFrame(raf); loop();
  });

  strikeBtn.addEventListener('click', ()=>{
    if(!running) return;
    running = false; cancelAnimationFrame(raf);
    attempts++;
    let score, text;
    if(pos>=42 && pos<=58){ score=100; text='✅ Sempurna! Busur menyala stabil — panjang busur pas.'; }
    else if(pos>=30 && pos<=70){ score=60; text='〰️ Busur menyala tapi kurang stabil — coba lebih presisi.'; }
    else { score=20; text='❌ Elektroda menempel / busur terlalu panjang. Coba lagi!'; }
    if(score>best){ best=score; localStorage.setItem('arcgame_best', best); }
    localStorage.setItem('arcgame_attempts', attempts);
    updateStat();
    msg.textContent = text;
    startBtn.disabled = false; strikeBtn.disabled = true;
  });
}

/* =========================================================
   LAB PARAMETER PENGELASAN — simulasi sebab-akibat
   ========================================================= */
const LAB_OPTIONS = {
  arus:[
    {v:'rendah',   t:'Rendah (di bawah rekomendasi elektroda)'},
    {v:'pas',      t:'Sesuai rekomendasi elektroda'},
    {v:'tinggi',   t:'Tinggi (di atas rekomendasi elektroda)'}
  ],
  busur:[
    {v:'pendek',   t:'Terlalu pendek (< diameter elektroda)'},
    {v:'pas',      t:'Setara diameter elektroda'},
    {v:'panjang',  t:'Terlalu panjang (> diameter elektroda)'}
  ],
  sudut:[
    {v:'tegak',    t:'Terlalu tegak (± 90°)'},
    {v:'pas',      t:'70°–80° searah gerakan las'},
    {v:'rebah',    t:'Terlalu rebah (< 45°)'}
  ],
  kecepatan:[
    {v:'lambat',   t:'Terlalu lambat'},
    {v:'pas',      t:'Stabil dan konsisten'},
    {v:'cepat',    t:'Terlalu cepat'}
  ],
};
const LAB_LABELS = {arus:'Besar Arus', busur:'Panjang Busur', sudut:'Sudut Elektroda', kecepatan:'Kecepatan Pengelasan'};

function evalLabParams(p){
  const defects = [];
  if(p.arus==='rendah')  defects.push('Penetrasi dangkal dan elektroda mudah menempel (sticking) — arus kurang dari kebutuhan.');
  if(p.arus==='tinggi')  defects.push('Percikan (spatter) berlebih dan berisiko logam induk tembus (burn-through) — arus berlebih.');
  if(p.busur==='pendek') defects.push('Elektroda berisiko menempel dan busur kurang stabil — jarak busur terlalu pendek.');
  if(p.busur==='panjang')defects.push('Busur tidak stabil, percikan meningkat, berpotensi undercut — jarak busur terlalu panjang.');
  if(p.sudut==='tegak')  defects.push('Terak berisiko terjebak di dalam jalur las (slag inclusion) — sudut elektroda terlalu tegak.');
  if(p.sudut==='rebah')  defects.push('Penetrasi tidak merata sepanjang jalur las — sudut elektroda terlalu rebah.');
  if(p.kecepatan==='lambat') defects.push('Manik las menumpuk dan melebar berlebihan, berisiko overlap — kecepatan terlalu lambat.');
  if(p.kecepatan==='cepat')  defects.push('Manik las tipis dan kurang penetrasi, berpotensi undercut — kecepatan terlalu cepat.');
  return defects;
}

function buildWeldBeadSVG(p){
  const width = p.kecepatan==='lambat' ? 34 : p.kecepatan==='cepat' ? 14 : 22;
  const unstable = (p.arus!=='pas' ? 1 : 0) + (p.busur!=='pas' ? 1 : 0);
  const amp = 1.5 + unstable*2.6;
  const freq = 9;
  const spatter = (p.arus==='tinggi' || p.busur==='panjang');
  const porosity = (p.arus==='rendah' || p.busur==='pendek');
  const undercut = (p.kecepatan==='cepat' || p.sudut==='rebah');

  function edge(cy, phase, dir){
    const pts=[]; const steps=26;
    for(let i=0;i<=steps;i++){
      const t = dir===1 ? i/steps : 1-i/steps;
      const x = 20 + t*260;
      const y = cy + Math.sin(t*Math.PI*freq + phase)*amp;
      pts.push(x.toFixed(1)+' '+y.toFixed(1));
    }
    return pts;
  }
  const top = edge(70-width/2, 0, 1);
  const bot = edge(70+width/2, 1.9, -1);
  const beadPath = 'M ' + top.concat(bot).join(' L ') + ' Z';

  // ripple lines across the bead (spacing reflects welding speed)
  const rippleGap = p.kecepatan==='lambat' ? 12 : p.kecepatan==='cepat' ? 22 : 16;
  let ripples = '';
  for(let x=32; x<268; x+=rippleGap){
    ripples += `<line x1="${x}" y1="${70-width/2+2}" x2="${x-6}" y2="${70+width/2-2}" stroke="#12161a" stroke-opacity="0.25" stroke-width="1.4"/>`;
  }

  let extras = '';
  if(spatter){
    const pos = [[45,45],[80,95],[130,42],[175,98],[210,48],[245,92],[60,100],[195,40]];
    extras += pos.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="1.8" fill="#FF7A3D"><animate attributeName="opacity" values="1;0.4;1" dur="${1+ (x%3)*0.4}s" repeatCount="indefinite"/></circle>`).join('');
  }
  if(porosity){
    const pos = [[70,70],[130,66],[190,73],[230,68]];
    extras += pos.map(([x,y])=>`<circle cx="${x}" cy="${y}" r="2.6" fill="#12161a" stroke="#0a0d10" stroke-width="0.5"/>`).join('');
  }
  if(undercut){
    const pos = [55,120,185,240];
    extras += pos.map(x=>`<path d="M ${x} ${70-width/2} l 7 -6 l 7 6 Z" fill="#12161a" opacity="0.55"/><path d="M ${x} ${70+width/2} l 7 6 l 7 -6 Z" fill="#12161a" opacity="0.55"/>`).join('');
  }

  return `
    <svg viewBox="0 0 300 140" style="width:100%;max-width:420px;display:block;margin:0 auto;">
      <rect x="6" y="18" width="288" height="104" rx="6" fill="#2b353c" stroke="#3c4850" stroke-width="1.5"/>
      <rect x="6" y="18" width="288" height="104" rx="6" fill="none" stroke="#00000022" stroke-width="8"/>
      <path d="${beadPath}" fill="#8a97a0" stroke="#5b6b74" stroke-width="1"/>
      ${ripples}
      ${extras}
      <line x1="18" y1="130" x2="282" y2="130" stroke="#5FE3F0" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
      <text x="150" y="16" text-anchor="middle" fill="#7C8A92" font-family="IBM Plex Mono" font-size="9.5">TAMPILAN ATAS MANIK LAS (ILUSTRASI)</text>
    </svg>
  `;
}

function mountParameterLab(container){
  const state = {arus:'pas', busur:'pas', sudut:'pas', kecepatan:'pas'};
  const wrap = el('div',{});
  const grid = el('div',{class:'lab-grid'});

  Object.keys(LAB_OPTIONS).forEach(key=>{
    const field = el('div',{class:'lab-field'});
    field.appendChild(el('label',{},[LAB_LABELS[key]]));
    const select = el('select',{'data-key':key});
    LAB_OPTIONS[key].forEach(opt=>{
      const o = el('option',{value:opt.v},[opt.t]);
      if(opt.v==='pas') o.selected = true;
      select.appendChild(o);
    });
    select.addEventListener('change', ()=>{ state[key] = select.value; });
    field.appendChild(select);
    grid.appendChild(field);
  });
  wrap.appendChild(grid);

  const btnRow = el('div',{});
  const goBtn = el('button',{class:'btn btn-primary'},['🔧 Coba Las']);
  btnRow.appendChild(goBtn);
  const stat = el('span',{class:'mono', style:'margin-left:14px;font-size:12px;color:var(--text-dim);'});
  btnRow.appendChild(stat);
  wrap.appendChild(btnRow);

  const resultBox = el('div',{class:'lab-result', style:'display:none;'});
  const beadWrap = el('div',{class:'lab-bead-wrap'});
  const infoWrap = el('div',{});
  resultBox.appendChild(beadWrap);
  resultBox.appendChild(infoWrap);
  wrap.appendChild(resultBox);
  container.appendChild(wrap);

  let tries = parseInt(localStorage.getItem('lab_tries')||'0',10);
  let goodCount = parseInt(localStorage.getItem('lab_good')||'0',10);
  function updateStat(){ stat.textContent = `Percobaan: ${tries}  ·  Hasil "Baik": ${goodCount}`; }
  updateStat();

  goBtn.addEventListener('click', ()=>{
    const defects = evalLabParams(state);
    tries++;
    let ratingClass, ratingText;
    if(defects.length===0){ ratingClass='rating-baik'; ratingText='✅ Hasil Baik'; goodCount++; }
    else if(defects.length<=2){ ratingClass='rating-cukup'; ratingText='⚠️ Cukup — Perlu Perbaikan'; }
    else { ratingClass='rating-kurang'; ratingText='❌ Kurang — Banyak Cacat Las'; }
    localStorage.setItem('lab_tries', tries);
    localStorage.setItem('lab_good', goodCount);
    updateStat();

    beadWrap.innerHTML = buildWeldBeadSVG(state);
    infoWrap.innerHTML = '';
    infoWrap.appendChild(el('div',{class:'rating-badge '+ratingClass},[ratingText]));
    const list = el('ul',{class:'defect-list'});
    if(defects.length===0){
      list.appendChild(el('li',{},[el('span',{class:'tag-good'},['✓']), ' Semua parameter sudah tepat — manik las rata, penetrasi cukup, minim percikan.']));
    } else {
      defects.forEach(d=> list.appendChild(el('li',{},[el('span',{class:'tag-bad'},['✕']), ' '+d])));
    }
    infoWrap.appendChild(list);
    resultBox.style.display = 'grid';
  });
}

/* =========================================================
   LATIHAN — PILIHAN GANDA
   ========================================================= */
let pgAnswers = {};

function renderPG(){
  const wrap = $('#pgQuiz'); wrap.innerHTML='';
  BANK_PG.forEach((q, qi)=>{
    const card = el('div',{class:'q-card'});
    card.appendChild(el('div',{class:'q-title'},[`${qi+1}. ${q.q}`]));
    const opts = el('div',{class:'q-opts'});
    q.opts.forEach((optText, oi)=>{
      const opt = el('div',{class:'q-opt', 'data-qi':qi, 'data-oi':oi},[
        el('span',{class:'mono', style:'color:var(--text-dim);min-width:16px;'},[String.fromCharCode(65+oi)+'.']),
        el('span',{},[optText])
      ]);
      opt.addEventListener('click', ()=>{
        pgAnswers[qi]=oi;
        $all(`.q-opt[data-qi="${qi}"]`).forEach(o=>o.classList.remove('selected'));
        opt.classList.add('selected');
      });
      opts.appendChild(opt);
    });
    card.appendChild(opts);
    card.appendChild(el('div',{class:'q-fb', id:`fb-${qi}`}));
    wrap.appendChild(card);
  });
}
renderPG();

$('#pgCheck').addEventListener('click', ()=>{
  let score=0;
  BANK_PG.forEach((q, qi)=>{
    const chosen = pgAnswers[qi];
    const fb = $(`#fb-${qi}`);
    $all(`.q-opt[data-qi="${qi}"]`).forEach(o=>{
      o.classList.remove('correct','incorrect');
      const oi = parseInt(o.dataset.oi,10);
      if(oi===q.correct) o.classList.add('correct');
      else if(oi===chosen && chosen!==q.correct) o.classList.add('incorrect');
    });
    if(chosen===q.correct) score++;
    fb.textContent = q.fb;
    fb.classList.add('show');
    fb.classList.toggle('ok', chosen===q.correct);
    fb.classList.toggle('no', chosen!==q.correct);
  });
  $('#pgScore').textContent = score;
});

$('#pgReset').addEventListener('click', ()=>{
  pgAnswers = {};
  $('#pgScore').textContent = '0';
  renderPG();
});

/* =========================================================
   LATIHAN — ESAI
   ========================================================= */
function renderEsai(){
  const wrap = $('#esaiQuiz'); wrap.innerHTML='';
  BANK_ESAI.forEach((q, qi)=>{
    const card = el('div',{class:'q-card essay'});
    card.appendChild(el('div',{class:'q-title'},[`${qi+1}. ${q.q}`]));
    card.appendChild(el('textarea',{placeholder:'Tulis jawabanmu di sini...', id:`essay-${qi}`}));
    const btnRow = el('div',{style:'margin-top:8px;'});
    const showBtn = el('button',{class:'btn btn-sm'},['Tampilkan Rubrik Penilaian']);
    const rubric = el('div',{class:'rubric', id:`rubric-${qi}`},[el('b',{},['Rubrik: ']), q.rubrik]);
    showBtn.addEventListener('click', ()=> rubric.classList.toggle('show'));
    btnRow.appendChild(showBtn);
    card.appendChild(btnRow);
    card.appendChild(rubric);
    wrap.appendChild(card);
  });
}
renderEsai();

/* mount second arc-game instance in Latihan > Simulator tab */
mountArcGame($('#arcGameMount2'));

/* mount parameter lab simulator */
mountParameterLab($('#paramLabMount'));

/* =========================================================
   INIT
   ========================================================= */
showView('beranda');
