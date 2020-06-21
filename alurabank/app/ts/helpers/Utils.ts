import {Imprimivel} from '../models/Imprimivel'

export function Imprime(...objetos: Imprimivel[]){

    objetos.forEach(objeto=> objeto.paraTexto());
}