import http from '../Servicios/http-axios.js'

class ServiciosFrases {
    getAll(){return http.get("/mensajes")}
    getRutina(){return http.get("/rutinasemanal")}
}

export default new ServiciosFrases();