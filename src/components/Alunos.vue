<template>
  <div class="alunos">
    <h1>ALUNOS</h1>
    <div>
      <AdicionarAluno />
    </div>
    <b-list-group flush> 
    <b-list-group-item v-for="aluno in allAlunos" :key="aluno.id" :class="{'naoPaga':!aluno.mensalidadePaga}">
      <b-link :to="{ name: 'detalharAlunos', params: { id: aluno.id } }">
        {{ aluno.id }} - {{ aluno.nome }}
      </b-link>
      <b-button pill size="sm" variant="danger" @click="deleteAluno(aluno.id)" class="fas fa-trash-alt">Deletar</b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AdicionarAluno from './AdicionarAluno.vue';
export default {
  name: "Alunos",
  components: {
    AdicionarAluno
  },
  methods: {
    ...mapActions(["deleteAluno", "getAlunos"])
  },
  computed: mapGetters(["allAlunos"]),
  created() {
    this.getAlunos();
  }
     
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.naoPaga {
  background: red;
  opacity: 0.5;
}
a {
  text-decoration: none;
}
</style>