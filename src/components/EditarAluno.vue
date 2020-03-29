<template>  
  <div>
      <h1>Editar Aluno</h1>

      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Nome do(a) aluno(a)">
          <b-form-input v-model="aluno_novo.nome" type="text" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Nome do(a) responsável">
          <b-form-input v-model="aluno_novo.responsavel" type="text" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Rua">
          <b-form-input v-model="aluno_novo.endereco.rua" type="text" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Número">
          <b-form-input v-model="aluno_novo.endereco.numero" type="text" required ></b-form-input>
        </b-form-group>
        
        <b-form-group label="Complemento">
          <b-form-input v-model="aluno_novo.endereco.complemento" type="text"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email">
          <b-form-input v-model="aluno_novo.email" type="email" required></b-form-input>
        </b-form-group>
        
        <b-form-group label="Telefone">
          <b-form-input v-model="aluno_novo.telefone.numero" type="text" required></b-form-input>
        </b-form-group>

        <b-form-group required label="Tipo do telefone:">
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Celular">Celular</b-form-radio>
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Residencial">Residencial</b-form-radio>
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Comercial">Comercial</b-form-radio>
        </b-form-group>

        <b-form-checkbox v-model="aluno_novo.mensalidadePaga">
          Mensalidade Paga
        </b-form-checkbox>
        
        <b-button type="submit" variant="primary">Submit</b-button>

      </b-form>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'EditarAluno',
  data () {
    return {
      id: this.$route.params.id,
      aluno_novo: {
        nome: "",
        responsavel: "",
        endereco: {
          rua: "",
          numero: "",
          complemento: ""
        },
        email: "",
        telefone: {
          numero: "",
          tipo: ""
        },
        mensalidadePaga: ""
      }
    }
  },
  computed: mapGetters(["alunoById"]),
  created() {
    this.aluno_novo = this.alunoById(this.id)
  },
  methods: {
    ...mapActions(["editarAluno"]),
    onSubmit() {
      this.editarAluno(this.aluno_novo);
      alert("Dados editados!!")
    }
  }
}
</script>
}

<style>

</style>