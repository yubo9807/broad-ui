import { h } from 'pl-vue';
import { FullScreen } from '~/core/tools';

export default function() {
  const fullScreen = new FullScreen();
  return <div>
    <button onclick={() => fullScreen.enter()}>进入全屏</button>
    <button onclick={() => fullScreen.exit()}>退出全屏</button>
    <button onclick={() => fullScreen.toggle()}>进入/退出全屏</button>
    <button onclick={() => alert(fullScreen.isFullScreen())}>是否处于全屏状态</button>
    <button onclick={() => fullScreen.toggle(document.getElementById('container'))}>指定元素进入/退出全屏</button>
  </div>
}
