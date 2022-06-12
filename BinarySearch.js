let searchfunction = (array, elem) => {
  let start = 0;
  let end = array.length - 1;
  // not using mid+start/2 because of integer overflow
  let mid = parseInt(start + (end - start) / 2);
  while (mid <= end && mid >= start) {
    if (array[mid] == elem) {
      console.log(mid);
      return mid;
    } else if (array[mid] >= elem) {
      start = mid + 1;
      // console.log(start);
    } else {
      end = mid - 1;
      // console.log(end);
    }
    mid = parseInt(start + (end - start) / 2);
  }
  console.log('Number not found')
  return 'Number not found' ; 
};

export default searchfunction;
