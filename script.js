var root = document.documentElement;
var themeButton = document.getElementById("theme-toggle");
function updateThemeButton() {
    var isLight = root.getAttribute("data-theme") === "light";
    themeButton.textContent = isLight ? "🌙" : "☀️";
    themeButton.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
}
function saveTheme(name) {
    try { localStorage.setItem("theme", name); } catch (e) {}
}

themeButton.addEventListener("click", function () {
    if (root.getAttribute("data-theme") === "light") {
        root.removeAttribute("data-theme");
        saveTheme("dark");
    } else {
        root.setAttribute("data-theme", "light");
        saveTheme("light");
    }
    updateThemeButton();
});
updateThemeButton();

var menuButton = document.getElementById("menu-toggle");
var navLinks = document.getElementById("nav-links");

function setMenu(open) {
    navLinks.classList.toggle("open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
    menuButton.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuButton.textContent = open ? "✕" : "☰";
}
menuButton.addEventListener("click", function () {
    setMenu(!navLinks.classList.contains("open"));
});
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () { setMenu(false); });
});
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { setMenu(false); }
});
