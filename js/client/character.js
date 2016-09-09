import * as util from './utilities'
import Pill from './pill'
// extends basic gob
export default class Character extends Pew.Gob {
  constructor(...args) {
    super(...args)
    let that = this

    // events hash from event name to function
    this.events = {
      keydown: function(evt) {
        switch (evt.keyCode)  {
          case util.keys.W:
            that.velocity = Pew.constants.VELOCITY.N
            break
          case util.keys.A:
            that.velocity = Pew.constants.VELOCITY.W
            break
          case util.keys.S:
            that.velocity = Pew.constants.VELOCITY.S
            break
          case util.keys.D:
            that.velocity = Pew.constants.VELOCITY.E
            break
          default:
            break
        }
      },
      keyup: function(evt) {
        switch (evt.keyCode)  {
          case util.keys.W:
          case util.keys.A:
          case util.keys.S:
          case util.keys.D:
            that.velocity = {
              x: 0,
              y: 0
            }
            break;
          default:
            break
        }
      }
    }
  }

  onCollide(gob) {
    if (gob instanceof Pill) {
      gob.destroy()
    }
  }

  update() {
    if (this.velocity.y || this.velocity.x) {
      this.position.y -= this.velocity.y * this.speed.y;
      this.position.x += this.velocity.x * this.speed.x;

      this.data.sprite.position.y = this.position.y;
      this.data.sprite.position.x = this.position.x;
    }
  }

}
