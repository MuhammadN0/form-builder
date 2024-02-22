export function checkArrayHasElements(bigArray) {
  // Check if the bigArray is an array
  if (!Array.isArray(bigArray)) {
      console.error("Input is not an array.");
      return false;
  }
  
  // Iterate through the bigArray
  for (let i = 0; i < bigArray.length; i++) {
      // Check if the current element is an array
      if (Array.isArray(bigArray[i])) {
          // If the current array has elements, return true
          if (bigArray[i].length > 0) {
              return true;
          }
      } else {
          console.error("Element at index " + i + " is not an array.");
      }
  }
  
  // If no elements found in any array, return false
  return false;
}