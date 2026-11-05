const savedTheme = localStorage.getItem('theme');
document.documentElement.dataset.theme = savedTheme ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.theme-toggle');

    function updateButton() {
        const dark = document.documentElement.dataset.theme === 'dark';
        const label = dark ? 'Switch to light theme' : 'Switch to dark theme';
        button.setAttribute('aria-label', label);
        button.setAttribute('title', label);
        button.setAttribute('aria-pressed', String(dark));
    }

    button.addEventListener('click', () => {
        const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme);
        updateButton();
    });

    updateButton();
});
