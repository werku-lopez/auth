<template>
  <div class="container pt-5">
    <h1 class="text-center">Login</h1>
    <hr />
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
      <button @click="getTrabajadores()" class="btn btn-primary col-md-4">
        log in
      </button>
    </div>
  </div>
  <div class="container pt-5" v-if="empleados.length > 0">
    <h1 class="text-muted">Empleados:</h1>
    <hr />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Apellido</th>
          <th scope="col">Oficio</th>
          <th scope="col">Salario</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="empleado in empleados" :key="empleado.idEmpleado">
          <td>{{ empleado.idEmpleado }}</td>
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.oficio }}</td>
          <td>{{ empleado.salario }} €</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServicioSeries from "@/services/ServiceSeries";
const service = new ServicioSeries();

export default {
  name: "AuthComponent",
  data() {
    return {
      auth: {
        userName: "",
        password: "",
      },
      empleados: {
        idEmpleado: 0,
        apellido: "",
        oficio: "",
        salario: 0,
        director: 0,
        fechaAlta: "",
        idDepartamento: 0,
      },
    };
  },
  methods: {
    getTrabajadores() {
      var dataJON = JSON.stringify(this.auth);
      service.logIn(dataJON).then((result) => {
        service.getTrabajadoresByAuth(result.data.response).then((result) => {
          this.empleados = result.data;
          console.log(result);
        });
      });
    },
  },
};
</script>

<style></style>
