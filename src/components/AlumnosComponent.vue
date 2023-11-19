<template>
  <div class="container pt-5">
    <div class="row mt-5">
      <div class="col-md-4">
        <input
          class="form-control"
          type="text"
          v-model="auth.userName"
          placeholder="username"
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control"
          type="text"
          v-model="auth.password"
          placeholder="password"
        />
      </div>
      <button @click="getAllAlumnos()" class="btn btn-primary col-md-4">
        log in
      </button>
    </div>
    <div>
      <div class="pt-5 mt-5" v-if="alumnos.length > 0">
        <div class="row" v-if="cursos.length > 0">
          <div class="col-md-9">
            <select v-model="alumnos.idCurso" class="form-control">
              <option value="0" disabled>Seleccione el curso</option>
              <option v-for="curso in cursos" :key="curso" :value="curso">
                {{ curso }}
              </option>
            </select>
          </div>
          <button
            class="col-md-3 btn btn-primary"
            v-on:click="getAllAlumnosByCurso()"
          >
            filtrar
          </button>
        </div>
        <table class="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Imagen</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="alumno in alumnos" :key="alumno.idAlumno">
              <td>{{ alumno.idAlumno }}</td>
              <td>{{ alumno.nombre }} {{ alumno.apellidos }}</td>
              <td>
                <img :src="alumno.imagen" :alt="alumno.nombre" width="100" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="container mt-5" v-if="alumnos.length <= 0">
        <h2 class="text-danger">No hay alumnos en este curso</h2>
      </div>
    </div>
  </div>
</template>

<script>
import ServicioSeries from "@/services/ServiceSeries";
const service = new ServicioSeries();

export default {
  name: "AlumnosComponent",
  data() {
    return {
      cursos: [],
      auth: {
        userName: "",
        password: "",
      },
      token: "",
      alumnos: {
        idAlumno: 0,
        nombre: "",
        apellidos: "",
        imagen: "",
        activo: 0,
        idCurso: 0,
      },
    };
  },
  mounted() {
    this.getAlumnosCurso();
  },
  methods: {
    getAllAlumnos() {
      var dataJON = JSON.stringify(this.auth);
      service.logInAlumnos(dataJON).then((result) => {
        //console.log( result.data.response);
        this.token = result.data.response;
        service.getAllAlumnos(result).then((data) => {
          this.alumnos = data.data;
        });
      });
    },
    getAlumnosCurso() {
      service.getCursos().then((result) => {
        this.cursos = result.data;
      });
    },

    getAllAlumnosByCurso() {
      // service.getAllAlumnosByCurso(this.alumnos.idCurso).then((result) => {
      //   this.alumnos = result.data;
      // });

      service
        .getAllAlumnosByCursoByToken(this.token, this.alumnos.idCurso)
        .then((resutl) => {
          console.log(resutl);
          this.alumnos = resutl.data;
        });
    },
  },
};
</script>

<style></style>
