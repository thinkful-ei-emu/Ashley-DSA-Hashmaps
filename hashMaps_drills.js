const HashMap = require('./hashmap');




function main() {
  let hashMap = new HashMap();
  //Q1:
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;
  hashMap.set('Hobbit', 'Bilbo');
  hashMap.set('Hobbit', 'Frodo');
  hashMap.set('Wizard', 'Gandolf');
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

//Q2
//What is the output of the following code? explain your answer.

const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap(); // new hashmap
  map1.set(str1, 10); //adds key str1('hello world') with value 10
  map1.set(str2, 20); //adds key str2 which also equals ('hello world') updates that ke with value of 20
  let map2 = new HashMap(); //creates another hashmap 
  let str3 = str1; //key  is hello world
  let str4 = str2; //key is hello world
  map2.set(str3, 20); //key hello world is set to 20 for second hashmap
  map2.set(str4, 10); // key hello world's value is updated to 10 for second hashmap

  console.log(map1.get(str1)); //return 20 (updates str1 to str2 value)
  console.log(map2.get(str3)); ////return 10 (updates str3 to str4 value)
};

WhatDoesThisDo(); //this function updates keys with new values
main();