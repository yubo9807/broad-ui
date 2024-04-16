import { Children, h, isRef, PropsType, ref, RefImpl } from "pl-vue";
import { OptionValue } from "./option";
import './index.scss';

type SelectProps = PropsType<{
  model?:     OptionValue | RefImpl<OptionValue>
  onChange?:  (val: OptionValue) => void
  className?: string | string[]
  children?:  Children
}>
export default function(props: SelectProps) {

  const model = isRef(props.model) ? props.model : ref(props.model);
  props.children.forEach(val => {
    val.attrs.selected = () => model.value === val.attrs.value;
  })

  function handleChange(e) {
    model.value = e.target.value;
    props.onChange && props.onChange(model.value);
  }

  return <select className={['br-select', props.className]} onchange={handleChange}>
    {props.children}
  </select>
}
