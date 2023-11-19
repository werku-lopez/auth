import Global from "@/Global";
import axios from "axios";

export default class ServicioSeries {
    getPersonajesSerieByIdSerie(idSerie) {
        return new Promise((resolve) => {
            var request = "api/serires/personajesserie/" + idSerie;
            var url = Global.apiSeries + request;
            var personajes = [];
            fetch(url, { method: "GET" }).then((response) => {
                response.json().then((data) => {
                    personajes = data;
                    resolve(personajes);
                })
            })
        })
    }

    getPersonajesSerie(idSerie) {
        return new Promise((resolve) => {
            var request = "api/series/personajesserie/" + idSerie;
            var url = Global.apiSeries + request;
            var personajes = [];

            axios.get(url).then((response) => {
                personajes = response.data;
                resolve(personajes);
            })
        })
    }

    logIn(datJON) {
        return new Promise((resolve) => {
            var request = "/auth/login";
            var url = Global.apiAuth + request;
            const headers = {
                'Content-Type': 'application/json',
            };
            axios.post(url, datJON, { headers }).then((response) => {
                resolve(response);
            })
        })
    }
    getTrabajadoresByAuth(token) {
        return new Promise((resolve) => {
            var request = "/api/empleados";
            var url = Global.apiAuth + request;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            };

            axios.get(url, config).then((response) => {
                resolve(response);
            });
        });
    }

    logInAlumnos(datJON) {
        return new Promise((resolve) => {
            var request = "api/auth/login";
            var url = Global.apiAuhtEjemplos + request;
            const headers = {
                'Content-Type': 'application/json',
            };
            axios.post(url, datJON, { headers }).then((response) => {
                resolve(response);
            })
        })
    }

    getAllAlumnos(token) {
        return new Promise((resolve) => {
            var request = "api/alumnos";
            var url = Global.apiAuhtEjemplos + request;
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get(url, config).then((response) => {
                resolve(response);
            })
        })
    }
    getCursos() {
        return new Promise((resolve) => {
            var request = "api/alumnos/cursos";
            var url = Global.apiAuhtEjemplos + request;
            axios.get(url).then((response) => {
                resolve(response);
            })
        })
    }

    getAllAlumnosByCurso(idCurso) {
        return new Promise((resolve) => {
            var request = "api/alumnos/filtrarcurso/" + idCurso;
            var url = Global.apiAuhtEjemplos + request;
            axios.get(url).then((response) => {
                resolve(response);
            })
        })
    }

    getAllAlumnosByCursoByToken(token, idCurso) {
        return new Promise((resolve) => {
            var request = "api/alumnos/filtrarcursotoken/" + idCurso;
            var url = Global.apiAuhtEjemplos + request;

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            axios.get(url, config).then((response) => {
                resolve(response);
            })
        })
    }
}