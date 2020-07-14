<template>
  <div class="model-test">
    <label for="aaa">嗲我</label>
    <input type="text" :value="value" @change="$emit('input', $event.target.value)" v-on="$listeners">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  }
}
</script>
