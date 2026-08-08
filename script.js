// ===========================================================
// EDIT ME — your real data lives here.
// ===========================================================

const skills = [
  { group: 'Languages', items: 'Java, JavaScript, SQL , Angular, HTML, C++, C#' },
  { group: 'Frameworks', items: 'Spring Boot, Spring Data JPA, Spring Security,Angular' },
  { group: 'Databases', items: 'PostgreSQL, MySQL' },
  { group: 'API design', items: 'REST, JSON, Postman, API versioning' },
  { group: 'Tooling', items: 'Git, Maven, Docker, Docker Compose' },
  { group: 'Practices', items: 'Unit testing, clean architecture, Agile' }
];

// Placeholder projects — replace title/description/tags/links with your real repos.
const projects = [
  {
    title: 'E-Commerce REST API',
    desc: 'Spring Boot backend for an online store: product catalogue, cart, checkout and order management, backed by PostgreSQL and containerized with Docker.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/sihinakaushal7-cyber',
    demo: null
  },
  {
    title: 'Car Rental Management System',
    desc: 'Placeholder project — a CRUD REST API for managing tasks and users, with JWT authentication and role-based access.',
    tags: ['Java', 'Spring Boot', 'JWT', 'MySQL', 'Angular'],
    github: 'https://github.com/sihinakaushal7-cyber',
    demo: null
  },

];

// ===========================================================
// Render skills
// ===========================================================
function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = skills.map(s => `
    <div class="skill-card">
      <span class="skill-card__group">${s.group}</span>
      <span class="skill-card__items">${s.items}</span>
    </div>
  `).join('');
}

// ===========================================================
// Render projects
// ===========================================================
function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = projects.map(p => `
    <article class="project-card">
      <div class="project-card__head">
        <span class="project-card__title">${p.title}</span>
      </div>
      <p class="project-card__desc">${p.desc}</p>
      <div class="project-card__tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
      <div class="project-card__links">
        ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">View on GitHub →</a>` : ''}
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Live demo →</a>` : ''}
      </div>
    </article>
  `).join('');
}

// ===========================================================
// Terminal typing effect
// ===========================================================
function typeTerminal() {
  const lineEl = document.getElementById('typedLine');
  const outputEl = document.getElementById('typedOutput');
  const command = 'who am i?';
  const outputLines = [
    { text: 'name: ', key: 'Sihina Kaushalya' },
    { text: 'role: ', key: 'Backend Developer' },
    { text: 'stack: ', key: 'Java · Spring Boot · SQL · Docker' },
    { text: 'status: ', key: 'open to backend roles' }
  ];

  let i = 0;
  function typeChar() {
    if (i <= command.length) {
      lineEl.textContent = command.slice(0, i);
      i++;
      setTimeout(typeChar, 90);
    } else {
      setTimeout(showOutput, 300);
    }
  }

  function showOutput() {
    outputLines.forEach((line, idx) => {
      const div = document.createElement('div');
      div.className = 'line';
      div.style.animationDelay = `${idx * 0.18}s`;
      div.innerHTML = `${line.text}<span class="key">${line.key}</span>`;
      outputEl.appendChild(div);
    });
  }

  typeChar();
}

// ===========================================================
// Mobile nav toggle
// ===========================================================
function setupNavToggle() {
  const toggle = document.getElementById('navToggle');
  const nav = document.querySelector('.nav');
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}


// ===========================================================
// Init
// ===========================================================
document.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderProjects();
  typeTerminal();
  setupNavToggle();
  document.getElementById('year').textContent = new Date().getFullYear();
});
