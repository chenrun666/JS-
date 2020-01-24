let items = [1, 2, 3, 4, 5];

// get an item from the array
let index = 1;
console.log(items[index]);

// set an item value
items[index] = 2;

// get array length
console.log(items.length);

// append an item
items.push(6);

// insert an item
items.splice(0, 0, 0);
console.log(items);

// delete an item
items.splice(0, 1);
console.log(items);

// iterate
items.map(d => d);
items.forEach(d => {
    console.log(d)
})