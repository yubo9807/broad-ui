import { h } from "pl-vue"
import UnfoldText from '~/core/comp/UnfoldText'

export default () => {
  return <div style='width: 200px'>
    <UnfoldText model='这是一段很长很长很长很长很长很长很长很长很长很很长很长很长很长很长很长很长很长很长很长的文本，它会被自动展开。' />
  </div>
}
