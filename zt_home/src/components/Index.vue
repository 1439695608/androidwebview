<template>
    <div>
      <ul>
        <li @click="gotoWirte">
          写入
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Index',
  methods: {
    gotoWirte () {
      this.$router.push('/wirte')
    }
  }
}
</script>

<style scoped>

</style>
