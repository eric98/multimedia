<template>
        <canvas id="canvas" width="400" height="400" style="background-color:#333"></canvas>
</template>

<style>

</style>

<script>
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  var radius = canvas.height / 2
  ctx.translate(radius, radius)
  radius = radius * 0.90
  drawClock()

  function drawClock () {
    ctx.arc(0, 0, radius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
  }
  
  export default {
    name: 'name',
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