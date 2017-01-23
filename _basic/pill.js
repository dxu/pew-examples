// extends basic gob
class Pill extends Pew.Gob {
  constructor(game, opts) {
    opts.width = opts.width || 10
    opts.height = opts.height || 10
    super(game, opts)

    // this.maxVelocity =
    //   new Pew.Vector2(
    //     (Math.round(Math.random()) * 2 - 1) * Math.random() * 3,
    //     (Math.round(Math.random()) * 2 - 1) * Math.random() * 3
    //   )

    // this.velocity = this.maxVelocity
  }
  onCollide(gob) {
    // if (gob instanceof Pill) {
    //   this.maxVelocity =
    //     new Pew.Vector2(
    //       (Math.round(Math.random()) * 2 - 1) * Math.random() * 3,
    //       (Math.round(Math.random()) * 2 - 1) * Math.random() * 3
    //     )
    //   this.velocity = this.maxVelocity
    // }

  }
  update() {
    // if position is outside bounds, negate
    if (this.position.x - this.width / 2 < 0 ||
        this.position.x + this.width / 2 > this.game.getWidth()) {
        this.velocity.x = -this.velocity.x
    }
    if (this.position.y - this.height / 2 < 0 ||
        this.position.y + this.height / 2 > this.game.getHeight()) {
        this.velocity.y = -this.velocity.y
    }
  }
}

Pill.collider = Pew.Collider.Box;
