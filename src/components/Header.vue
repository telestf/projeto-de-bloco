<template>
  <div class="header">

    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item to='/'>Home</b-nav-item>
        <b-nav-item to=professores>Professores</b-nav-item>
        <b-nav-item to=alunos>Alunos</b-nav-item>
        <b-nav-item to=nucleos>Núcleos</b-nav-item>        

      </b-navbar-nav>

    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
