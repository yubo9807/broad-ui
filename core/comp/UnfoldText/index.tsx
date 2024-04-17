import { PropsType, defineExpose, h, onMounted, ref, watch, RefImpl, isRef, ClassNameType } from "pl-vue"
import { ChildMount, Mount, extractNumber } from "../../utils"
import './index.scss'

export type UnfoldTextProps = PropsType<{
  model:        string | RefImpl<string>
  row?:         number
  className?:   ClassNameType
  unfold?:      string
  fold?:        string
  childUnfold?: ChildMount
  childFold?:   ChildMount
}>
export type UnfoldTextExpose = {
  setModel: (str: string) => void
  setOpen:  (open: boolean) => void
}
export default function(props: UnfoldTextProps) {

  // 设置默认参数
  props = Object.assign({
    row:     2,
    unfold: '展开',
    fold:   '收起',
  }, props);

  const model = isRef(props.model) ? props.model : ref(props.model);
  const origin = ref(false);
  const isOpen = ref(false);

  const wrapRef = ref<HTMLDivElement>();
  const contentRef = ref<HTMLDivElement>();
  let computedStyle: CSSStyleDeclaration;

  onMounted(() => {
    computedStyle = getComputedStyle(wrapRef.value);
    checkTextLength();
  })
  watch(() => model.value, () => {
    checkTextLength();
  })

  onMounted(() => {
    const lineHeight = extractNumber(computedStyle.getPropertyValue('--line-height'));
    const height = contentRef.value.offsetHeight;
    if (height < lineHeight * props.row) {
      origin.value = true;
    }
  })

  /**
   * 检查文字有无超出
   */
  function checkTextLength() {
    const fontSize = extractNumber(computedStyle.getPropertyValue('font-size'));
    origin.value = fontSize * model.value.length < wrapRef.value.offsetWidth * props.row - props.unfold.length * fontSize;
  }  

  // 暴露方法
  defineExpose<UnfoldTextExpose>({
    setModel(str) {
      model.value = str;
    },
    setOpen(bool) {
      isOpen.value = bool;
    }
  })

  return <div ref={wrapRef} className={['br-unfold-text', ...[props.className].flat()]}>
    {() => origin.value
      ? <div>{() => model.value}</div>
      : <div className={['wrap', () => !isOpen.value && 'is-open']} style={`--row: ${props.row}`}>
        {() => !isOpen.value && <div className="btn">...
          <span className="open" onclick={() => isOpen.value = true} created={props.childUnfold as Mount}>{props.unfold}</span>
        </div>}
        <div ref={contentRef} className="content">{() => model.value}</div>
        {() => isOpen.value && <div className="close" onclick={() => isOpen.value = false} created={props.childFold as Mount}>{props.fold}</div>}
      </div>}
  </div>
}
