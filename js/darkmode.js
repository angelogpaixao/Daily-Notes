// Função que aplica o tema forçado
function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else if (theme === "light") {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

// Verifica tema salvo
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
}

// Espera DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-darkmode");
  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark") {
        // Se estiver escuro, muda para claro
        applyTheme("light");
        localStorage.setItem("theme", "light");
      } else {
        // Se estiver claro OU automático, muda para escuro
        applyTheme("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }
});