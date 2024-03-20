import { PropsType, computed, h, ref } from 'pl-vue';
import { RefImpl } from 'pl-vue/lib/reactivity/ref';
import { copyToBoard, isObject } from '../../utils';
import './index.scss';

export type CodeEditProps = PropsType<{
  model:      string | RefImpl<string>
  isEdit?:    boolean                     // 是否可以进行编辑
  toHtml?:    (val: string) => string     // 将结果转为 html
  isCopy?:    boolean                     // 是否可以进行复制
  onCopy?:    (val: string) => void       // 复制成功后的回调
  onKeyDown?: (e: KeyboardEvent) => void  // 按键按下事件
}>
export default function(props: CodeEditProps) {

  const model = (isObject(props.model) ? props.model : ref(props.model)) as RefImpl<string>;
  const html = computed(() => props.toHtml ? props.toHtml(model.value) : model.value);
  const rowNum = computed(() => model.value.split('\n').length);

  function input(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    model.value = value;
  }

  function copy() {
    const value = model.value;
    copyToBoard(value);
    props.onCopy && props.onCopy(value);
  }

  return <div className='code-edit'>
    <ul className='row-num'>
      {() => new Array(rowNum.value).fill(1).map((_, i) => <li>{i + 1}</li>)}
    </ul>
    <div className='content'>
      <pre className='mark' innerHTML={() => html.value}></pre>
      {props.isEdit !== !1 && <textarea value={() => model.value} oninput={input} onkeydown={props.onKeyDown}></textarea>}
    </div>
    {props.isCopy && <span className='copy' onclick={copy}>copy</span>}
  </div>
}
