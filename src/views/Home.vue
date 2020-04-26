<template>
  <div class="home">
    <div>sdklfjsdlfkajsfjksdla {{ configComputed }}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      config: [
        { title: '', key: '', initValue: '', formatter: this.dateFormatter }
      ]
    }
  },
  computed: {
    configComputed () {
      return this.config[0].formatter()
    }
  },
  methods: {
    dateFormatter () {
      return this.initValue + '__ formatter'
    }
  }
}
</script>
