<template>
    <div>
      <input type="text" v-model="checkStr">
      <label @click="gotoApp">确定</label>
    </div>
</template>

<script>
const PASS = '1026'
export default {
  name: 'Check',
  data () {
    return {
      check_str: ''
    }
  },
  computed: {
    checkStr: {
      get () {
        return this.check_str
      },
      set (str) {
        this.check_str = str
      }
    }
  },
  methods: {
    gotoApp () {
      if (this.check_str === PASS) {
        this.$router.push('/index')
      }
    }
  }
}
</script>

<style scoped>

</style>
