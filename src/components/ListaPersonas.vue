<template>
  <b-container class="mt-5">
    <b-input placeholder="apunta algo" v-model="filtro"></b-input>
    <b-table
      id="my-table"
      :items="personas"
      :per-page="perPage"
      :current-page="currentPage"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      label-sort-asc=""
      label-sort-desc=""
      small
      :filter="filtro"
      @filtered="onFiltered"
    >
    </b-table>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
  </b-container>
</template>

<script>

export default {
  data() {
    return {
      filtro: null,
      sortBy: "name",
      sortDesc: false,
      perPage: 5,
      rows:0,
      currentPage: 1,
      personas: [],
      fields: [
        { key: "name", label: "Nombre", sortable: true },
        { key: "firstname", label: "Apellido Paterno", sortable: true },
        { key: "lastname", label: "Apellido Materno", sortable: true },
        { key: "address", label: "Direccion", sortable: true },
        { key: "birthday", label: "Fech. Nac.", sortable: true },
        { key: "email", label: "Email", sortable: true },
        { key: "email", label: "Email", sortable: true },
      ],
    };
  },
  mounted() {
    this.obtenerPersonas();
  },
  methods: {
    async obtenerPersonas() {
      try {
        const data = await fetch("http://localhost:8080/personas/page",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            page: parseInt(this.currentPage),
            size: parseInt(this.perPage),
            sort: this.sortBy,
          }),
        });
        this.personas = data.content;
        this.rows = this.personas.length;
      } catch (error) {
        console.error(error);
      }
    },
    onFiltered(filteredItems){
      this.currentPage = 1;
      this.rows = filteredItems.length;
    }
  },
};
</script>