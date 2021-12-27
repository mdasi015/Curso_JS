function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert('[ERROR] FALTAM DADOS!')
    } else {
        res.innerHTML = 'Contando: ' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert('Passo Invalido! Considerando PASSO 1')
            p = 1
        }

        if(i < f){
            // Contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML +=  `${c} \u{1F60E}`
            }
        } else{
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F60E}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}