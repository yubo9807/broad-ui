import { h } from "pl-vue"
import Message from "~/core/comp/Message"

export default () => {

  return <div>
    <button onclick={() => Message.success('成功')}>成功</button>
    <button onclick={() => Message.info('信息')}>信息</button>
    <button onclick={() => Message.closeAll()}>关闭</button>
  </div>
}