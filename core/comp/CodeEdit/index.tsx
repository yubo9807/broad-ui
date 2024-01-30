import { copyToBoard } from '../../utils';
import './index.scss';
import { PropsType, computed, h, ref } from 'pl-vue';

export type CodeEditProps = PropsType<{
  defaultValue?: string
  isEdit?:       boolean                  // 是否可以进行编辑
  toHtml?:       (val: string) => string  // 将结果转为 html
  isCopy?:       boolean                  // 是否可以进行复制
  onCopy?:       (val: string) => void    // 复制成功后的回调
}>
export default function(props: CodeEditProps) {

  const inputValue = ref(props.defaultValue || '');
  const html = computed(() => props.toHtml ? props.toHtml(inputValue.value) : inputValue.value);
  const rowNum = computed(() => inputValue.value.split('\n').length);

  function input(e: InputEvent) {
    const value = (e.target as HTMLInputElement).value;
    inputValue.value = value;
  }

  function copy() {
    const value = inputValue.value;
    copyToBoard(value);
    props.onCopy && props.onCopy(value);
  }

  return <div className='code-edit'>
    <ul className='row-num'>
      {() => new Array(rowNum.value).fill(1).map((_, i) => <li>{i + 1}</li>)}
    </ul>
    <div className='content'>
      <pre className='mark' innerHTML={() => html.value}></pre>
      {props.isEdit !== !1 && <textarea value={() => inputValue.value} oninput={input}></textarea>}
      {props.isCopy && <span className='copy' onclick={copy}>copy</span>}
    </div>
  </div>
}
