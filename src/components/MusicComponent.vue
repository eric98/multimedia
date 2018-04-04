<template>
    <div>
        <v-btn color="success">Do</v-btn>
        <v-btn color="error">Re</v-btn>
        <v-btn color="warning">Mi</v-btn>
        <v-btn color="info">Fa</v-btn>
        <v-btn color="success">Sol</v-btn>
        <v-btn color="error">La</v-btn>
        <v-btn color="warning">Si</v-btn>
        <v-btn color="info">Do'</v-btn>
    </div>
</template>

<style scoped>
 div{
     text-align: center;
     }
</style>

<script>
  export default {
    name: 'Music',
    data () {
      return {
        data: 'example'
      }
    },
    mounted () {
      console.log('Mounted ok')
    }
  }
</script>