document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const STORAGE_KEY = 'portfolio-theme';

    function applyTheme(theme) {
        htmlElement.setAttribute('data-bs-theme', theme);
        themeToggleBtn.textContent = theme === 'dark' ? 'Tema: Escuro' : 'Tema: Claro';
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        applyTheme(nextTheme);
        localStorage.setItem(STORAGE_KEY, nextTheme);
    });
});