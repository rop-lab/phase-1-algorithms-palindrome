// isPalindrome.js

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if the original and reversed strings are the same
  return cleanStr === reversedStr;
}

module.exports = isPalindrome;
