<template>
  <div>

    <b-button type="button" @click="mostrarFormulario">Adicionar Aluno</b-button>
    <div v-if="esconderFormulario">
      <h1>Adicionar Novo Aluno</h1>

      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Nome do(a) aluno(a)">
          <b-form-input v-model="aluno_novo.nome" type="text" required placeholder="Entre com o nome do(a) aluno(a)"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Nome do(a) responsável">
          <b-form-input v-model="aluno_novo.responsavel" type="text" required placeholder="Entre com o nome do(a) responsável"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Rua">
          <b-form-input v-model="aluno_novo.endereco.rua" type="text" required placeholder="Entre com a rua da residência"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Número">
          <b-form-input v-model="aluno_novo.endereco.numero" type="text" required placeholder="Entre com o número da residência"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Complemento">
          <b-form-input v-model="aluno_novo.endereco.complemento" type="text" placeholder="Entre com o complemento da residência"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Email">
          <b-form-input v-model="aluno_novo.email" type="email" required placeholder="Entre com o e-mail"></b-form-input>
        </b-form-group>
        
        <b-form-group label="Telefone">
          <b-form-input v-model="aluno_novo.telefone.numero" type="text" required placeholder="Entre com o telefone"></b-form-input>
        </b-form-group>

        <b-form-group required label="Tipo do telefone:">
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Celular"><strong>Celular</strong></b-form-radio>
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Residencial"><strong>Residencial</strong></b-form-radio>
          <b-form-radio v-model="aluno_novo.telefone.tipo" value="Comercial"><strong>Comercial</strong></b-form-radio>
        </b-form-group>
        
        <b-form-checkbox v-model="aluno_novo.mensalidadePaga">
          <strong>Mensalidade Paga</strong>
        </b-form-checkbox>


        <b-row class="mt-2">
          <b-col sm="2">
            <label for="textarea"><strong>Comentários:</strong></label>
          </b-col>
          <b-col sm="10">
            <b-form-textarea
              id="textarea"
              v-model="aluno_novo.comentarios"              
              placeholder="Informações adicionais"
            ></b-form-textarea>
          </b-col>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>

      </b-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "AdicionarAluno",
  data() {
    return {
      esconderFormulario: false,
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
    };
  },
  methods: {
    ...mapActions(["adicionarAluno"]),
    onSubmit () {
      this.adicionarAluno(this.aluno_novo);
    },
    mostrarFormulario() {
      this.esconderFormulario = this.esconderFormulario ? false : true;
    }
  }
}
</script>

<style>
legend {
  font-weight: bold;
}
</style>