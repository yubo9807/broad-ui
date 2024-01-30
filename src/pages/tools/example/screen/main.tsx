import { h } from 'pl-vue';
import { enterFullScreen, exitFullScreen, toggleFullScreen, isFullScreen } from '~/core/tools';

export default function() {
  return <div>
    <button onclick={() => enterFullScreen()}>进入全屏</button>
    <button onclick={() => exitFullScreen()}>退出全屏</button>
    <button onclick={() => toggleFullScreen()}>进入/退出全屏</button>
    <button onclick={() => alert(isFullScreen())}>是否处于全屏状态</button>
    <button onclick={() => toggleFullScreen(document.getElementById('container'))}>指定元素进入/退出全屏</button>
  </div>
}
