<template>
  <div class="test001">
    <ul
      v-infinite-scroll="pushData"
      :infinite-scroll-disabled="count >= 2 ? '' : 'disabled'"
    >
      <li
        v-for="(item, index) in myData"
        :key="index"
      >{{ index + 1 }}: {{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test001',
  data () {
    return {
      myData: [],
      tmpData: [],
      count: 0
    }
  },
  mounted () {
    this.getMoreData()
    this.getMoreData()
  },
  methods: {
    getMoreData () {
      setTimeout(() => {
        this.count++
        const arr = []
        for (let i = 0; i < 20; i++) {
          arr.push(Math.floor(Math.random() * 1000))
        }
        console.log('get more data: ', arr)
        if (this.myData.length === 0) {
          this.myData.push(...arr)
        } else {
          this.tmpData.push(...arr)
        }
      }, 50)
    },
    pushData () {
      console.log('get data function')
      this.myData.push(...this.tmpData)
      this.tmpData = []
      this.getMoreData()
    }
  }
}
</script>

<style lang="scss" scoped>
.test001 {
  border: 1px solid #ff3040;
  height: 300px;
  overflow: auto;
  ul {
  }
}
</style>
