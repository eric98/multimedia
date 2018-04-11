<template>
    <div>
        <v-btn @mousedown="moveup()" @mouseup="stopMove()" @touchstart="moveup()">UP</v-btn>
        <v-btn @mousedown="movedown()" @mouseup="stopMove()" @touchstart="movedown()">DOWN</v-btn>
        <v-btn @mousedown="moveleft()" @mouseup="stopMove()" @touchstart="moveleft()">LEFT</v-btn>
        <v-btn @mousedown="moveright()" @mouseup="stopMove()" @touchstart="moveright()">RIGHT</v-btn>
    </div>
</template>

<style>
    canvas {
        border:1px solid #d3d3d3;
        background-color: #f1f1f1;
        display: block;
        margin: 0 auto;
        vertical-align: middle;
    }
</style>

<script>
  export default {
    name: 'name',
    data () {
      return {
        data: 'example',
        myGamePiece: null,
        myGameArea: {
          canvas: document.createElement('canvas'),
          start: function () {
            this.canvas.width = 480
            this.canvas.height = 270
            this.context = this.canvas.getContext('2d')
            document.body.insertBefore(this.canvas, document.body.childNodes[0])
          },
          clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
          }
        }
      }
    },
    methods: {
      startGame () {
        this.myGameArea.start()
        this.myGamePiece = new this.Component(30, 30, 'red', 10, 120, this.myGameArea.context)
        setInterval(this.updateGameArea, 20)
      },
      Component (width, height, color, x, y, ctx) {
        this.width = width
        this.height = height
        this.speedX = 0
        this.speedY = 0
        this.x = x
        this.y = y
        this.update = function () {
          ctx.fillStyle = color
          ctx.fillRect(this.x, this.y, this.width, this.height)
        }
        this.newPos = function () {
          this.x += this.speedX
          this.y += this.speedY
        }
      },
      updateGameArea () {
        this.myGameArea.clear()
        this.myGamePiece.newPos()
        this.myGamePiece.update()
      },
      moveup () {
        this.myGamePiece.speedY -= 1
      },
      movedown () {
        this.myGamePiece.speedY += 1
      },
      moveleft () {
        this.myGamePiece.speedX -= 1
      },
      moveright () {
        this.myGamePiece.speedX += 1
      },
      stopMove () {
        this.myGamePiece.speedX = 0
        this.myGamePiece.speedY = 0
      }
    },
    mounted () {
      this.startGame()
    }
  }
</script>