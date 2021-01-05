<template>
  <div class="test006">
    <h3>this is test007</h3>
  </div>
</template>

<script>
export default {
  name: 'test007',
  components: {
  },
  data () {
    return {
      post: '这是个post'
    }
  },
  mounted () {
    this.$api.getGoods('1346289310990598144').then(res => {
      console.log('res is: ', res)
      debugger
    })
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
