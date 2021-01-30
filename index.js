function calculaIMC (peso, altura) {
    imc = peso/(altura * altura)
    return imc
}
const btnCalcula = document.querySelector('[data-calc-button]')
const btnLimpa = document.querySelector('[data-clean-button]')

btnLimpa.addEventListener('click',(evento)=> {
    evento.preventDefault()
    
    const resultadoH2 = document.querySelector('[data-resultado-h2]')
    const resultadoP = document.querySelector('[data-resultado-p]')
    const h2Class = document.querySelector('[data-class-resultado]')
    resultadoH2.innerHTML = " "
    resultadoP.innerHTML = " "
    h2Class.innerHTML = " "

    const img01 = document.getElementById("img-01")
    const img02 = document.getElementById("img-02")
    const img03 = document.getElementById("img-03")
    const img04 = document.getElementById("img-04")
    const img05 = document.getElementById("img-05")
    const img06 = document.getElementById("img-06")
    
    var imgs = [img01,img02,img03,img04,img05,img06]

    for (var i = 0; i < imgs.length ; i++) {
        imgs[i].style.opacity = "0.2"
        console.log(imgs[i].style.opacity)
    }

    

})

btnCalcula.addEventListener('click', (evento)=> {
    evento.preventDefault()
    const inputPeso = document.querySelector('[data-input-peso]')
    const peso = inputPeso.value
    const inputAltura = document.querySelector('[data-input-altura]')
    const altura = inputAltura.value
    const resultadoH2 = document.querySelector('[data-resultado-h2]')
    const resultadoP = document.querySelector('[data-resultado-p]')
    
    imc = calculaIMC(peso, altura)
    console.log(imc)

    resultadoH2.innerHTML = "Seu IMC é"
    resultadoP.innerHTML = (imc).toFixed(2)
    
if (imc < 18.5 ) {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Abaixo do normal!"
    const img06 = document.getElementById("img-06")
    img06.style.opacity = "100"

    }else if (imc > 18.5 && imc < 24.9) {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Normal!"
    const img06 = document.getElementById("img-05")
    img06.style.opacity = "100"    

    console.log('to no normal')

    }else if (imc > 24.9 && imc < 29.9) {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Sobrepeso!"
    const img06 = document.getElementById("img-04")
    img06.style.opacity = "100"    


    }else if (imc > 30 && imc < 34.9) {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Obesidade grau I!"
    const img06 = document.getElementById("img-03")
    img06.style.opacity = "100"    

    }else if (imc > 35 && imc < 39.9) {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Obesidade grau II!"
    const img06 = document.getElementById("img-02")
    img06.style.opacity = "100"      

    }else {
    const h2Class = document.querySelector('[data-class-resultado]')
    h2Class.innerHTML = "Obesidade grau III!"
    const img06 = document.getElementById("img-01")
    img06.style.opacity = "100"
}
})


