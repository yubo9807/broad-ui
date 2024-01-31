/**
 * 劫持粘贴板
 * @param text 需要复制的字符
 */
export function copyToBoard(text: string) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

/**
 * 提取字符串中的数字
 * @param str 
 * @returns 
 */
export function extractNumber(str: string) {
  const matches = str.match(/[+-]?\d+(\.\d+)?/g);
  return matches && Number(matches[0]);
}
