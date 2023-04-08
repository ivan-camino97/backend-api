class ProductManager {
  constructor() {
    this.product = []
  }

   getProduct() {
    console.log(this.product)
    return this.product
   }

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
    //console.log(this.product)
  }
}


let products = new ProductManager()

products.addProduct({ title: 'nike air max',descripcion: 'air max 97' ,price: 45.000,thumbnail: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/075/480/products/zapatillas-nike-air-max-97-dj0717-0011-1ab4d682bb0d2ad0f216402959460563-640-0.webp',stock: 5 })
products.addProduct({ title: 'nike md runner 2',descripcion: 'md runner 2' ,price: 39.000,thumbnail: 'https://celadasa.vtexassets.com/arquivos/ids/211178-800-auto?v=637910048541670000&width=800&height=auto&aspect=true',stock: 9 })
products.getProduct()