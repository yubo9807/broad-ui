import { h } from "pl-vue";
import Partition from "~/core/comp/Partition";

export default () => {
  return <div style='height: 300px'>
    <Partition childMain={<div>固定区域</div>} childArea={<div>剩余区域</div>} />
  </div>
}