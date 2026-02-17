
let produtos = [{'nome': '1', 'estoque_minimo': 'Arroz 5KG'}, {'nome': '2', 'estoque_minimo': 'Feijão 1 KG'}, {'nome': '3', 'estoque_minimo': 'Óleo 900 ml'}, {'nome': '4', 'estoque_minimo': 'Açúcar 5KG'}, {'nome': '5', 'estoque_minimo': 'Café 500g'}, {'nome': '6', 'estoque_minimo': 'Sal'}, {'nome': '7', 'estoque_minimo': 'Ovos cartela c30'}, {'nome': '8', 'estoque_minimo': 'Tempero 500 g'}, {'nome': '9', 'estoque_minimo': 'Macarrão espaguete'}, {'nome': '10', 'estoque_minimo': 'Macarrão parafuso'}, {'nome': '11', 'estoque_minimo': 'Extrato tomate'}, {'nome': '12', 'estoque_minimo': 'Creme de leite'}, {'nome': '13', 'estoque_minimo': 'Leite condensado'}, {'nome': '14', 'estoque_minimo': 'leite coco'}, {'nome': '15', 'estoque_minimo': 'coco ralado'}, {'nome': '16', 'estoque_minimo': 'Farinha de trigo'}, {'nome': '17', 'estoque_minimo': 'Farinha de trigo 5kg'}, {'nome': '18', 'estoque_minimo': 'Farinha integral'}, {'nome': '19', 'estoque_minimo': 'Polvilho doce '}, {'nome': '20', 'estoque_minimo': 'Polvilho azedo '}, {'nome': '21', 'estoque_minimo': 'Milho pipoca'}, {'nome': '22', 'estoque_minimo': 'Canjica '}, {'nome': '23', 'estoque_minimo': 'Azeite'}, {'nome': '24', 'estoque_minimo': 'Vinagre'}, {'nome': '25', 'estoque_minimo': 'Azeitona'}, {'nome': '26', 'estoque_minimo': 'Milho verde - lata'}, {'nome': '27', 'estoque_minimo': 'Bolachas - doce'}, {'nome': '28', 'estoque_minimo': 'Bolachas - sal'}, {'nome': '29', 'estoque_minimo': 'Achocolatado'}, {'nome': '30', 'estoque_minimo': 'Fermentos'}, {'nome': '31', 'estoque_minimo': 'Maizena '}, {'nome': '32', 'estoque_minimo': 'Po royal'}, {'nome': '33', 'estoque_minimo': 'Suco Caju - 500 ml'}, {'nome': '34', 'estoque_minimo': 'Suco Uva - 1,5 lt'}, {'nome': '35', 'estoque_minimo': 'Água com gas'}, {'nome': '36', 'estoque_minimo': 'Agua tônica'}, {'nome': '37', 'estoque_minimo': 'Mussarela'}, {'nome': '38', 'estoque_minimo': 'Apresuntado'}, {'nome': '39', 'estoque_minimo': 'Bacon'}, {'nome': '40', 'estoque_minimo': 'Calabresa'}, {'nome': '41', 'estoque_minimo': 'Leite'}, {'nome': '42', 'estoque_minimo': 'Mandioca congelada'}, {'nome': '43', 'estoque_minimo': 'Manteiga de leite'}, {'nome': '44', 'estoque_minimo': 'Margarina'}, {'nome': '45', 'estoque_minimo': 'Pão de forma'}, {'nome': '46', 'estoque_minimo': 'Papel toalha'}, {'nome': '47', 'estoque_minimo': 'plástico filme'}, {'nome': '48', 'estoque_minimo': 'Sabão em pó'}, {'nome': '49', 'estoque_minimo': 'Amaciante'}, {'nome': '50', 'estoque_minimo': 'Sabão barra'}, {'nome': '51', 'estoque_minimo': 'Água sanitária'}, {'nome': '52', 'estoque_minimo': 'Detergente'}, {'nome': '53', 'estoque_minimo': 'Limpa alumínio'}, {'nome': '54', 'estoque_minimo': 'Desinfetante - casa'}, {'nome': '55', 'estoque_minimo': 'Desinfetante - roupas'}, {'nome': '56', 'estoque_minimo': 'Veja'}, {'nome': '57', 'estoque_minimo': 'Papel higiênico'}, {'nome': '58', 'estoque_minimo': 'Shampoo'}, {'nome': '59', 'estoque_minimo': 'Condicionador'}, {'nome': '60', 'estoque_minimo': 'Saco lixo 30Lts'}, {'nome': '61', 'estoque_minimo': 'Esponja de aço'}, {'nome': '62', 'estoque_minimo': 'Bucha '}, {'nome': '63', 'estoque_minimo': 'Creme dental'}, {'nome': '64', 'estoque_minimo': 'desodorante'}, {'nome': '65', 'estoque_minimo': 'Sabonete'}, {'nome': '66', 'estoque_minimo': 'absorvente '}, {'nome': '67', 'estoque_minimo': 'Escova dental'}, {'nome': '68', 'estoque_minimo': 'Álcool '}, {'nome': '69', 'estoque_minimo': 'Farinha de mandioca 500 g'}, {'nome': '70', 'estoque_minimo': 'Frutas e verduras'}, {'nome': '71', 'estoque_minimo': 'Carnes bovina'}, {'nome': '72', 'estoque_minimo': 'Carnes suína'}, {'nome': '73', 'estoque_minimo': 'Carnes aves'}];
let listaCompra = [];
let totalItens = 0;
let itensComprados = 0;

const listaProdutosDiv = document.getElementById("lista-produtos");
const listaComprasUl = document.getElementById("lista-compras");
const barra = document.getElementById("barra-progresso");

function renderProdutos() {
    produtos.forEach((p, index) => {
        let div = document.createElement("div");
        div.innerHTML = `
            <label>${p.nome} (Mín: ${p.estoque_minimo})</label>
            <input type="number" min="0" value="0" id="estoque-${index}">
        `;
        listaProdutosDiv.appendChild(div);
    });
}

function gerarLista() {
    listaCompra = [];
    listaComprasUl.innerHTML = "";
    itensComprados = 0;

    produtos.forEach((p, index) => {
        let input = document.getElementById("estoque-" + index);
        let estoqueAtual = parseInt(input.value) || 0;

        if (estoqueAtual < p.estoque_minimo) {
            let quantidadeComprar = p.estoque_minimo - estoqueAtual;
            listaCompra.push({ nome: p.nome, quantidade: quantidadeComprar });
        }
    });

    totalItens = listaCompra.length;
    atualizarBarra();

    listaCompra.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.nome + " - Comprar: " + item.quantidade;
        li.onclick = function() {
            if (!li.classList.contains("comprado")) {
                li.classList.add("comprado");
                itensComprados++;
                atualizarBarra();
            }
        };
        listaComprasUl.appendChild(li);
    });
}

function atualizarBarra() {
    if (totalItens === 0) {
        barra.style.width = "0%";
        barra.textContent = "0%";
        return;
    }

    let percentual = Math.round((itensComprados / totalItens) * 100);
    barra.style.width = percentual + "%";
    barra.textContent = percentual + "%";
}

renderProdutos();
