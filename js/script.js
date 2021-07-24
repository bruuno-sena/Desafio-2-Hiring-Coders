const form = document.getElementById('form');

form.addEventListener('submit',(e) =>
 {
    e.preventDefault();
    
    
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let cpf = document.getElementById('cpf').value;
    let nascimento = document.getElementById('nascimento').value;
    let numero = document.getElementById('numero').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    let complemento = document.getElementById('complemento').value;
    let bairro = document.getElementById('bairro').value;
    let uf = document.getElementById('uf').value;
    let cep = document.getElementById('cep').value;
    

    let data = {
        nome,
        email,
        cpf,
        nascimento,
        numero,
        endereco,
        telefone,
        complemento,
        bairro,
        cidade,
        uf,
        cep,
    }
    let convertData = JSON.parse(localStorage.getItem('data')) ?? [];

    convertData.push(data);

    let clientes = JSON.stringify(convertData);

    localStorage.setItem('data', clientes);

    form.reset();

   
})

