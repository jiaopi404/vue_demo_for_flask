<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>this is content</p>
    <button @click="handleClick">click me</button>
    <button @click="loginTest">click me to login</button>
    <button @click="handleGetPerson">click to get person</button>
    <table>
      <tr>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>gender</th>
      </tr>
      <tr
        v-for="item in usrList"
        :key="item.id"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.gender | getGender }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  filters: {
    getGender (value) {
      const tmp = ['未知', 'male', 'female']
      return tmp[value]
    }
  },
  data () {
    return {
      a: 1111,
      usrList: []
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
    },
    handleGetPerson () {
      this.$api.getAllUsr().then(res => {
        if (res.code === 200) {
          this.usrList = res.data
        } else {
          alert('有病！')
        }
      }).catch(err => {
        console.error(err)
      })
    }
  }
}
</script>
