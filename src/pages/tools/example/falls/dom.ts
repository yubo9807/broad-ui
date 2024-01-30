import { falls } from "~/core/tools";

export default () => {
  const wrap = document.createElement('div');
  document.getElementById('container').appendChild(wrap);

  const arr = [200, 300, 270, 100, 400, 100, 200, 300, 100, 140];
  arr.forEach(val => {
    const div = document.createElement('div');
    div.style.height = `${val}px`;
    div.style.border = `1px solid`;
    div.style.boxSizing = `border-box`;
    wrap.appendChild(div);
  })

  falls(wrap, {
    column: Math.max(Math.trunc(wrap.offsetWidth / 200), 2),
    rowGap: 20,
    colGap: 16,
  })
}