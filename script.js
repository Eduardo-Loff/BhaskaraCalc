function calc(){
    a = Number(document.querySelector('#a').value)
    b = Number(document.querySelector('#b').value)
    c = Number(document.querySelector('#c').value)

    res = document.querySelector('.resultado')
    res.innerHTML = ""

    res.innerHTML = `<h2>Exibindo Resultado</h2>`
    res.innerHTML += `<p>x =  ( -(${b}) ± √${b}² - 4 * ${a} * ${c} ) / 2 * ${a} <br></p>`

    primeiro_calc = Number(-1 * b) // Calculo do Primeiro Elemento
    delta = Number(b* b - 4*a*c) // Calculo do Delta
    divisor = Number(2 * a) // Calculo do divisor

    res.innerHTML += `<p>x = ( ${primeiro_calc} ± √${delta} ) / ${divisor} <br></p>`

    if(delta >= 0){
        raiz = Math.sqrt(delta) // Tira a Raiz
        if(Number(raiz - parseInt(raiz)) == 0){
            res.innerHTML += `<p> x = ( ${primeiro_calc} ± ${raiz} ) / ${divisor} <br></p>`
            x_1 = primeiro_calc + raiz
            x11 = x_1 / divisor
            res.innerHTML += `<p>x' = ( ${primeiro_calc} + ${raiz} ) / ${divisor} <br></p>`
            res.innerHTML += `<p>x' = '${x_1}  / ${divisor} <br></p>`
            res.innerHTML += `<p>x' = ${x11}<br></p>`

            x_2 = primeiro_calc - raiz
            x22 = x_2 / divisor
            res.innerHTML += `<p>x'' =  ( ${primeiro_calc} + ${raiz} ) / ${divisor} <br></p>`
            res.innerHTML += `<p>x'' = ${x_2} / ${divisor} <br></p>`
            res.innerHTML += `<p>x'' = ${x22}<br></p>`
        
        }
        else{
            res.innerHTML += `<p>Seu delta não possui resultado exato.`
        }
    }
    else{
        res.innerHTML += `Sua equação não tem resultado por ter delta negativo.`
    }
}