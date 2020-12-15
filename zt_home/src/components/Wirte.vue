<template>
    <div>
      <textarea>
      </textarea>
      <input @change="selectFile" type="file" value="选择照片">
    </div>
</template>

<script>
export default {
  name: 'Wirte',
  mounted () {
    window.getPhoneImg = function (data) {
      console.log('==================================')
      console.log(data)
    }
  },
  methods: {
    selectFile (e) {
      // alert(e.target.files[0])
      console.log(e.target.files[0])
      console.log(e.target.files[0].name)
    }
  }
}
</script>

<style scoped>

</style>
