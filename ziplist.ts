function zipList(list1:unknown[], list2:unknown[]) {
  const mixed = [];
  for (let i = 0; i < list2.length; i++) {
    mixed.push(list1[i], list2[i]);
  }
  return mixed;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
