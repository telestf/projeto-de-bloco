<template>
  <div>
    <div>
      <h1>Detalhar Aluno</h1>
    </div>

    <b-card>
      <b-card-text><strong>ID</strong> {{ alunoById(id).id }}</b-card-text>
      <b-card-text><strong>Nome:</strong> {{ alunoById(id).nome }}</b-card-text>
      <b-card-text><strong>Responsável:</strong> {{ alunoById(id).responsavel }}</b-card-text>
      <b-card-text><strong>Endereço:</strong></b-card-text>
      <b-card-text><strong>Rua:</strong> {{ alunoById(id).endereco.rua }}</b-card-text>
      <b-card-text><strong>Número:</strong> {{ alunoById(id).endereco.numero }}</b-card-text>
      <b-card-text><strong>Complemento:</strong> {{ alunoById(id).endereco.complemento }}</b-card-text>
      <b-card-text><strong>Email:</strong> {{ alunoById(id).email }}</b-card-text>
      <b-card-text><strong>Telefone:</strong> </b-card-text>
      <b-card-text><strong>Número:</strong> {{ alunoById(id).telefone.numero }}</b-card-text>
      <b-card-text><strong>Tipo:</strong> {{ alunoById(id).telefone.tipo }}</b-card-text>
      <b-card-text><strong>Mensalidade:</strong> {{ alunoById(id).mensalidadePaga ? "Paga" : "Não Paga" }}</b-card-text>
      <b-card-text><strong>Comentários:</strong> {{ alunoById(id).comentarios }}</b-card-text>

      <b-button @click="editar">Editar Informações</b-button>

    </b-card>

    <router-view></router-view>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "DetalharAlunos",
  data () {
    return {
      id : this.$route.params.id
    }
  },
  computed: mapGetters(["alunoById"]),
  methods: {
    editar () {
      this.$router.push({ name: "edit-aluno", params: { id: this.id } });
    }
  }
}
</script>

<style>

</style>