const form = document.getElementById('form');
form.addEventListener('submit',(e) =>
 {
    e.preventDefault();
    

    let descricao = document.getElementById('descricao').value;
    let barras = document.getElementById('barras').value;
    let unitario = document.getElementById('unitario').value;
    let venda = document.getElementById('venda').value;
    let quantidade = document.getElementById('quantidade').value;
    let marca = document.getElementById('marca').value;
 
    

    let produto = {
        descricao,
        barras,
        unitario,
        venda,
        quantidade,
        marca,
    }
  
    let valoresDados = Object.values(produto);

    let tbody = document.getElementById('tabela-produtos');
    let tr = document.createElement('tr');
    tbody.append(tr);

    valoresDados.forEach(valor => {
        let td = document.createElement('td');
        tr.append(td);
        td.append(valor);
    });

    // Adicionando o produto no Local Storage

    let produtos = JSON.parse(localStorage.getItem('produto')) ?? [];

    produtos.push(produto);

    let produtosConvertidos = JSON.stringify(produtos);

    localStorage.setItem('produto', produtosConvertidos);

    form.reset();

    $(document).ready(function() {
        $("#field").keyup(function() {
            $("#field").val(this.value.match(/[0-9]*/));
        });
      });
 
})
