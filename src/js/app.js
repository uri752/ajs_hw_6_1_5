// TODO: write your code here
/* import sum from './basic';
console.log('worked');
console.log(sum([1, 2])); */

export default function sortByOrder(obj, arrayOfSort) {
  const arrayOfProp = [];
  for (const prop in obj) {
    if (!arrayOfSort.includes(prop)) {
      arrayOfProp.push(prop);
    }
  }
  arrayOfProp.sort();
  const newArray = arrayOfSort.concat(arrayOfProp);
  const result = [];
  newArray.forEach((element) => {
    const resProp = { key: element, value: obj[element] };
    result.push(resProp);
  });

  return result;
}
