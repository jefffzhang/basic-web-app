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

  const match = query.toLowerCase().match(/what is (\d+) plus (\d+)\?/);

  // If the pattern is matched, extract the numbers and perform the addition.
  if (match) {
    const num1 = parseInt(match[1], 10); // Convert the first captured group to a number
    const num2 = parseInt(match[2], 10); // Convert the second captured group to a number
    const sum = num1 + num2; // Perform the addition
    return `The sum of ${num1} and ${num2} is ${sum}.`; // Return the answer
  }

  const match2 = query.toLowerCase().match(/which of the following numbers is the largest: (.+)\?/i);
  if (match2) {
    const numbers = match2[1].split(', ').map(Number);
    const largest = Math.max(...numbers);
    return `The largest number is ${largest}.`;
  }


  return "";
}
