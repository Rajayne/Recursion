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

function isPalindrome(str, start = 0, end = str.length - 1) {
  // If one value in string
  if (start == end) {
    return true;
  }
  // If start and end value does not match
  if (str[start] != str[end]) {
    return false;
  }
  // If more than two values in string, recursive case
  if (start < end + 1) return isPalindrome(str, start + 1, end - 1);
  return true;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  console.log(val, i, arr[i]);
  if (i < arr.length) {
    if (arr[i] === val) {
      return i;
    } else {
      return findIndex(arr, val, i + 1);
    }
  }
  return -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, end = str.length - 1) {
  if (end < 0) return "";
  return str[end] + revString(str, (end -= 1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  if (!obj instanceof Object) {
    throw new Error("Expected an object!");
  }

  const arr = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr.push(...gatherStrings(obj[key]));
    }
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    console.log(middleIdx, middleVal);
    if (middleVal < val) {
      return binarySearch(arr, val, (leftIdx = middleIdx + 1), rightIdx);
    } else if (middleVal > val) {
      return binarySearch(arr, val, leftIdx, (rightIdx = middleIdx - 1));
    } else {
      return middleIdx;
    }
  }
  return -1;
}

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
