// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reversePrint(head: ListNode | null): number[] {
  return head === null ? [] : reversePrint(head.next).concat(head.val);
}
