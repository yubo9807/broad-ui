const n=`import { ClassNameType, PropsType, createSignal, defineExpose, h, ref } from "pl-vue";
import { ChildMount, Mount } from "~/core/utils";
import './index.scss';

export type PartitionProps = PropsType<{
  size?:      string                     // main一边默认大小
  type?:      'horizontal' | 'vertical'  // 方向
  main?:      1 | 2                      // 主区域
  className?: ClassNameType
  childMain?: ChildMount
  childArea?: ChildMount
}>
export type PartitionExpose = {
  setPartial: (value: string) => void
  getRootEl:  () => HTMLElement
}
export default function(props: PartitionProps) {

  // 默认参数
  const defaultProps: PartitionProps = {
    size: '30%',
    type: 'horizontal',
    main: 1,
  }
  props = Object.assign(defaultProps, props);

  const wrapEl = ref<HTMLElement>();
  const [ partial, setPartial ] = createSignal(props.size);

  /**
   * 鼠标按下分割线
   */
  function onMousedown(e: MouseEvent) {
    wrapEl.value.addEventListener('mousemove', onMousemove);
    document.addEventListener('mouseup', onMouseup);
  }

  /**
   * 分割线被拖拽
   * @param e 
   */
  function onMousemove(e: MouseEvent) {
    const rect = wrapEl.value.getBoundingClientRect()
    if (props.type === 'horizontal') {
      let skewX = props.main === 1 ? e.clientX - rect.left : rect.width - e.clientX + rect.left;
      setPartial(skewX + 'px');
    } else {
      const skewY = props.main === 1 ? e.clientY - rect.top : rect.height - e.clientY + rect.top;
      setPartial(skewY + 'px');
    }
  }

  /**
   * 释放鼠标事件
   */
  function onMouseup() {
    wrapEl.value.removeEventListener('mousemove', onMousemove);
  }

  // 暴露方法
  const expose: PartitionExpose = {
    setPartial,
    getRootEl: () => wrapEl.value
  }
  defineExpose(expose);

  const isMain = props.main === 1;
  return <div ref={wrapEl} className={[\`br-partition \${props.type}\`, ...[props.className].flat()]} style={() => \`--skew: \${partial()}\`}>
    <div
      className={['item', isMain ? 'main' : 'vice']}
      created={(isMain ? props.childMain : props.childArea) as Mount}
    >{isMain ? props.childMain : props.childArea}</div>
    <div className="line" onmousedown={onMousedown}></div>
    <div
      className={['item', isMain ? 'vice' : 'main']}
      created={(isMain ? props.childArea : props.childMain) as Mount}
    >{isMain ? props.childArea : props.childMain}</div>
  </div>
}
`;export{n as default};
