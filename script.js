var valorProduto = [59.99]
var total = [0]
var qtd = [0]
function adicionar(item){
    var quantidade = document.getElementById("quantidade" +item)
    var total = document.getElementById("total" + item)
    qtd[item] +=1
    total[item]= Number.parseFloat(valorProduto[item]) *qtd[item]
    quantidade.innerHTML = qtd[item]
    total.innerHTML = total[item].toFixed(2)
}