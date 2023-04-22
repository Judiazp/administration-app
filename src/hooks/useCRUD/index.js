import { useState } from "react";
import swal from 'sweetalert';

const createContent = (content) => {

}

const getContent = async (category) => {
    const resp = await fetch(`http://localhost:1337/api/transactions`)
    const { data } = await resp.json()
    return data.filter(({ attributes: { operation } = {} } = {}) => operation === category)
}

const findContent = (id) => {
    // endpoint para buscar operaciones por tipo:
    // http://localhost:1337/api/operations?populate=*&filters[typeOperation][$eq]={deuda|ingreso|gasto}

    // Otra alternativa, sin crear ninguna collection type y relacionarla:
    //http://localhost:1337/api/transactions?filters[operation][$eq]={gasto | deuda | ingreso}
 }

const deleteContent = (id) => { }

const updateContent = (id) => { }

const useCRUD = () => {
    const [data, setData] = useState({
        data: [],
        loading: true,
        error: {}
    })

    return {
        getContent
    }
}

export default useCRUD;
