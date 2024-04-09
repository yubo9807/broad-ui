const e=`import Partition from "~/core/comp/Partition";
import { useComponent } from 'pl-vue'

export default () => {
  const node = useComponent(Partition, {
    childMain(el) {
      el.innerText = '固定区域';
    },
    childArea(el) {
      el.innerText = '剩余区域';
    }
  });

  const root = document.getElementById('container');
  root.style.height = '300px';
  root.appendChild(node);
}
`;export{e as default};
