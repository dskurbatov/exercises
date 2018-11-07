/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 var addTwoNumbers = function(l1, l2) {
  if(l1 === null){
    return l2
  } 
  if(l2 === null){
    return l1
  }

  let head = new ListNode(null)
  let p1 = l1, p2 = l2, node = null, p = head
  let sum = null, extra = false
  
  while(p1 !== null && p2 !== null){
    sum = p1.val + p2.val + extra
    node = new ListNode(sum % 10)
    extra = sum >= 10
    p.next = node
    p = p.next
    p1 = p1.next
    p2 = p2.next
  }
  while(p1 !== null){
    sum = p1.val + extra
    node = new ListNode(sum % 10)
    extra = sum >= 10
    p.next = node
    p = p.next
    p1 = p1.next
  }
  while(p2 !== null){
    sum = p2.val + extra
    node = new ListNode(sum % 10)
    extra = sum >= 10
    p.next = node
    p = p.next
    p2 = p2.next
  }
  
  if(extra){
    node = new ListNode(+extra)
    p.next = node
  }

  return head.next
};