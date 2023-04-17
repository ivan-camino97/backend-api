function suma(n1,n2) {

 return new Promise(
    (resolve,reject) => {
let verificarn1 = esNumero(n1)
//console.log(verificarn1)
let verificarn2 = esNumero(n2)
//console.log(verificarn2)
if (verificarn1.number && verificarn2.number) {
let verificarsumaMayoACero = verificarn1.number + verificarn2.number
if (verificarsumaMayoACero>0) {
    return resolve(verificarsumaMayoACero)
}else {
    return reject({
        error3: 'la calculadora solo resuelve resultados positivos'
    })
}
}else {
    return reject({
        error1: verificarn1.message ?? 'el nro es correcto',
        error2: verificarn2.message ?? 'el nro es correcto'
    })
}
 })
}
//suma(4,5)
//suma(0,9)
//suma(10,20)
//calculos(10,20,suma).then(res=> console.log(res)).catch(err=> console.log(err))
//calculos(9,-10,suma)

function esNumero(num){
    if (isNaN(num)) {
        let message = 'Solo números'
        return { success: false, message }
    } else if (num===0) {
        let message = 'Operación innecesaria'
        return { success: false, message }
    } else {
        return { success: true, number: num }
    }
}

async function calculos(num1,num2,operacion){
    try {
        let calculo = await operacion(num1,num2)
        console.log(calculo)
        return calculo
    } catch(error) {
        console.log(error)
        return error
    }
}

function resta(n1,n2) {
    return new Promise((resolve,reject) => {
let verificarn1 = esNumero(n1)
let verificarn2 = esNumero(n2)
if (verificarn1.number && verificarn2.number) {
    let resultado = verificarn1.number - verificarn2.number
    if (resultado>0) {
         return resolve(resultado)
    }else {
        return reject({
            error: 'la calculadora solo devuelve valores positivos'
        })
    }
}else {
return reject({
    error1: verificarn1.message ?? 'el nro es correcto',
    error2: verificarn2.message ?? 'el nro es correcto'
})
}
    })
}
resta(21,34)
resta(9,10)
resta(9,20)
calculos(30,20,resta).then(res=> console.log(res)).catch(err=> console.log(err))
calculos(30,10,resta)