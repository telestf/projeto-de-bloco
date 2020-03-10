<template>
  <div class="alunos">
    <h1>ALUNOS</h1>
    <b-list-group flush> 
      <b-list-group-item button v-for="aluno in alunosOrdenados" :key="aluno.id" to=alunosId>
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
        },
        {
          id: 2,
          nome: "Jéssica"
        },
        {
          id: 3, 
          nome: "Beatriz"
        }
      ]
    }
  },
  computed: {
    alunosOrdenados: function(){
      let alunosOrd = this.alunos
      alunosOrd.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });
      return this.alunos;    
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
