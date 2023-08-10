// Good Luck 💪🏾
function FindSeven(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].toString().includes('7')) {
        return "Found!";
      }
    }
    return "There is no 7 in the array.";
  }

  let n1 = [1, 2, 3, 4, 5];
console.log(FindSeven(n1)); 
let n2 = [7, 8, 9, 10];
console.log(FindSeven(n2)); 

let n3 = [8, 9, 10];
console.log(FindSeven(n3));