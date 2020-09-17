<template>
  <div class="test-input">
    <label class="test-input__label">
      <div>俺就是个 label</div>
      <input
        type="text"
        v-bind="$attrs"
        :value="post"
        v-on="inputListeners"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: 'test-input',
  model: {
    prop: 'post',
    event: 'custom-change'
  },
  props: {
    post: String
  },
  computed: {
    inputListeners () {
      return Object.assign(
        {},
        this.$listeners,
        {
          input: this.handleInput
        }
      )
    }
  },
  methods: {
    /**
     * input 事件处理程序
     * @param e
     */
    handleInput (e) {
      this.$emit('custom-change', e.target.value)
    }
  }
}
</script>

<style scoped>
</style>
