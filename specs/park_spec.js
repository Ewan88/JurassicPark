const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 30);
    park = new Park('Jurassic', 5);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic');
  });

  it('should have a ticket price', function(){
    const actual = park.ticket_price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur('t-rex');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });


  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, 't-rex');
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const actual = park.findDinosaur('t-rex');
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.removeDinosaur('t-rex');
    const actual = park.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

});
