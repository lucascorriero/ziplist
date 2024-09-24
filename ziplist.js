function zipList(list1, list2) {
    const mixed = [];
    for (let i = 0; i < list1.length; i++) {
      mixed.push(list1[i], list2[i]);
    }
    return mixed;
  }
  console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // Output: ['a', 1, 'b', 2, 'c', 3]
  