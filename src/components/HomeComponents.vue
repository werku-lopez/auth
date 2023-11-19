<template>
  <div class="container pt-5">
    <div class="pt-5">
      <!-- <label class="form-label">Selecciones las series: </label> -->
      <select
        v-model="idSerie"
        class="form-control"
        v-on:change="getPersonajesBySerire()"
      >
        <option value="0" disabled>Seleccione una serie</option>
        <option v-for="serie in series" :key="serie" :value="serie.idSerie">
          {{ serie.nombre }}
        </option>
      </select>
    </div>
    <div class="pt-5">
      <!-- <div class="text-center" v-if="personajes.length == 0">
        <img src="https://i.gifer.com/ZKZg.gif" alt="loading" />
      </div> -->
      <!-- <div>
        <h1 class="text-muted">Personajes:</h1>
        <div class="row">
          <div
            class="col-md-4 col-sm-12 mt-3"
            v-for="personaje in personajes"
            :key="personaje.idPersonaje"
          >
            <div class="card">
              <div class="card-header">
                <img
                  class="card-img-top"
                  :src="personaje.imagen"
                  :alt="personaje.nombre"
                  width="100"
                />
              </div>
              <div class="card-body">
                <h6 class="card-title">{{ personaje.nombre }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Imagen</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="personaje in personajes" :key="personaje.idPersonaje">
            <td>{{ personaje.idPersonaje }}</td>
            <td>{{ personaje.nombre }}</td>
            <td>
              <img
                :src="personaje.imagen"
                :alt="personaje.nombre"
                width="100"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ServicioSeries from "../services/ServiceSeries";
import Global from "@/Global";
import axios from "axios";
const service = new ServicioSeries();

export default {
  name: "HomeComponent",
  data() {
    return {
      series: [],
      selected: [],
      idSerie: 0,
      personajes: [],
    };
  },
  mounted() {
    this.getSeriesData();
  },
  methods: {
    getSeriesData() {
      var request = "api/series";
      var url = Global.apiSeries + request;

      axios.get(url).then((response) => {
        this.series = response.data;
      });
    },

    getPersonajesBySerire() {
      // console.log(this.selected);
      // var data = [];
      // for (var key in this.selected) {
      //   // eslint-disable-next-line no-prototype-builtins
      //   if (this.selected.hasOwnProperty(key)) {
      //     var value = this.selected[key];
      //     console.log(value);
      //     data.push(value);
      //   }
      // }
      //data = data.substring(0, data.length - 1);

      // var serie = data.map((id) => {return `idserie=` + id;}).join("&");
      service.getPersonajesSerie(this.idSerie).then((result) => {
        this.personajes = result;
      });
    },
  },
};
</script>

<style></style>
