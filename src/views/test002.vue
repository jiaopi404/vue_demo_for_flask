<template>
  <div class="test002">
    <el-button size="mini" @click="handleClick">就这个</el-button>
    <el-table
      :data="tableData"
    >
      <el-table-column
        v-for="(item, index) in tableConfig"
        :key="index"
        v-bind:prop="item.prop"
        :label="item.label"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: 'test002',
  data () {
    return {
      tableData: [],
      tableConfig: [
        { prop: 'id', label: '标识' },
        { prop: 'name', label: '姓名' },
        { prop: 'email', label: '邮箱' },
        { prop: 'gender', label: '性别' },
        { prop: 'address', label: '地址' }
      ]
    }
  },
  methods: {
    // handleClick () {
    //   console.log(11111)
    //   const passwordJiaMi = md5('110120119')
    //   console.log(passwordJiaMi)
    //   axios({
    //     methods: 'get',
    //     url: 'http://122.51.19.128:8089/api/usr/get-all'
    //   }).then(res => {
    //     this.tableData = res.data.data
    //     console.log(this.tableData)ß
    //   }).catch(err => {
    //     console.log(err)
    //   })
    // },
    async handleClick () {
      try {
        const passwordJiaMi = md5('110120119')
        console.log(passwordJiaMi)
        const res = await axios({
          methods: 'get',
          url: 'http://122.51.19.128:8089/api/usr/get-all'
        })
        // const res2 = await axios({})
        this.tableData = res.data.data
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.test002 {}
</style>
