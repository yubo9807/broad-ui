import { h } from "pl-vue";
import Partition from "~/core//comp/Partition";

export default function() {

  return <div style='height: 300px'>
    <Partition>
      <div>固定区域</div>
      <div>剩余区域</div>
    </Partition>
  </div>
}