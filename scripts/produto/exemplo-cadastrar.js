let urlAPI = "https://public.franciscosensaulas.com"

const campoPreco = document.getElementById('campoPreco');
const mascara =  {
    mask: "000000.00"
};
const mask = IMask(campoPreco, mascara);

let botaoSalvar = document.getElementById ("btn-salvar");
botaoSalvar.addEventListener('click', salvar);


async function salvar(e) {
    e.preventDefault();
    
    let campoNome = document.getElementById("campoNome");
    let nome = campoNome.value
    if (nome.length <3) {
        alert("O nome do produto deve conter no mínimo 3 caracteres");
        return;
    }
    
    if (nome.length >20) {
        alert("O nome do produto deve conter no máximo 20 caracteres");
        return;
    }
    
    
    let preco = campoPreco.value
    if (preco < 0.01) {
        alert("O preço do produto deve ser maior que R$ 0,01");
        return;
    }
    
    if (preco > 100000) {
        alert("O preço do produto menor que R$ 100.000,00");
        return;
    }
    
    let campoCategoria = document.getElementById("campoCategoria");
    let categoria = campoCategoria.value;

    const dados = {
        nome: nome,
        preco: preco,
        categoria: categoria
    }
    let url = `${urlAPI}/api/v1/empresa/produtos`;
    const resposta = await fetch(url, {
        method: "POST", 
        headers: {"content-type": "aplication/json"}, body: JSON.stringify(dados)
    });

    if(resposta.ok == false){
        alert("Não foi possível cadastrar")
    }else{
        location.href = '/produto/index.html';
    }
    
}