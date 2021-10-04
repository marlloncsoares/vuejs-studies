<template>
  <main>
      <LifeCycleHooks />
  </main>
</template>

<script>
import LifeCycleHooks from './../components/LifeCycle'
export default {
  name: 'LifeCycle',
  components: {
    LifeCycleHooks
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
