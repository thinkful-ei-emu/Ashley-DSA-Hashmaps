const HashMap = require('./hashmap');




function main() {
  let hashMap = new HashMap();
  //Q1:
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  hashMap.set('Hobbit', 'Bilbo');
  hashMap.set('Hobbit', 'Frodo');
  hashMap.set('Human', 'Aragon');
  hashMap.set('Elf', 'Legolas');
  hashMap.set('Maiar', 'The Necromancer');
  hashMap.set('Maiar', 'Sauron');
  hashMap.set('RingBearer', 'Gollum');
  hashMap.set('LadyOfLight', 'Galadriel');
  hashMap.set('HalfEleven', 'Arwen');
  hashMap.set('Ent', 'Treebeard'); 
  console.log(hashMap);
  console.log(hashMap.get('Hobbit'));
  //^returns Frodo because key hobbit's value 'bilbo' was updated with 'frodo'
  console.log(hashMap.get('Maiar'));
  //^returns Sauron because key maiar's value 'the necromancer' was updated with 'sauron'
  //Capacity: 24 because if loadRatio is less than Max_load ratio which is set to 0.5
  //then multiply capacity(8) by the size_ratio (3) which gives you 24
}

main();