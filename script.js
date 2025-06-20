
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    const motivo = document.getElementById('motivo').value;

    if (!nome || !email || !mensagem || !motivo) {
        alert('Por favor, preencha todos os campos.');
    } else if (!email.includes('@')) {
        alert('Por favor, insira um email válido.');
    } else {
        alert('Formulário enviado com sucesso!');
        document.getElementById('formContato').reset();
    }
});
