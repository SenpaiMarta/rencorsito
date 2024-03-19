const productos = [
    {
        id:'un-amigo',
        titulo: 'Regala un amigo',
        categoria: 'Aburrimiento',
        imagen: '/images/prod-regala-un-amigo.jpeg',
        resumen: 'Para las personas que no paran de molestarte una y otra vez con lo mismo.',
        descripcion:'Quiero decirte que me gusta que hablemos, pero colegui: ¡ya no puedo más! Necesitas un amigo que te escuche también a veces porque a mi me tienes la cabecita como un bombo. Anda y usa este regalo con coherencia, por favor, que no tengo ganas de escuchar más dramitas. Con cariño, te regalo un amigo.'
    },

    {
        id:'una-vida',
        titulo: 'Regala una vida',
        categoria: 'Aburrimiento',
        imagen: '/images/prod-regala-una-vida.jpeg',
        resumen: 'Para las personas que no paran de meterse en lo que no les llaman',
        descripcion:'Tendrías que haberlo visto venir, porque no es normal que te andes metiendo en todo lo que ocupa a las demás personas. Que no, que no te importa si Mari se ha pelado de esa forma o si Paco se ha comprado una moto o unas bragas. A ti lo que te viene haciendo falta es tener preocupaciones propias. Así que toma, te regalo una vida para que la uses y dejes de meterte en la de los demás.'
    },

    {
        id:'5-min-sin-amigos',
        titulo: 'Regala 5 min sin amigos',
        categoria: 'Odio',
        imagen: '/images/prod-regala-5-min-sin-amigos.jpeg',
        resumen: 'Para las personas que ya se han pasado de rosca con la intensidad',
        descripcion:'Ya está bien. Llevo aguantando tu intensidad mucho, muchísimo tiempo y ni qué decir tiene que te quiero mucho y que estoy aquí para lo que necesites, pero ya te estás pasando. Necesitas un break, y que sea urgente, así que te regalo estos cinco minutos sin amigos para que reflexiones y te decidas a cerrar la boquita un poco y escuchar a los demás.'
    }


]

export const getProducts = new Promise ((resolve) =>  {
    setTimeout (() => {
        resolve(productos)
    },3000 )

})

export const getProduct = (id) => {
    return productos.find(prod => prod.id == id)
}

export const getProdCat = (categoria) => {
    return productos.filter(prod => prod.categoria === categoria)
}