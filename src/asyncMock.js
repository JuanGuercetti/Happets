const products = [
    { 
        id: '1', 
        name: 'pretal camuflado', 
        price: 1000, 
        category: 'pretales', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 4, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '2', 
        name: 'collar warning', 
        price: 800, category: 'collares', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 8, 
        description:'Descripcion de collar warning'
    },
    { 
        id: '3', 
        name: 'Correa rosa', 
        price: 1200, 
        category: 'correas', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 0, 
        description:'Descripcion de correa rosa'
    },
    { 
        id: '4', 
        name: 'Pretal Verde', 
        price: 1350, 
        category: 'pretales', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 2, 
        description:'Descripción del pretal verde'
    },
    { 
        id: '5', 
        name: 'Collar amarillo', 
        price: 935, 
        category: 'collares', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 7, 
        description:'Descripcion de collar amarillo'
    },
    { 
        id: '6', 
        name: 'Correa amarilla', 
        price: 1255, 
        category: 'correas', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 1, 
        description:'Descripcion de correa amarilla'
    },
    { 
        id: '7', 
        name: 'Pretal azul', 
        price: 1130, 
        category: 'pretales', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 11, 
        description:'Descripción del pretal azul'
    },
    { 
        id: '8', 
        name: 'Collar de huevos', 
        price: 765, 
        category: 'collares', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/2783879c77908aa245eeb313696118a81ea1eb036e4a39ff0bfd908d2d6c1aca39583.jpeg',  
        stock: 0, 
        description:'Descripcion de collar de huevos'
    },
    { 
        id: '9', 
        name: 'Correa azul', 
        price: 1135, 
        category: 'correas', 
        img:'https://acdn.mitiendanube.com/stores/001/936/362/products/20220602_1937001-8e36051ef9206257e216551684285118-240-0.jpg', 
        stock: 6, 
        description:'Descripcion de correa azul'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 300)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 300)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === itemId))
        }, 300)
    })
}