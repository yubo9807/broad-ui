import { defineExpose, h, isRef, PropsType, ref, RefImpl } from "pl-vue"
import './index.scss'

type SwitchProps = PropsType<{
  model?:     boolean | RefImpl<boolean>
  onChange?:  (val: boolean) => void
  className?: string | string[]
}>
export type SwitchExpose = {
  undateModel(bool: boolean): void
}
export default function(props: SwitchProps) {
  const model = isRef(props.model) ? props.model : ref(props.model);

  function handleCilik() {
    model.value = !model.value;
    props.onChange && props.onChange(model.value);
  }

  defineExpose<SwitchExpose>({
    undateModel(bool: boolean) {
      model.value = bool;
    }
  })

  return <div className={() => ['br-switch', model.value ? 'is-open' : '', props.className]} onclick={handleCilik}>
    <div className='round'></div>
  </div>
}
