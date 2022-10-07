function insertNodeAtTail(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  if (head == null) {
    head = newNode;
    return head;
  } else {
    let current = head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = newNode;
    return head;
  }
}
function insertNodeAtHead(head, data) {
  let newNode = new SinglyLinkedListNode(data);
  newNode.next = head;
  head = newNode;
  return newNode;
}
function insertNodeAtPosition(llist, data, position) {
  let newNode = new SinglyLinkedListNode(data);
  newNode.data = data;
  let count = 1;
  let current = llist;
  while (count < position) {
    current = current.next;
    count++;
  }
  let temp = current.next;
  current.next = {
    data: data,
    next: temp,
  };
  return llist;
}
function deleteNode(llist, position) {
  if (position == 0) return llist.next;

  let i = 1;
  let curr = llist;
  while (i < position) {
    curr = curr.next;
    i++;
  }
  curr.next = curr.next.next;
  return llist;
}
function reversePrint(llist) {
  if (!llist) {
    return;
  }
  reversePrint(llist.next);
  console.log(llist.data);
}

function reverse(llist) {
  let prev = null;
  let next = null;
  let curr = llist;
  while (curr != null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  llist = prev;
  return llist;
}

/// compare lists
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

// merge lists
function mergeLists(head1, head2) {
  const head = new SinglyLinkedListNode(0);

  let curr = head;
  while (head1 && head2) {
    if (head1.data <= head2.data) {
      curr.next = head1;
      head1 = head1.next;
    } else {
      curr.next = head2;
      head2 = head2.next;
    }
    curr = curr.next;
  }

  if (head1) {
    curr.next = head1;
  }
  if (head2) {
    curr.next = head2;
  }
  curr.next = head1 || head2;
  return head.next;
}

//get node from tilas

function getNode(llist, positionFromTail) {
  let prev = null;
  let next = null;
  let curr = llist;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  for (let i = 0; i < positionFromTail; i++) {
    prev = prev.next;
  }
  return prev.data;
}

//delete duplicate-value nodes from a sorted linked list
function removeDuplicate(head) {
  let curr = head;
  while (curr.next) {
    if (curr.data == curr.next.data) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
}

function rotateRight(head, k) {
  if (!head) {
    return null;
  }

  let count = 0;
  let curr = head;

  while (curr !== null) {
    count++;
    curr = curr.next;
  }

  k = k % count;
  let prev = head;
  curr = head;

  while (k--) {
    curr = curr.next;
  }
  while (curr.next) {
    prev = prev.next;
    curr = curr.next;
  }

  curr.next = head;
  head = prev.next;
  prev.next = null;
  return head;
}
