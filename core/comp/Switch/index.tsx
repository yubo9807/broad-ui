import { h, PropsType, ref } from "pl-vue"
import './module.scss'

type Props = PropsType<{
  model:    boolean | { value: boolean }
  onChange?: (val: boolean) => void
}>
export default function(props: Props) {
  const model = typeof props.model === 'object' ? props.model : ref(props.model)

  function handleCilik() {
    model.value = !model.value;
    props.onChange && props.onChange(model.value);
  }

  return <div className={() => ['switch', model.value ? 'is-open' : '']} onclick={handleCilik}>
    <div className='round'></div>
  </div>
}
