import { deepClone } from "pl-vue/lib/utils";

/**
 * 创建一个指定长度的数组，并填入内容
 * 与 new Array(len).fill() 的不同是写入的每一项不会出现同一引用地址
 * @param len 
 * @param item 
 * @returns 
 */
export function createArray(len: number, item: any = void 0) {
  const arr = new Array(len);
  let i = 0;
  while (i < arr.length) {
    arr[i] = deepClone(item);
    i++;
  }
  return arr;
}
