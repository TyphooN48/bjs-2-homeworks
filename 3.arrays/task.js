function compareArrays(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }
  return arr2.every((el, ind) => el==arr1[ind]);
}


function advancedFilter(arr) {
  return arr.filter(v=> v>0).filter(v=> v%3==0).map(v=> v * 10)
}
