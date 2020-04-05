<template>
  <div class="videos">
    <h1>Vídeos</h1>

    <h2> Assista aqui a aula ao vivo</h2>

    <div class="embed-responsive embed-responsive-16by9">
      <iframe
          src="https://player.twitch.tv/?channel=twitch&parent=streamernews.example.com"
          class="embed-responsive-item"
          frameborder="0"
          scrolling="no"
          allowfullscreen="true">
      </iframe>    
    </div>
  </div>
</template>

<script>
export default {
  name: 'Videos'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
