<template>
    <v-container>
        <div id="canvas"></div>
        <div>
            <!--<v-btn color="success" @mousedown="moveup()" @mouseup="stopMove()" @touchstart="moveup()">UP</v-btn><br>-->
            <!--<v-btn color="warning" @mousedown="moveleft()" @mouseup="stopMove()" @touchstart="moveleft()">LEFT</v-btn>-->
            <!--<v-btn color="warning" @mousedown="moveright()" @mouseup="stopMove()" @touchstart="moveright()">RIGHT</v-btn><br>-->
            <!--<v-btn color="success" @mousedown="movedown()" @mouseup="stopMove()" @touchstart="movedown()">DOWN</v-btn>-->
            <v-btn @mousedown="accelerate(-0.2)" @mouseup="accelerate(0.1)" @touchstart="accelerate(-0.2)" @touchend="accelerate(-0.1)">ACCELERATE</v-btn>
        </div>
        <h3>Manteneix apretat el botó ACCELERATE per accelerar el jugador cap a dalt</h3>
        <h4>ATENCIÓ! Rebotes a les parets superior i inferior</h4>
    </v-container>
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
    data () {
      return {
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
      restartGame () {
        this.myGameArea.clear()
        // this.startGame()
      },
      startGame () {
        this.myGameArea.start()
        this.myGamePiece = new this.Component(30, 30, 'red', 10, 120, this.myGameArea.context, this.myGameArea.canvas)
        this.myScore = new this.Component('30px', 'Consolas', 'black', 280, 40, this.myGameArea.context, this.myGameArea.canvas, 'text')
        this.myObstacle = new this.Component(10, 200, 'green', 300, 120, this.myGameArea.context, this.myGameArea.canvas)
        setInterval(this.updateGameArea, 20)
      },
      accelerate (n) {
        this.myGamePiece.gravity = n
      },
      Component (width, height, color, x, y, ctx, canvas, type) {
        this.type = type
        this.width = width
        this.height = height
        this.speedX = 0
        this.speedY = 0
        this.x = x
        this.y = y
        this.gravity = 0.05
        this.gravitySpeed = 0
        this.bounce = 0.6
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
          this.gravitySpeed += this.gravity
          this.x += this.speedX
          this.y += this.speedY + this.gravitySpeed
          this.hitBottom()
        }
        this.hitBottom = function () {
          var rockbottom = canvas.height - this.height
          if (this.y > rockbottom) {
            this.y = rockbottom
            // rebota a la part de baix del canvas
            this.gravitySpeed = -(this.gravitySpeed * this.bounce)
          }
          if (this.y < 1) {
            // rebota a la part de dalt del canvas
            this.gravitySpeed = -(this.gravitySpeed * this.bounce)
          }
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
          this.myObstacles.push(new this.Component(10, height, 'green', x, 0, this.myGameArea.context, this.myGameArea.canvas))
          this.myObstacles.push(new this.Component(10, x - height - gap, 'green', x, height + gap, this.myGameArea.context, this.myGameArea.canvas))
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