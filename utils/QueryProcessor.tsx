export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  // Check for a query asking about the andrewID
  if (query.toLowerCase().includes("what is your andrewid") || query.toLowerCase().includes("your andrewid")) {
    return "example";
  }


  if (query.toLowerCase().includes("what is your name") || query.toLowerCase().includes("your name")) {
    return "example";
  }

  // if (query.toLowerCase().includes("which of the following numbers") || query.toLowerCase().includes('number')) {
  //   return "1";
  // }

  // Updated regex to make question mark optional and to handle trailing spaces
  const match = query.toLowerCase().match(/what is (\d+) plus (\d+)[\s?]*$/);

  // If the pattern is matched, extract the numbers and perform the addition.
  if (match) {
    const num1 = parseInt(match[1], 10); // Convert the first captured group to a number
    const num2 = parseInt(match[2], 10); // Convert the second captured group to a number
    const sum = num1 + num2; // Perform the addition
    // Updated return to directly return the sum as a string without additional text.
    return sum.toString(); // Return the answer as a string
  }

  const match2 = query.toLowerCase().match(/which of the following numbers is the largest: (.+)[\s?]*$/i);
  if (match2) {
      const numbers = match2[1].split(',').map(num => num.trim()).map(Number); // Added trimming to handle potential spaces around numbers
      const largest = Math.max(...numbers);
      // Updated to directly return the largest number as a string without additional text
      return largest.toString(); // Return the largest number as a string
  }

  const match3 = query.toLowerCase().match(/which of the following numbers is both a square and a cube: (.+)[\s?]*$/i);
  if (match3) {
    const numbers = match3[1].split(',').map(num => num.trim()).map(Number); // Split and clean numbers
    const perfectSixth = numbers.find(num => {
      const sixthRoot = Math.pow(num, 1/6);
      return sixthRoot === Math.floor(sixthRoot); // Check if the sixth root is an integer
    });
    // Return the found number or a message if none are found
    return perfectSixth !== undefined ? perfectSixth.toString() : "None of the numbers are both a square and a cube.";
  }

  const match4 = query.toLowerCase().match(/what is (\d+) multiplied by (\d+)[\s?]*$/);

  // If the pattern is matched, extract the numbers and perform the addition.
  if (match4) {
    const num1 = parseInt(match4[1], 10); // Convert the first captured group to a number
    const num2 = parseInt(match4[2], 10); // Convert the second captured group to a number
    const sum = num1 * num2; // Perform the addition
    // Updated return to directly return the sum as a string without additional text.
    return sum.toString(); // Return the answer as a string
  }

    // Updated regex to make question mark optional and to handle trailing spaces
    const match5 = query.toLowerCase().match(/what is (\d+) plus (\d+)[\s?]*$/);

    // If the pattern is matched, extract the numbers and perform the addition.
    if (match5) {
      const num1 = parseInt(match5[1], 9); // Convert the first captured group to a number
      const num2 = parseInt(match5[2], 9); // Convert the second captured group to a number
      const num3 = parseInt(match5[3], 9);
      const sum = num1 + num2 + num3; // Perform the addition
      // Updated return to directly return the sum as a string without additional text.
      return sum.toString(); // Return the answer as a string
    }



  return "";
}
