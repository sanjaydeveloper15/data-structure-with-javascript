/**
 * Benefits of Map 
 * 1. Faster with large datasets also
 * 2. Ordered keys be default
 */

const map = new Map();
map.set("name", "Sanjay");
map.set("age", 27);
map.set("designation", "Senior Consultant");

console.log(map.get("name")); 

// Iteration
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

console.log(Object.keys(map)) // Not works as it is Map not Object
