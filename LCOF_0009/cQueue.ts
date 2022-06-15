// https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

class CQueue {
  stackA: number[] = [];
  stackB: number[] = [];
  constructor() {}

  appendTail(value: number): void {
    this.stackA.push(value);
  }

  deleteHead(): number {
    if (!this.stackA.length) {
      return -1;
    }
    while (this.stackA.length) {
      const top = this.stackA.pop();
      this.stackB.push(top);
    }
    const result = this.stackB.pop();

    while (this.stackB.length) {
      const top = this.stackB.pop();
      this.stackA.push(top);
    }
    return result;
  }
}

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
