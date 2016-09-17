// extends basic gob
export default class Pill extends Pew.Gob {
  constructor(game, opts) {
    opts.width = opts.width || 10
    opts.height = opts.height || 10
    super(game, opts)

    this.maxVelocity = new Pew.Vector2(Math.random() * 10, Math.random() * 10)
    this.velocity = this.maxVelocity
  }
  onCollide(gob) {
    // if (gob instanceof Pill) {
    //   this.destroy()

    // }
  }
  update() {
    // if position is outside bounds, negate
    if (this.position.x + this.velocity.x < 0 ||
        this.position.x + this.velocity.x > this.game.getWidth()) {
      this.velocity.x = -this.velocity.x
    }
    if (this.position.y + this.velocity.y < 0 ||
        this.position.y + this.velocity.y > this.game.getHeight()) {
      this.velocity.y = -this.velocity.y
    }
    this.position = Pew.V2.add(this.position, this.velocity)

    this.data.sprite.position.y = this.position.y;
    this.data.sprite.position.x = this.position.x;


  }
}
