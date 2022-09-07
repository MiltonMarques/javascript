function contar() {
    let inicio= document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo= document.getElementById('txtp')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML= 'Impossivel contar!'
        window.alert ('ERRO verifique os dados')
    } else {
        res.innerHTML='Contando:'
        let i= Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0 ){
            window.alert('passo inavalido! Considerando o PASSO 1')
            p= 1
        }
        if(i< f){
            //contagem  crescente
        for(let c=i; c <= f; c +=p) {
        res.innerHTML += `${c} \u{1f449}`}
        }
       else{
        //contagem regresiva
        for(let c = i; c>f;c-= p )
        res.innerHTML += `${c} \u{1f449}`
       }
       res.innerHTML += `\u{1f3c1}`
    }
}