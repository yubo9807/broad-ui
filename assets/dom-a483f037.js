const n=`import UnfoldText from '~/core/comp/UnfoldText'
import { useComponent } from 'pl-vue';

export default () => {
  const node = useComponent(UnfoldText, {
    model: '这是一段很长很长很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很长很长很长的文本，它会被自动展开。',
  })
  node.style.width = '200px';
  document.getElementById('container').appendChild(node);
}`;export{n as default};
