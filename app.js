class ProductManager {
  constructor() {
    this.product = []
  }
//devuelvo el array con sus elementos
   getProduct() {
    console.log(this.product)
    return this.product
   }
//agrego producto al array vacio/id automatico e incrementable
  addProduct({ title,descripcion,price,thumbnail,stock }) {
    let id 
    if(this.product.length===0) {
      id = 1
    }else {
      let ultimo_producto= this.product[this.product.length-1]
       id = ultimo_producto.id + 1
    }
   let producto = { title,descripcion,price,thumbnail,stock,id }
   this.product.push(producto)
    
  }
//busco el producto que coincide con el id
  getProductById(id) {
    let buscarId = this.product.find(producto => producto.id===id)
    if(buscarId) {
console.log(buscarId)
    }else {
console.log('not found')
    }
  }

  getProductById(id) {
    let buscarId = this.product.find(producto => producto.id===id)
    if(buscarId) {
console.log(buscarId)
    }else {
console.log('not found')
    }
  }
  
}


let products = new ProductManager()

products.addProduct({ title: 'nike air max',descripcion: 'air max 97' ,price: 45.000,thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/075/480/products/zapatillas-nike-air-max-97-dj0717-0011-1ab4d682bb0d2ad0f216402959460563-640-0.webp',stock: 5 })
products.addProduct({ title: 'nike md runner 2',descripcion: 'md runner 2' ,price: 39.000,thumbnail: 'https://celadasa.vtexassets.com/arquivos/ids/211178-800-auto?v=637910048541670000&width=800&height=auto&aspect=true',stock: 9 })
products.addProduct({ title: 'adidas forum',descripcion: 'adidas forum low' ,price: 90.000,thumbnail: 'https://essential.vtexassets.com/arquivos/ids/435382-800-auto?v=637582266896100000&width=800&height=auto&aspect=true' ,stock: 9 })
products.addProduct({ title: 'adidas ozzelia',descripcion: 'ozzelia beige' ,price: 50.000,thumbnail: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a27f5b4b0d524cc2b540ad2f00d3be5f_9366/Zapatillas_Ozelia_Beige_GV7685_01_standard.jpg' ,stock: 13 })
products.getProduct()
products.getProductById(3)