# Desafio-2-Hiring-Coders

LocalStorage onde será salvo os produtos:


let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(produto);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);

 Removendo os dados logo após a confirmação do cadasto:
 
 form.reset();
 
 LocalStorage onde será salvo os clientes:
 
 let convertData = JSON.parse(localStorage.getItem('data')) ?? [];

    convertData.push(data);

    let clientes = JSON.stringify(convertData);

    localStorage.setItem('data', clientes);

 Removendo os dados logo após a confirmação do cadasto:
    form.reset();
