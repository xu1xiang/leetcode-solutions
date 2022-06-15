// https://leetcode.cn/problems/ti-huan-kong-ge-lcof/

function replaceSpace(s: string): string {
  const arr: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const val = s[i] === " " ? "%20" : s[i];
    arr.push(val);
  }

  return arr.join("");
}
