
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

    game = new Pew.Pool(renderer, {
      stage: new PIXI.Container(),
      showGrid: true
    })

    game.createGob({
      position: new Pew.V2(440, 400),
      mass: 1,
      bounce: 1,
      friction: 0,
      width: 20,
      height: 20,
      velocity: new Pew.V2(30, 0),
      angularVelocity: 10,
      acceleration: new Pew.V2(0, 0),
      angle: 20,
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
