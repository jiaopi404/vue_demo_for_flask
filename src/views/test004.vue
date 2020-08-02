<template>
  <div class="test004">
    <el-tree
      ref="elTree"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[2, 3]"
      :default-checked-keys="[5]"
      @check-change="handleElTreeChanged"
      :props="defaultProps">
    </el-tree>
    <el-button @click="getCheckedNodes">getCheckedNodes</el-button>
  </div>
</template>

<script>
export default {
  name: 'test004.vue',
  data () {
    return {
      data: [{
        id: 100,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }, {
        id: 200,
        label: '一级 4'
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    getCheckedNodes () {
      const leafOnly = true
      const result = this.$refs.elTree.getCheckedNodes(leafOnly)
      console.log('checked nodes are: ', result)
      console.log('elTree is: ', this.$refs.elTree.store.nodesMap)
    },
    handleElTreeChanged () {
      console.log('el tree changed: ', arguments)
    }
  }
}
</script>

<style scoped>

</style>
