<template>
  <div class="header">

    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-brand to="/">Projeto de Bloco</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to=/videos>Vídeos</b-nav-item>
          <b-nav-item to=/alunos>Alunos</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item to=/login right>Login</b-nav-item>
        </b-navbar-nav>      

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
