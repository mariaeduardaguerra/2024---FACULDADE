// Lógica simples de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Aqui você pode implementar sua lógica de autenticação
    // Para fins de demonstração, apenas vamos exibir um alerta
    if (email && password) {
      alert(`Login realizado com sucesso! Bem-vindo, ${email}.`);
      // Aqui você poderia redirecionar o usuário para a página inicial ou outra
      window.location.href = 'index.html'; // Redireciona para a página inicial após login
    }
  });
  