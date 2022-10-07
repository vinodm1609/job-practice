function insertion(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j > -1 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
}

function bubble(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

function selection(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = 0; j < n; j++) {
      if (arr[min] < arr[j]) {
        min = j;
      }
      if (min < i) {
        [arr[i], arr[min]] = [arr[min], arr[i]];
      }
    }
  }
  return arr;
}

// merge

function merge() {
  let l1 = mid - i + 1;
  let l2 = r - mid;

  let A = new Array(l1);
  let B = new Array(l2);

  let c = l;
  for (let i = 0; i < l1; i++) {
    A[i] = arr[c++];
  }
  c = mid + 1;
  for (let j = 0; j < l2; j++) {
    B[j] = arr[c++];
  }

  let d = 0;
  let e = 0;
  let main = l;

  while (d < l1 && e < l2) {
    if (A[d] <= B[e]) {
      arr[main] = A[d];
    } else {
      arr[main] = B[e];
    }
  }
  while (d < l1) {
    arr[main] = A[d];
  }
  while (e < l2) {
    arr[main] = B[e];
  }
}

function mergeSort(arr, l, r) {
  if (l >= r) {
    return;
  }
  let mid = l + parseInt((r - l) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
}

//quick
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, high);
  return i + 1;
}

function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}
function print(arr, size) {
  for (let i = 0; i < size; i++) {
    console.log(arr[i]);
  }
}

// counting

function counting(arr, min, max) {
  let count = [];
  let z = 0;
  let n = arr.length;
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }
  for (let j = 0; j < n; j++) {
    count[arr[j]]++;
  }

  for (let k = min; k <= max; k++) {
    while (count[k]-- > 0) {
      count[z] = k;
    }
  }
  return arr;
}

// stack

class Stack {
  constructor() {
    this.item = [];
    this.size = 0;
  }

  isEmpty() {
    if (this.item.length == 0) {
      return null;
    }
  }

  push(data) {
    return this.item.push(data);
  }

  pop() {
    if (this.isEmpty()) {
      return " this is empty stack";
    } else {
      return this.item.pop();
    }
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  getSize() {
    return this.item.length;
  }

  print() {
    let str = " ";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    console.log(str);
  }
}

// queue

class NodeQ {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class queue {
  constructor() {
    this.front = 0;
    this.last = 0;
    this.size = 0;
  }

  isEmpty() {
    if (this.last.length == 0) {
      return null;
    }
  }

  enqueue(item) {
    let newNode = new NodeQ(item);
    if (this.isEmpty()) {
      this.front = newNode;
    } else {
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    if (this.front == this.last) {
      this.last = null;
    }
    let g = this.front;
    this.front = this.front.next;
    this.size--;
    return g;
  }
}

class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
    this.maxValues = [];
  }

  push(element) {
    // if the stack is empty or the element we're pushing is greater than currentMax, add the new element to maxValues
    if (this.size === 0 || element >= this.findMax()) {
      this.maxValues.push(element);
    }
    // otherwise, push the currentMax to maxValues again, to align lengths of arrays and keep currentMax
    else {
      this.maxValues.push(this.findMax());
    }
    // increase the size variable by 1 to keep track of length, and add element to stack
    this.size += 1;
    this.data.push(element);
    return this.data;
  }

  pop() {
    // if the stack isn't empty, decrease the size count and remove element from the end of the stack and maxValue array to keep lengths aligned
    if (this.size > 0) {
      this.size -= 1;
      this.maxValues.pop();
      return this.data.pop();
    }
  }

  // this returns the top element in the stack (last element in the array)
  peek() {
    return this.data[this.size - 1];
  }

  // this returns the maxValue currently in the stack, by grabbing the last element of the maxValue stack
  findMax() {
    return this.maxValues[this.size - 1];
  }
}
