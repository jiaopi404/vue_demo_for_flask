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
import Test005 from './test005'
import Test006 from './test006'
import Test007 from './test007'
export default {
  name: 'others.vue',
  components: {
    Test004,
    Test005,
    Test006
  },
  data () {
    return {
      comp: Test004,
      compList: [
        { compName: 'test004', comp: Test004 },
        { compName: 'test005', comp: Test005 },
        { compName: 'test006', comp: Test006 },
        { compName: 'test007', comp: Test007 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.others {
  width: 960px;
  margin: 0 auto;
  text-align: left;
  padding: 15px 50px;
}
.others__btn-list {
  text-align: center;
  text-align: left;
  padding: 0 50px;
}
</style>
