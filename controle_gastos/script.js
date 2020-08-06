function calcular() {
    var rend = window.document.getElementById('txttot')
    var valor = window.document.getElementById('valor')
    var gastagora = window.document.getElementById('gastagora')
    
    if(rend.value.length == 0) {
        window.alert('[ERRO]Adicione um valor válido.')
    } else {
        valor.innerHTML = 'Calculando...'
        var r = Number(rend.value)
        var ago = r * 0.70
        var inv = r * 0.30
        valor.innerHTML = `<h2>Valor total R$ ${r}</h2>`
        valor.innerHTML += `<p>Para AGORA(70%): R$ ${ago}</p>`
        valor.innerHTML += `<p>Para INVESTIR(30%): R$ ${inv}</p>`
        gagora.innerHTML = `<p>ESSENCIAIS (55%) R$ ${r * 0.55} <br> ESTUDOS (05%) R$ ${r * 0.05} <br> BESTEIRA (10%) R$ ${r * 0.10}</p>`
    }

}
    






/*var tot = Number(rend)
    var agora = tot * 0.70
    var invest = tot * 0.70
    var resp = window.document.getElementById('valor')
    resp.innerHTML = <p>`Gastos do AGORA: ${agora}`</p>
    resp.innerHTML += <p>`Para INVESTIR: ${invest}`</p>*/