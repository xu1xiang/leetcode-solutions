// https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  let p: ListNode | null = null;

  while (cur !== null) {
    const temp = cur.next;
    cur.next = p;
    p = cur;
    cur = temp;
  }
  return p;
}
