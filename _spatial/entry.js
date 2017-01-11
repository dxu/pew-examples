
document.addEventListener('DOMContentLoaded', function(){

const TILESIZE = 100

const canvas = document.getElementById('canvas')
// You can use either `new PIXI.WebGLRenderer`, `new PIXI.CanvasRenderer`, or `PIXI.autoDetectRenderer`
// which will try to choose the best renderer for the environment you are in.
var renderer = new PIXI.WebGLRenderer(window.innerWidth, window.innerHeight, {
  view: canvas
});

// Declare a global variable for our sprite so that the animate function can access it.
var zelda = null;
renderer.backgroundColor = 0xFFFFFF;

canvas.focus()

// You need to create a root container that will hold the scene you want to draw.
var stage = new PIXI.Container()

let game

// let hearts = []
// let a

// load the texture we need
PIXI.loader.add('zelda', './assets/img/zelda.gif')
  .add('heart', './assets/img/heart.png')
  .load(function (loader, resources) {
    // a = new PIXI.Container()
    // for (var i=0; i<1000; i++) {
    //   let sprite = new PIXI.Sprite(resources.zelda.texture)

    //   sprite.position.set(Math.random() * renderer.view.width, Math.random() * renderer.view.height);
    //   hearts.push(sprite)
    //   a.addChild(sprite)
    // }

    game = new Pew.Pool(renderer, {
      stage: new PIXI.Container(),
      showGrid: true
    })

    game.registerEventHandler('click', function(evt) {
      if (this !== document.activeElement) {
        canvas.focus()
      }
    })

    game.createGob({
      position: new Pew.V2(450, 450),
      mass: 1,
      bounce: 1,
      friction: 0,
      width: 20,
      height: 20,
      velocity: new Pew.V2(0, 0),
      acceleration: new Pew.V2(0, 0),
      // angle: 20,
      debug: true,
      data: {
        sprite: new PIXI.Sprite(resources.heart.texture)
      }
    }, Pill)

    game.createGob({
      position: new Pew.V2(460, 450),
      mass: 1,
      bounce: 1,
      friction: 0,
      width: 20,
      height: 20,
      velocity: new Pew.V2(0, 0),
      acceleration: new Pew.V2(0, 0),
      // angularVelocity: 20,
      debug: true,
      data: {
        sprite: new PIXI.Sprite(resources.heart.texture)
      }
    }, Pill)

    animate();
});

var items = []


function animate() {
  game.updateCanvas()
  requestAnimationFrame(animate);
}
});
