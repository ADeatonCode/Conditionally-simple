/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

const isItLong = ( myString ) => {
  if ( myString.length > 20 ) { 
    return `That's a long string!`;
  } else {
    return undefined;
  }
};

const isItMedium = ( myString ) => {
  if ( myString.length >= 10 && myString.length <= 20 ) { 
    return `That's a regular sized string!`;
  } else {
    return undefined;
  }
};

const isItShort = ( myString ) => {
  if ( myString.length < 10 ) { 
    return "That's a small string!";
  } else {
    return "That's not a small string!";
  }
};

const howLongIsMyString = ( myString ) => {
  if (myString.length > 20) {
    return "That's a long string!";
  } else if (myString.length >= 10 && myString.length <= 20) {
    return "That's a regular sized string!";
  } else {
   return "That's a small string!";
  }
};

const instructors = [
  { name: "Shaq", height: 85 },
  { name: "Zooey", height: 65 }
];

const personsHeight = (instructorName ) => {
  let nameFlag = false;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name === instructorName) {
      nameFlag=true;
      index=i;
    }
  }  
  if (nameFlag) {
    return instructors[index].height;
  }else {
    return "I don't know everyone's height!";
  }
}

console.log( personsHeight("Michael") );


/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
};
