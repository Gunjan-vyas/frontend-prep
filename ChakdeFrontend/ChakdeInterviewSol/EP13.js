function intersectionArray(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  let i = 0;
  let j = 0;
  let res = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) res.push(arr1[i++]);
    else res.push(arr2[j++]);
  }
  while (i < arr1.length) {
    res.push(arr1[i++]);
  }
  while (j < arr2.length) {
    res.push(arr2[j++]);
  }
  return res;
}

console.log("res", intersectionArray([1, 2, 3, 4, 5], [1, 1, 2, 2, 4]));

const customeTree = {
  id: "root",
  children: [
    { id: "child1", children: [{ id: "grandchild1", children: [] }] },
    { id: "child2", children: [] },
  ],
};

const getElementById = function (nodeArr, id) {
  //if Obj
  if (nodeArr && Object.keys(nodeArr).length && !Array.isArray(nodeArr)) {
    if (nodeArr.id && nodeArr.id == id) return nodeArr;
    else return getElementById(nodeArr.children, id);
  } else {
    // its an array
    let i = 0;
    while (nodeArr && i < nodeArr.length) {
      return getElementById(nodeArr[i++], id);
    }
  }
};

let ans = getElementById(customeTree, "grandchild1");
console.log("Ans after recursion", ans);
