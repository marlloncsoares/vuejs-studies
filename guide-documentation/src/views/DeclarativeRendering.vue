<template>
  <main>
      Counter: {{ counter }}
  </main>
</template>

<script>

export default {
  name: 'DeclarativeRendering',
  data () {
    return {
      counter: 0
    }
  },
  mounted () {
    setInterval(() => {
      this.counter++
    }, 1000)
  }
}
</script>

<style>
main {
  /* background-color: tomato; */
  max-width: 960px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
