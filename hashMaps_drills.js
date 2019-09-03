/* eslint-disable no-empty */
const HashMap = require('./hashmap');



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

// WhatDoesThisDo(); this function updates keys with new values

//Q3
//a) Keys: 10, 22, 31, 4, 15, 28, 17, 88, 59 
//0: 22
//1: 88
//2: 
//3: 
//4: 4
//5: 15
//6: 28
//7: 17
//8: 59
//9: 31
//10: 10

//b) Keys 5, 28, 19, 15, 20, 33, 12, 17, 10 
//0: 
//1: 28
//2: 19
//3: 20
//4: 12
//5: 5
//6: 15
//7: 33
//8: 17
//9: 10


function removeDuplicates(str) {
  let newStr = '';
  let map1 = new HashMap();
  for (let i = 0; i < str.length; i++) {
    map1.set(str[i], str[i]);
  }
  for (let i = 0; i < str.length; i++) {
    try {
      newStr += map1.get(str[i]);
      map1.delete(str[i]);
    }
    catch (key) {

    }
  }
  return newStr;
}

function palindromeChecker(str) {

  //need to find a way to increase 
  //count to check that there are pairs and one single letter
  let palMap = new HashMap();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    palMap.set(str[i], count);
   
   

  } 
 
  console.log(palMap)

 
}

function anagrams(arr) {
console.log(arr);


}

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
  // console.log(hashMap);
  // console.log(hashMap.get('Hobbit'));
  //^returns Frodo because key hobbit's value 'bilbo' was updated with 'frodo'
  // console.log(hashMap.get('Maiar'));
  //^returns Sauron because key maiar's value 'the necromancer' was updated with 'sauron'
  //Capacity: 24 because if loadRatio is less than Max_load ratio which is set to 0.5
  //then multiply capacity(8) by the size_ratio (3) which gives you 24
  // console.log(removeDuplicates('google'));
  console.log(palindromeChecker('racecar'));
  //  console.log(anagrams(['east', 'cars']))
}

main();