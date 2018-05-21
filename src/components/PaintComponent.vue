<template>
    <v-container>
    <div id="content">
        <canvas id="example" height=450 width=300></canvas>
    </div>
    </v-container>
</template>

<style media="screen">canvas{border:1px solid #ccc}</style>

<script>
  import $ from 'jquery'
  export default {
    name: 'name',
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
        var lines = []
        var offset = $(canvas).offset()
        var self = {
          init: function () {
            canvas.addEventListener('touchstart', self.preDraw, false)
            canvas.addEventListener('touchmove', self.draw, false)
          },
          preDraw: function (event) {
            $.each(event.touches, function (i, touch) {
              var id = touch.identifier
              var colors = ['red', 'green', 'yellow', 'blue', 'magenta', 'orangered']
              var mycolor = colors[Math.floor(Math.random() * colors.length)]
              lines[id] = {x: this.pageX - offset.left, y: this.pageY - offset.top, color: mycolor}
            })
            event.preventDefault()
          },
          draw: function (event) {
            $.each(event.touches, function (i, touch) {
              var id = touch.identifier
              var moveX = this.pageX - offset.left - lines[id].x
              var moveY = this.pageY - offset.top - lines[id].y
              var ret = self.move(id, moveX, moveY)
              lines[id].x = ret.x
              lines[id].y = ret.y
            })
            event.preventDefault()
          },
          move (i, changeX, changeY) {
            ctxt.strokeStyle = lines[i].color
            ctxt.beginPath()
            ctxt.moveTo(lines[i].x, lines[i].y)
            ctxt.lineTo(lines[i].x + changeX, lines[i].y + changeY)
            ctxt.stroke()
            ctxt.closePath()
            return {x: lines[i].x + changeX, y: lines[i].y + changeY}
          }
        }
        return self.init()
      }
    },
    mounted () {
      this.CanvasDrawr({id: 'example', size: 15})
    }
  }
</script>