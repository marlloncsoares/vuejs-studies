<template>
  <div>
    <h4>LifeCycle hooks</h4>
    <p>{{ textElement }}</p>
  </div>
</template>

<script>
export default {
  name: 'LifeCycleHooks',
  data () {
    return {
      textElement: ''
    }
  },
  beforeCreate () {
    console.log('Antes de criar elemento')
    this.textElement = 'Antes de criar elemento'
  },
  mounted () {
    console.log('Elemento montado.')
    this.textElement = 'Elemento montado.'
  },
  created () {
    console.log('Elemento criado')
    this.textElement = 'Elemento criado'
  }
}
</script>
