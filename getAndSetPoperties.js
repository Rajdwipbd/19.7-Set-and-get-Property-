const shoppingCard = { pen: 20, Khata: 30, Mobile: 2, Mouce: 20, Keyboard: 5 }

console.log(shoppingCard);
//To get any value of property
// way 1
console.log(shoppingCard.pen);
// way 2
const countMouce = shoppingCard["Mouce"];
console.log(countMouce);

// add any value or properties

shoppingCard.pen = 23;
console.log(shoppingCard);
