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

// 滚动高亮当前导航项（兼容多页面链接）
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.top-nav a');
const currentPath = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
const normalizePath = (value) => value.replace(/^\.\//, '').toLowerCase();

const setActiveNav = () => {
  const hasSections = sections.length > 0;
  let activeId = '';

  if (hasSections) {
    activeId = 'about';
    const offset = 130;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - offset;
      if (window.scrollY >= sectionTop) {
        activeId = section.id;
      }
    });
  }

  navLinks.forEach((link) => {
    const href = normalizePath(link.getAttribute('href') || '');
    let isActive = false;

    // 同页锚点：#about
    if (hasSections && href.startsWith('#')) {
      isActive = href.slice(1) === activeId;
    }

    // 跨页锚点：index.html#about
    if (!isActive && href.includes('#')) {
      const [pathPart, hashPart] = href.split('#');
      const resolvedPath = pathPart || currentPath;
      if (hasSections) {
        const samePage = resolvedPath === currentPath || (resolvedPath === 'index.html' && currentPath === 'index.html');
        isActive = samePage && hashPart === activeId;
      }
    }

    // 页面链接：publications.html
    if (!isActive && href && !href.includes('#')) {
      isActive = href === currentPath;
    }

    link.classList.toggle('active', isActive);
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

// Like 按钮交互：可点击、可取消、并记住状态
const likeBtn = document.querySelector('.like-btn');
const likeText = document.querySelector('.like-text');
const LIKE_KEY = 'academic-like-state';

if (likeBtn && likeText) {
  const saved = localStorage.getItem(LIKE_KEY);
  const isLiked = saved === '1';

  const renderLike = (liked) => {
    likeBtn.classList.toggle('liked', liked);
    likeBtn.setAttribute('aria-pressed', liked ? 'true' : 'false');
    likeText.textContent = liked ? 'Liked' : 'Like';
  };

  renderLike(isLiked);

  likeBtn.addEventListener('click', () => {
    const nextLiked = !(localStorage.getItem(LIKE_KEY) === '1');
    localStorage.setItem(LIKE_KEY, nextLiked ? '1' : '0');
    renderLike(nextLiked);

    likeBtn.classList.add('like-pop');
    setTimeout(() => likeBtn.classList.remove('like-pop'), 160);
  });
}
