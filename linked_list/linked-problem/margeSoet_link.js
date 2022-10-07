var sortList = function (head) {
  if (!head || !head.next) return head;

  const [left, right] = split(head);

  let root = new ListNode(null);

  return merge(root, sortList(left), sortList(right));
};

function split(node) {
  let slow = node,
    fast = node;

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let left = node,
    right = slow.next;

  slow.next = null;

  return [left, right];
}

function merge(root, left, right) {
  let pointer = root;

  while (left !== null || right !== null) {
    if (left === null) {
      pointer.next = right;
      right = right.next;
    } else if (right === null) {
      pointer.next = left;
      left = left.next;
    } else {
      if (left.val < right.val) {
        pointer.next = left;
        left = left.next;
      } else {
        pointer.next = right;
        right = right.next;
      }
    }

    pointer = pointer.next;
  }

  return root.next;
}

//marge two sort LL
function margeSort(list1, list2) {
  let head = new Node(0);
  let curr = head;
  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  while (list1 !== null) {
    curr.next = list1;
  }
  while (list2 !== null) {
    curr.next = list2;
  }
  curr.next = list1 || list2;
  return this.head;
}

//Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// merge k Sorted lists ,Merge all the linked-lists into one sorted linked-list and return it.
// phale mergeTwoList ko kar ha bade ma
function mergeKLists(lists) {
  const n = lists.length;
  if (n == 0) {
    return null;
  }
  for (let i = 1; i < n; ++i) {
    lists[i] = mergeTwoLists(lists[i - 1], lists[i]);
  }
  return lists[n - 1];
}

function mergeTwoLists(l1, l2) {
  const head = new Node();
  let curr = head;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return head.next;
}

//
function CompareLists(llist1, llist2) {
  while (llist1 && llist2) {
    if (llist1.data == llist2.data) {
      llist1 = llist1.next;
      llist2 = llist2.next;
    } else llist1 = null;
  }
  if (llist1 || llist2) {
    return 0;
  }
  return 1;
}
