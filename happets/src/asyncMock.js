const products = [
    { 
        id: '1', 
        name: 'Pretal camuflado', 
        price: 1000, 
        category: 'pretales', 
        img: 'https://d22fxaf9t8d39k.cloudfront.net/b9cbe45df6c913288d2eec9b78398e91efd001094ef47d4a56c5d453dc1a4b7862110.png', 
        stock: 4, 
        description:'Descripción del pretal camuflado'
    },
    { 
        id: '2', 
        name: 'Collar warning', 
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
        name: 'Pretal Azul', 
        price: 1350, 
        category: 'pretales', 
        img: 'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/pretalAzul.png?alt=media&token=f869eb39-720d-46cc-9a8f-7268f01e28a3', 
        stock: 2, 
        description:'Descripción del pretal azul'
    },
    { 
        id: '5', 
        name: 'Collar nina', 
        price: 935, 
        category: 'collares', 
        img: 'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/collarNina.png?alt=media&token=03c669ed-97cb-404f-a7d2-a76c5b38721e',  
        stock: 7, 
        description:'Descripcion de collar nina'
    },
    { 
        id: '6', 
        name: 'Correa warning', 
        price: 1255, 
        category: 'correas', 
        img:'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/correaWarning.png?alt=media&token=4ced3af3-de3c-492f-a79f-c9837cdc9a3d', 
        stock: 1, 
        description:'Descripcion de correa warning'
    },
    { 
        id: '7', 
        name: 'Pretal rayitos', 
        price: 1130, 
        category: 'pretales', 
        img: 'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/pretalRayitos.png?alt=media&token=a49b1c1d-4d1f-47c2-a042-a16ccfb5560d', 
        stock: 11, 
        description:'Descripción del pretal rayitos'
    },
    { 
        id: '8', 
        name: 'Collar de huevos', 
        price: 765, 
        category: 'collares', 
        img: 'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/colarHuevos.png?alt=media&token=28e871aa-3d80-4a72-a274-21a07b167dfc',  
        stock: 0, 
        description:'Descripcion de collar de huevos'
    },
    { 
        id: '9', 
        name: 'Correa galletitas', 
        price: 1135, 
        category: 'correas', 
        img:'https://firebasestorage.googleapis.com/v0/b/happets-22915.appspot.com/o/correaGalletitas.png?alt=media&token=3410a5b9-298b-45a2-935a-2ba777d8c67c', 
        stock: 6, 
        description:'Descripcion de correa galletitas'
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