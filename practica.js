/*function suma(n1,n2) {

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

calculos(30,20,resta).then(res=> console.log(res)).catch(err=> console.log(err))
calculos(30,10,resta)*/
//practica clase manejos de sistemas js
/*const fs = require('fs')
let ruta = './nuevoArchivo.js'
let objetito = JSON.stringify(['nuevo',{nombre:'ivan', apellido: 'camino'}],null,2)
fs.promises.writeFile(ruta,objetito)
.then(res=>console.log('archivo creado'))
.catch(err=>console.log(err))
fs.promises.unlink(ruta)*/
//practica map js
/*const numeros = [23,24,25,26,27,28]
let resultado = numeros.map((value)=> value + 1)
console.log(resultado)

const alimentos= ['papa','arroz','salsa']

function cocina(alimento) {
    const clonacion = {
        'papa': 'papas fritas',
        'arroz': 'guiso',
        'salsa': 'fideos'
    }
    return clonacion[alimento] || alimento
}
const comida = alimentos.map(cocina)
console.log(comida)*/
const fs = require('fs')
class userManager {
    constructor(path) {
        this.users = []
        this.path = path
        this.init(path)
    }
    init(path) {
let file = fs.existsSync(path)
if (!file) {
   fs.promises.writeFile(this.path,'[]')
   console.log('file created at path'+this.path)
  return 'file created at path'+this.path
     }else {
        this.users = JSON.parse(fs.readFileSync(this.path,'UTF-8'))
        console.log('data recovered')
        return 'data recovered'  
        // fs.promises.readFile(path,'utf-8')
        //.then(res=> this.user = JSON.parse(res))
        //.then(res=> this.users = res)
        //.catch(err=> console.log(err))
     }
   }  
   addUser({ name, last_name,age,cart }) {
       let claves = { name, last_name,age,cart }
       claves.id = 1
       console.log(this.users)
       this.users.push(claves) //agrego un usuario a la memoria del programa
     let claves_JSON = JSON.stringify(this.users,null,2)//pasar a formato JSON,stringifearlo el array entero
       fs.promises.writeFile(this.path,claves_JSON) //y luego sobreescribo el archivo
       .then(res=> console.log('user created'))
       .catch(err=> console.log(err))
       
   }
 }

let manager = new userManager('./users.json')
async function crud() {
  await  manager.addUser({ name: 'marcos', last_name: 'lopez',age: 20,cart: [] })
   await manager.addUser({ name: 'juan', last_name: 'lares',age: 25,cart: [] })
   await manager.addUser({ name: 'beto', last_name: 'jauregui',age: 30,cart: [] })
}

crud()

/* try {
        //defino el objeto que necesito agregar al array
        let data = { title,description,price,thumbnail,stock }
        //si la memoria tiene usuarios
        if (this.product.length>0) {
            //busco el id del último elemento y le sumo 1
            let next_id = this.product[this.product.length-1].id+1
            //agrego la propiedad al objeto
            data.id = next_id
        } else {
            //en caso que no tenga: asigno el primer id
            data.id = 1
        }
        //agrego el objeto (usuario) a la memoria del programa
        this.product.push(data)
        //convierto a texto plano el array
        let data_json = JSON.stringify(this.product,null,2)
        //sobre-escribo el archivo
        await fs.promises.writeFile(this.path,data_json)
        console.log('id´s created user: '+data.id)
        return 'id´s user: '+data.id
    } catch(error) {
        console.log(error)
        return 'error: creating user'
    }
    }*/