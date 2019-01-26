export default class Particle {
  mass: number;
  charge: number;
  color: string[];
  spin: number;

  constructor(mass: number, charge: number, color: string[], spin: number) {
    this.mass = mass;
    this.charge = charge;
    this.color = color;
    this.spin = spin;
  }
  erzeugen(pMass, pCharge, pColor, pSpin) {
    return new Particle(pMass, pCharge, pColor, pSpin);
  }
  vernichten(pParticle: Particle) {}
  decay(pParticle: Particle) {
    let decayProduct: Particle[];
    // Compute possible decay outcomes for the interaction

    return decayProduct;
  }

  // Checks if the laws of conservation are respected
  checkConservation() {}
}
