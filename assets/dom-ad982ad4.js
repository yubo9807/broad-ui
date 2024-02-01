const n=`import { enterFullScreen, exitFullScreen, toggleFullScreen, isFullScreen } from '~/core/tools';

export default () => {
  const container = document.getElementById('container');
  const list = [
    { name: '进入全屏', handler: enterFullScreen, },
    { name: '退出全屏', handler: exitFullScreen, },
    { name: '进入/退出全屏', handler: toggleFullScreen, },
    { name: '是否处于全屏状态全屏', handler: () => alert(isFullScreen()), },
    { name: '指定元素进入/退出全屏', handler: () => toggleFullScreen(container), },
  ]

  const wrap = document.createElement('div');
  list.forEach(val => {
    const button = document.createElement('button');
    button.innerText = val.name;
    button.addEventListener('click', () => {
      val.handler();
    });
    wrap.appendChild(button);
  })

  container.appendChild(wrap);
}`;export{n as default};
