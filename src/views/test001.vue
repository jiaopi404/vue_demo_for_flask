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
      myData: [], // 渲染的数据
      tmpData: [], // 暂存下一页的数据
      count: 0 // 请求的次数, < 2 时禁用无限滚动, 防止无限滚动函数绑定时即执行函数
    }
  },
  mounted () {
    // 开局执行两次向借口请求数据, page = 1 和 page = 2
    // 第一次直接渲染, 第二次存于内存中
    this.getMoreData()
    this.getMoreData()
  },
  methods: {
    getMoreData () {
      // 模拟请求借口
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
      }, 1000)
    },
    pushData () {
      console.log('get data function')
      // 1. 内存中数据加入到真实数据中
      // 2. 置空内存数据
      // 3. 请求更多的数据
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
