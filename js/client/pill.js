// extends basic gob
export default class Pill extends Pew.Gob {
  constructor(game, opts) {
    opts.width = opts.width || 10
    opts.height = opts.height || 10
    super(game, opts)
  }
  onCollide(gob) {
    // if (gob instanceof Pill) {
    //   this.destroy()

    // }

  }
}
