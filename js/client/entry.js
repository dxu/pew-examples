import * as util from './utilities'

util.ready(function(){

const TILESIZE = 100

const canvas = document.getElementById('canvas')
// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(800, 600, {
  view: canvas
});

// Declare a global variable for our sprite so that the animate function can access it.
var zelda = null;

renderer.backgroundColor = 0xFFFFFF;

canvas.focus()

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container()


window.spatialHash = new Pew.SpatialHash(TILESIZE)

// load the texture we need
PIXI.loader.add('zelda', './assets/img/zelda.gif')
  .add('heart', './assets/img/heart.png')
  .load(function (loader, resources) {

    var game = new Pew.Game(renderer)
    game.registerEventHandler('click', function(evt) {
      if (this !== document.activeElement) {
        canvas.focus()
      }
    })
    game.registerEventHandler('keyup', function(evt) {
      switch (evt.keyCode)  {
        case util.keys.W:
        case util.keys.A:
        case util.keys.S:
        case util.keys.D:
          zelda.velocity = {
            x: 0,
            y: 0
          }
          break;
        default:
          break
      }
    })

     game.registerEventHandler('keydown', function(evt) {

        switch (evt.keyCode)  {
          case util.keys.W:
            zelda.velocity = Pew.constants.VELOCITY.N
            break
          case util.keys.A:
            zelda.velocity = Pew.constants.VELOCITY.W
            break
          case util.keys.S:
            zelda.velocity = Pew.constants.VELOCITY.S
            break
          case util.keys.D:
            zelda.velocity = Pew.constants.VELOCITY.E
            break
          default:
            break
        }

      })



    // create a pew gob
    zelda = new Pew.Gob({
      position: {
        x: 100,
        y: 100
      },
      speed: {
        x: 5,
        y: 8
      },
      size: {
        width: 50,
        height: 150
      },
      data: {
        sprite: new PIXI.Sprite(resources.zelda.texture)
      }
    })

    // Setup the position and scale of the zelda
    zelda.data.sprite.position.set(zelda.position.x, zelda.position.y);

    zelda.data.sprite.anchor.set(0.5, 0.5);

    zelda.data.sprite.scale.set(zelda.size.width / zelda.data.sprite.width, zelda.size.height / zelda.data.sprite.height);

    // Add the zelda to the scene we are building.
    stage.addChild(zelda.data.sprite);

    // update the spatialhash
    spatialHash.add(zelda)

    // items.push(zelda)

    for (var i=0; i<1; i++) {

      let heart = new Pew.Gob({
        position: {
          x: Math.random() * 800,
          y: Math.random() * 600
        },
        speed: {
          x: 5,
          y: 8
        },
        size: {
          width: 50,
          height: 50
        },
        data: {
          sprite: new PIXI.Sprite(resources.heart.texture)
        }
      })

      heart.data.sprite.anchor.set(0.5, 0.5);

      heart.data.sprite.scale.x = heart.size.width / heart.data.sprite.width;
      heart.data.sprite.scale.y = heart.size.height / heart.data.sprite.height;

      heart.data.sprite.position.x = heart.position.x;
      heart.data.sprite.position.y = heart.position.y;
      stage.addChild(heart.data.sprite);
      spatialHash.add(heart)
      // items.push(heart)
    }
    drawGrid(TILESIZE, stage)

    // kick off the animation loop (defined below)
    animate();

});

var items = []

// draws a grid of given tilesize
function drawGrid(tilesize, stage) {
  let xSize = renderer.view.width
  let ySize = renderer.view.height

  console.log(xSize, ySize)
  var graphics = new PIXI.Graphics()
  graphics.moveTo(0, 0)
  graphics.lineStyle(1, 0x336699, 1)

  for (let i=0; i<=xSize; i+=tilesize) {
    graphics.moveTo(i, 0)
    graphics.lineTo(i, ySize)
  }
  for (let i=0; i<ySize; i+=tilesize) {
    graphics.moveTo(0, i)
    graphics.lineTo(xSize, i)
  }

  stage.addChild(graphics)
}

function animate() {
  // start the timer for the next animation loop
  requestAnimationFrame(animate);

  // each frame we spin the zelda around a bit
  // zelda.rotation += 0.01;

  // we subtract the y position to flip the axis

  if (zelda.velocity.y || zelda.velocity.x) {
    zelda.position.y -= zelda.velocity.y * zelda.speed.y;
    zelda.position.x += zelda.velocity.x * zelda.speed.x;

    zelda.data.sprite.position.y = zelda.position.y;
    zelda.data.sprite.position.x = zelda.position.x;

    spatialHash.add(zelda)
  }



  // zelda.position.y += 5
  //
  //



  // for (let i=0; i<items.length; i++) {
  //   for (let j=1; j<items.length; j++) {
  //     if (defaultTestCollide(items[i], items[j])) {
  //       console.log('hi')

  //     }

  //   }
  // }



  // this is the main render call that makes pixi draw your container and its children.
  renderer.render(stage);
}

})
