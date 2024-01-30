import Partition, { PartitionProps, PartitionExpose } from "~/core/comp/Partition";
import { simplifyUseComponent } from '~/core/utils'

export default () => {
  const [node, expose] = simplifyUseComponent<PartitionProps, PartitionExpose>(Partition, {
    areaMain(el) {
      el.innerText = '固定区域';
    },
    areaVice(el) {
      el.innerText = '剩余区域';
    }
  });

  const root = document.getElementById('container');
  root.style.height = '300px';
  root.appendChild(node);
}
