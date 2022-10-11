// var addTwoNumbers = function (l1, l2) {
//   let head = new ListNode();
//   let count = 0;
//   let curr = head;
//   while (l1 || l2 || count) {
//     const s = l1.val + l2.val;
//     count = Math.floor(s / 10);
//     curr.next = new ListNode(s % 10);
//     curr = curr.next;
//     l1 = l1?.next;
//     l2 = l2?.next;
//   }
//   return head.next;
// };

var removeNthFromEnd = function (head, n) {
  let curr = ListNode(0, head);
  let fast = curr;
  let slow = curr;
  while (n--) {
    fast = fast.next;
  }
  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return curr.next;
};

var mergeKLists = function (lists) {
  const n = lists.length;
  if (n == 0) {
    return null;
  }
  for (let i = 1; i < n; ++i) {
    lists[i] = mergeTwoLists(lists[i - 1], lists[i]);
  }
  return lists[n - 1];
};

function mergeTwoLists(l1, l2) {
  const dummy = new ListNode();
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}

var swapPairs = function (head) {
  const newNode = new ListNode(0, head);
  let prev = newNode;
  let curr = head;
  while (curr && curr.next) {
    const t = curr.next;
    curr.next = t.next;
    t.next = curr;
    prev.next = t;
    prev = curr;
    curr = curr.next;
  }
  return newNode.nex;
};

function rotateRight(head, k) {
  if (!head) {
    return null;
  }
  let count = 0;
  let curr = head;

  // count list node
  while (curr !== null) {
    count++;
    curr = curr.next;
  }

  // number of rotation are now restricted within limit
  k = k % count;
  let prev = head;
  curr = head;

  // moving one pointer to k position a head
  while (k--) {
    curr = curr.next;
  }

  while (curr.next) {
    prev = prev.next;
    curr = curr.next;
  }

  // simply modifying the head and last node
  curr.next = head;
  head = prev.next;
  prev.next = null;
  return head;
}

function deleteDuplicates(head) {
  let newNode = new ListNode(-1);
  newNode.next = head;
  curr = newNode;

  while (curr.next !== null && curr.next.next !== null) {
    if (curr.next.val == curr.next.next.val) {
      let temp = curr.next.val;

      while (curr.next !== null && curr.next.val == temp) {
        curr.next = curr.next.next;
      }
    } else {
      curr = curr.next;
    }
  }
  return newNode.next;
}

function partition(head, k) {
  let newNode = new ListNode();
  let newNode1 = new ListNode();

  let n = newNode;
  let n1 = newNode1;

  let curr = head;

  while (curr) {
    if (curr.val < k) {
      n.next = curr;
      n = n.next;
    } else {
      n1.next = curr;
      n1 = n1.next;
    }
    curr = curr.next;
  }
  n.next = newNode1.next;
  n1.next = null;
  return newNode.next;
}
