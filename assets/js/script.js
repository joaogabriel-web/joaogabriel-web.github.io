// Função para navegar entre páginas
function navegar(pagina) {
  window.location.href = pagina;
}

// Adiciona eventos aos links ou botões
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("[data-page]");
  
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // evita comportamento padrão
      const destino = link.getAttribute("data-page");
      navegar(destino);
    });
  });
});
    