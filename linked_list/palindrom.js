/** @format */

function isPalindrome(head) {
  if (!head || !head.next) {
    return true;
  }
  let slow = head
  let fast = head.next

  while(slow && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }

  let pre = null
  slow.next = null
  let curr = slow.next

  while(curr) {
    let t = curr.next
    curr.next = pre
    pre = curr
    curr = t
  }
   while(pre) {
    if(pre.val !== head.val) {
        return false
    }
    pre = pre.next
    
    head = head.next
   }
   return true
}
