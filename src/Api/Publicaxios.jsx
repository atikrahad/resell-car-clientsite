import axios from 'axios'

const Publicaxios = axios.create({
    baseURL: "http://localhost:5000"
})

export default Publicaxios;