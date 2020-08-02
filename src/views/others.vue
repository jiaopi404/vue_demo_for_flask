<template>
  <div class="others">
    <h4>others test</h4>
    <p class="others__btn-list">
      <el-button
        v-for="item in compList"
        :key="item.compName"
        size="mini"
        type="text"
        @click="comp = item.comp"
      >
        {{ item.compName }}
      </el-button>
    </p>
    <br>
    <component
      :is="comp"
    ></component>
  </div>
</template>

<script>
import Test004 from './test004'
export default {
  name: 'others.vue',
  components: {
    Test004
  },
  data () {
    return {
      comp: Test004,
      compList: [
        { compName: 'test004', comp: Test004 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.others {
  width: 960px;
  margin: 0 auto;
}
.others__btn-list {
  text-align: center;
}
</style>
