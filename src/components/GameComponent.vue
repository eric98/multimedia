<template>
    <div>
    <div id="canvas"></div>
        <div>
            <v-btn color="success" @mousedown="moveup()" @mouseup="stopMove()" @touchstart="moveup()">UP</v-btn><br>
            <v-btn color="warning" @mousedown="moveleft()" @mouseup="stopMove()" @touchstart="moveleft()">LEFT</v-btn>
            <v-btn color="warning" @mousedown="moveright()" @mouseup="stopMove()" @touchstart="moveright()">RIGHT</v-btn><br>
            <v-btn color="success" @mousedown="movedown()" @mouseup="stopMove()" @touchstart="movedown()">DOWN</v-btn>
        </div>
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
    div{
        text-align: center;
        vertical-align: middle;
        line-height: 90px;
    }
</style>

<script>
  export default {
    name: 'name',
    data () {
      return {
        data: 'example',
        myObstacle: null,
        myGamePiece: null,
        myObstacles: [],
        myScore: null,
        myGameArea: {
          canvas: document.createElement('canvas'),
          start: function () {
            this.canvas.width = 480
            this.canvas.height = 270
            this.context = this.canvas.getContext('2d')
            document.getElementById('canvas').appendChild(this.canvas)
            this.frameNo = 0
            this.interval = setInterval(this.updateGameArea, 20)
          },
          clear: function () {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
          },
          stop: function () {
            clearInterval(this.interval)
          }
        }
      }
    },
    methods: {
      everyinterval (n) {
        if ((this.myGameArea.frameNo / n) % 1 === 0) {
          return true
        }
        return false
      },
      startGame () {
        this.myGameArea.start()
        this.myGamePiece = new this.Component(30, 30, 'red', 10, 120, this.myGameArea.context)
        this.myScore = new this.Component('30px', 'Consolas', 'black', 280, 40, this.myGameArea.context, 'text')
        this.myObstacle = new this.Component(10, 200, 'green', 300, 120, this.myGameArea.context)
        setInterval(this.updateGameArea, 20)
      },
      Component (width, height, color, x, y, ctx, type) {
        this.type = type
        this.width = width
        this.height = height
        this.speedX = 0
        this.speedY = 0
        this.x = x
        this.y = y
        this.update = function () {
          if (this.type === 'text') {
            ctx.font = this.width + ' ' + this.height
            ctx.fillStyle = color
            ctx.fillText(this.text, this.x, this.y)
          } else {
            ctx.fillStyle = color
            ctx.fillRect(this.x, this.y, this.width, this.height)
          }
        }
        this.newPos = function () {
          this.x += this.speedX
          this.y += this.speedY
        }
        this.crashWith = function (otherobj) {
          var myleft = this.x
          var myright = this.x + (this.width)
          var mytop = this.y
          var mybottom = this.y + (this.height)
          var otherleft = otherobj.x
          var otherright = otherobj.x + (otherobj.width)
          var othertop = otherobj.y
          var otherbottom = otherobj.y + (otherobj.height)
          var crash = true
          if ((mybottom < othertop) ||
            (mytop > otherbottom) ||
            (myright < otherleft) ||
            (myleft > otherright)) {
            crash = false
          }
          return crash
        }
      },
      updateGameArea () {
        var x, height, gap, minHeight, maxHeight, minGap, maxGap
        for (var i = 0; i < this.myObstacles.length; i += 1) {
          if (this.myGamePiece.crashWith(this.myObstacles[i])) {
            this.myGameArea.stop()
            return
          }
        }
        this.myGameArea.clear()
        this.myGameArea.frameNo += 1
        if (this.myGameArea.frameNo === 1 || this.everyinterval(150)) {
          x = this.myGameArea.canvas.width
          minHeight = 20
          maxHeight = 200
          height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight)
          minGap = 50
          maxGap = 200
          gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)
          this.myObstacles.push(new this.Component(10, height, 'green', x, 0, this.myGameArea.context))
          this.myObstacles.push(new this.Component(10, x - height - gap, 'green', x, height + gap, this.myGameArea.context))
        }
        for (i = 0; i < this.myObstacles.length; i += 1) {
          this.myObstacles[i].x += -1
          this.myObstacles[i].update()
        }
        this.myScore.text = 'SCORE: ' + this.myGameArea.frameNo
        this.myScore.update()
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