// ─── TRANSLATIONS ───────────────────────────────────────────────
const T={
  es:{nav_home:'INICIO',nav_about:'SOBRE MÍ',nav_projects:'PROYECTOS',nav_contact:'CONTACTO',
  h_ey:'DESARROLLADOR FULL STACK',h_t1:'Construyo',h_t2:'experiencias',h_t3:'digitales.',
  h_sub:'Especialista en arquitecturas modernas, interfaces de alto impacto y sistemas backend escalables.',
  h_c1:'Ver proyectos',h_c2:'Contactar',s1:'Proyectos',s2:'Años exp.',s3:'Tecnologías',
  a_tag:'SOBRE MÍ',a_title:'Quién soy',
  a_p1:'Soy un <strong>desarrollador full stack</strong> con más de 4 años de experiencia construyendo productos digitales que combinan lógica sólida con experiencias visuales atractivas.',
  tm1:'Full Stack Developer',tm2:'✔ Disponible para proyectos',
  p_tag:'PROYECTOS DESTACADOS',p_title:'Mi trabajo',
  f_all:'TODOS',f_web:'WEB APP',f_mob:'MOBILE',f_api:'API / BACKEND',
  p1n:'HEALTHSYNC',p1d:'(proyecto) Plataforma de ejercicio de alto rendimiento con rutinas en tiempo real, panel de analíticas y sistema de recomendación personalizada.',
  p2n:'MEDIQUICK',p2d:'(proyecto) Plataforma de envios de medicina con recomendaciones en base a tus sintomas.',
  p3n:'IDEART',p3d:'Aplicacion y sitio web para venta de productos de soblimado.',
  p4n:'SAVEIT',p4d:'(proyecto) App movil para el monitoreo de finanzas personales.',
  pl_l:'↗ DEMO EN VIVO',pl_d:'↗ DOCS',
  c_tag:'CONTACTO',c_title:'Hablemos',
  c_p:'¿Tienes un proyecto en mente? Estoy disponible para nuevas oportunidades. Envíame un mensaje y construyamos algo increíble juntos.',
  ci_e:'EMAIL',ci_l:'UBICACIÓN',ci_lv:'El Salvador, LATAM · Remoto global',ci_s:'ESTADO',ci_sv:'✔ Disponible para proyectos',
  fn:'NOMBRE',fn_ph:'Tu nombre',fe:'EMAIL',fs:'ASUNTO',fs_ph:'¿En qué puedo ayudarte?',fm:'MENSAJE',fm_ph:'Cuéntame sobre tu proyecto...',
  fsub:'ENVIAR MENSAJE ›',foot:'Diseñado & Construido por'},
  en:{nav_home:'HOME',nav_about:'ABOUT',nav_projects:'PROJECTS',nav_contact:'CONTACT',
  h_ey:'FULL STACK DEVELOPER',h_t1:'I Build',h_t2:'digital',h_t3:'Experiences.',
  h_sub:'Specialist in modern architectures, high-impact interfaces, and scalable backend systems.',
  h_c1:'View Projects',h_c2:'Contact Me',s1:'Projects',s2:'Yrs exp.',s3:'Technologies',
  a_tag:'ABOUT ME',a_title:'Who I am',
  a_p1:'I\'m a <strong>full stack developer</strong> with 4+ years of experience building digital products that combine solid engineering with attractive visual experiences.',
  tm1:'Full Stack Developer',tm2:'✔ Available for projects',
  p_tag:'FEATURED PROJECTS',p_title:'My work',
  f_all:'ALL',f_web:'WEB APP',f_mob:'MOBILE',f_api:'API / BACKEND',
  p1n:'HEALTHSYNC',p1d:'(Project) High-performance fitness platform with real-time workouts, analytics dashboard, and personalized recommendation system.',
  p2n:'MEDIQUICK',p2d:'(Project) Platform for medical delivery with recommendations based on your symptoms.',
  p3n:'IDEART',p3d:'Application and website for selling custom-designed products.',
  p4n:'SAVEIT',p4d:'(Project) Mobile app for personal finance monitoring.',
  pl_l:'↗ LIVE DEMO',pl_d:'↗ DOCS',
  c_tag:'CONTACT',c_title:"Let's talk",
  c_p:"Have a project in mind? I'm available for new opportunities. Send me a message and let's build something amazing together.",
  ci_e:'EMAIL',ci_l:'LOCATION',ci_lv:'El Salvador, LATAM · Global Remote',ci_s:'STATUS',ci_sv:'✔ Available for projects',
  fn:'NAME',fn_ph:'Your name',fe:'EMAIL',fs:'SUBJECT',fs_ph:'How can I help you?',fm:'MESSAGE',fm_ph:'Tell me about your project...',
  fsub:'SEND MESSAGE ›',foot:'Designed & Built by'}
};

let lang = localStorage.getItem('lang') || 'es';

function applyLang(){
  const d=T[lang];
  document.querySelectorAll('[data-k]').forEach(el=>{const k=el.getAttribute('data-k');if(d[k]!==undefined)el.innerHTML=d[k];});
  document.querySelectorAll('[data-ph]').forEach(el=>{const k=el.getAttribute('data-ph');if(d[k])el.placeholder=d[k];});
  document.querySelectorAll('.glitch').forEach(el=>el.setAttribute('data-text',el.textContent.trim()));
  const lb=document.getElementById('lb');if(lb)lb.textContent=lang==='es'?'EN':'ES';
  document.documentElement.lang=lang;
}
function tgl(){lang=lang==='es'?'en':'es';localStorage.setItem('lang',lang);applyLang();}

// ─── REVEAL ─────────────────────────────────────────────────────
function initRev(){
  const obs=new IntersectionObserver(en=>{en.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight)el.classList.add('visible');
    else obs.observe(el);
  });
}

// ─── CUSTOM CURSOR ───────────────────────────────────────────────
function initCursor(){
  const cur=document.getElementById('cursor'),cr=document.getElementById('cring');
  if(!cur||!cr)return;
  // Ocultar hasta que el mouse se mueva por primera vez
  cur.style.opacity='0'; cr.style.opacity='0';
  let mx=-999,my=-999,rx=-999,ry=-999,ready=false;
  document.addEventListener('mousemove',e=>{
    mx=e.clientX; my=e.clientY;
    if(!ready){
      // Teletransportar el ring directo al cursor sin animación
      rx=mx; ry=my;
      cur.style.opacity='1'; cr.style.opacity='1';
      ready=true;
    }
  });
  (function a(){
    cur.style.transform=`translate(${mx-6}px,${my-6}px)`;
    rx+=(mx-rx)*.15; ry+=(my-ry)*.15;
    cr.style.transform=`translate(${rx-18}px,${ry-18}px)`;
    requestAnimationFrame(a);
  })();
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cr.style.width='52px';cr.style.height='52px';cr.style.borderColor='var(--primary)';});
    el.addEventListener('mouseleave',()=>{cr.style.width='36px';cr.style.height='36px';cr.style.borderColor='rgba(0,240,255,.5)';});
  });
}

// ─── BACKGROUND CANVAS ──────────────────────────────────────────
function initCanvas(){
  const cv=document.getElementById('bgc');if(!cv)return;
  const ctx=cv.getContext('2d');
  let W,H,pts=[];
  function rsz(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
  rsz();window.addEventListener('resize',rsz);
  class P{constructor(){this.rst();}rst(){this.x=Math.random()*W;this.y=Math.random()*H;this.vx=(Math.random()-.5)*.4;this.vy=(Math.random()-.5)*.4;this.r=Math.random()*1.4+.3;this.a=Math.random()*.42+.1;this.c=Math.random()>.5?'0,240,255':'123,47,255';}upd(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>W||this.y<0||this.y>H)this.rst();}drw(){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=`rgba(${this.c},${this.a})`;ctx.fill();}}
  for(let i=0;i<100;i++)pts.push(new P());
  function grid(){ctx.strokeStyle='rgba(0,240,255,.026)';ctx.lineWidth=1;for(let x=0;x<W;x+=60){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}for(let y=0;y<H;y+=60){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}}
  function conns(){for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){const dx=pts[i].x-pts[j].x,dy=pts[i].y-pts[j].y,d=Math.sqrt(dx*dx+dy*dy);if(d<110){ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.strokeStyle=`rgba(0,240,255,${.05*(1-d/110)})`;ctx.lineWidth=.5;ctx.stroke();}}}
  function loop(){ctx.clearRect(0,0,W,H);grid();conns();pts.forEach(p=>{p.upd();p.drw();});requestAnimationFrame(loop);}
  loop();
}

// ─── HUD ────────────────────────────────────────────────────────
const huds=[];
function initHUD(){
  const el=document.getElementById('hud');if(!el)return;
  let hi=0;
  el.textContent=huds[0];
  setInterval(()=>{hi=(hi+1)%huds.length;el.textContent=huds[hi];},4500);
}

// ─── YEAR ───────────────────────────────────────────────────────
function initYear(){const el=document.getElementById('yr');if(el)el.textContent=new Date().getFullYear();}

// ─── SKILL BARS ─────────────────────────────────────────────────
function initBars(){setTimeout(()=>document.querySelectorAll('.xf').forEach(b=>b.style.width=b.getAttribute('data-w')+'%'),400);}

// ─── PROJECT FILTER ─────────────────────────────────────────────
function filt(cat,btn){
  document.querySelectorAll('.fb').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.pcard').forEach(c=>{
    const show=cat==='all'||c.getAttribute('data-cat')===cat;
    c.style.display=show?'block':'none';
  });
}

// ─── CARD TILT ──────────────────────────────────────────────────
function initTilt(){
  document.querySelectorAll('.pcard').forEach(c=>{
    c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2,dx=(e.clientX-cx)/r.width*18,dy=(e.clientY-cy)/r.height*18;c.style.transform=`perspective(800px) rotateX(${-dy}deg) rotateY(${dx}deg) translateY(-8px)`;});
    c.addEventListener('mouseleave',()=>{c.style.transform='';});
  });
}

// ─── GALLERY MODAL ──────────────────────────────────────────────
const PROJECTS = [
  {id:1, imgs:[
    '/img/heal1.png',
    '/img/heal2.png',
    '/img/heal3.png',
    '/img/heal4.png'
  ]},
  {id:2, imgs:[
    '/img/medi1.png',
    '/img/medi2.png',
  ]},
  {id:3, imgs:[
    '/img/ide1.png',
    '/img/ide2.png',
    '/img/ide3.png',
    '/img/ide4.png'
  ]}
];

let galCurrent=0, galImgs=[], galProjectName='';

function openGallery(projectId, projectName){
  const proj = PROJECTS.find(p=>p.id===projectId);
  if(!proj)return;
  galImgs = proj.imgs;
  galCurrent = 0;
  galProjectName = projectName;
  const overlay = document.getElementById('modal-overlay');
  overlay.querySelector('.modal-title').textContent = projectName;
  renderGallery();
  overlay.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeGallery(){
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow='';
}
function renderGallery(){
  const mainImg=document.getElementById('modal-main');
  const thumbsEl=document.getElementById('modal-thumbs');
  const counter=document.getElementById('modal-counter');
  mainImg.src=galImgs[galCurrent];
  counter.textContent=`${galCurrent+1} / ${galImgs.length}`;
  thumbsEl.innerHTML='';
  galImgs.forEach((src,i)=>{
    const img=document.createElement('img');
    img.src=src;img.className='modal-thumb'+(i===galCurrent?' active':'');img.alt='';
    img.addEventListener('click',()=>{galCurrent=i;renderGallery();});
    thumbsEl.appendChild(img);
  });
}
function galPrev(){galCurrent=(galCurrent-1+galImgs.length)%galImgs.length;renderGallery();}
function galNext(){galCurrent=(galCurrent+1)%galImgs.length;renderGallery();}

function initGalleryKeys(){
  document.addEventListener('keydown',e=>{
    const overlay=document.getElementById('modal-overlay');
    if(!overlay||!overlay.classList.contains('open'))return;
    if(e.key==='ArrowLeft')galPrev();
    else if(e.key==='ArrowRight')galNext();
    else if(e.key==='Escape')closeGallery();
  });
  // close on overlay click
  const galleryOverlay=document.getElementById('modal-overlay');
  if(galleryOverlay){
    galleryOverlay.addEventListener('click',e=>{
      if(e.target.id==='modal-overlay')closeGallery();
    });
  }
}

// ─── MOBILE NAV ──────────────────────────────────────────────────
function toggleNav(){
  const ham=document.getElementById('ham');
  const nav=document.getElementById('nav-links');
  const overlay=document.getElementById('nav-overlay');
  if(!ham||!nav)return;
  const isOpen=nav.classList.toggle('open');
  ham.classList.toggle('open',isOpen);
  if(overlay){
    overlay.classList.toggle('open',isOpen);
    overlay.style.display=isOpen?'block':'none';
  }
}
function closeNav(){
  const ham=document.getElementById('ham');
  const nav=document.getElementById('nav-links');
  const overlay=document.getElementById('nav-overlay');
  if(ham)ham.classList.remove('open');
  if(nav)nav.classList.remove('open');
  if(overlay){
    overlay.classList.remove('open');
    overlay.style.display='none';
  }
}
// expose globally so inline onclick works before DOMContentLoaded
window.toggleNav=toggleNav;
window.closeNav=closeNav;

// ─── TOUCH DEVICE DETECTION (disable cursor) ─────────────────────
function isTouch(){return window.matchMedia('(hover:none)').matches||'ontouchstart' in window;}

// ─── BOOT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  applyLang();
  if(!isTouch())initCursor();
  initCanvas();
  initHUD();
  initYear();
  initRev();
  initTilt();
  initGalleryKeys();
  if(document.querySelector('.xf'))initBars();
  // mark active nav
  const page=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page')===page)a.classList.add('nav-active');
    a.addEventListener('click',closeNav);
  });
});