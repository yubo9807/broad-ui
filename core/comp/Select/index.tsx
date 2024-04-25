import { Children, ClassNameType, h, isRef, PropsType, ref, RefImpl, StyleType } from "pl-vue";
import './index.scss';

type SelectProps = PropsType<{
  model?:     OptionValue | RefImpl<OptionValue>
  onChange?:  (val: OptionValue) => void
  className?: ClassNameType
  style?:     StyleType
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

  return <select className={['br-select', ...[props.className].flat()]} style={props.style} onchange={handleChange}>
    {props.children}
  </select>
}

type OptionValue = string | number | boolean
type Props = PropsType<{
  label: string
  value: OptionValue
} & {
  [k: string]: any
}>
export function Option(props: Props) {
  return <option selected={props.selected} value={props.value+''}>{props.label}</option>
}
