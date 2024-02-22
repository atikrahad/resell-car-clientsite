import axios from 'axios'

const Publicaxios = axios.create({
    baseURL: import.meta.env.VITE_APIURL,
})

export default Publicaxios;