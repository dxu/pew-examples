import * as util from './utilities'
import Character from './character'
import Pill from './pill'

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

let game

window.spatialHash = new Pew.SpatialHash(TILESIZE)

// load the texture we need
PIXI.loader.add('zelda', './assets/img/zelda.gif')
  .add('heart', './assets/img/heart.png')
  .load(function (loader, resources) {

    game = new Pew.Game(renderer, {
      stage: new PIXI.Container()
    })

    game.registerEventHandler('click', function(evt) {
      if (this !== document.activeElement) {
        canvas.focus()
      }
    })

    game.createGob({
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
    }, Character)

    // for (var i=0; i<1; i++) {
      game.createGob({
        position: {
          x: 200,
          y: 200
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
      }, Pill)
    // }
      game.createGob({
        position: {
          x: 200,
          y: 100
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
      }, Pill)

    animate();

});

var items = []


function animate() {

  game.updateCanvas()

  requestAnimationFrame(animate);
}

})
