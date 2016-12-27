
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

window.spatialHash = new Pew.SpatialHash(TILESIZE)
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

    // game.createGob({
    //   position: new Pew.V2(140, 250),
    //   width: 150,
    //   height: 160,
    //   maxVelocity: new Pew.V2(500, 500),
    //   // acceleration: new Pew.V2(10, 10),
    //   data: {
    //     sprite: new PIXI.Sprite(resources.zelda.texture)
    //   },
    //   debug: true
    // }, Character)

      // game.createGob({
      //   position: new Pew.V2(100, 100),
      //   width: 30,
      //   height: 30,
      //   velocity: new Pew.V2(50, 50),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

      // game.createGob({
      //   position: new Pew.V2(30, 30),
      //   width: 30,
      //   height: 30,
      //   velocity: new Pew.V2(0, 0),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

      // game.createGob({
      //   position: new Pew.V2(40, 30),
      //   width: 30,
      //   height: 30,
      //   velocity: new Pew.V2(0, 0),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

      game.createGob({
        position: new Pew.V2(400, 100),
        mass: 1,
        bounce: 1,
        friction: 0,
        width: 20,
        height: 20,
        velocity: new Pew.V2(100, 100),
        acceleration: new Pew.V2(0, 0),
        debug: true,
        data: {
          sprite: new PIXI.Sprite(resources.heart.texture)
        }
      }, Pill)

      game.createGob({
        position: new Pew.V2(445.78, 132.15),
        mass: 1,
        bounce: 1,
        friction: 0,
        width: 20,
        height: 20,
        velocity: new Pew.V2(0, 0),
        acceleration: new Pew.V2(0, 0),
        debug: true,
        data: {
          sprite: new PIXI.Sprite(resources.heart.texture)
        }
      }, Pill)

      // game.createGob({
      //   position: new Pew.V2(400, 350),
      //   width: 20,
      //   height: 20,
      //   velocity: new Pew.V2(250, 74),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

      // game.createGob({
      //   position: new Pew.V2(500, 400),
      //   width: 20,
      //   height: 20,
      //   velocity: new Pew.V2(20, -100),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)


      // game.createGob({
      //   position: new Pew.V2(450, 450),
      //   width: 20,
      //   height: 20,
      //   velocity: new Pew.V2(6.201277, 9.0945),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

      // game.createGob({
      //   position: new Pew.V2(500, 500),
      //   width: 20,
      //   height: 20,
      //   velocity: new Pew.V2(-2.292953, -3.09452),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)



//       game.createGob({
//         position: new Pew.V2(334.254408, 505.4280523),
//         width: 20,
//         height: 20,
//         velocity: new Pew.V2(6.201277, 9.0945),
//         acceleration: new Pew.V2(0, 0),
//         debug: true,
//         data: {
//           sprite: new PIXI.Sprite(resources.heart.texture)
//         }
//       }, Pill)

//       game.createGob({
//         position: new Pew.V2(354.354, 489.388),
//         width: 20,
//         height: 20,
//         velocity: new Pew.V2(-2.292953, -3.09452),
//         acceleration: new Pew.V2(0, 0),
//         debug: true,
//         data: {
//           sprite: new PIXI.Sprite(resources.heart.texture)
//         }
//       }, Pill)

      // game.createGob({
      //   position: new Pew.V2(290, 290),
      //   width: 30,
      //   height: 30,
      //   velocity: new Pew.V2(-1500, 0),
      //   acceleration: new Pew.V2(0, 0),
      //   debug: true,
      //   data: {
      //     sprite: new PIXI.Sprite(resources.heart.texture)
      //   }
      // }, Pill)

    for (var i=0; i<100; i++) {
      const x = Math.random() * (game.getWidth() - 45) + 20
      const y = Math.random() * (game.getHeight() - 45) + 20
      game.createGob({
        position: new Pew.V2(x, y),
        width: 30,
        height: 30,
        velocity: new Pew.V2(Math.random() * 500, Math.random() * 500),
        acceleration: new Pew.V2(0, 0),
        debug: true,
        data: {
          sprite: new PIXI.Sprite(resources.heart.texture)
        }
      }, Pill)
    }

    // game.createGob({
    //   position: new Pew.V2(100, 100),
    //   width: 50,
    //   height: 150,
    //   maxVelocity: new Pew.V2(5, 8),
    //   data: {
    //     sprite: new PIXI.Sprite(resources.zelda.texture)
    //   }
    // }, Character)

    // for (var i=0; i<300; i++) {
    //   game.createGob({
    //     debug: true,
    //     velocity: new Pew.V2(Math.random() * 1000, Math.random() * 1000),
    //   position: new Pew.V2(Math.random() * game.getWidth(), Math.random() * game.getHeight()),
    //     data: {
    //       sprite: new PIXI.Sprite(resources.heart.texture)
    //     }
    //   }, Pill)
    // }

    animate();

});

var items = []


function animate() {
  game.updateCanvas()
  // renderer.render(a);

  // hearts.map(function(heart) {
  //   heart.position.set(heart.position.x + 1,heart.position.y + 1);

  // })

  requestAnimationFrame(animate);
}



// window.a = new Pew.V2(0, 0)
// a.print()
// Pew.V2.sum(a, Pew.V2.left).print()


});