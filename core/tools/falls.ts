import { createArray } from "../utils/array";

type Option = {
  column?: number,  // 列数
  rowGap?: number,  // 横向间距
  colGap?: number,  // 纵向间距
}
/**
 * 瀑布流算法
 * @param wrapEl 
 * @param option 
 * @returns 
 */
export function falls(wrapEl: HTMLElement, option: Option = {}) {
  option = Object.assign({
    column: 3,
    rowGap: 20,
    colGap: 14,
  }, option);
  if (option.column < 2) return;

  wrapEl.style.position = 'relative';
  const arr: [number][] = createArray(option.column, [0]);
  const newColumn = option.column - 1;
  const width = (wrapEl.offsetWidth - option.rowGap * newColumn) / option.column + 'px';

  const children = [...wrapEl.children] as HTMLElement[];
  for (let i = 0; i < children.length; i++) {
    const item = children[i];
    item.style.position = 'absolute';
    item.style.width = width;
    const height = item.offsetHeight;
    const nowColumn = queryColumn('min');
    const top = arr[nowColumn].reduce((a, b) => a + b);
    item.style.top = `${top + option.colGap * (arr[nowColumn].length - 1)}px`;
    item.style.left = `${nowColumn * (item.offsetWidth + option.rowGap)}px`;
    arr[nowColumn].push(height);
  }

  const maxColumn = queryColumn('max');
  wrapEl.style.height = arr[maxColumn].reduce((a, b) => a + b + option.rowGap) + 'px';

  function queryColumn(type: 'min' | 'max') {
    const collect = createArray(arr.length, 0);
    for (let i = 0; i < arr.length; i++) {
      collect[i] = arr[i].reduce((a, b) => a + b);
    }
    const minNumber = Math[type].apply(null, collect);
    return collect.indexOf(minNumber);
  }
}
