<template>
  <div id="app">
    <keep-alive include="MoviesList"><router-view /></keep-alive> 
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>
