<template>
  <div class="test006">
    <h3>this is test006</h3>
    <test-input
      v-model="post"
      placeholder="这是父组件传的东西"
      @change="handleChange"
    ></test-input>
    <br />
    <div class="t__post-box">
      <h5 class="t__post-box-header">
        这是头
      </h5>
      <div class="t__post-box-content">
        {{ post }}
      </div>
    </div>
  </div>
</template>

<script>
import TestInput from '../components/test-input'
export default {
  name: 'test006',
  components: {
    TestInput
  },
  data () {
    return {
      post: '这是个post'
    }
  },
  methods: {
    handleChange () {
      this.$message({
        type: 'danger',
        message: '小东西 change 了'
      })
    }
  }
}
</script>

<style scoped>

</style>
