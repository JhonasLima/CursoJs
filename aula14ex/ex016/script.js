function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[Erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando PASSO 1!')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (c = i; c >= f; c -= p)
                res.innerHTML += ` ${c} \u{1f449}`
        }
        res.innerHTML += `\u{1F3c1}`
    }
}

/* var numIni = document.getElementById('numIni')
    var numFim = document.getElementById('numFim')
    var passo = document.getElementById('passos')
    var res = document.querySelector('div#res')
    var contador = '1'
    for (var i = Number(numIni.value); i <= Number(numFim); i++) {
        res.innerHTML = `a ${contador}a `
    }*/