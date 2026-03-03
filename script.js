// ========== 移动端侧边栏开关 ==========
const mobileToggle = document.querySelector('#mobileNavToggle');
const mobileOverlay = document.querySelector('#mobileOverlay');
const sidebar = document.querySelector('#sidebar');
const nav = document.querySelector('#site-nav');

const closeSidebar = () => {
  if (!sidebar || !mobileToggle || !mobileOverlay) return;
  sidebar.classList.remove('open');
  mobileOverlay.classList.remove('open');
  mobileToggle.setAttribute('aria-expanded', 'false');
};

if (mobileToggle && sidebar && mobileOverlay) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    mobileOverlay.classList.toggle('open', isOpen);
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobileOverlay.addEventListener('click', closeSidebar);
}

if (nav) {
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 820) {
        closeSidebar();
      }
    });
  });
}

// ========== 导航高亮 ==========
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('#site-nav a');

const setActiveNav = () => {
  let currentId = '';
  const offset = 140;

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute('href').slice(1);
    link.classList.toggle('active', targetId === currentId);
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// ========== 主题切换（浅色/深色 + 本地持久化） ==========
const themeToggle = document.querySelector('#themeToggle');
const storageKey = 'academic-theme';

const setTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '切换浅色' : '切换深色';
  }
};

const getPreferredTheme = () => {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'light' || savedTheme === 'dark') {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

setTheme(getPreferredTheme());

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem(storageKey, nextTheme);
  });
}

// ========== 页脚年份 ==========
const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
