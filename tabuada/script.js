function tabuada () {
    let num = document.getElementById('tnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        let n = Number(num.value)
        let c = 1
        while (c <= 10){
            let item = document.createElement('option')
            item.text = `${num.value} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}