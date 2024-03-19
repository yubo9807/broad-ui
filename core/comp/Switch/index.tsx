import { h, PropsType, ref } from "pl-vue"
import { RefImpl } from "pl-vue/lib/reactivity/ref"
import { isObject } from "../../utils"
import './module.scss'

type Props = PropsType<{
  model:    boolean | RefImpl<boolean>
  onChange?: (val: boolean) => void
}>
export default function(props: Props) {
  const model = (isObject(props.model) ? props.model : ref(props.model)) as RefImpl<boolean>

  function handleCilik() {
    model.value = !model.value;
    props.onChange && props.onChange(model.value);
  }

  return <div className={() => ['switch', model.value ? 'is-open' : '']} onclick={handleCilik}>
    <div className='round'></div>
  </div>
}
