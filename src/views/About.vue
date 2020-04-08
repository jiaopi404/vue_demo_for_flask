<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>this is content</p>
    <button @click="handleClick">click me</button>
    <button @click="loginTest">click me to login</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      a: 1111
    }
  },
  methods: {
    handleClick () {
      this.getIndexRes()
    },
    getIndexRes () {
      this.$api.getIndexRes().then(res => {
        console.log('res is: ', res)
      }).catch(err => {
        console.log(err)
      })
    },
    /**
     * login demo
     */
    loginTest () {
      this.$api.login('hahaha', 'sdfsfd').then(res => {
        console.log('res of login is: ', res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
