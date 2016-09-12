import * as util from './utilities'
import Pill from './pill'
// extends basic gob
export default class Character extends Pew.Gob {
  constructor(...args) {
    super(...args)
    let that = this






    // events hash from event name to function. You can assume that "this" will always be this gob.
    this.events = {
      onKeyDown: {
        [util.keys.W]: function(evt) {
          that.velocity.y = 1
        },
        [util.keys.A]: function(evt) {
          that.velocity.x = -1
        },
        [util.keys.S]: function(evt) {
          that.velocity.y = -1
        },
        [util.keys.D]: function(evt) {
          that.velocity.x = 1
        }
      },
      onKeyHold: {
        [util.keys.F]: function() {
          console.log('holding f down')
        }
      },
      onKeyUp: {
        [util.keys.W]: function(evt) {
          that.velocity.y = 0
        },
        [util.keys.A]: function(evt) {
          that.velocity.x = 0
        },
        [util.keys.S]: function(evt) {
          that.velocity.y = 0
        },
        [util.keys.D]: function(evt) {
          that.velocity.x = 0
        }
      }
    }
    // this.events = {
    //   onKeyDown: function(evt) {
    //     switch (evt.keyCode)  {
    //       case util.keys.W:
    //         that.velocity = Pew.constants.VELOCITY.N
    //         break
    //       case util.keys.A:
    //         that.velocity = Pew.constants.VELOCITY.W
    //         break
    //       case util.keys.S:
    //         that.velocity = Pew.constants.VELOCITY.S
    //         break
    //       case util.keys.D:
    //         that.velocity = Pew.constants.VELOCITY.E
    //         break
    //       default:
    //         break
    //     }
    //   },
    //   onKeyUp: function(evt) {
    //     switch (evt.keyCode)  {
    //       case util.keys.W:
    //       case util.keys.A:
    //       case util.keys.S:
    //       case util.keys.D:
    //         that.velocity = {
    //           x: 0,
    //           y: 0
    //         }
    //         break;
    //       default:
    //         break
    //     }
    //   }
    // }

  }

  onCollide(gob) {
    if (gob instanceof Pill) {
      gob.destroy()
    }
  }

  update() {
    if (this.game.isKeyPressed(Pew.CONST.KEYS.A)) {
      this.velocity.x = -1
    } else if (this.game.isKeyPressed(Pew.CONST.KEYS.D)) {
      this.velocity.x = 1
    } else {
      this.velocity.x = 0
    }

    if (this.game.isKeyPressed(Pew.CONST.KEYS.W)) {
      this.velocity.y = 1
    } else if (this.game.isKeyPressed(Pew.CONST.KEYS.S)) {
      this.velocity.y = -1
    } else {
      this.velocity.y = 0
    }


    if (this.velocity.y || this.velocity.x) {
      this.position.y -= this.velocity.y * this.speed.y;
      this.position.x += this.velocity.x * this.speed.x;

      this.data.sprite.position.y = this.position.y;
      this.data.sprite.position.x = this.position.x;
    }
  }

}
