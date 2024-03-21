import { h } from "pl-vue"
import Message from "~/core/comp/Message"

export default () => {

  return <div>
    <button onclick={() => Message.success('Success')}>Success</button>
    <button onclick={() => Message.info('Info')}>Info</button>
    <button onclick={() => Message.closeAll()}>Close</button>
  </div>
}