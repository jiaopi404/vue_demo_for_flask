<template>
  <div class="test003">
    <h1>测试 v-model 动态属性</h1>
    <input type="text" v-model="addForm[0]">
    <div>输入的是: {{ addForm[0] }}</div>
    <br>
    <!-- 方式 1 v-bind 绑定动态属性, 事件监听 -->
    <!-- <input
      v-for="item in 2"
      type="text"
      :key="item"
      :value="addForm[item]"
      @change="handleChange(item, $event)"
    /> -->
    <br>
    <input
      v-for="(item, key) in addForm2.type"
      type="text"
      :key="key"
      v-model="addForm2.type[key]"
    />
    <br>
    <div>
      addForm is: {{ result }}
    </div>
    <br>
    <button @click="handleClick">get addForm</button>
    <br>
    <model-test v-model="modelTest" @input="handleInput"></model-test>
    <div>{{ modelTest }}</div>
    <el-table-column
      :label="item.day"
      :prop="item.day"
      width="180">
      <template slot-scope="{ row }">
        <el-select v-model="row[item.day]">
          <el-option></el-option>
        </el-select>
      </template>
    </el-table-column>
  </div>
</template>

<script>
import ModelTest from '../components/model-test'
export default {
  components: {
    ModelTest
  },
  data () {
    return {
      addForm: {
        0: '',
        1: '',
        2: ''
      },
      addForm2: {
        type: {
          1: '',
          2: '',
          3: '',
          4: '',
          5: ''
        }
      },
      modelTest: '',
      tableData: [
        {
          id: 1,
          name: '张三',
          1: '早班', // 1 代表日期
          2: '晚班', // 2 代表日期
          3: '空'
        },
        {
          id: 2,
          name: '李四',
          1: '早班', // 1 代表日期
          2: '晚班', // 2 代表日期
          3: '空'
        }
      ]
    }
  },
  computed: {
    result () {
      const _result = []
      for (const [key, value] of Object.entries(this.addForm)) {
        _result.push(`${key}: ${value}`)
      }
      return _result.join(',')
    }
  },
  methods: {
    // 方式 1 v-bind 绑定动态属性, 事件监听
    handleChange (item, $event) {
      this.addForm[item] = $event.target.value
      console.log('this.addForm is: ', this.addForm)
    },
    handleClick () {
      console.log('this.addForm2 is: ', this.addForm2)
    },
    handleInput (e) {
      console.log('input is: ', e)
    }
  }
}
</script>
