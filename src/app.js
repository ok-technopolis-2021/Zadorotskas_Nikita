function setTheme(themeName)  {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        setTheme('light-theme');
    } else {
        setTheme('dark-theme');
    }
}

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementsByClassName("change-theme-button").addEventListener('click', toggleTheme);
});
