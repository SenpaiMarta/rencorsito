// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, getDocs, addDoc, collection} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyCEMP3QmO6ddYEGA4B4faG3SKvg8M-WdxY",
  authDomain: "rencorsitoshop.firebaseapp.com",
  projectId: "rencorsitoshop",
  storageBucket: "rencorsitoshop.appspot.com",
  messagingSenderId: "272098274914",
  appId: "1:272098274914:web:f1cb9b6dcc21befac82b3b"
}

const app = initializeApp(firebaseConfig)


export const baseDatos = getFirestore(app)

export async function getProducts() {
    const response = await getDocs(collection(baseDatos, 'items'))
    const listaProds = response.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    listaProds.forEach(producto =>  {
        if (!producto.id || !producto.titulo) {
            throw new Error ('Vaya, no lo hemos encontrado')
        }
    })
    return listaProds
}

export async function enviarPedidos(pedido) {
    const listaPedidos = collection(baseDatos, 'pedidos')
    const refPedido = await addDoc(listaPedidos, pedido)
    console.log("Referencia de pedido: "+refPedido)
}

export const getProduct = async (id) => {
    const productos = await getProducts()
    return productos.find(prod => prod.id === id)
}

export const getProdCat = async (categoria) => {
    const productos = await getProducts()
    return productos.filter(prod => prod.categoria === categoria)
}

export const getProdName = async (titulo) => {
    const productos = await getProducts()
    return productos.filter(prod => prod.titulo == titulo)
}