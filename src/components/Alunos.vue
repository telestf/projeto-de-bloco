<template>
  <div class="alunos">
    <h1>ALUNOS</h1>
    <b-list-group flush>
      <b-list-group-item button v-for="aluno in alunos" :key="aluno.id">
        {{ aluno.id }} - {{ aluno.nome }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Alunos',
  data(){
    return {
      alunos: [
        {
          id: 1,
          nome: "Amanda"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
