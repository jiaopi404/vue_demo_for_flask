<template>
  <div class="test005">
    <div>content: {{ root }}</div>
    <div>
      <el-button type="text" @click="handleClick('set')">set</el-button>
      <el-button type="text" @click="handleClick('get')">get</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test005.vue',
  data () {
    return {
      formData: {
        name: ''
      },
      list: [
        {
          id: 'root',
          name: 'root',
          children: []
        }
      ]
    }
  },
  computed: {
    root: {
      get () {
        return this.list[0]
      },
      set (value) {
        console.log('computed setter, value is: ', value)
        this.list[0] = value
      }
    }
  },
  methods: {
    handleClick (flag) {
      if (flag === 'get') {
        console.log('root is: ', this.root)
        console.log('list: ', this.list)
        return
      }
      this.root.name = 'ssss'
      // this.root = { id: 'not-root' }
    }
  }
}
</script>

<style scoped>

</style>
