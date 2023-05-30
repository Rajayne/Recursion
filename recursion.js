/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  //Base Case
  if (!words.length) return 0;
  // Recursive Case
  let longestWord = longest(words.slice(1));
  return Math.max(longestWord, words[0].length);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0) {
  if (i >= str.length) return "";
  return str[i] + everyOther(str, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};

console.log(longest(["hello", "hi", "hola"])); // 5
console.log(longest(["abcdefg", "hijklmnop", "qrs", "tuv", "wx", "y", "z"])); // 9
console.log(longest(["a", "b", "c", "d", "e"])); // 1
console.log(longest(["abcde"])); //5
