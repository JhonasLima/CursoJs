function contar () {
    var numIni = document.getElementById('numIni')
    var numFim = document.getElementById('numFim')
    //var passo = document.getElementById('passos')
    var res = document.querySelector('div#res')
    //var contador = 0
    var contador = Number(numIni.value) + Number(numFim.value)
    res.innerHTML = `a ${contador} a`
}