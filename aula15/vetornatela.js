let valores = [6,9,3,5]
valores.sort()
/*for(let test = 0; test < valores.length; test++){
    console.log(`${valores[test]}`)
}*/
for(let test in valores){
    console.log(`A posiçao ${test} tem o valor ${valores[test]}`)
}