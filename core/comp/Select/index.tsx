import { h, PropsType, ref, RefImpl } from "pl-vue";
import { OptionValue } from "./option";
import { isObject } from "../../utils";
import './index.scss';

type Props = PropsType<{
  model?:     OptionValue | RefImpl<OptionValue>
  onChange?:  (val: OptionValue) => void
  className?: string
}>
export default function(props: Props) {

  const model = (isObject(props.model) ? props.model : ref(props.model)) as RefImpl<OptionValue>;
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
