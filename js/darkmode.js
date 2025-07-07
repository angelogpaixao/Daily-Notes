// Verifica se o usuário configurou o sistema operacional para usar modo escuro
function systemPrefersDark() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Aplica o tema manualmente, definindo o atributo "data-theme" na tag <html>
// Também salva a escolha no localStorage para que a preferência persista entre páginas e recarregamentos
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Determina qual tema está ativo no momento:
// Primeiro verifica se há um "data-theme" definido no <html> (modo manual)
// Caso não haja, usa a preferência do sistema como padrão
function getCurrentTheme() {
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr) return attr; // Se o tema foi definido manualmente, retorna esse
  return systemPrefersDark() ? 'dark' : 'light'; // Senão, segue a preferência do sistema
}

// Ao carregar a página, recupera o tema salvo (se existir) no localStorage
// Se houver, aplica automaticamente a escolha anterior do usuário
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  applyTheme(savedTheme);
}

// Aguarda o DOM estar pronto para associar o evento ao botão de alternância
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('toggle-darkmode'); // Seleciona o botão pelo ID

  // Se o botão existir na página, adiciona um listener de clique
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      // Obtém o tema atual (pode ser baseado no data-theme ou no sistema)
      const currentTheme = getCurrentTheme();

      // Alterna entre os temas: se estiver escuro, muda para claro; se estiver claro, muda para escuro
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // Aplica o novo tema e salva no localStorage
      applyTheme(newTheme);
    });
  }
});