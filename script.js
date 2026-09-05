/* ==========================================================================
   WilliamDanialArthur.me - Script.js
   Curated Portfolio: Finished Projects & In Development Projects
   ========================================================================== */

// --- FINISHED & LIVE RELEASES ---
const FINISHED_PROJECTS = [
  {
    id: "cwt-flagship",
    status: "finished",
    statusBadge: "LIVE WEB & DESKTOP",
    category: "software",
    categoryLabel: "Web & Windows Suite",
    categoryClass: "strip-cwt",
    title: "Camelot Web Tools",
    desc: "Privacy-focused multi-tool utility suite built for everyday business, developer, and creative workflows with zero data collection.",
    tags: ["React / Vite", "Electron", "Node.js CLI", "Privacy First", "TypeScript"],
    image: "assets/images/cwt-home.png",
    actionType: "web",
    actionLabel: "Visit Site!",
    liveUrl: "https://camelotwebtools.com",
    codeUrl: "https://camelotwebtools.com"
  },
  {
    id: "ap-90s-me",
    status: "finished",
    statusBadge: "MUSIC RELEASE",
    category: "music",
    categoryLabel: "Music Release",
    categoryClass: "strip-music",
    title: "Attention Perfection — \"90's Me\"",
    desc: "Final polished pop-punk / alternative rock release under Attention Perfection featuring driving guitar riffs, anthemic hooks, and analog mixing.",
    tags: ["Attention Perfection", "Pop Punk", "Studio Production", "Mastered Audio"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
    actionType: "music",
    actionLabel: "Play Release!",
    audioSrc: "assets/audio/attention_perfection_90s_me.mp3",
    hasAudio: true,
    liveUrl: "assets/audio/attention_perfection_90s_me.mp3",
    codeUrl: "#"
  },
  {
    id: "wawff-album",
    status: "finished",
    statusBadge: "ALBUM & VIDEOS",
    category: "music",
    categoryLabel: "Music Release",
    categoryClass: "strip-music",
    title: "\"We All Want Famous Friends\" (WAWFF)",
    desc: "Full 12-track released songwriting album and companion music video series, featuring tracks like 'By You', 'Global Warming', 'Home', and 'Mexican Girl'.",
    tags: ["Songwriting", "12 Tracks", "Music Videos", "Acoustic / Indie"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
    actionType: "music",
    actionLabel: "Explore Album!",
    liveUrl: "#",
    codeUrl: "#"
  }
];

// --- IN DEVELOPMENT & UPCOMING ---
const IN_DEVELOPMENT_PROJECTS = [
  {
    id: "invasion-defense",
    status: "development",
    statusBadge: "IN DEVELOPMENT",
    category: "games",
    categoryLabel: "Mobile Game",
    categoryClass: "strip-games",
    title: "Invasion Defense: Global Disclosure Engine",
    desc: "Deep tactical grand strategy mobile game in active development. Features 200+ mutation nodes across 5 alien factions, 3D rotating globe projection, and radar air combat.",
    tags: ["Android", "Kotlin", "Jetpack Compose", "3D Projection", "Game Design"],
    image: "assets/images/invasion-defense.jpg",
    actionType: "game",
    actionLabel: "Game Specs!",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "credit-auditor",
    status: "development",
    statusBadge: "IN DEVELOPMENT",
    category: "software",
    categoryLabel: "Web Software",
    categoryClass: "strip-dev",
    title: "AI Credit Report Auditor & Dispute Generator",
    desc: "Intelligent web app in development powered by Gemini AI and PDF.js that parses Experian, TransUnion, and Equifax reports to detect reporting violations and auto-generate legal dispute letters.",
    tags: ["React", "TypeScript", "Google Gemini AI", "PDF.js", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    actionType: "web",
    actionLabel: "View Details!",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "genealogy-builder",
    status: "development",
    statusBadge: "IN DEVELOPMENT",
    category: "software",
    categoryLabel: "Web & Bio-Data",
    categoryClass: "strip-dev",
    title: "Genealogy Timeline Builder",
    desc: "Interactive visual timeline and ancestral mapping platform that translates DNA migration narratives and historical family records into dynamic storytelling journeys.",
    tags: ["Bioinformatics", "Data Visualization", "Ancestry DNA", "Interactive Timelines"],
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    actionType: "wip",
    actionLabel: "View Roadmap!",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "cwt-android",
    status: "development",
    statusBadge: "IN DEVELOPMENT",
    category: "mobile",
    categoryLabel: "Mobile App",
    categoryClass: "strip-dev",
    title: "Camelot Web Tools: Android App",
    desc: "Official mobile companion bringing privacy-preserving utility suites, quick conversion tools, and client-side encryption directly to Android devices.",
    tags: ["Android", "Kotlin / Compose", "Offline Utilities", "Mobile Suite"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    actionType: "wip",
    actionLabel: "View Specs!",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    id: "camelot-fitness",
    status: "development",
    statusBadge: "IN DEVELOPMENT",
    category: "mobile",
    categoryLabel: "Web & Mobile",
    categoryClass: "strip-dev",
    title: "Camelot Health & Fitness",
    desc: "Comprehensive health, workout tracking, and nutritional intelligence ecosystem spanning a modern web portal and companion mobile application.",
    tags: ["Health Tech", "Cross-Platform", "Performance Tracking", "Full Stack"],
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    actionType: "wip",
    actionLabel: "View Blueprint!",
    liveUrl: "#",
    codeUrl: "#"
  }
];

// Combine for modal lookups
const ALL_PROJECTS = [...FINISHED_PROJECTS, ...IN_DEVELOPMENT_PROJECTS];

// Global Audio Player
let globalAudio = null;
let currentPlayingBtn = null;

function toggleAudio(btn, audioSrc) {
  if (!audioSrc) return;

  if (globalAudio && !globalAudio.paused && globalAudio.src.includes(audioSrc)) {
    globalAudio.pause();
    btn.textContent = '▶';
    const eq = btn.parentElement.querySelector('.mini-equalizer');
    if (eq) eq.classList.remove('eq-playing');
    return;
  }

  if (globalAudio) {
    globalAudio.pause();
    if (currentPlayingBtn) {
      currentPlayingBtn.textContent = '▶';
      const prevEq = currentPlayingBtn.parentElement.querySelector('.mini-equalizer');
      if (prevEq) prevEq.classList.remove('eq-playing');
    }
  }

  globalAudio = new Audio(audioSrc);
  currentPlayingBtn = btn;
  btn.textContent = '■';
  const eq = btn.parentElement.querySelector('.mini-equalizer');
  if (eq) eq.classList.add('eq-playing');

  globalAudio.play().catch(e => console.log("Audio play error:", e));

  globalAudio.onended = () => {
    btn.textContent = '▶';
    if (eq) eq.classList.remove('eq-playing');
  };
}

// Render a single strip item
function renderStripHtml(p) {
  return `
    <div class="project-strip ${p.categoryClass}" data-id="${p.id}">
      <div class="strip-bar-header">
        <span>${p.categoryLabel}</span>
        <span class="strip-tag">${p.statusBadge}</span>
      </div>
      <div class="strip-content">
        <div class="strip-thumbnail-box" onclick="openProjectModal('${p.id}')" title="Click to view details">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
        </div>
        <div class="strip-details">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <div class="strip-meta">
            ${p.tags.map(t => `<span>${t}</span>`).join('')}
          </div>
          ${p.hasAudio ? `
            <div class="audio-player-strip">
              <button class="play-toggle-btn" onclick="toggleAudio(this, '${p.audioSrc}')" title="Play 90's Me">▶</button>
              <div class="mini-equalizer">
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
                <div class="eq-bar"></div>
              </div>
              <span style="font-size: 0.7rem; color: #ffea00; font-family: var(--font-mono); font-weight: bold;">
                ATTENTION PERFECTION: 90'S ME (CLICK PLAY)
              </span>
            </div>
          ` : ''}
        </div>
        <button class="go-btn" onclick="openProjectModal('${p.id}')">
          ${p.actionLabel} &gt;&gt;
        </button>
      </div>
    </div>
  `;
}

// Render both sections
function renderAllSections(filter = 'all') {
  const finishedContainer = document.getElementById('finishedList');
  const devContainer = document.getElementById('devList');
  const devSectionWrapper = document.getElementById('inDevSection');

  const filteredFinished = filter === 'all' 
    ? FINISHED_PROJECTS 
    : FINISHED_PROJECTS.filter(p => p.category === filter);

  const filteredDev = filter === 'all' 
    ? IN_DEVELOPMENT_PROJECTS 
    : IN_DEVELOPMENT_PROJECTS.filter(p => p.category === filter);

  if (finishedContainer) {
    finishedContainer.innerHTML = filteredFinished.length > 0
      ? filteredFinished.map(renderStripHtml).join('')
      : '<p style="padding: 12px; font-weight: 700; color: #666;">No finished releases match this filter.</p>';
  }

  if (devContainer && devSectionWrapper) {
    if (filteredDev.length > 0) {
      devSectionWrapper.style.display = 'block';
      devContainer.innerHTML = filteredDev.map(renderStripHtml).join('');
    } else {
      devSectionWrapper.style.display = 'none';
    }
  }
}

// Filtering buttons logic
function initFilterControls() {
  const buttons = document.querySelectorAll('.filter-btn, .nav-tab');
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const filterTarget = btn.getAttribute('data-filter');
      if (!filterTarget) return;

      e.preventDefault();

      document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-filter') === filterTarget);
      });

      document.querySelectorAll('.nav-tab').forEach(t => {
        t.classList.toggle('active', t.getAttribute('data-filter') === filterTarget);
      });

      renderAllSections(filterTarget);

      const projectSec = document.getElementById('projectSection');
      if (projectSec && window.scrollY < 200) {
        projectSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Modal logic
function openProjectModal(projectId) {
  const project = ALL_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const titleElem = document.getElementById('modalTitle');
  const imgElem = document.getElementById('modalImg');
  const descElem = document.getElementById('modalDesc');
  const tagsElem = document.getElementById('modalTags');
  const liveBtn = document.getElementById('modalLiveBtn');
  const codeBtn = document.getElementById('modalCodeBtn');

  titleElem.textContent = project.title;
  imgElem.src = project.image;
  descElem.textContent = project.desc;
  tagsElem.innerHTML = project.tags.map(t => `<span>${t}</span>`).join('');

  if (project.liveUrl && project.liveUrl !== '#') {
    liveBtn.style.display = 'inline-flex';
    liveBtn.href = project.liveUrl;
    liveBtn.textContent = project.id === 'cwt-flagship' ? '🚀 Visit CamelotWebTools.com' :
                          project.hasAudio ? '🎵 Listen Release' : '🚀 Open Link';
  } else {
    liveBtn.style.display = 'none';
  }

  if (project.codeUrl && project.codeUrl !== '#') {
    codeBtn.style.display = 'inline-flex';
    codeBtn.href = project.codeUrl;
  } else {
    codeBtn.style.display = 'none';
  }

  modal.style.display = 'flex';
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  if (modal) modal.style.display = 'none';
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderAllSections('all');
  initFilterControls();

  const modal = document.getElementById('projectModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProjectModal();
    });
  }

  const topBtn = document.getElementById('backToTopBtn');
  if (topBtn) {
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
