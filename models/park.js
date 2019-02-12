const Dinosaur = require('./dinosaur.js')

const Park = function (name, ticket_price){
  this.name = name;
  this.ticket_price = ticket_price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (species) {
  for (i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species) {
      break;
    }
  }
  this.dinosaurs.splice(i, 1);
};

Park.prototype.mostPopularDinosaur = function () {
  n = 0;
  x = {};
  for (i = 0; i < this.dinosaurs.length; i++) {
    if (n < this.dinosaurs[i].guestsAttractedPerDay) {
      n = this.dinosaurs[i].guestsAttractedPerDay;
      x = this.dinosaurs[i];
    }
  }
  return x.species;
};

Park.prototype.findDinosaur = function (species) {
  for (i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species == species) {
      return this.dinosaurs[i];
    }
  }
};

module.exports = Park
