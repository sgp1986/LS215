/*
write a function named totalArea
takes one argument
  array of nested arrays
    nested arrays hold two number values representing rectangle sides
return the total area covered by all the rectangles (number)

find area - length * width
add up the areas of each nested array in the overall array
each nested array needs to be converted to the product of the two numbers
sum up the array of products


*/

const totalArea = (rectangles) => {
  let areas = rectangles.map(findArea);
  return areas.reduce((sum, area) => sum + area);
}

const findArea = (sides) => {
  return sides[0] * sides[1];
}

const totalSquareArea = (rectangles) => {
  let squares = rectangles.filter(findSquares);
  return totalArea(squares);
}

const findSquares = (sides) => {
  return sides[0] === sides[1];
}

// console.log(findArea([3, 4]));
let rectangles = [[3, 4], [6, 6,], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles)); // 141
console.log(totalSquareArea(rectangles));