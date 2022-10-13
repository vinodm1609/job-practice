function getDecimalValue(head) {
    let curr = head.val
    while (head.next != null) {
        curr = curr * 2 + head.next.val
        head = head.next
    }
    return head
}

function removeAt(head, n) {
    let curr = new ListNode(0, node)

    let slow = curr
    let fast = curr

    while (n--) {
        fast = fast.next
    }
    while (fast.next) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return curr = curr.next
}