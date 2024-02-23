export function checkArrayHasElements(bigArray) {
  if (!Array.isArray(bigArray)) {
    console.error('Input is not an array.')
    return false
  }

  for (let i = 0; i < bigArray.length; i++) {
    if (Array.isArray(bigArray[i])) {
      if (bigArray[i].length > 0) {
        return true
      }
    } else {
      console.error('Element at index ' + i + ' is not an array.')
    }
  }

  return false
}
