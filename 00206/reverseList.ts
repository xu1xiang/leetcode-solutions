// https://leetcode.cn/problems/reverse-linked-list/

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let temp = head;
  const stack: ListNode[] = [];
  while (temp !== null) {
    stack.push(temp);
    temp = temp.next;
  }
  if (!stack.length) {
    return null;
  }
  let p = stack.pop();
  const result = p;
  while (stack.length) {
    const cur = stack.pop();
    p.next = cur;
    p = cur;
  }
  p.next = null;
  return result;
}
