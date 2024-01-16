import data from "./data.json"; // imports data.json

export default data; // export the native JS array

const categories = data.map((obj) => obj.category);

const categoriesSet = new Set(categories);
const categoriesUnique = Array.from(categoriesSet);

const categoriesWithCounts = data.reduce((obj, cat) => {
  // check if cat exists as a key on obj
  // if category key does not exist
  // add that key with a value of 1
  // else
  // add 1 to the current value of that key
  if (cat.category in obj) {
    obj[cat.category]++;
  } else {
    obj[cat.category] = 1;
  }
  return obj;
}, {}); // !!! Be sure to define the initial value as an Object!

const categoriesAndCount = categoriesUnique.map((name) => {
  return { name: name, count: categoriesWithCounts[name] };
});

export { categories, categoriesUnique, categoriesAndCount };
