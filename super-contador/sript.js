function contar() {
    let ini = document.getElementById('tini')
    let fim = document.getElementById('tfim')
    let pas = document.getElementById('tpas')
    let res = document.getElementById('tres')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Preencha todos os campos.')
    } else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if (i < f){
            for (let c = i; c <= f;c += p)
                {res.innerHTML += `${c} ` }
        } else {
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} `
            }
        }
        }
        
        
}