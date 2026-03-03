// 顶部导航：移动端开关
const menuToggle = document.querySelector('#menuToggle');
const topNav = document.querySelector('#topNav');

if (menuToggle && topNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  topNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 920) {
        topNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

// 滚动高亮当前导航项
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.top-nav a');

const setActiveNav = () => {
  let activeId = 'about';
  const offset = 130;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - offset;
    if (window.scrollY >= sectionTop) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const targetId = link.getAttribute('href').slice(1);
    link.classList.toggle('active', targetId === activeId);
  });
};

window.addEventListener('scroll', setActiveNav);
window.addEventListener('load', setActiveNav);

// 深浅色主题切换（默认深色）
const themeToggle = document.querySelector('#themeToggle');
const themeIcon = document.querySelector('#themeIcon');
const THEME_KEY = 'academic-theme';

const applyTheme = (theme) => {
  document.body.setAttribute('data-theme', theme);
  if (themeIcon) {
    themeIcon.textContent = theme === 'dark' ? '☾' : '☀';
  }
};

const initTheme = () => {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') {
    applyTheme(saved);
    return;
  }
  applyTheme('dark');
};

initTheme();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.body.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
  });
}

// 页脚年份
const yearNode = document.querySelector('#year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
