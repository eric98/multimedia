<template>
    <div id="content">
        <canvas id="example" height=450 width=300></canvas>
    </div>
</template>

<style media="screen">canvas{border:1px solid #ccc}</style>

<script>
  export default {
    name: 'name',
    data () {
      return {
        // canvas: null,
        // ctxt: null
      }
    },
    methods: {
      CanvasDrawr (options) {
        var canvas = document.getElementById(options.id)
        var ctxt = canvas.getContext('2d')
        canvas.style.width = '100%'
        canvas.width = canvas.offsetWidth
        canvas.style.width = ''
        ctxt.lineWidth = options.size || Math.ceil(Math.random() * 35)
        ctxt.lineCap = options.lineCap || 'round'
        ctxt.pX = undefined
        ctxt.pY = undefined
        // var lines = []
        // lines = null
        // var offset = $(canvas).offset()
        // offset = this.canvas.offset()
        var self = {
          init: function () {
            canvas.addEventListener('touchstart', self.preDraw, false)
            canvas.addEventListener('touchmove', self.draw, false)
          },
          preDraw: function (event) {
            console.log('preDraw')
            // $.each(event.touches, function (i, touch) {
            //   var id = touch.identifier, colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'orangered'], mycolor = colors[Math.floor(Math.random() * colors.length)]
            //   lines[id] = {x: this.pageX - offset.left, y: this.pageY - offset.top, color: mycolor}
            // })
            // event.preventDefault()
          },
          draw: function (event) {
            console.log('draw')
            // var e = event, hmm = {}
            // $.each(event.touches, function (i, touch) {
            //  var id = touch.identifier, moveX = this.pageX - offset.left - lines[id].x, moveY = this.pageY - offset.top - lines[id].y
            //  var ret = self.move(id, moveX, moveY)
            //  lines[id].x = ret.x
            //  lines[id].y = ret.y
          },
          move (i, changeX, changeY) {
            // ctxt.strokeStyle = lines[i].color
            // ctxt.beginPath()
            // ctxt.moveTo(lines[i].x, lines[i].y)
            // ctxt.lineTo(lines[i].x + changeX, lines[i].y + changeY)
            // ctxt.stroke()
            // ctxt.closePath()
            // return {x: lines[i].x + changeX, y: lines[i].y + changeY}
          }
          // event.preventDefault()
        }
        return self.init()
      }
    },
    mounted () {
      // this.CanvasDrawr()
      this.CanvasDrawr({id: 'example', size: 15})
    }
  }
</script>